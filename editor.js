(() => {
  "use strict";

  const DRAFT_KEY = "sop-visual-editor-draft-v1";
  const TOKEN_KEY = "sop-github-token-session";
  const sections = [
    { key: "questions", label: "題目", icon: "01" },
    { key: "flows", label: "判斷流程", icon: "02" },
    { key: "variables", label: "變數欄位", icon: "03" },
    { key: "templates", label: "答案範本", icon: "04" },
    { key: "actions", label: "操作提醒", icon: "05" }
  ];

  try {
    const saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
    if (saved && Array.isArray(saved.questions) && Array.isArray(saved.flows)) window.SOP_DATA = saved;
  } catch {}

  const data = window.SOP_DATA;
  const studio = { section: "questions", index: 0, query: "", dirty: false };
  const deepClone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = selector => document.querySelector(selector);

  function setup() {
    const openButton = $("#editorButton");
    if (!openButton) return;
    document.body.insertAdjacentHTML("beforeend", studioMarkup());
    openButton.addEventListener("click", openStudio);
    $("#studioClose").addEventListener("click", closeStudio);
    $("#studioAdd").addEventListener("click", addRecord);
    $("#studioDuplicate").addEventListener("click", duplicateRecord);
    $("#studioDelete").addEventListener("click", deleteRecord);
    $("#studioSave").addEventListener("click", saveRecord);
    $("#studioSync").addEventListener("click", openSync);
    $("#studioSearch").addEventListener("input", event => { studio.query = event.target.value.trim().toLowerCase(); renderList(); });
    $("#syncClose").addEventListener("click", () => $("#syncDialog").hidden = true);
    $("#syncCancel").addEventListener("click", () => $("#syncDialog").hidden = true);
    $("#syncNow").addEventListener("click", syncToGitHub);
    $("#studioReload").addEventListener("click", discardDraft);
    $("#studioExport").addEventListener("click", exportBackup);
    $("#studioImportFile").addEventListener("change", importBackup);
    $("#studioImport").addEventListener("click", () => $("#studioImportFile").click());
    $("#studioTabs").addEventListener("click", event => {
      const button = event.target.closest("[data-section]");
      if (!button) return;
      studio.section = button.dataset.section;
      studio.index = 0;
      studio.query = "";
      $("#studioSearch").value = "";
      renderStudio();
    });
    $("#studioForm").addEventListener("click", event => {
      const remove = event.target.closest("[data-remove-step]");
      if (remove) removeFlowStep(Number(remove.dataset.removeStep));
    });
    $("#studioList").addEventListener("click", event => {
      const item = event.target.closest("[data-index]");
      if (!item) return;
      studio.index = Number(item.dataset.index);
      renderStudio();
    });
  }

  function studioMarkup() {
    return `
      <section class="studio" id="studio" hidden aria-label="SOP 視覺化編輯室">
        <header class="studio-header">
          <div class="studio-brand"><span class="studio-mark">S</span><div><strong>SOP 編輯室</strong><small>視覺化管理題目與判斷流程</small></div></div>
          <div class="studio-status"><span class="status-dot"></span><span id="studioStatus">目前資料已載入</span></div>
          <button class="studio-toolbar-btn" id="studioImport" type="button">匯入 JSON</button>
          <input id="studioImportFile" type="file" accept="application/json,.json" hidden>
          <button class="studio-toolbar-btn" id="studioExport" type="button">下載備份</button>
          <button class="studio-toolbar-btn" id="studioReload" type="button">從 GitHub 重載</button>
          <button class="studio-sync-btn" id="studioSync" type="button">同步到 GitHub</button>
          <button class="studio-close" id="studioClose" type="button" aria-label="關閉編輯室">×</button>
        </header>
        <div class="studio-layout">
          <aside class="studio-nav">
            <p class="studio-nav-title">資料結構</p>
            <div id="studioTabs">${sections.map(s => `<button type="button" data-section="${s.key}"><span>${s.icon}</span>${s.label}<b data-count="${s.key}">0</b></button>`).join("")}</div>
            <div class="studio-help"><strong>建議順序</strong><p>先建題目，再建流程，最後加入變數、答案範本與操作提醒。</p></div>
          </aside>
          <aside class="studio-records">
            <div class="studio-record-head"><div><p id="studioListLabel">題目清單</p><span id="studioListCount"></span></div><button id="studioAdd" type="button">＋ 新增</button></div>
            <label class="studio-search"><span>⌕</span><input id="studioSearch" type="search" placeholder="搜尋這一區…"></label>
            <div class="studio-list" id="studioList"></div>
          </aside>
          <main class="studio-editor">
            <div class="studio-editor-head"><div><p class="eyebrow">CURRENT RECORD</p><h2 id="studioEditorTitle">編輯題目</h2></div><div class="studio-editor-actions"><button id="studioDuplicate" type="button">建立副本</button><button id="studioDelete" class="danger" type="button">刪除</button></div></div>
            <form id="studioForm" class="studio-form" autocomplete="off"></form>
            <div class="studio-savebar"><span>按「儲存這筆」會先自動保存在目前瀏覽器；再按右上角同步到 GitHub，即可永久保存版本。</span><button id="studioSave" type="button">儲存這筆</button></div>
          </main>
        </div>
      </section>
      <div class="sync-backdrop" id="syncDialog" hidden>
        <section class="sync-card" role="dialog" aria-modal="true" aria-labelledby="syncTitle">
          <button class="sync-x" id="syncClose" type="button">×</button>
          <p class="eyebrow">GITHUB SYNC</p><h2 id="syncTitle">同步到 GitHub</h2>
          <p>請使用只授權此 Repository、且僅有 <b>Contents: Read and write</b> 權限的 Fine-grained token。Token 只保存在這個分頁的 sessionStorage，關閉分頁後會消失。</p>
          <label class="sync-field"><span>Fine-grained personal access token</span><input id="githubToken" type="password" placeholder="github_pat_…" autocomplete="off"></label>
          <a class="token-link" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">建立 GitHub Token ↗</a>
          <div class="sync-message" id="syncMessage"></div>
          <div class="sync-actions"><button id="syncCancel" type="button">取消</button><button id="syncNow" class="studio-sync-btn" type="button">提交資料並發布</button></div>
        </section>
      </div>`;
  }

  function openStudio() {
    $("#studio").hidden = false;
    document.body.classList.add("studio-open");
    renderStudio();
  }

  function closeStudio() {
    $("#studio").hidden = true;
    document.body.classList.remove("studio-open");
    if (studio.dirty && confirm("編輯內容已保存在這個瀏覽器。要重新整理操作頁並套用最新內容嗎？")) location.reload();
  }

  function currentArray() { return data[studio.section]; }
  function currentRecord() { return currentArray()[studio.index] || null; }

  function renderStudio() {
    sections.forEach(s => {
      const tab = document.querySelector(`[data-section="${s.key}"]`);
      tab?.classList.toggle("active", studio.section === s.key);
      const count = document.querySelector(`[data-count="${s.key}"]`);
      if (count) count.textContent = data[s.key].length;
    });
    const label = sections.find(s => s.key === studio.section)?.label || "資料";
    $("#studioListLabel").textContent = `${label}清單`;
    $("#studioEditorTitle").textContent = `編輯${label}`;
    renderList();
    renderForm();
  }

  function recordTitle(record, index) {
    if (!record) return `第 ${index + 1} 筆`;
    if (studio.section === "questions") return record.name || `題目 ${index + 1}`;
    if (studio.section === "flows") return `${record.question || "未選題目"} · ${record.branch || "共用"}`;
    if (studio.section === "variables") return `${record.label || "未命名欄位"} · ${record.branch || "共用"}`;
    if (studio.section === "templates") return `${questionName(record.q)} · ${record.branch || "共用"}`;
    return `${record.action || "未命名動作"} · ${record.branch || "共用"}`;
  }

  function recordMeta(record) {
    if (studio.section === "questions") return record.keywords || "尚無搜尋關鍵字";
    if (studio.section === "flows") return (record.steps || []).map(s => s.option).join(" → ") || "無分支流程";
    if (studio.section === "variables") return `${questionName(record.q)}　${record.hint || "尚無輸入提示"}`;
    if (studio.section === "templates") return friendlyTemplate(record.text || "尚無答案內容", record.q).replace(/\s+/g, " ").slice(0, 54);
    return `${questionName(record.q)}　${record.needed ? "需要執行" : "不需執行"}`;
  }

  function renderList() {
    const list = $("#studioList");
    list.replaceChildren();
    const arr = currentArray();
    const visible = arr.map((record, index) => ({ record, index })).filter(x => !studio.query || `${recordTitle(x.record, x.index)} ${recordMeta(x.record)}`.toLowerCase().includes(studio.query));
    $("#studioListCount").textContent = `${visible.length} 筆`;
    visible.forEach(({ record, index }) => {
      const button = document.createElement("button");
      button.type = "button"; button.dataset.index = index;
      button.className = "studio-list-item" + (index === studio.index ? " active" : "");
      const strong = document.createElement("strong"); strong.textContent = recordTitle(record, index);
      const small = document.createElement("small"); small.textContent = recordMeta(record);
      button.append(strong, small); list.append(button);
    });
    if (!visible.length) list.innerHTML = `<div class="studio-list-empty">這一區目前沒有資料<br>按上方「新增」開始建立</div>`;
  }

  function questionName(id) { return data.questions.find(q => q.id === id)?.name || id || "未選題目"; }
  function questionOptions(byName = false, value = "") {
    return data.questions.map(q => `<option value="${esc(byName ? q.name : q.id)}" ${(byName ? q.name : q.id) === value ? "selected" : ""}>${esc(q.name)}</option>`).join("");
  }

  function branchOptions(value = "") {
    const names = [...new Set(["共用", ...data.flows.map(f => f.branch).filter(Boolean), value].filter(Boolean))];
    return names.map(name => `<option value="${esc(name)}" ${name === value ? "selected" : ""}>${esc(name)}</option>`).join("");
  }

  function variableOptions(q, value = "") {
    const vars = data.variables.filter(v => v.q === q);
    return `<option value="" ${!value ? "selected" : ""}>不使用自動計算</option>` +
      vars.map(v => `<option value="${esc(v.code)}" ${v.code === value ? "selected" : ""}>${esc(v.label)}</option>`).join("");
  }

  function friendlyTemplate(text, q) {
    let result = String(text || "");
    data.variables.filter(v => v.q === q).forEach(v => { result = result.split(`{{${v.code}}}`).join(`【${v.label}】`); });
    return result;
  }

  function storedTemplate(text, q) {
    let result = String(text || "");
    data.variables.filter(v => v.q === q).forEach(v => { result = result.split(`【${v.label}】`).join(`{{${v.code}}}`); });
    return result;
  }

  function branchField(value) {
    return field("分支名稱", "branch", value || "共用", { type: "select", choices: branchOptions(value || "共用"), required: true, hint: "可直接選擇既有中文分支，讓不同流程重複使用同一組內容。" });
  }

  function field(label, name, value = "", options = {}) {
    const wide = options.wide ? " wide" : "";
    const hint = options.hint ? `<small>${esc(options.hint)}</small>` : "";
    let control;
    if (options.type === "textarea") control = `<textarea name="${name}" rows="${options.rows || 5}" placeholder="${esc(options.placeholder || "")}">${esc(value)}</textarea>`;
    else if (options.type === "select") control = `<select name="${name}">${options.choices || ""}</select>`;
    else if (options.type === "checkbox") control = `<label class="switch-row"><input name="${name}" type="checkbox" ${value ? "checked" : ""}><span class="switch"></span><b>${esc(options.checkLabel || "啟用")}</b></label>`;
    else control = `<input name="${name}" type="${options.type || "text"}" value="${esc(value)}" placeholder="${esc(options.placeholder || "")}">`;
    return `<label class="studio-field${wide}"><span>${esc(label)}${options.required ? " ＊" : ""}</span>${control}${hint}</label>`;
  }

  function renderForm() {
    const form = $("#studioForm");
    const record = currentRecord();
    $("#studioDuplicate").disabled = !record;
    $("#studioDelete").disabled = !record;
    $("#studioSave").disabled = !record;
    if (!record) { form.innerHTML = `<div class="studio-blank"><b>尚無可編輯資料</b><span>請從左側選擇一筆，或按「新增」。</span></div>`; return; }
    if (studio.section === "questions") form.innerHTML = questionForm(record);
    if (studio.section === "flows") form.innerHTML = flowForm(record);
    if (studio.section === "variables") form.innerHTML = variableForm(record);
    if (studio.section === "templates") form.innerHTML = templateForm(record);
    if (studio.section === "actions") form.innerHTML = actionForm(record);
    form.querySelector("#addStep")?.addEventListener("click", addFlowStep);
  }

  function questionForm(r) {
    return field("題目名稱", "name", r.name, { required: true, placeholder: "例如：詢問保固", wide: true }) +
      field("搜尋關鍵字", "keywords", r.keywords, { wide: true, placeholder: "保固,維修,故障", hint: "用半形逗號分隔" }) +
      field("題目說明", "description", r.description, { wide: true, type: "textarea", rows: 3 }) +
      field("前台顯示", "enabled", r.enabled, { type: "checkbox", checkLabel: "啟用這個題目" });
  }

  function flowForm(r) {
    const steps = (r.steps || []).map((step, index) => `<div class="step-card"><div class="step-card-head"><b>判斷 ${index + 1}</b><button type="button" data-remove-step="${index}">移除</button></div>${field("判斷問題", `step_prompt_${index}`, step.prompt, { required: true, wide: true, placeholder: "例如：商品頁有沒有找到資訊？" })}${field("這條路徑選項", `step_option_${index}`, step.option, { required: true, wide: true, placeholder: "例如：商品頁有找到" })}</div>`).join("");
    return field("所屬題目", "question", r.question, { type: "select", choices: questionOptions(true, r.question), required: true }) +
      branchField(r.branch) +
      `<div class="flow-steps wide"><div class="flow-steps-title"><div><span>判斷路徑</span><small>依照客人實際操作順序排列，最多六層；相同分支名稱可以重複使用。</small></div><button id="addStep" type="button" ${(r.steps || []).length >= 6 ? "disabled" : ""}>＋ 增加判斷</button></div>${steps || `<div class="no-steps">無分支題目不必增加判斷，會直接使用「共用」內容。</div>`}</div>` +
      field("走完後的下一步", "next", r.next, { wide: true, type: "textarea", rows: 3, placeholder: "例如：查詢廠商直送表後回覆客人" });
  }

  function variableForm(r) {
    const typeChoices = `<option value="text" ${r.type !== "date" ? "selected" : ""}>文字</option><option value="date" ${r.type === "date" ? "selected" : ""}>日期</option>`;
    return field("所屬題目", "q", r.q, { type: "select", choices: questionOptions(false, r.q), required: true }) +
      branchField(r.branch) +
      field("畫面欄位名稱", "label", r.label, { required: true, placeholder: "訂單編號", wide: true }) +
      field("輸入提示", "hint", r.hint, { wide: true, placeholder: "貼上訂單編號" }) +
      field("輸入類型", "type", r.type || "text", { type: "select", choices: typeChoices }) +
      field("自動依照哪個欄位計算", "autoSource", r.autoSource || "", { type: "select", choices: variableOptions(r.q, r.autoSource || ""), hint: "例如選擇「取貨日期」" }) +
      field("增減天數", "autoDays", r.autoDays ?? 0, { type: "number", placeholder: "0", hint: "例如 15 代表加 15 天；-1 代表減 1 天" }) +
      field("必填", "required", r.required, { type: "checkbox", checkLabel: "必須填寫才能複製" }) +
      field("多行輸入", "multiline", r.multiline, { type: "checkbox", checkLabel: "使用大型文字欄位" }) +
      field("常用參數", "common", r.common, { type: "checkbox", checkLabel: "自動沿用上次輸入值" });
  }

  function templateForm(r) {
    const vars = data.variables.filter(v => v.q === r.q && (v.branch === r.branch || v.branch === "共用"));
    const chips = vars.length ? `<div class="template-tokens wide"><span>點一下插入欄位：</span>${vars.map(v => `<button type="button" data-insert-token="${esc(v.label)}">＋ ${esc(v.label)}</button>`).join("")}</div>` : `<div class="template-tokens wide"><span>這個分支目前沒有變數欄位，可先到「變數欄位」新增。</span></div>`;
    return field("所屬題目", "q", r.q, { type: "select", choices: questionOptions(false, r.q), required: true }) +
      branchField(r.branch) + chips +
      field("最終答案範本", "text", friendlyTemplate(r.text, r.q), { wide: true, type: "textarea", rows: 16, required: true, placeholder: "您好，訂單【訂單編號】…", hint: "直接使用中文欄位標記，不需要記變數代碼。" });
  }

  function actionForm(r) {
    return field("所屬題目", "q", r.q, { type: "select", choices: questionOptions(false, r.q), required: true }) +
      branchField(r.branch) +
      field("操作名稱", "action", r.action, { required: true, placeholder: "例如：查廠商直送表", wide: true }) +
      field("補充說明", "note", r.note, { wide: true, type: "textarea", rows: 4 }) +
      field("是否需要", "needed", r.needed, { type: "checkbox", checkLabel: "這個分支需要執行" });
  }

  function defaultRecord(section) {
    const q = data.questions[0];
    const firstBranch = data.flows.find(f => f.question === q?.name)?.branch || "共用";
    if (section === "questions") return { id: nextId("Q", data.questions.map(x => x.id)), name: "新題目", keywords: "", description: "", enabled: true };
    if (section === "flows") return { question: q?.name || "", steps: [], branch: firstBranch, next: "" };
    if (section === "variables") return { q: q?.id || "", branch: firstBranch, code: nextId("V", data.variables.map(x => x.code)), label: "新欄位", hint: "", required: true };
    if (section === "templates") return { q: q?.id || "", branch: firstBranch, text: "" };
    return { q: q?.id || "", branch: firstBranch, action: "新操作", needed: true, note: "" };
  }

  function nextId(prefix, ids) {
    const nums = ids.map(id => Number(String(id || "").replace(/\D/g, ""))).filter(Number.isFinite);
    return prefix + String((Math.max(0, ...nums) + 1)).padStart(3, "0");
  }

  function addRecord() {
    const arr = currentArray(); arr.push(defaultRecord(studio.section)); studio.index = arr.length - 1; markDirty(); renderStudio();
  }
  function duplicateRecord() {
    const record = currentRecord(); if (!record) return;
    const copy = deepClone(record);
    if (studio.section === "questions") { copy.id = nextId("Q", data.questions.map(x => x.id)); copy.name += "（副本）"; }
    if (studio.section === "flows") copy.branch = nextId("B", data.flows.map(x => x.branch));
    currentArray().splice(studio.index + 1, 0, copy); studio.index += 1; markDirty(); renderStudio();
  }
  function deleteRecord() {
    const record = currentRecord(); if (!record || !confirm(`確定刪除「${recordTitle(record, studio.index)}」？`)) return;
    currentArray().splice(studio.index, 1); studio.index = Math.max(0, studio.index - 1); markDirty(); renderStudio();
  }

  function addFlowStep() {
    saveRecord(false);
    const record = currentRecord(); record.steps ||= [];
    if (record.steps.length < 6) record.steps.push({ prompt: "", option: "" });
    markDirty(); renderForm();
  }
  function removeFlowStep(index) {
    saveRecord(false);
    currentRecord().steps.splice(index, 1); markDirty(); renderForm();
  }

  function formValue(fd, name) { return String(fd.get(name) || "").trim(); }
  function saveRecord(showMessage = true) {
    const record = currentRecord(); if (!record) return false;
    const form = $("#studioForm");
    if (!form.reportValidity()) return false;
    const fd = new FormData(form);
    const before = deepClone(record);
    if (studio.section === "questions") {
      record.name = formValue(fd, "name"); record.keywords = formValue(fd, "keywords"); record.description = formValue(fd, "description"); record.enabled = fd.has("enabled");
      if (before.name !== record.name) data.flows.forEach(x => { if (x.question === before.name) x.question = record.name; });
    } else if (studio.section === "flows") {
      record.question = formValue(fd, "question"); record.branch = formValue(fd, "branch") || "共用"; record.next = formValue(fd, "next");
      record.steps = (record.steps || []).map((_, i) => ({ prompt: formValue(fd, `step_prompt_${i}`), option: formValue(fd, `step_option_${i}`) }));
    } else if (studio.section === "variables") {
      Object.assign(record, { q: formValue(fd, "q"), branch: formValue(fd, "branch") || "共用", label: formValue(fd, "label"), hint: formValue(fd, "hint"), type: formValue(fd, "type") || undefined, autoSource: formValue(fd, "autoSource") || undefined, autoDays: Number(formValue(fd, "autoDays") || 0), required: fd.has("required"), multiline: fd.has("multiline"), common: fd.has("common") });
      Object.keys(record).forEach(k => record[k] === undefined && delete record[k]);
    } else if (studio.section === "templates") {
      Object.assign(record, { q: formValue(fd, "q"), branch: formValue(fd, "branch") || "共用", text: storedTemplate(String(fd.get("text") || "").trim(), formValue(fd, "q")) });
    } else Object.assign(record, { q: formValue(fd, "q"), branch: formValue(fd, "branch") || "共用", action: formValue(fd, "action"), note: formValue(fd, "note"), needed: fd.has("needed") });
    if (!validateRecord(record, before)) { Object.assign(record, before); return false; }
    markDirty(); renderStudio(); if (showMessage) setStatus("已保存在這個瀏覽器"); return true;
  }

  function validateRecord(record, before) {
    if (studio.section === "questions") {
      if (!record.name) { alert("題目名稱不能空白。"); return false; }
      if (data.questions.some((q, i) => i !== studio.index && q.name === record.name)) { alert("這個中文題目名稱已經存在。"); return false; }
    }
    if (studio.section === "flows" && (!record.question || !record.branch)) { alert("流程必須選擇題目與中文分支名稱。"); return false; }
    return true;
  }

  function markDirty() {
    data.updatedAt = new Date().toISOString();
    data.version = new Date().toLocaleDateString("zh-TW");
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    studio.dirty = true;
    setStatus("有尚未同步到 GitHub 的修改", true);
  }
  function setStatus(text, pending = false) {
    $("#studioStatus").textContent = text;
    $(".studio-status")?.classList.toggle("pending", pending);
  }

  function openSync() {
    $("#syncDialog").hidden = false;
    $("#githubToken").value = sessionStorage.getItem(TOKEN_KEY) || "";
    $("#syncMessage").textContent = "";
    setTimeout(() => $("#githubToken").focus(), 50);
  }

  function encodeBase64(text) {
    const bytes = new TextEncoder().encode(text); let binary = "";
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    return btoa(binary);
  }

  async function syncToGitHub() {
    const token = $("#githubToken").value.trim();
    const message = $("#syncMessage");
    if (!token) { message.textContent = "請先貼上 Fine-grained token。"; return; }
    if (currentRecord() && !saveRecord(false)) { message.textContent = "目前這筆資料尚未通過檢查。"; return; }
    sessionStorage.setItem(TOKEN_KEY, token);
    const button = $("#syncNow"); button.disabled = true; button.textContent = "同步中…"; message.textContent = "正在讀取 GitHub 最新版本…";
    try {
      const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
      const get = await fetch("https://api.github.com/repos/lunalinly/-/contents/data.js?ref=main", { headers });
      if (!get.ok) throw new Error(get.status === 401 || get.status === 403 ? "Token 權限不足，請確認只選此 Repository 並開啟 Contents: Read and write。" : `讀取 GitHub 失敗（${get.status}）`);
      const remote = await get.json();
      data.updatedAt = new Date().toISOString();
      const file = `// 由 SOP 視覺化編輯室產生。每次同步都會由 GitHub 保留版本。\nwindow.SOP_DATA = ${JSON.stringify(data, null, 2)};\n`;
      message.textContent = "正在建立 GitHub 版本…";
      const put = await fetch("https://api.github.com/repos/lunalinly/-/contents/data.js", { method: "PUT", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify({ message: "Update SOP data from visual editor", content: encodeBase64(file), sha: remote.sha, branch: "main" }) });
      if (!put.ok) { const details = await put.json().catch(() => ({})); throw new Error(details.message || `寫入 GitHub 失敗（${put.status}）`); }
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
      studio.dirty = false; setStatus("已同步到 GitHub");
      message.textContent = "同步成功。GitHub Pages 正在重新發布，通常約需 1～2 分鐘。";
      button.textContent = "同步完成";
    } catch (error) {
      message.textContent = error.message || "同步失敗，請稍後再試。";
      button.disabled = false; button.textContent = "重新嘗試";
    }
  }

  function discardDraft() {
    if (!confirm("確定捨棄這個瀏覽器尚未同步的修改，重新載入 GitHub 版本？")) return;
    localStorage.removeItem(DRAFT_KEY); location.reload();
  }
  function exportBackup() {
    if (currentRecord()) saveRecord(false);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `sop-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
  }
  async function importBackup(event) {
    const file = event.target.files[0]; if (!file) return;
    try {
      const incoming = JSON.parse(await file.text());
      if (!Array.isArray(incoming.questions) || !Array.isArray(incoming.flows)) throw new Error("格式不符");
      Object.keys(data).forEach(key => delete data[key]); Object.assign(data, incoming); markDirty(); studio.index = 0; renderStudio(); setStatus("備份已匯入，尚未同步到 GitHub", true);
    } catch { alert("無法匯入：請選擇由本編輯室下載的 JSON 備份。"); }
    event.target.value = "";
  }

  setup();
})();
