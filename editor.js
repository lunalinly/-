(() => {
  "use strict";

  const DRAFT_KEY = "sop-visual-editor-draft-v2";
  const OLD_DRAFT_KEY = "sop-visual-editor-draft-v1";
  const TOKEN_KEY = "sop-github-token-session";
  const $ = selector => document.querySelector(selector);
  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  window.SOP_PUBLISHED_DATA = clone(window.SOP_DATA);

  try {
    const saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || localStorage.getItem(OLD_DRAFT_KEY) || "null");
    if (saved && Array.isArray(saved.questions) && Array.isArray(saved.flows)) window.SOP_DATA = saved;
  } catch {}

  const data = window.SOP_DATA;
  const state = { mode: "questions", index: 0, query: "", dirty: false };
  normalizeData();

  function normalizeData() {
    data.variables ||= []; data.templates ||= []; data.actions ||= []; data.fields ||= [];
    const fieldCopy = value => {
      const copy = clone(value); delete copy.q; delete copy.branch; return copy;
    };
    const catalog = new Map(data.fields.map(item => [item.code, fieldCopy(item)]));
    data.variables.forEach(item => { if (!catalog.has(item.code)) catalog.set(item.code, fieldCopy(item)); });
    data.fields = [...catalog.values()];
    const isSharedBranch = value => {
      const branch = String(value || "").trim();
      return branch === "共用" || branch.toLowerCase() === "all";
    };
    const qidByName = new Map(data.questions.map(q => [q.name, q.id]));
    const branchMap = new Map();
    data.flows.forEach(flow => {
      flow.steps ||= [];
      const old = flow.branch;
      const friendly = isSharedBranch(old) ? "共用" : (flow.steps.at(-1)?.option || old || "共用");
      branchMap.set(`${qidByName.get(flow.question)}|${old}`, friendly);
      flow.branch = friendly;
    });
    [data.variables, data.templates, data.actions].forEach(list => list.forEach(item => {
      item.branch = branchMap.get(`${item.q}|${item.branch}`) || (isSharedBranch(item.branch) ? "共用" : item.branch || "共用");
    }));
    data.variables.forEach(v => {
      if (v.auto === "pickup+1") { v.autoSource = "pickup_date"; v.autoDays = 1; delete v.auto; }
      if (v.auto === "pickup+15") { v.autoSource = "pickup_date"; v.autoDays = 15; delete v.auto; }
    });
  }

  function setup() {
    if (!$("#editorButton")) return;
    document.body.insertAdjacentHTML("beforeend", markup());
    $("#editorButton").addEventListener("click", openStudio);
    $("#studioClose").addEventListener("click", closeStudio);
    $("#studioAdd").addEventListener("click", addCurrent);
    $("#studioDuplicate").addEventListener("click", duplicateCurrent);
    $("#studioDelete").addEventListener("click", deleteCurrent);
    $("#studioSave").addEventListener("click", () => saveCurrent(true));
    $("#studioSync").addEventListener("click", openSync);
    $("#studioReload").addEventListener("click", discardDraft);
    $("#studioExport").addEventListener("click", exportBackup);
    $("#studioImport").addEventListener("click", () => $("#studioImportFile").click());
    $("#studioImportFile").addEventListener("change", importBackup);
    $("#syncClose").addEventListener("click", closeSync);
    $("#syncCancel").addEventListener("click", closeSync);
    $("#syncNow").addEventListener("click", syncToGitHub);
    $("#studioSearch").addEventListener("input", event => { state.query = event.target.value.trim().toLowerCase(); renderList(); });
    $("#studioTabs").addEventListener("click", event => {
      const button = event.target.closest("[data-mode]");
      if (!button) return;
      state.mode = button.dataset.mode; state.index = 0; state.query = ""; $("#studioSearch").value = ""; renderStudio();
    });
    $("#studioList").addEventListener("click", event => {
      const item = event.target.closest("[data-index]");
      if (!item) return;
      state.index = Number(item.dataset.index); renderStudio();
    });
    $("#studioForm").addEventListener("click", handleFormClick);
    $("#studioForm").addEventListener("input", handleFormInput);
  }

  function markup() {
    return `
      <section class="studio" id="studio" hidden aria-label="SOP 視覺化編輯室">
        <header class="studio-header">
          <div class="studio-brand"><span class="studio-mark">S</span><div><strong>SOP 編輯室</strong><small>題目與分支一頁完成</small></div></div>
          <div class="studio-status"><span class="status-dot"></span><span id="studioStatus">目前資料已載入</span></div>
          <button class="studio-toolbar-btn" id="studioImport" type="button">匯入 JSON</button><input id="studioImportFile" type="file" accept="application/json,.json" hidden>
          <button class="studio-toolbar-btn" id="studioExport" type="button">下載備份</button>
          <button class="studio-toolbar-btn" id="studioReload" type="button">從 GitHub 重載</button>
          <button class="studio-sync-btn" id="studioSync" type="button">同步到 GitHub</button>
          <button class="studio-close" id="studioClose" type="button" aria-label="關閉編輯室">×</button>
        </header>
        <div class="studio-layout studio-layout-v2">
          <aside class="studio-nav">
            <p class="studio-nav-title">管理內容</p>
            <div id="studioTabs">
              <button type="button" data-mode="questions"><span>01</span>題目管理<b id="questionCount">0</b></button>
              <button type="button" data-mode="branches"><span>02</span>分支管理<b id="branchCount">0</b></button>
              <button type="button" data-mode="fields"><span>03</span>欄位管理<b id="fieldCount">0</b></button>
            </div>
            <div class="studio-help"><strong>新的編輯方式</strong><p>題目、分支與欄位分開管理；分支頁面可處理不限層數的判斷、答案及操作提醒。</p></div>
          </aside>
          <aside class="studio-records">
            <div class="studio-record-head"><div><p id="studioListLabel"></p><span id="studioListCount"></span></div><button id="studioAdd" type="button"></button></div>
            <label class="studio-search"><span>⌕</span><input id="studioSearch" type="search" placeholder="搜尋…"></label>
            <div class="studio-list" id="studioList"></div>
          </aside>
          <main class="studio-editor">
            <div class="studio-editor-head"><div><p class="eyebrow">VISUAL EDITOR</p><h2 id="studioEditorTitle"></h2></div><div class="studio-editor-actions"><button id="studioDuplicate" type="button">建立副本</button><button id="studioDelete" class="danger" type="button">刪除</button></div></div>
            <form id="studioForm" class="studio-form studio-form-v2" autocomplete="off"></form>
            <div class="studio-savebar"><span id="studioSaveHint">先保存瀏覽器草稿，再同步到 GitHub 永久保存。</span><button id="studioSave" type="button">儲存</button></div>
          </main>
        </div>
      </section>
      <div class="sync-backdrop" id="syncDialog" hidden>
        <section class="sync-card" role="dialog" aria-modal="true" aria-labelledby="syncTitle">
          <button class="sync-x" id="syncClose" type="button">×</button><p class="eyebrow">GITHUB SYNC</p><h2 id="syncTitle">同步到 GitHub</h2>
          <p>這個 Token 必須明確授權 <b>lunalinly/-</b>，並將 <b>Contents</b> 設成 <b>Read and write</b>。Repository 的名稱只有一個半形減號「-」。Token 關閉分頁後即消失。</p>
          <ol class="sync-token-checklist"><li>Resource owner：<b>lunalinly</b></li><li>Repository access：選 <b>Only select repositories</b>，再勾選 <b>-</b></li><li>Repository permissions → Contents：<b>Read and write</b></li></ol>
          <label class="sync-field"><span>Fine-grained personal access token</span><input id="githubToken" type="password" placeholder="github_pat_…" autocomplete="off"></label>
          <p class="token-help-links"><a class="token-link" href="https://github.com/settings/personal-access-tokens/new?name=SOP+Editor&amp;description=Sync+SOP+data+to+lunalinly%2F-&amp;target_name=lunalinly&amp;expires_in=90&amp;contents=write" target="_blank" rel="noopener">建立新 Token ↗</a>　<a class="token-link" href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">管理／修改現有 Token ↗</a></p>
          <div class="sync-message" id="syncMessage"></div>
          <div class="sync-actions"><button id="syncCancel" type="button">取消</button><button id="syncNow" class="studio-sync-btn" type="button">提交資料並發布</button></div>
        </section>
      </div>`;
  }

  function openStudio() { $("#studio").hidden = false; document.body.classList.add("studio-open"); renderStudio(); }
  function closeStudio() {
    $("#studio").hidden = true; document.body.classList.remove("studio-open");
    if (state.dirty && confirm("修改已保存在這個瀏覽器。要重新整理操作頁並套用嗎？")) location.reload();
  }
  function closeSync() { $("#syncDialog").hidden = true; }
  function currentList() { return state.mode === "questions" ? data.questions : state.mode === "branches" ? data.flows : data.fields; }
  function current() { return currentList()[state.index] || null; }
  function qidForName(name) { return data.questions.find(q => q.name === name)?.id || ""; }
  function qnameForId(id) { return data.questions.find(q => q.id === id)?.name || "未選題目"; }
  function exactVariables(q, branch) { return data.variables.filter(v => v.q === q && v.branch === branch); }
  function exactActions(q, branch) { return data.actions.filter(v => v.q === q && v.branch === branch); }
  function exactTemplate(q, branch) { return data.templates.find(v => v.q === q && v.branch === branch) || null; }

  function renderStudio() {
    $("#questionCount").textContent = data.questions.length; $("#branchCount").textContent = data.flows.length; $("#fieldCount").textContent = data.fields.length;
    document.querySelectorAll("#studioTabs [data-mode]").forEach(b => b.classList.toggle("active", b.dataset.mode === state.mode));
    const isQuestion = state.mode === "questions", isBranch = state.mode === "branches";
    $("#studioListLabel").textContent = isQuestion ? "題目清單" : isBranch ? "分支清單" : "欄位清單";
    $("#studioAdd").textContent = isQuestion ? "＋ 新增題目" : isBranch ? "＋ 新增分支" : "＋ 新增欄位";
    $("#studioEditorTitle").textContent = isQuestion ? "編輯問題" : isBranch ? "編輯分支" : "編輯欄位";
    $("#studioSave").textContent = isQuestion ? "儲存題目" : isBranch ? "儲存整個分支" : "儲存欄位";
    renderList(); renderForm();
  }

  function titleFor(record, index) {
    if (state.mode === "questions") return record.name || `題目 ${index + 1}`;
    if (state.mode === "branches") return `${record.question || "未選題目"} · ${record.branch || "共用"}`;
    return record.label || `欄位 ${index + 1}`;
  }
  function metaFor(record) {
    if (state.mode === "questions") return `${data.flows.filter(f => f.question === record.name).length} 個分支　${record.keywords || "尚無關鍵字"}`;
    if (state.mode === "branches") return (record.steps || []).map(s => s.option).join(" → ") || "直接回答（無判斷）";
    return `${data.variables.filter(v => v.code === record.code).length} 個分支使用　${record.type === "date" ? "日期" : "文字"}`;
  }
  function renderList() {
    const list = $("#studioList"); list.replaceChildren();
    const visible = currentList().map((record, index) => ({ record, index })).filter(x => !state.query || `${titleFor(x.record, x.index)} ${metaFor(x.record)}`.toLowerCase().includes(state.query));
    $("#studioListCount").textContent = `${visible.length} 筆`;
    visible.forEach(({ record, index }) => {
      const button = document.createElement("button"); button.type = "button"; button.dataset.index = index; button.className = "studio-list-item" + (index === state.index ? " active" : "");
      const strong = document.createElement("strong"); strong.textContent = titleFor(record, index);
      const small = document.createElement("small"); small.textContent = metaFor(record);
      button.append(strong, small); list.append(button);
    });
    if (!visible.length) list.innerHTML = `<div class="studio-list-empty">目前沒有資料<br>按上方新增開始建立</div>`;
  }

  function field(label, name, value = "", options = {}) {
    const wide = options.wide ? " wide" : ""; const required = options.required ? "required" : "";
    let control;
    if (options.type === "textarea") control = `<textarea name="${name}" rows="${options.rows || 4}" ${required} placeholder="${esc(options.placeholder || "")}">${esc(value)}</textarea>`;
    else if (options.type === "select") control = `<select name="${name}" ${required}>${options.choices || ""}</select>`;
    else if (options.type === "checkbox") control = `<label class="switch-row"><input name="${name}" type="checkbox" ${value ? "checked" : ""}><span class="switch"></span><b>${esc(options.checkLabel || "啟用")}</b></label>`;
    else control = `<input name="${name}" type="${options.type || "text"}" value="${esc(value)}" ${required} placeholder="${esc(options.placeholder || "")}">`;
    return `<label class="studio-field${wide}"><span>${esc(label)}${options.required ? " ＊" : ""}</span>${control}${options.hint ? `<small>${esc(options.hint)}</small>` : ""}</label>`;
  }
  function questionChoices(value) { return data.questions.map(q => `<option value="${esc(q.name)}" ${q.name === value ? "selected" : ""}>${esc(q.name)}</option>`).join(""); }
  function branchSuggestions() { return [...new Set(["共用", ...data.flows.map(f => f.branch).filter(Boolean)])].map(x => `<option value="${esc(x)}"></option>`).join(""); }
  function sourceChoices(q, vars, value) {
    const combined = [...exactVariables(q, "共用"), ...vars];
    const unique = [...new Map(combined.map(v => [v.code, v])).values()];
    return `<option value="" ${!value ? "selected" : ""}>不自動計算</option>` + unique.map(v => `<option value="${esc(v.code)}" ${v.code === value ? "selected" : ""}>${esc(v.label)}</option>`).join("");
  }

  function reusableVariables(q, branch) {
    const used = new Set(exactVariables(q, branch).map(v => v.code));
    return data.fields
      .map(variable => ({ variable, used: used.has(variable.code) }))
      .sort((a, b) => String(a.variable.label).localeCompare(String(b.variable.label), "zh-Hant"));
  }

  function renderForm() {
    const form = $("#studioForm"); const record = current();
    $("#studioDuplicate").disabled = !record; $("#studioDelete").disabled = !record; $("#studioSave").disabled = !record;
    if (!record) { form.innerHTML = `<div class="studio-blank"><b>尚無資料</b><span>請按左上方新增。</span></div>`; return; }
    form.innerHTML = state.mode === "questions" ? questionForm(record) : state.mode === "branches" ? branchForm(record) : fieldForm(record);
  }

  function questionForm(q) {
    const linked = data.flows.map((flow, index) => ({ flow, index })).filter(x => x.flow.question === q.name);
    const branches = linked.length ? linked.map(x => `<button type="button" class="linked-branch" data-edit-branch="${x.index}"><strong>${esc(x.flow.branch)}</strong><span>${esc((x.flow.steps || []).map(s => s.option).join(" → ") || "直接回答")}</span></button>`).join("") : `<div class="no-steps">這個題目尚未建立分支。</div>`;
    return `<section class="editor-section wide"><div class="editor-section-title"><div><b>題目基本資料</b><small>系統代碼會自動處理，只需填中文。</small></div></div><div class="editor-grid">${field("題目名稱", "name", q.name, { required: true, wide: true, placeholder: "例如：詢問保固" })}${field("搜尋關鍵字", "keywords", q.keywords, { wide: true, placeholder: "保固,維修,故障" })}${field("題目說明", "description", q.description, { wide: true, type: "textarea", rows: 3 })}${field("前台顯示", "enabled", q.enabled, { type: "checkbox", checkLabel: "啟用這個題目" })}</div></section><section class="editor-section wide"><div class="editor-section-title"><div><b>這個題目的分支</b><small>可直接跳到分支完整編輯頁。</small></div><button type="button" data-add-branch-for="${esc(q.name)}">＋ 新增分支</button></div><div class="linked-branches">${branches}</div></section>`;
  }

  function fieldForm(item) {
    const typeOptions = `<option value="text" ${item.type !== "date" ? "selected" : ""}>文字</option><option value="date" ${item.type === "date" ? "selected" : ""}>日期</option>`;
    const sourceOptions = `<option value="">不自動計算</option>` + data.fields.filter(v => v.code !== item.code).map(v => `<option value="${esc(v.code)}" ${v.code === item.autoSource ? "selected" : ""}>${esc(v.label)}</option>`).join("");
    const used = data.variables.filter(v => v.code === item.code);
    const usage = used.length ? `<div class="linked-branches">${used.map(v => `<div class="linked-branch"><strong>${esc(qnameForId(v.q))} · ${esc(v.branch)}</strong><span>正在使用此欄位</span></div>`).join("")}</div>` : `<div class="no-steps">目前尚未被任何分支使用。</div>`;
    return `<section class="editor-section wide"><div class="editor-section-title"><div><b>欄位基本設定</b><small>修改後會同步套用到所有使用此欄位的分支。</small></div></div><input type="hidden" name="field_code" value="${esc(item.code)}"><div class="editor-grid">${field("中文欄位名稱", "field_label", item.label, { required: true })}${field("輸入提示", "field_hint", item.hint || "")}${field("輸入類型", "field_type", item.type || "text", { type: "select", choices: typeOptions })}${field("自動依照哪個欄位", "field_source", item.autoSource || "", { type: "select", choices: sourceOptions })}${field("增減天數", "field_days", item.autoDays ?? 0, { type: "number", hint: "15 為加 15 天；-1 為減 1 天" })}${field("必填", "field_required", item.required, { type: "checkbox", checkLabel: "必填" })}${field("多行輸入", "field_multiline", item.multiline, { type: "checkbox", checkLabel: "大型文字欄" })}${field("常用參數", "field_common", item.common, { type: "checkbox", checkLabel: "沿用上次輸入" })}</div></section><section class="editor-section wide"><div class="editor-section-title"><div><b>使用中的分支</b><small>從分支移除後，欄位仍會保留在欄位庫。</small></div></div>${usage}</section>`;
  }

  function branchForm(flow) {
    const q = qidForName(flow.question); const vars = exactVariables(q, flow.branch); const template = exactTemplate(q, flow.branch); const actions = exactActions(q, flow.branch);
    const steps = (flow.steps || []).map((step, i) => `<div class="step-card"><div class="step-card-head"><b>判斷 ${i + 1}</b><button type="button" data-remove-step="${i}">移除</button></div>${field("判斷問題", `step_prompt_${i}`, step.prompt, { required: true, wide: true })}${field("這條路徑的選項", `step_option_${i}`, step.option, { required: true, wide: true })}</div>`).join("");
    const variableRows = vars.map((v, i) => variableCard(v, i, q, vars)).join("") || `<div class="no-steps">這個分支目前不需要填入欄位。</div>`;
    const reusable = reusableVariables(q, flow.branch);
    const canReuse = reusable.some(item => !item.used);
    const reuseControls = reusable.length
      ? `<div class="field-add-tools"><select name="existing_variable_code" aria-label="選擇既有欄位"><option value="">選擇既有欄位…</option>${reusable.map(({ variable, used }) => `<option value="${esc(variable.code)}" ${used ? "disabled" : ""}>${esc(variable.label)}${used ? "（目前分支已使用）" : ""}</option>`).join("")}</select><button type="button" data-use-existing-variable ${canReuse ? "" : "disabled"}>＋ 使用既有欄位</button><button type="button" data-add-variable>＋ 建立新欄位</button></div>`
      : `<div class="field-add-tools"><span>目前沒有既有欄位</span><button type="button" data-add-variable>＋ 建立新欄位</button></div>`;
    const actionRows = actions.map((a, i) => actionCard(a, i)).join("") || `<div class="no-steps">這個分支目前沒有額外操作提醒。</div>`;
    const friendly = friendlyTemplate(template?.text || "", q);
    return `<section class="editor-section wide"><div class="editor-section-title"><div><b>分支基本資料</b><small>相同中文名稱可以重複使用。</small></div></div><div class="editor-grid">${field("所屬題目", "question", flow.question, { type: "select", choices: questionChoices(flow.question), required: true })}<label class="studio-field"><span>中文分支名稱 ＊</span><input name="branch" list="branchSuggestions" value="${esc(flow.branch)}" required><datalist id="branchSuggestions">${branchSuggestions()}</datalist><small>可選既有名稱，或直接輸入新的中文名稱。</small></label>${field("走完後的下一步", "next", flow.next, { wide: true, type: "textarea", rows: 3 })}</div></section>
      <section class="editor-section wide"><div class="editor-section-title"><div><b>判斷路徑</b><small>沒有層數上限；依實際操作順序一直增加即可。</small></div><button type="button" data-add-step>＋ 增加一層判斷</button></div><div class="unlimited-steps">${steps || `<div class="no-steps">無判斷時會直接進入這個分支。</div>`}</div></section>
      <section class="editor-section wide"><div class="editor-section-title"><div><b>需要填入的欄位</b><small>可沿用既有中文欄位，或建立全新欄位；自動計算設定也會一起沿用。</small></div></div>${reuseControls}<div class="branch-variable-list">${variableRows}</div></section>
      <section class="editor-section wide"><div class="editor-section-title"><div><b>最終答案範本</b><small>點中文欄位按鈕插入，不必接觸系統代碼。</small></div></div>${variableTokens(vars)}${field("答案內容", "template_text", friendly, { wide: true, type: "textarea", rows: 12, placeholder: "您好，訂單【訂單編號】…" })}</section>
      <section class="editor-section wide"><div class="editor-section-title"><div><b>操作提醒</b><small>查表、填表、工單、Jira 或其他動作。</small></div><button type="button" data-add-action>＋ 新增操作</button></div><div class="branch-action-list">${actionRows}</div></section>`;
  }

  function variableCard(v, i, q, vars) {
    const typeOptions = `<option value="text" ${v.type !== "date" ? "selected" : ""}>文字</option><option value="date" ${v.type === "date" ? "selected" : ""}>日期</option>`;
    return `<div class="subrecord-card"><div class="subrecord-head"><b>欄位 ${i + 1}｜${esc(v.label)}</b><button type="button" data-remove-variable="${i}">移除</button></div><input type="hidden" name="var_code_${i}" value="${esc(v.code)}"><div class="editor-grid">${field("中文欄位名稱", `var_label_${i}`, v.label, { required: true })}${field("輸入提示", `var_hint_${i}`, v.hint || "")}${field("輸入類型", `var_type_${i}`, v.type || "text", { type: "select", choices: typeOptions })}${field("自動依照哪個欄位", `var_source_${i}`, v.autoSource || "", { type: "select", choices: sourceChoices(q, vars, v.autoSource || "") })}${field("增減天數", `var_days_${i}`, v.autoDays ?? 0, { type: "number", hint: "15 為加 15 天；-1 為減 1 天" })}${field("必填", `var_required_${i}`, v.required, { type: "checkbox", checkLabel: "必填" })}${field("多行輸入", `var_multiline_${i}`, v.multiline, { type: "checkbox", checkLabel: "大型文字欄" })}${field("常用參數", `var_common_${i}`, v.common, { type: "checkbox", checkLabel: "沿用上次輸入" })}</div></div>`;
  }
  function actionCard(a, i) {
    return `<div class="subrecord-card"><div class="subrecord-head"><b>操作 ${i + 1}｜${esc(a.action)}</b><button type="button" data-remove-action="${i}">移除</button></div><div class="editor-grid">${field("操作名稱", `action_name_${i}`, a.action, { required: true })}${field("是否需要", `action_needed_${i}`, a.needed, { type: "checkbox", checkLabel: "需要執行" })}${field("補充說明", `action_note_${i}`, a.note || "", { wide: true, type: "textarea", rows: 3 })}</div></div>`;
  }
  function variableTokens(vars) { return `<div class="template-tokens wide"><span>${vars.length ? "點一下插入欄位：" : "尚無可插入欄位"}</span>${vars.map(v => `<button type="button" data-insert-token="${esc(v.label)}">＋ ${esc(v.label)}</button>`).join("")}</div>`; }
  function friendlyTemplate(text, q) { let result = String(text || ""); data.variables.filter(v => v.q === q).forEach(v => { result = result.split(`{{${v.code}}}`).join(`【${v.label}】`); }); return result; }
  function storedTemplate(text, q, variables) { let result = String(text || ""); variables.forEach(v => { result = result.split(`【${v.label}】`).join(`{{${v.code}}}`); }); return result; }

  function handleFormInput(event) {
    const match = event.target.name?.match(/^var_label_(\d+)$/);
    if (!match) return;
    const code = $("#studioForm [name=var_code_" + match[1] + "]")?.value;
    const option = [...$("#studioForm [name=existing_variable_code]")?.options || []].find(item => item.value === code);
    if (option) option.textContent = (event.target.value.trim() || "未命名欄位") + "（目前分支已使用）";
  }

  function handleFormClick(event) {
    const edit = event.target.closest("[data-edit-branch]"); if (edit) { state.mode = "branches"; state.index = Number(edit.dataset.editBranch); renderStudio(); return; }
    const addFor = event.target.closest("[data-add-branch-for]"); if (addFor) { addBranch(addFor.dataset.addBranchFor); return; }
    if (event.target.closest("[data-add-step]")) { saveBranch(false); current().steps.push({ prompt: "", option: "" }); markDirty(); renderForm(); return; }
    const removeStep = event.target.closest("[data-remove-step]"); if (removeStep) { saveBranch(false); current().steps.splice(Number(removeStep.dataset.removeStep), 1); markDirty(); renderForm(); return; }
    if (event.target.closest("[data-use-existing-variable]")) { useExistingVariable(); return; }
    if (event.target.closest("[data-add-variable]")) { addVariable(); return; }
    const removeVar = event.target.closest("[data-remove-variable]"); if (removeVar) { removeVariable(Number(removeVar.dataset.removeVariable)); return; }
    if (event.target.closest("[data-add-action]")) { addAction(); return; }
    const removeAction = event.target.closest("[data-remove-action]"); if (removeAction) { removeActionAt(Number(removeAction.dataset.removeAction)); return; }
    const token = event.target.closest("[data-insert-token]"); if (token) insertToken(token.dataset.insertToken);
  }

  function nextId(prefix, ids) { const nums = ids.map(x => Number(String(x || "").replace(/\D/g, ""))).filter(Number.isFinite); return prefix + String(Math.max(0, ...nums) + 1).padStart(3, "0"); }
  function addCurrent() { state.mode === "questions" ? addQuestion() : state.mode === "branches" ? addBranch(data.questions[0]?.name || "") : addField(); }
  function addField() {
    data.fields.push({ code: nextId("V", [...data.fields, ...data.variables].map(v => v.code)), label: "新欄位", hint: "", type: "text", required: true });
    state.mode = "fields"; state.index = data.fields.length - 1; markDirty(); renderStudio();
  }
  function addQuestion() { data.questions.push({ id: nextId("Q", data.questions.map(q => q.id)), name: "新題目", keywords: "", description: "", enabled: true }); state.mode = "questions"; state.index = data.questions.length - 1; markDirty(); renderStudio(); }
  function addBranch(questionName) { data.flows.push({ question: questionName || data.questions[0]?.name || "", branch: "新分支", steps: [], next: "" }); state.mode = "branches"; state.index = data.flows.length - 1; markDirty(); renderStudio(); }

  function duplicateCurrent() {
    if (!current()) return;
    if (state.mode === "questions") {
      const q = clone(current()); q.id = nextId("Q", data.questions.map(x => x.id)); q.name += "（副本）"; data.questions.splice(state.index + 1, 0, q); state.index++;
    } else if (state.mode === "branches") {
      saveBranch(false); const original = current(); const copy = clone(original); copy.branch += "（副本）"; data.flows.splice(state.index + 1, 0, copy); state.index++;
      const oldQ = qidForName(original.question), newQ = qidForName(copy.question);
      exactVariables(oldQ, original.branch).forEach(v => data.variables.push({ ...clone(v), q: newQ, branch: copy.branch }));
      const template = exactTemplate(oldQ, original.branch); if (template) data.templates.push({ ...clone(template), q: newQ, branch: copy.branch });
      exactActions(oldQ, original.branch).forEach(a => data.actions.push({ ...clone(a), q: newQ, branch: copy.branch }));
    } else {
      const copy = clone(current()); copy.code = nextId("V", [...data.fields, ...data.variables].map(v => v.code)); copy.label += "（副本）";
      data.fields.splice(state.index + 1, 0, copy); state.index++;
    }
    markDirty(); renderStudio();
  }

  function deleteCurrent() {
    const record = current(); if (!record) return;
    if (state.mode === "questions") {
      if (!confirm(`確定刪除「${record.name}」及它的所有分支、欄位、答案與操作提醒？`)) return;
      const qid = record.id; const names = new Set(data.flows.filter(f => f.question === record.name).map(f => f.branch));
      data.flows = data.flows.filter(f => f.question !== record.name); data.variables = data.variables.filter(v => v.q !== qid); data.templates = data.templates.filter(v => v.q !== qid); data.actions = data.actions.filter(v => v.q !== qid); data.questions.splice(state.index, 1);
    } else if (state.mode === "branches") {
      if (!confirm(`確定刪除分支「${record.branch}」？`)) return;
      const qid = qidForName(record.question); const shared = data.flows.some((f, i) => i !== state.index && f.question === record.question && f.branch === record.branch);
      data.flows.splice(state.index, 1);
      if (!shared) { data.variables = data.variables.filter(v => !(v.q === qid && v.branch === record.branch)); data.templates = data.templates.filter(v => !(v.q === qid && v.branch === record.branch)); data.actions = data.actions.filter(v => !(v.q === qid && v.branch === record.branch)); }
    } else {
      const uses = data.variables.filter(v => v.code === record.code).length;
      if (uses) { alert(`這個欄位仍被 ${uses} 個分支使用，請先到那些分支移除後再刪除。`); return; }
      if (!confirm(`確定刪除欄位「${record.label}」？`)) return;
      data.fields.splice(state.index, 1);
    }
    state.index = Math.max(0, state.index - 1); markDirty(); renderStudio();
  }

  function saveCurrent(show = true) { return state.mode === "questions" ? saveQuestion(show) : state.mode === "branches" ? saveBranch(show) : saveField(show); }
  function saveQuestion(show = true) {
    const q = current(); if (!q) return false; const form = $("#studioForm"); if (!form.reportValidity()) return false; const fd = new FormData(form); const oldName = q.name; const name = String(fd.get("name") || "").trim();
    if (!name) return false; if (data.questions.some((x, i) => i !== state.index && x.name === name)) { alert("這個中文題目名稱已經存在。"); return false; }
    q.name = name; q.keywords = String(fd.get("keywords") || "").trim(); q.description = String(fd.get("description") || "").trim(); q.enabled = fd.has("enabled");
    if (oldName !== name) data.flows.forEach(f => { if (f.question === oldName) f.question = name; });
    markDirty(); renderStudio(); if (show) setStatus("題目已保存於瀏覽器"); return true;
  }

  function saveField(show = true) {
    const item = current(); if (!item || state.mode !== "fields") return false;
    const form = $("#studioForm"); if (!form.reportValidity()) return false; const fd = new FormData(form);
    const label = String(fd.get("field_label") || "").trim();
    if (data.fields.some((fieldItem, index) => index !== state.index && fieldItem.label === label)) { alert("這個中文欄位名稱已經存在。"); return false; }
    Object.assign(item, {
      label, hint: String(fd.get("field_hint") || "").trim(), type: String(fd.get("field_type") || "text"),
      autoSource: String(fd.get("field_source") || "") || undefined, autoDays: Number(fd.get("field_days") || 0),
      required: fd.has("field_required"), multiline: fd.has("field_multiline"), common: fd.has("field_common")
    });
    if (!item.autoSource) delete item.autoSource;
    data.variables.filter(v => v.code === item.code).forEach(v => {
      const q = v.q, branch = v.branch; Object.assign(v, clone(item), { q, branch });
    });
    markDirty(); renderStudio(); if (show) setStatus("欄位已保存並套用到所有分支"); return true;
  }

  function captureBranchForm(flow, oldQ, oldBranch) {
    const form = $("#studioForm"); if (!form.reportValidity()) return null; const fd = new FormData(form);
    const question = String(fd.get("question") || "").trim(); const branch = String(fd.get("branch") || "共用").trim() || "共用"; const q = qidForName(question);
    const steps = (flow.steps || []).map((_, i) => ({ prompt: String(fd.get(`step_prompt_${i}`) || "").trim(), option: String(fd.get(`step_option_${i}`) || "").trim() }));
    const previousVars = exactVariables(oldQ, oldBranch); const variables = previousVars.map((old, i) => ({ q, branch, code: String(fd.get(`var_code_${i}`) || old.code), label: String(fd.get(`var_label_${i}`) || "").trim(), hint: String(fd.get(`var_hint_${i}`) || "").trim(), type: String(fd.get(`var_type_${i}`) || "text"), autoSource: String(fd.get(`var_source_${i}`) || "") || undefined, autoDays: Number(fd.get(`var_days_${i}`) || 0), required: fd.has(`var_required_${i}`), multiline: fd.has(`var_multiline_${i}`), common: fd.has(`var_common_${i}`) }));
    variables.forEach(v => { if (!v.autoSource) delete v.autoSource; });
    const previousActions = exactActions(oldQ, oldBranch); const actions = previousActions.map((old, i) => ({ q, branch, action: String(fd.get(`action_name_${i}`) || "").trim(), needed: fd.has(`action_needed_${i}`), note: String(fd.get(`action_note_${i}`) || "").trim() }));
    const templateText = String(fd.get("template_text") || "").trim();
    return { question, q, branch, next: String(fd.get("next") || "").trim(), steps, variables, actions, templateText };
  }

  function saveBranch(show = true) {
    const flow = current(); if (!flow || state.mode !== "branches") return false;
    const oldQuestion = flow.question, oldQ = qidForName(oldQuestion), oldBranch = flow.branch; const captured = captureBranchForm(flow, oldQ, oldBranch); if (!captured) return false;
    const oldShared = data.flows.some((f, i) => i !== state.index && f.question === oldQuestion && f.branch === oldBranch);
    const moved = captured.q !== oldQ || captured.branch !== oldBranch;
    flow.question = captured.question; flow.branch = captured.branch; flow.next = captured.next; flow.steps = captured.steps;
    if (!oldShared || !moved) {
      data.variables = data.variables.filter(v => !(v.q === oldQ && v.branch === oldBranch)); data.templates = data.templates.filter(v => !(v.q === oldQ && v.branch === oldBranch)); data.actions = data.actions.filter(v => !(v.q === oldQ && v.branch === oldBranch));
    }
    data.variables = data.variables.filter(v => !(v.q === captured.q && v.branch === captured.branch)); data.actions = data.actions.filter(v => !(v.q === captured.q && v.branch === captured.branch)); data.templates = data.templates.filter(v => !(v.q === captured.q && v.branch === captured.branch));
    data.variables.push(...captured.variables); data.actions.push(...captured.actions);
    if (captured.templateText) data.templates.push({ q: captured.q, branch: captured.branch, text: storedTemplate(captured.templateText, captured.q, captured.variables) });
    markDirty(); renderStudio(); if (show) setStatus("整個分支已保存於瀏覽器"); return true;
  }

  function useExistingVariable() {
    const select = $("#studioForm [name=existing_variable_code]");
    const code = select?.value || "";
    if (!code) { alert("請先選擇一個既有欄位。"); select?.focus(); return; }
    const source = data.fields.find(v => v.code === code) || data.variables.find(v => v.code === code);
    if (!source) { alert("找不到這個既有欄位，請重新選擇。"); return; }
    if (!saveBranch(false)) return;
    const flow = current(), q = qidForName(flow.question);
    if (exactVariables(q, flow.branch).some(v => v.code === code)) { alert("這個分支已經有此欄位。"); return; }
    data.variables.push({ ...clone(source), q, branch: flow.branch });
    markDirty(); renderForm(); setStatus(`已沿用欄位：${source.label}`, true);
  }

  function addVariable() {
    if (!saveBranch(false)) return; const flow = current(), q = qidForName(flow.question);
    const item = { code: nextId("V", [...data.fields, ...data.variables].map(v => v.code)), label: "新欄位", hint: "", type: "text", required: true };
    data.fields.push(clone(item)); data.variables.push({ ...item, q, branch: flow.branch }); markDirty(); renderForm();
  }
  function removeVariable(index) { if (!saveBranch(false)) return; const flow = current(), q = qidForName(flow.question), list = exactVariables(q, flow.branch), target = list[index]; if (target) data.variables.splice(data.variables.indexOf(target), 1); markDirty(); renderForm(); }
  function addAction() { if (!saveBranch(false)) return; const flow = current(), q = qidForName(flow.question); data.actions.push({ q, branch: flow.branch, action: "新操作", needed: true, note: "" }); markDirty(); renderForm(); }
  function removeActionAt(index) { if (!saveBranch(false)) return; const flow = current(), q = qidForName(flow.question), list = exactActions(q, flow.branch), target = list[index]; if (target) data.actions.splice(data.actions.indexOf(target), 1); markDirty(); renderForm(); }
  function insertToken(label) { const textarea = $("#studioForm [name=template_text]"); if (!textarea) return; const marker = `【${label}】`; textarea.setRangeText(marker, textarea.selectionStart ?? textarea.value.length, textarea.selectionEnd ?? textarea.value.length, "end"); textarea.focus(); }

  function markDirty() { data.updatedAt = new Date().toISOString(); data.version = new Date().toLocaleDateString("zh-TW"); localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); localStorage.removeItem(OLD_DRAFT_KEY); state.dirty = true; setStatus("有尚未同步到 GitHub 的修改", true); }
  function setStatus(text, pending = false) { $("#studioStatus").textContent = text; $(".studio-status")?.classList.toggle("pending", pending); }
  function openSync() { $("#syncDialog").hidden = false; $("#githubToken").value = sessionStorage.getItem(TOKEN_KEY) || ""; $("#syncMessage").textContent = ""; setTimeout(() => $("#githubToken").focus(), 50); }
  function encodeBase64(text) { const bytes = new TextEncoder().encode(text); let binary = ""; for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(binary); }

  async function syncToGitHub() {
    const token = $("#githubToken").value.trim(), message = $("#syncMessage"); if (!token) { message.textContent = "請先貼上 Fine-grained token。"; return; }
    if (current() && !saveCurrent(false)) { message.textContent = "目前資料尚未通過檢查。"; return; }
    sessionStorage.setItem(TOKEN_KEY, token); const button = $("#syncNow"); button.disabled = true; button.textContent = "同步中…"; message.textContent = "正在讀取 GitHub 最新版本…";
    try {
      const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
      const get = await fetch("https://api.github.com/repos/lunalinly/-/contents/data.js?ref=main", { headers });
      if (!get.ok) {
        if (get.status === 401) throw new Error("Token 無效或已過期，請建立新的 Fine-grained token。");
        if (get.status === 403) throw new Error("這個 Token 無法存取 lunalinly/-。請在 Repository access 勾選名稱為「-」的 Repository，並把 Contents 設為 Read and write。");
        throw new Error(`讀取 GitHub 失敗（${get.status}）`);
      }
      const remote = await get.json(); data.updatedAt = new Date().toISOString(); const file = `// 由 SOP 視覺化編輯室產生；操作畫面僅使用中文。\nwindow.SOP_DATA = ${JSON.stringify(data, null, 2)};\n`;
      message.textContent = "正在建立 GitHub 版本…";
      const put = await fetch("https://api.github.com/repos/lunalinly/-/contents/data.js", { method: "PUT", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify({ message: "Update SOP data from visual editor", content: encodeBase64(file), sha: remote.sha, branch: "main" }) });
      if (!put.ok) {
        const details = await put.json().catch(() => ({}));
        if (put.status === 401) throw new Error("Token 無效或已過期，請建立新的 Fine-grained token。");
        if (put.status === 403 && /Resource not accessible by personal access token/i.test(details.message || "")) {
          throw new Error("這個 Token 沒有「lunalinly/-」的寫入權限。請修改 Token：Repository access 勾選名稱為「-」的 Repository，Contents 設為 Read and write。");
        }
        if (put.status === 403) throw new Error("GitHub 拒絕寫入。請確認 Repository「-」已授權，而且 Contents 是 Read and write。");
        throw new Error(details.message || `寫入 GitHub 失敗（${put.status}）`);
      }
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); state.dirty = false; setStatus("已同步到 GitHub"); message.textContent = "同步成功，GitHub Pages 正在重新發布。"; button.textContent = "同步完成";
    } catch (error) { message.textContent = error.message || "同步失敗。"; button.disabled = false; button.textContent = "重新嘗試"; }
  }

  function discardDraft() { if (!confirm("確定捨棄尚未同步的修改，重新載入 GitHub 版本？")) return; localStorage.removeItem(DRAFT_KEY); localStorage.removeItem(OLD_DRAFT_KEY); location.reload(); }
  function exportBackup() { saveCurrent(false); const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `sop-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href); }
  async function importBackup(event) { const file = event.target.files[0]; if (!file) return; try { const incoming = JSON.parse(await file.text()); if (!Array.isArray(incoming.questions) || !Array.isArray(incoming.flows)) throw new Error(); Object.keys(data).forEach(k => delete data[k]); Object.assign(data, incoming); normalizeData(); state.index = 0; markDirty(); renderStudio(); } catch { alert("無法匯入：請選擇本編輯室下載的 JSON。"); } event.target.value = ""; }

  setup();
})();
