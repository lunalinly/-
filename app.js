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

  const state = { question: null, choices: [], values: {}, routedBranch: null, revealedFields: new Set(), appendedSharedBranches: new Set() };
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
    state.appendedSharedBranches = new Set();
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
    state.appendedSharedBranches = new Set();
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

  function canFieldRuleReach(startCode, targetCode, visited = new Set()) {
    if (!startCode || visited.has(startCode)) return false;
    if (startCode === targetCode) return true;
    const nextVisited = new Set(visited);
    nextVisited.add(startCode);
    const definition = (data.fields || []).find(item => item.code === startCode);
    return (definition?.fillRules || []).some(rule =>
      (rule.assignments || []).some(assignment =>
        assignment.targetCode && canFieldRuleReach(assignment.targetCode, targetCode, nextVisited)
      )
    );
  }

  function isRevealRuleStarter(code) {
    return (data.fields || []).some(source =>
      (source.fillRules || []).some(rule =>
        (rule.assignments || []).some(assignment =>
          assignment.action === "reveal" &&
          assignment.targetCode === code &&
          canFieldRuleReach(code, source.code)
        )
      )
    );
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

  function placeRevealedField(assignment) {
    if (assignment.answerPosition !== "after_field" || !assignment.answerFieldCode) return;
    const targetInput = document.getElementById(`field-${assignment.targetCode}`);
    const anchorInput = document.getElementById(`field-${assignment.answerFieldCode}`);
    const targetField = targetInput?.closest(".field");
    const anchorField = anchorInput?.closest(".field");
    if (!targetField || !anchorField || targetField === anchorField) return;

    const anchorCode = String(assignment.answerFieldCode);
    targetField.dataset.revealedAfter = anchorCode;
    let insertionPoint = anchorField;
    while (insertionPoint.nextElementSibling?.dataset.revealedAfter === anchorCode) {
      insertionPoint = insertionPoint.nextElementSibling;
    }
    insertionPoint.insertAdjacentElement("afterend", targetField);
  }

  function applyFieldFillRules(variable, visited = new Set()) {
    if (!variable?.code || visited.has(variable.code)) return 0;
    const nextVisited = new Set(visited);
    nextVisited.add(variable.code);
    const definition = data.fields?.find(item => item.code === variable.code) || variable;
    const matched = (definition.fillRules || []).filter(rule => ruleMatches(definition, rule));
    let affected = 0;
    matched.forEach(rule => (rule.assignments || []).forEach(assignment => {
      if (!assignment.targetCode) return;
      if (assignment.action === "reveal") {
        state.revealedFields.add(assignment.targetCode);
        const targetInput = document.getElementById(`field-${assignment.targetCode}`);
        if (targetInput?.closest(".field")) targetInput.closest(".field").hidden = false;
        placeRevealedField(assignment);
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
      if (targetVariable) affected += applyFieldFillRules(targetVariable, nextVisited);
    }));
    return affected;
  }

  function recalculateFieldRules(flow, variables) {
    state.revealedFields = new Set();
    let affected = 0;
    variables.filter(variable => String(state.values[variable.code] ?? "").trim()).forEach(variable => {
      affected += applyFieldFillRules(variable);
    });
    variables.forEach(variable => {
      const input = document.getElementById(`field-${variable.code}`);
      const wrap = input?.closest(".field");
      if (!wrap) return;
      wrap.hidden = !shouldShowConditionalField(variable, flow);
    });
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
    if (target.question === "共用") {
      const before = state.appendedSharedBranches.size;
      state.appendedSharedBranches.add(target.branch);
      if (state.appendedSharedBranches.size === before) return false;
      renderWorkflow();
      showToast(`已附加共用內容：${target.branch}`);
      return true;
    }
    state.routedBranch = { question: target.question, branch: target.branch };
    renderWorkflow();
    showToast(`已轉到：${target.branch}`);
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
        state.routedBranch = null;
        state.revealedFields = new Set();
        state.appendedSharedBranches = new Set();
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
      ? [...flow.answerParts]
      : (Array.isArray(flow.answerBranches) && flow.answerBranches.length ? flow.answerBranches : [flow.branch]).map(branch => ({ question: flow.question, branch }));
    state.appendedSharedBranches.forEach(branch => parts.push({ question: "共用", branch }));
    return [...new Map(parts.map(part => [`${part.question}|${part.branch}`, part])).values()];
  }

  function questionIdForName(name) { return name === "共用" ? "GLOBAL" : (data.questions.find(question => question.name === name)?.id || ""); }

  function composedAnswerTemplate(flow) {
    const built = templatesFor(flow);
    const conditional = conditionalAnswerTexts();
    const chunks = [];
    chunks.push(...conditional.filter(item => item.position === "start").map(item => item.text));
    if (String(state.question.answerText || "").trim()) chunks.push(state.question.answerText);
    chunks.push(...conditional.filter(item => item.position === "after_question").map(item => item.text));
    built.entries.forEach(item => {
      if (String(item.part.beforeText || "").trim()) chunks.push(item.part.beforeText);
      if (item.template) chunks.push(item.template.text);
      const anchor = JSON.stringify({ question: item.part.question, branch: item.part.branch });
      chunks.push(...conditional.filter(entry => entry.position === "after_branch" && entry.anchor === anchor).map(entry => entry.text));
    });
    chunks.push(...conditional.filter(item => item.position === "end").map(item => item.text));
    let text = chunks.join("\n\n");
    conditional.filter(item => item.position === "after_field" && item.fieldCode).forEach(item => {
      const token = `{{${item.fieldCode}}}`;
      const index = text.indexOf(token);
      if (index >= 0) text = text.slice(0, index + token.length) + item.text + text.slice(index + token.length);
    });
    return text;
  }

  function directVariableCodesFor(flow) {
    const baseParts = Array.isArray(flow.answerParts)
      ? [...flow.answerParts]
      : (Array.isArray(flow.answerBranches) && flow.answerBranches.length ? flow.answerBranches : [flow.branch]).map(branch => ({ question: flow.question, branch }));
    const currentIndex = baseParts.findIndex(part => part.question === flow.question && part.branch === flow.branch);
    const parts = currentIndex >= 0 ? baseParts.slice(0, currentIndex + 1) : [...baseParts];
    state.appendedSharedBranches.forEach(branch => parts.push({ question: "共用", branch }));

    const codes = new Set();
    const questionText = String(state.question.answerText || "");
    data.variables.filter(variable =>
      variable.q === state.question.id && questionText.includes(`{{${variable.code}}}`)
    ).forEach(variable => codes.add(variable.code));
    parts.forEach(part => {
      const q = questionIdForName(part.question);
      data.variables.filter(variable =>
        variable.q === q && (variable.branch === part.branch || isSharedBranch(variable.branch))
      ).forEach(variable => codes.add(variable.code));
    });
    data.variables.filter(variable =>
      variable.q === questionIdForName(flow.question) && (variable.branch === flow.branch || isSharedBranch(variable.branch))
    ).forEach(variable => codes.add(variable.code));
    return codes;
  }

  function shouldShowConditionalField(variable, flow) {
    if (composedAnswerTemplate(flow).includes(`{{${variable.code}}}`)) return true;
    if (state.revealedFields.has(variable.code)) return true;
    const definition = data.fields?.find(item => item.code === variable.code) || variable;
    if ((definition.fillRules || []).length) return true;
    if ((flow.routes || []).some(route => route.sourceCode === variable.code)) return true;
    if ((data.fields || []).some(item => item.autoSource === variable.code)) return true;
    return false;
  }

  function variablesFor(flow) {
    const baseParts = Array.isArray(flow.answerParts)
      ? [...flow.answerParts]
      : (Array.isArray(flow.answerBranches) && flow.answerBranches.length ? flow.answerBranches : [flow.branch]).map(branch => ({ question: flow.question, branch }));
    const currentIndex = baseParts.findIndex(part => part.question === flow.question && part.branch === flow.branch);
    const parts = currentIndex >= 0 ? baseParts.slice(0, currentIndex + 1) : [...baseParts];
    state.appendedSharedBranches.forEach(branch => parts.push({ question: "共用", branch }));
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
    data.variables.filter(variable =>
      variable.q === questionIdForName(flow.question) && (variable.branch === flow.branch || isSharedBranch(variable.branch))
    ).forEach(variable => {
      if (!catalog.has(variable.code)) catalog.set(variable.code, variable);
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
    const answerOrderText = composedAnswerTemplate(flow);
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
      entries,
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
    const inputPanel = document.createElement("section"); inputPanel.className = "panel input-panel";
    const outputPanel = document.createElement("section"); outputPanel.className = "panel output-panel";
    const hintsPanel = document.createElement("section"); hintsPanel.id = "operationHintsPanel"; hintsPanel.className = "panel hints-panel";
    layout.append(inputPanel, outputPanel, hintsPanel);
    els.result.append(layout);
    renderInputPanel(inputPanel, flow, variables);
    renderOutputPanel(outputPanel, flow, variables);
    renderHintsPanel(hintsPanel, flow, variables);
  }

  function sourceLinksFor(item) {
    if (Array.isArray(item?.sourceLinks) && item.sourceLinks.length) return item.sourceLinks.filter(link => link?.url);
    return (item?.sourceUrl || item?.url) ? [{ title: "開啟來源", url: item.sourceUrl || item.url }] : [];
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
      recalculateFieldRules(flow, variables);
    }
  }

  function appendHintInline(container, text) {
    String(text || "").split(/(\*\*[^*]+\*\*)/g).filter(Boolean).forEach(part => {
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        const strong = document.createElement("strong"); strong.textContent = part.slice(2, -2); container.append(strong);
      } else container.append(document.createTextNode(part));
    });
  }

  function appendSafeRichHint(parent, node) {
    if (node.nodeType === Node.TEXT_NODE) { parent.append(document.createTextNode(node.nodeValue || "")); return; }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const allowed = new Set(["P", "DIV", "BR", "STRONG", "B", "EM", "I", "U", "S", "H2", "H3", "BLOCKQUOTE", "OL", "UL", "LI", "A"]);
    if (!allowed.has(node.tagName)) { [...node.childNodes].forEach(child => appendSafeRichHint(parent, child)); return; }
    const element = document.createElement(node.tagName.toLowerCase());
    if (node.tagName === "A") {
      const href = String(node.getAttribute("href") || "");
      if (/^https?:\/\//i.test(href)) { element.href = href; element.target = "_blank"; element.rel = "noopener"; }
    }
    const align = String(node.style?.textAlign || "").toLowerCase();
    if (["left", "center", "right", "justify"].includes(align)) element.style.textAlign = align;
    [...node.childNodes].forEach(child => appendSafeRichHint(element, child));
    parent.append(element);
  }

  function renderHintText(container, value) {
    const source = String(value || "");
    if (/<(?:p|div|br|strong|b|em|i|u|s|h2|h3|blockquote|ol|ul|li|a)\b/i.test(source)) {
      const template = document.createElement("template"); template.innerHTML = source;
      [...template.content.childNodes].forEach(node => appendSafeRichHint(container, node));
      return;
    }
    let activeList = null;
    let activeType = "";
    let activeIndent = -1;
    source.split(/\r?\n/).forEach(line => {
      const heading = line.match(/^(\s*)#{1,3}\s+(.+)$/);
      const numbered = line.match(/^(\s*)\d+[.)、]\s+(.+)$/);
      const bullet = line.match(/^(\s*)[-*•]\s+(.+)$/);
      if (heading) {
        activeList = null; activeType = ""; activeIndent = -1;
        const title = document.createElement("h4"); appendHintInline(title, heading[2]); container.append(title); return;
      }
      const listType = numbered ? "ol" : (bullet ? "ul" : "");
      if (listType) {
        const match = numbered || bullet; const indent = match[1].replace(/\t/g, "  ").length;
        if (!activeList || activeType !== listType || activeIndent !== indent) {
          activeList = document.createElement(listType); activeType = listType; activeIndent = indent;
          if (indent) activeList.style.marginLeft = Math.min(indent, 12) * 8 + "px";
          container.append(activeList);
        }
        const item = document.createElement("li"); appendHintInline(item, match[2]); activeList.append(item); return;
      }
      activeList = null; activeType = ""; activeIndent = -1;
      if (!line.trim()) { const spacer = document.createElement("div"); spacer.className = "hint-spacer"; container.append(spacer); return; }
      const row = document.createElement("div"); row.className = "hint-line"; appendHintInline(row, line.trimStart()); container.append(row);
    });
  }

  function renderHintsPanel(panel, flow, variables) {
    panel.replaceChildren();
    const label = document.createElement("div"); label.className = "panel-label"; label.textContent = "操作資訊";
    const title = document.createElement("h3"); title.textContent = "操作提示";
    panel.append(label, title);

    const actions = actionsFor(flow);
    const sources = buildOutput(flow, variables).sources || [];
    if (!actions.length && !sources.length) {
      const empty = document.createElement("p"); empty.className = "hints-empty"; empty.textContent = "目前沒有額外操作提示。";
      panel.append(empty);
      return;
    }

    const box = document.createElement("div"); box.className = "action-box";
    const list = document.createElement("ul");
    const shownSourceUrls = new Set();
    actions.forEach(item => {
      const li = document.createElement("li");
      li.append(document.createTextNode(`${item.action}：${item.needed ? "是" : "否"}${item.note ? `（${item.note}）` : ""}`));
      if (item.sourceNote) { const note = document.createElement("div"); note.className = "hint-rich-text"; renderHintText(note, item.sourceNote); li.append(note); }
      sourceLinksFor(item).forEach(sourceLink => {
        if (!sourceLink.url || !/^https?:\/\//i.test(sourceLink.url)) return;
        const normalizedUrl = sourceLink.url.trim().replace(/\/$/, "").toLowerCase();
        if (shownSourceUrls.has(normalizedUrl)) return;
        shownSourceUrls.add(normalizedUrl);
        const link = document.createElement("a");
        link.href = sourceLink.url; link.target = "_blank"; link.rel = "noopener"; link.textContent = `${sourceLink.title || "開啟來源"} ↗`;
        li.append(document.createTextNode(" "), link);
      });
      list.append(li);
    });
    sources.forEach(source => {
      const li = document.createElement("li"); li.className = "hint-source-item";
      const name = document.createElement("b"); name.textContent = source.label;
      li.append(name);
      const note = document.createElement("div"); note.className = "hint-rich-text";
      renderHintText(note, source.note || "請開啟來源連結");
      li.append(note);
      (source.links || []).forEach(sourceLink => {
        if (!sourceLink.url || !/^https?:\/\//i.test(sourceLink.url)) return;
        const normalizedUrl = sourceLink.url.trim().replace(/\/$/, "").toLowerCase();
        if (shownSourceUrls.has(normalizedUrl)) return;
        shownSourceUrls.add(normalizedUrl);
        const link = document.createElement("a");
        link.href = sourceLink.url; link.target = "_blank"; link.rel = "noopener"; link.textContent = `${sourceLink.title || "開啟來源"} ↗`;
        li.append(document.createTextNode(" "), link);
      });
      list.append(li);
    });
    box.append(list);
    panel.append(box);
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
    wrap.hidden = !shouldShowConditionalField(variable, flow);
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
      const initialValue = state.values[variable.code] ?? (variable.common ? (commonValues[variable.code] || variable.defaultValue || "") : (variable.defaultValue || ""));
      setFieldInputValue(input, initialValue);
      state.values[variable.code] = input.value;
    }
    input.addEventListener("input", () => {
      state.values[variable.code] = input.value;
      if (variable.common) saveCommonValue(variable.code, input.value);
      variables.filter(v => v.auto || v.autoSource).forEach(autoVar => {
        state.values[autoVar.code] = calculateAuto(autoVar);
        const autoInput = document.getElementById(`field-${autoVar.code}`);
        if (autoInput) setFieldInputValue(autoInput, state.values[autoVar.code]);
      });
      const autoFilledCount = recalculateFieldRules(flow, variables);
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

  function plainHintText(value) {
    const source = String(value || "");
    if (/<(?:p|div|br|strong|b|em|i|u|s|h2|h3|blockquote|ol|ul|li|a)\b/i.test(source)) {
      const box = document.createElement("div"); box.innerHTML = source;
      box.querySelectorAll("script,style,img,video,iframe,object").forEach(node => node.remove());
      box.querySelectorAll("br").forEach(node => node.replaceWith("\n"));
      box.querySelectorAll("li").forEach(node => {
        const list = node.parentElement;
        const prefix = list?.tagName === "OL" ? ([...list.children].indexOf(node) + 1) + ". " : "▪ ";
        node.prepend(prefix); node.append("\n");
      });
      box.querySelectorAll("p,div,h1,h2,h3,h4,blockquote").forEach(node => node.append("\n"));
      return box.textContent.replace(/\n{3,}/g, "\n\n").trim();
    }
    return source.split(/\r?\n/).map(line => line.replace(/^(\s*)#{1,3}\s+/, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/^(\s*)[-*•]\s+/, "$1▪ ")).join("\n");
  }

  function answerOperationHintText(value) {
    const labels = new Map([...(data.fields || []), ...(data.variables || [])].map(item => [item.code, item.label || item.code]));
    return plainHintText(value)
      .replace(/\{\{([^{}]+)\}\}/g, (_, code) => `【${labels.get(code) || code}】`)
      .replace(/\{([^{}\n]+)\}/g, (_, label) => `【${label}】`);
  }

  function buildOutput(flow, variables) {
    const built = templatesFor(flow);
    const conditional = conditionalAnswerTexts();
    const parts = [];
    parts.push(...conditional.filter(item => item.position === "start").map(item => item.text));
    if (String(state.question.answerText || "").trim()) parts.push(state.question.answerText);
    parts.push(...conditional.filter(item => item.position === "after_question").map(item => item.text));
    built.entries.forEach(item => {
      if (String(item.part.beforeText || "").trim()) parts.push(item.part.beforeText);
      if (item.template) parts.push(item.template.text);
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
      const links = sourceLinksFor(variable);
      const inactiveConditional = !shouldShowConditionalField(variable, flow) && !String(state.values[variable.code] ?? "").trim();
      if (!inactiveConditional && text.includes(`{{${variable.code}}}`) && plainHintText(variable.sourceNote).trim() && !sourceMap.has(variable.code)) {
        sourceMap.set(variable.code, { code: variable.code, label: variable.label, note: variable.sourceNote || "", links });
      }
    });
    variables.forEach(variable => {
      const raw = state.values[variable.code] || "";
      const inactiveConditional = !shouldShowConditionalField(variable, flow) && !String(raw).trim();
      const value = displayValue(variable, raw) || (inactiveConditional ? "不用輸入" : `{請填：${variable.label}}`);
      text = text.split(`{{${variable.code}}}`).join(value);
    });
    if (built.missing.length) text += `\n\n{尚未設定答案：${built.missing.join("、")}}`;
    const sources = [...sourceMap.values()];
    const answerSources = sources.filter(source => String(source.note || "").trim());
    if (answerSources.length) {
      const lines = answerSources.map(source => `${source.label}：\n${answerOperationHintText(source.note)}`);
      text += `\n\n操作提示：\n${lines.join("\n\n")}`;
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
    state.appendedSharedBranches = new Set();
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
    const hintsPanel = document.getElementById("operationHintsPanel");
    if (hintsPanel) renderHintsPanel(hintsPanel, flow, variables);
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
