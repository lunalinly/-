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

  const state = { question: null, choices: [], values: {}, routedBranch: null, revealedFields: new Set() };
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
    state.routedBranch = null;
    state.revealedFields = new Set();
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
    state.routedBranch = null;
    state.revealedFields = new Set();
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
    if (state.routedBranch) {
      const target = typeof state.routedBranch === "string"
        ? { question: state.question.name, branch: state.routedBranch }
        : state.routedBranch;
      const routed = data.flows.find(flow => flow.question === target.question && flow.branch === target.branch);
      if (routed) return routed;
      state.routedBranch = null;
    }
    return flowsMatchingPrefix(questionFlows(), state.choices).find(flow => flow.steps.length === state.choices.length) || null;
  }

  function splitRouteValues(value) {
    return String(value ?? "").split(/\r?\n|,|、|;/).map(item => item.trim()).filter(Boolean);
  }

  function ruleMatches(definition, rule) {
    const actual = splitRouteValues(state.values[definition.code]);
    const expected = (rule.values || []).map(value => String(value ?? "").trim()).filter(Boolean);
    return expected.some(value => actual.includes(value));
  }

  function revealTargetCodes() {
    return new Set((data.fields || []).flatMap(definition =>
      (definition.fillRules || []).flatMap(rule =>
        (rule.assignments || []).filter(assignment => assignment.action === "reveal").map(assignment => assignment.targetCode)
      )
    ).filter(Boolean));
  }

  function conditionalAnswerTexts() {
    const entries = [];
    const seen = new Set();
    (data.fields || []).forEach(definition => (definition.fillRules || []).forEach(rule => {
      if (!ruleMatches(definition, rule)) return;
      (rule.assignments || []).forEach(assignment => {
        const text = String(assignment.answerText || "").trim();
        if (!text) return;
        const position = ["start", "after_question", "after_branch", "after_field", "end"].includes(assignment.answerPosition) ? assignment.answerPosition : "end";
        const anchor = String(assignment.answerAnchor || "");
        const fieldCode = String(assignment.answerFieldCode || "");
        const key = `${position}|${anchor}|${fieldCode}|${text}`;
        if (!seen.has(key)) { seen.add(key); entries.push({ text, position, anchor, fieldCode }); }
      });
    }));
    return entries;
  }

  function applyFieldFillRules(variable) {
    const definition = data.fields?.find(item => item.code === variable.code) || variable;
    const matched = (definition.fillRules || []).filter(rule => ruleMatches(definition, rule));
    let affected = 0;
    matched.forEach(rule => (rule.assignments || []).forEach(assignment => {
      if (!assignment.targetCode) return;
      if (assignment.action === "reveal") {
        state.revealedFields.add(assignment.targetCode);
        const targetInput = document.getElementById(`field-${assignment.targetCode}`);
        if (targetInput?.closest(".field")) targetInput.closest(".field").hidden = false;
        affected += 1;
        return;
      }
      state.values[assignment.targetCode] = String(assignment.value ?? "");
      const targetVariable = data.variables.find(item => item.q === state.question.id && item.code === assignment.targetCode)
        || data.fields?.find(item => item.code === assignment.targetCode);
      if (targetVariable?.common) saveCommonValue(assignment.targetCode, state.values[assignment.targetCode]);
      const targetInput = document.getElementById(`field-${assignment.targetCode}`);
      if (targetInput) setFieldInputValue(targetInput, state.values[assignment.targetCode]);
      affected += 1;
    }));
    return affected;
  }

  function applyVariableRoute(flow) {
    const route = (flow.routes || []).find(item => {
      const actual = splitRouteValues(state.values[item.sourceCode]);
      const expected = (Array.isArray(item.values) ? item.values : [item.value]).map(value => String(value ?? "").trim()).filter(Boolean);
      return expected.some(value => actual.includes(value));
    });
    if (!route || !route.targetBranch) return false;
    const targetQuestion = route.targetQuestion || flow.question;
    if (targetQuestion === flow.question && route.targetBranch === flow.branch) return false;
    const target = data.flows.find(item => item.question === targetQuestion && item.branch === route.targetBranch);
    if (!target) return false;
    state.routedBranch = { question: target.question, branch: target.branch };
    renderWorkflow();
    showToast(`已轉到：${target.question === "共用" ? "共用 · " : ""}${target.branch}`);
    return true;
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
        state.routedBranch = null;
        state.revealedFields = new Set();
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

  function answerPartsFor(flow) {
    const parts = Array.isArray(flow.answerParts)
      ? flow.answerParts
      : (Array.isArray(flow.answerBranches) && flow.answerBranches.length ? flow.answerBranches : [flow.branch]).map(branch => ({ question: flow.question, branch }));
    return [...new Map(parts.map(part => [`${part.question}|${part.branch}`, part])).values()];
  }

  function questionIdForName(name) { return name === "共用" ? "GLOBAL" : (data.questions.find(question => question.name === name)?.id || ""); }

  function variablesFor(flow) {
    const parts = answerPartsFor(flow);
    const questionText = String(state.question.answerText || "");
    const catalog = new Map();
    data.variables.filter(variable =>
      variable.q === state.question.id && questionText.includes(`{{${variable.code}}}`)
    ).forEach(variable => catalog.set(variable.code, variable));
    parts.forEach(part => {
      const q = questionIdForName(part.question);
      data.variables.filter(variable =>
        variable.q === q && (variable.branch === part.branch || isSharedBranch(variable.branch))
      ).forEach(variable => {
        if (!catalog.has(variable.code)) catalog.set(variable.code, variable);
      });
    });
    let added = true;
    while (added) {
      added = false;
      [...catalog.values()].forEach(variable => {
        const definition = data.fields?.find(item => item.code === variable.code) || variable;
        (definition.fillRules || []).forEach(rule => (rule.assignments || []).forEach(assignment => {
          const target = data.fields?.find(item => item.code === assignment.targetCode);
          if (target && !catalog.has(target.code)) { catalog.set(target.code, target); added = true; }
        }));
      });
    }
    const answerOrderText = [
      questionText,
      ...parts.map(part => templateForPart(part)?.text || ""),
      ...(data.fields || []).flatMap(field => (field.fillRules || []).flatMap(rule =>
        (rule.assignments || []).map(assignment => assignment.answerText || "")
      ))
    ].join("\n");
    return [...catalog.values()].map((variable, originalIndex) => {
      const position = answerOrderText.indexOf(`{{${variable.code}}}`);
      return { variable, originalIndex, position: position < 0 ? Number.POSITIVE_INFINITY : position };
    }).sort((a, b) => a.position - b.position || a.originalIndex - b.originalIndex).map(item => item.variable);
  }

  function templateForPart(part) {
    const q = questionIdForName(part.question);
    const findTemplate = list => (list || []).find(template =>
      template.q === q && String(template.text || "").trim() &&
      (template.branch === part.branch || (isSharedBranch(part.branch) && isSharedBranch(template.branch)))
    ) || null;
    return findTemplate(data.templates) || findTemplate(window.SOP_PUBLISHED_DATA?.templates);
  }

  function templatesFor(flow) {
    const parts = answerPartsFor(flow);
    const entries = parts.map(part => ({ part, template: templateForPart(part) }));
    return {
      templates: entries.filter(item => item.template),
      missing: entries.filter(item => !item.template).map(item => `${item.part.question} · ${item.part.branch}`)
    };
  }

  function actionsFor(flow) {
    const parts = answerPartsFor(flow);
    return data.actions.filter(action => parts.some(part =>
      action.q === questionIdForName(part.question) && (action.branch === part.branch || isSharedBranch(action.branch))
    ));
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
      variables.forEach(variable => {
        if (String(state.values[variable.code] ?? "").trim()) applyFieldFillRules(variable);
      });
    }

    const actions = actionsFor(flow);
    const sources = buildOutput(flow, variables).sources || [];
    if (actions.length || sources.length) {
      const box = document.createElement("details"); box.className = "action-box"; box.open = true;
      const summary = document.createElement("summary"); summary.textContent = "操作提示";
      const list = document.createElement("ul");
      actions.forEach(item => {
        const li = document.createElement("li");
        li.append(document.createTextNode(`${item.action}：${item.needed ? "是" : "否"}${item.note ? `（${item.note}）` : ""}`));
        if (item.url && /^https?:\/\//i.test(item.url)) {
          const link = document.createElement("a");
          link.href = item.url; link.target = "_blank"; link.rel = "noopener"; link.textContent = "開啟連結 ↗";
          li.append(document.createTextNode(" "), link);
        }
        list.append(li);
      });
      sources.forEach(source => {
        const li = document.createElement("li");
        const name = document.createElement("b"); name.textContent = `{${source.label}}`;
        li.append(name, document.createTextNode(` 的值從這裡找：${source.note || "請開啟來源連結"}`));
        if (source.url && /^https?:\/\//i.test(source.url)) {
          const link = document.createElement("a"); link.href = source.url; link.target = "_blank"; link.rel = "noopener"; link.textContent = "開啟來源 ↗"; li.append(document.createTextNode(" "), link);
        }
        list.append(li);
      });
      box.append(summary, list); panel.append(box);
    }
  }

  function setFieldInputValue(input, value) {
    const text = String(value ?? "");
    if (input?.tagName === "SELECT" && text && ![...input.options].some(option => option.value === text)) {
      const option = document.createElement("option"); option.value = text; option.textContent = text; input.append(option);
    }
    if (input) input.value = text;
  }

  function makeField(variable, flow, variables) {
    const wrap = document.createElement("div");
    wrap.className = "field" + (variable.multiline ? " full" : "");
    wrap.hidden = revealTargetCodes().has(variable.code) && !state.revealedFields.has(variable.code);
    const label = document.createElement("label");
    label.htmlFor = `field-${variable.code}`;
    label.append(document.createTextNode(variable.label));
    if (variable.required) { const req = document.createElement("span"); req.textContent = " ＊"; label.append(req); }
    let input;
    if (variable.type === "select") {
      input = document.createElement("select");
      const placeholder = document.createElement("option");
      placeholder.value = ""; placeholder.textContent = variable.hint || "請選擇…";
      input.append(placeholder);
      [...new Set(variable.options || [])].forEach(value => {
        const option = document.createElement("option"); option.value = value; option.textContent = value; input.append(option);
      });
    } else {
      input = variable.multiline ? document.createElement("textarea") : document.createElement("input");
      input.placeholder = variable.hint || "";
      if (!variable.multiline) input.type = variable.type === "date" ? "date" : "text";
    }
    input.id = `field-${variable.code}`;
    if (variable.auto || variable.autoSource) {
      input.readOnly = true;
      setFieldInputValue(input, calculateAuto(variable));
      state.values[variable.code] = input.value;
    } else {
      setFieldInputValue(input, state.values[variable.code] ?? (variable.common ? (commonValues[variable.code] || "") : ""));
      state.values[variable.code] = input.value;
    }
    input.addEventListener("input", () => {
      state.values[variable.code] = input.value;
      if (variable.common) saveCommonValue(variable.code, input.value);
      const autoFilledCount = applyFieldFillRules(variable);
      variables.filter(v => v.auto || v.autoSource).forEach(autoVar => {
        state.values[autoVar.code] = calculateAuto(autoVar);
        const autoInput = document.getElementById(`field-${autoVar.code}`);
        if (autoInput) setFieldInputValue(autoInput, state.values[autoVar.code]);
      });
      if (!applyVariableRoute(flow)) {
        refreshOutput(flow, variables);
        if (autoFilledCount) showToast(`已自動填入 ${autoFilledCount} 個變數`);
      }
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
    const built = templatesFor(flow);
    const conditional = conditionalAnswerTexts();
    const parts = [];
    parts.push(...conditional.filter(item => item.position === "start").map(item => item.text));
    if (String(state.question.answerText || "").trim()) parts.push(state.question.answerText);
    parts.push(...conditional.filter(item => item.position === "after_question").map(item => item.text));
    built.templates.forEach(item => {
      parts.push(item.template.text);
      const anchor = JSON.stringify({ question: item.part.question, branch: item.part.branch });
      parts.push(...conditional.filter(entry => entry.position === "after_branch" && entry.anchor === anchor).map(entry => entry.text));
    });
    parts.push(...conditional.filter(item => item.position === "end").map(item => item.text));
    if (!parts.length) return { text: "這個問題與答案組合尚未設定文字。", missing: true, sources: [] };
    let text = parts.join("\n\n");
    conditional.filter(item => item.position === "after_field" && item.fieldCode).forEach(item => {
      const token = `{{${item.fieldCode}}}`;
      const index = text.indexOf(token);
      if (index >= 0) text = text.slice(0, index + token.length) + item.text + text.slice(index + token.length);
    });
    const sourceMap = new Map();
    variables.forEach(variable => {
      if (text.includes(`{{${variable.code}}}`) && (variable.sourceNote || variable.sourceUrl) && !sourceMap.has(variable.code)) {
        sourceMap.set(variable.code, { code: variable.code, label: variable.label, note: variable.sourceNote || "", url: variable.sourceUrl || "" });
      }
    });
    variables.forEach(variable => {
      const raw = state.values[variable.code] || "";
      const value = displayValue(variable, raw) || `{請填：${variable.label}}`;
      text = text.split(`{{${variable.code}}}`).join(value);
    });
    if (built.missing.length) text += `\n\n{尚未設定答案：${built.missing.join("、")}}`;
    const sources = [...sourceMap.values()];
    if (sources.length) {
      const lines = sources.map(source => {
        const location = [source.note, source.url].filter(Boolean).join(" ");
        return `{${source.label}}：${location}`;
      });
      text += `\n\n參數值取得位置：\n${lines.join("\n")}`;
    }
    return { text, missing: built.missing.length > 0, sources };
  }

  function renderOutputPanel(panel, flow, variables) {
    const label = document.createElement("div"); label.className = "panel-label"; label.textContent = "最終可複製答案";
    const title = document.createElement("h3"); title.textContent = "確認後一鍵複製";
    const pre = document.createElement("textarea"); pre.id = "finalOutput"; pre.className = "output";
    pre.readOnly = true; pre.setAttribute("aria-label", "最終可複製答案");
    pre.style.setProperty("color", "#211d1a", "important");
    pre.style.setProperty("-webkit-text-fill-color", "#211d1a", "important");
    const sourceGuide = document.createElement("section"); sourceGuide.id = "finalOutputSources"; sourceGuide.className = "output-source-guide"; sourceGuide.hidden = true;
    const actions = document.createElement("div"); actions.className = "output-actions";
    const copy = document.createElement("button"); copy.type = "button"; copy.className = "primary-button"; copy.textContent = "複製答案";
    const clear = document.createElement("button"); clear.type = "button"; clear.className = "secondary-button"; clear.textContent = "清除欄位";
    copy.addEventListener("click", async () => {
      const missingRequired = variables.filter(v => {
        const input = document.getElementById(`field-${v.code}`);
        return v.required && input && !input.closest(".field")?.hidden && !state.values[v.code];
      });
      if (missingRequired.length) { showToast(`請先填寫：${missingRequired.map(v => v.label).join("、")}`); return; }
      const built = buildOutput(flow, variables);
      if (built.missing) { showToast("這個分支尚未設定答案範本"); return; }
      try { await navigator.clipboard.writeText(built.text); showToast("已複製答案"); }
      catch { showToast("無法自動複製，請手動選取文字"); }
    });
    clear.addEventListener("click", () => {
      variables.forEach(v => { state.values[v.code] = ""; if (v.common) saveCommonValue(v.code, ""); });
      state.revealedFields = new Set();
      renderWorkflow(); showToast("欄位已清除");
    });
    actions.append(copy, clear);
    panel.append(label, title, pre, sourceGuide, actions);
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
    const guide = document.getElementById("finalOutputSources");
    if (!guide) return;
    guide.replaceChildren();
    const sources = [];
    guide.hidden = true;
    if (sources.length) {
      const heading = document.createElement("strong"); heading.textContent = "參數值取得位置（會一併複製）";
      const list = document.createElement("ul");
      sources.forEach(source => {
        const item = document.createElement("li");
        const name = document.createElement("b"); name.textContent = `{${source.label}}`;
        item.append(name);
        if (source.note) item.append(document.createTextNode(`：${source.note}`));
        if (source.url && /^https?:\/\//i.test(source.url)) {
          const link = document.createElement("a"); link.href = source.url; link.target = "_blank"; link.rel = "noopener"; link.textContent = "開啟來源 ↗"; item.append(document.createTextNode(" "), link);
        }
        list.append(item);
      });
      guide.append(heading, list);
    }
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
