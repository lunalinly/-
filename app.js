(() => {
  "use strict";

  const data = window.SOP_DATA;
  const $ = (selector) => document.querySelector(selector);
  const els = {
    hero: $("#heroSection"), questionSection: $("#questionSection"), questionGrid: $("#questionGrid"),
    search: $("#searchInput"), count: $("#resultCount"), empty: $("#emptyState"), workspace: $("#workspace"),
    qId: $("#selectedQuestionId"), qName: $("#selectedQuestionName"), qDesc: $("#selectedQuestionDescription"),
    progress: $("#progress"), decision: $("#decisionArea"), result: $("#resultArea"), toast: $("#toast")
  };

  const state = { question: null, choices: [], values: {} };
  const commonKey = "sop-helper-common-values-v1";
  let commonValues = readCommonValues();

  $("#dataVersion").textContent = data.version;
  $("#sourceLink").href = data.sourceUrl;

  function readCommonValues() {
    try { return JSON.parse(localStorage.getItem(commonKey) || "{}"); }
    catch { return {}; }
  }

  function saveCommonValue(code, value) {
    commonValues[code] = value;
    try { localStorage.setItem(commonKey, JSON.stringify(commonValues)); } catch {}
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
  }

  function renderQuestions() {
    const term = els.search.value.trim().toLocaleLowerCase("zh-Hant");
    const matches = data.questions.filter(q => q.enabled && (!term || [q.name, q.keywords, q.description, q.id].join(" ").toLocaleLowerCase("zh-Hant").includes(term)));
    els.questionGrid.replaceChildren();
    matches.forEach(q => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-card";
      button.setAttribute("aria-label", `選擇 ${q.name}`);
      const number = document.createElement("span"); number.className = "number"; number.textContent = "題目";
      const title = document.createElement("strong"); title.textContent = q.name;
      const desc = document.createElement("p"); desc.textContent = q.description;
      const arrow = document.createElement("span"); arrow.className = "arrow"; arrow.textContent = "↗"; arrow.setAttribute("aria-hidden", "true");
      button.append(number, title, desc, arrow);
      button.addEventListener("click", () => selectQuestion(q));
      els.questionGrid.append(button);
    });
    els.count.textContent = `${matches.length} 個題目`;
    els.empty.hidden = matches.length !== 0;
  }

  function selectQuestion(question) {
    state.question = question;
    state.choices = [];
    state.values = {};
    els.hero.hidden = true;
    els.questionSection.hidden = true;
    els.workspace.hidden = false;
    els.qId.textContent = "操作流程";
    els.qName.textContent = question.name;
    els.qDesc.textContent = question.description;
    renderWorkflow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    state.question = null;
    state.choices = [];
    state.values = {};
    els.workspace.hidden = true;
    els.hero.hidden = false;
    els.questionSection.hidden = false;
    els.search.value = "";
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function questionFlows() {
    return data.flows.filter(flow => flow.question === state.question.name);
  }

  function flowsMatchingPrefix(flows, choices) {
    return flows.filter(flow => choices.every((choice, i) => flow.steps[i] && flow.steps[i].option === choice));
  }

  function resolvedFlow() {
    return flowsMatchingPrefix(questionFlows(), state.choices).find(flow => flow.steps.length === state.choices.length) || null;
  }

  function renderProgress(isResolved, hasVariables) {
    els.progress.replaceChildren();
    const doneCount = 1 + (isResolved ? 1 : 0) + (isResolved && !hasVariables ? 1 : 0);
    for (let i = 0; i < 3; i += 1) {
      const li = document.createElement("li");
      if (i < doneCount) li.className = "done";
      els.progress.append(li);
    }
  }

  function renderWorkflow() {
    els.decision.replaceChildren();
    els.result.replaceChildren();
    const flows = questionFlows();
    let eligible = flows;

    for (let level = 0; level <= state.choices.length; level += 1) {
      eligible = flowsMatchingPrefix(flows, state.choices.slice(0, level));
      const rows = eligible.filter(flow => flow.steps[level]);
      if (!rows.length) break;
      const prompt = rows[0].steps[level].prompt;
      const options = [...new Set(rows.filter(flow => flow.steps[level].prompt === prompt).map(flow => flow.steps[level].option))];
      els.decision.append(makeDecisionPanel(level, prompt, options));
      if (state.choices[level] === undefined) break;
    }

    const resolved = resolvedFlow();
    const vars = resolved ? variablesFor(resolved) : [];
    renderProgress(Boolean(resolved), vars.length > 0);
    if (resolved) renderResult(resolved, vars);
  }

  function makeDecisionPanel(level, prompt, options) {
    const panel = document.createElement("section"); panel.className = "panel";
    const label = document.createElement("div"); label.className = "panel-label"; label.textContent = `判斷 ${level + 1}`;
    const title = document.createElement("h3"); title.textContent = prompt;
    const grid = document.createElement("div"); grid.className = "option-grid";
    options.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button" + (state.choices[level] === option ? " selected" : "");
      button.textContent = option;
      button.addEventListener("click", () => {
        state.choices = state.choices.slice(0, level);
        state.choices[level] = option;
        state.values = {};
        renderWorkflow();
        requestAnimationFrame(() => {
          const panels = els.decision.querySelectorAll(".panel");
          panels[panels.length - 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });
      grid.append(button);
    });
    panel.append(label, title, grid);
    return panel;
  }

  function isSharedBranch(branch) {
    const value = String(branch || "").trim();
    return value === "共用" || value.toLowerCase() === "all";
  }

  function variablesFor(flow) {
    const matching = data.variables.filter(v => v.q === state.question.id && (v.branch === flow.branch || isSharedBranch(v.branch)));
    return [...new Map(matching.map(v => [v.code, v])).values()];
  }

  function templateFor(flow) {
    const findTemplate = list => {
      const candidates = (list || []).filter(t => t.q === state.question.id && String(t.text || "").trim());
      return candidates.find(t => t.branch === flow.branch)
        || candidates.find(t => isSharedBranch(t.branch))
        || null;
    };
    return findTemplate(data.templates) || findTemplate(window.SOP_PUBLISHED_DATA?.templates) || null;
  }

  function actionsFor(flow) {
    return data.actions.filter(a => a.q === state.question.id && (a.branch === flow.branch || isSharedBranch(a.branch)));
  }

  function renderResult(flow, variables) {
    const layout = document.createElement("div"); layout.className = "result-layout";
    const inputPanel = document.createElement("section"); inputPanel.className = "panel";
    const outputPanel = document.createElement("section"); outputPanel.className = "panel output-panel";
    renderInputPanel(inputPanel, flow, variables);
    renderOutputPanel(outputPanel, flow, variables);
    layout.append(inputPanel, outputPanel);
    els.result.append(layout);
  }

  function renderInputPanel(panel, flow, variables) {
    const label = document.createElement("div"); label.className = "panel-label"; label.textContent = `已到達 ${flow.branch}`;
    const title = document.createElement("h3"); title.textContent = variables.length ? "填入這題需要的資料" : "這題不需要填資料";
    const next = document.createElement("div"); next.className = "next-step"; next.textContent = `下一步：${flow.next}`;
    panel.append(label, title, next);

    if (variables.length) {
      const grid = document.createElement("div"); grid.className = "variable-grid";
      variables.forEach(variable => grid.append(makeField(variable, flow, variables)));
      panel.append(grid);
    }

    const actions = actionsFor(flow);
    if (actions.length) {
      const box = document.createElement("div"); box.className = "action-box";
      const strong = document.createElement("strong"); strong.textContent = "需要做的動作";
      const list = document.createElement("ul");
      actions.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.action}：${item.needed ? "是" : "否"}${item.note ? `（${item.note}）` : ""}`;
        list.append(li);
      });
      box.append(strong, list); panel.append(box);
    }
  }

  function makeField(variable, flow, variables) {
    const wrap = document.createElement("div");
    wrap.className = "field" + (variable.multiline ? " full" : "");
    const label = document.createElement("label");
    label.htmlFor = `field-${variable.code}`;
    label.append(document.createTextNode(variable.label));
    if (variable.required) { const req = document.createElement("span"); req.textContent = " ＊"; label.append(req); }
    const input = variable.multiline ? document.createElement("textarea") : document.createElement("input");
    input.id = `field-${variable.code}`;
    input.placeholder = variable.hint || "";
    if (!variable.multiline) input.type = variable.type === "date" ? "date" : "text";
    if (variable.auto || variable.autoSource) {
      input.readOnly = true;
      input.value = calculateAuto(variable);
      state.values[variable.code] = input.value;
    } else {
      input.value = state.values[variable.code] ?? (variable.common ? (commonValues[variable.code] || "") : "");
      state.values[variable.code] = input.value;
    }
    input.addEventListener("input", () => {
      state.values[variable.code] = input.value;
      if (variable.common) saveCommonValue(variable.code, input.value);
      variables.filter(v => v.auto || v.autoSource).forEach(autoVar => {
        state.values[autoVar.code] = calculateAuto(autoVar);
        const autoInput = document.getElementById(`field-${autoVar.code}`);
        if (autoInput) autoInput.value = state.values[autoVar.code];
      });
      refreshOutput(flow, variables);
    });
    const hint = document.createElement("span"); hint.className = "hint"; hint.textContent = variable.hint || "";
    wrap.append(label, input, hint);
    return wrap;
  }

  function parseLocalDate(value) {
    if (!value) return null;
    const parts = value.split("-").map(Number);
    if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function formatDate(date) {
    if (!date || Number.isNaN(date.getTime())) return "";
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  function calculateAuto(variable) {
    const sourceCode = variable.autoSource || "pickup_date";
    const sourceDate = parseLocalDate(state.values[sourceCode] || "");
    if (!sourceDate) return "";
    const legacyDays = variable.auto === "pickup+15" ? 15 : 1;
    const days = Number(variable.autoDays ?? legacyDays);
    const result = new Date(sourceDate);
    result.setDate(result.getDate() + (Number.isFinite(days) ? days : 0));
    return formatDate(result);
  }

  function displayValue(variable, raw) {
    if (variable.type === "date") return formatDate(parseLocalDate(raw)) || raw;
    return raw;
  }

  function buildOutput(flow, variables) {
    const template = templateFor(flow);
    if (!template) return { text: "這個分支尚未在試算表的「範本表」設定答案。\n\n可以先依照左側的「下一步」與「需要做的動作」操作，再到 GitHub 編輯 data.js 補上正式範本。", missing: true };
    let text = template.text;
    variables.forEach(variable => {
      const raw = state.values[variable.code] || "";
      const value = displayValue(variable, raw) || `{請填：${variable.label}}`;
      text = text.split(`{{${variable.code}}}`).join(value);
    });
    return { text, missing: false };
  }

  function renderOutputPanel(panel, flow, variables) {
    const label = document.createElement("div"); label.className = "panel-label"; label.textContent = "最終可複製答案";
    const title = document.createElement("h3"); title.textContent = "確認後一鍵複製";
    const pre = document.createElement("textarea"); pre.id = "finalOutput"; pre.className = "output";
    pre.readOnly = true; pre.setAttribute("aria-label", "最終可複製答案");
    pre.style.setProperty("color", "#211d1a", "important");
    pre.style.setProperty("-webkit-text-fill-color", "#211d1a", "important");
    const actions = document.createElement("div"); actions.className = "output-actions";
    const copy = document.createElement("button"); copy.type = "button"; copy.className = "primary-button"; copy.textContent = "複製答案";
    const clear = document.createElement("button"); clear.type = "button"; clear.className = "secondary-button"; clear.textContent = "清除欄位";
    copy.addEventListener("click", async () => {
      const missingRequired = variables.filter(v => v.required && !state.values[v.code]);
      if (missingRequired.length) { showToast(`請先填寫：${missingRequired.map(v => v.label).join("、")}`); return; }
      const built = buildOutput(flow, variables);
      if (built.missing) { showToast("這個分支尚未設定答案範本"); return; }
      try { await navigator.clipboard.writeText(built.text); showToast("已複製答案"); }
      catch { showToast("無法自動複製，請手動選取文字"); }
    });
    clear.addEventListener("click", () => {
      variables.forEach(v => { state.values[v.code] = ""; if (v.common) saveCommonValue(v.code, ""); });
      renderWorkflow(); showToast("欄位已清除");
    });
    actions.append(copy, clear);
    panel.append(label, title, pre, actions);
    refreshOutput(flow, variables);
  }

  function refreshOutput(flow, variables) {
    const pre = document.getElementById("finalOutput");
    if (!pre) return;
    const built = buildOutput(flow, variables);
    pre.value = built.text;
    pre.textContent = built.text;
    pre.classList.toggle("missing", built.missing);
    const textColor = built.missing ? "#604016" : "#211d1a";
    pre.style.setProperty("color", textColor, "important");
    pre.style.setProperty("-webkit-text-fill-color", textColor, "important");
  }

  els.search.addEventListener("input", renderQuestions);
  $("#resetButton").addEventListener("click", reset);
  $("#backButton").addEventListener("click", reset);
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { event.preventDefault(); els.search.focus(); }
    if (event.key === "Escape" && state.question) reset();
  });

  renderQuestions();
})();
