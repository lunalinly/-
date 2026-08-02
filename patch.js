(() => {
  "use strict";

  const data = window.SOP_DATA;
  if (!data) return;

  const questionById = id => data.questions.find(question => question.id === id);
  const template = (q, branch) => data.templates.find(item => item.q === q && item.branch === branch);
  const flows = questionName => data.flows.filter(flow => flow.question === questionName);

  const flashSale = questionById("Q005");
  if (flashSale) {
    flashSale.answerText = "確認步驟：\n1. 打開商品頁，確認是否顯示「限時特賣」標籤或限時特賣區塊。\n2. 若商品頁有顯示限時特賣，通常會限制購買數量。\n3. 將商品加入購物車，進入結帳頁確認實際可購買數量。\n\n回覆重點：\n▪ 商品頁可先判斷是否正在限時特賣。\n▪ 限購數量仍以結帳頁面實際顯示為主。\n▪ 結帳頁目前顯示：{{flash_sale_limit}}。";
  }

  const voucher = questionById("Q006");
  if (voucher) {
    voucher.answerText = "先確認客人問的是哪一種優惠券問題。\n可先從商品頁的賣場優惠券、活動頁、賣場首頁或優惠券錢包確認；如果是查買家帳號目前可用優惠券，才到 CS Portal 查優惠代碼錢包。";
  }

  const logistics = questionById("Q007");
  if (logistics) {
    logistics.answerText = "先確認客人問的是運費、到貨時間，還是退貨步驟。\n運費與預計到貨時間可先看商品頁的運費說明與物流標籤，再以購物車／結帳頁或訂單系統實際顯示為主。";
  }

  const addon = questionById("Q008");
  if (addon) {
    addon.answerText = "如果客人是問商品有沒有加價購，先打開商品頁確認是否有「加價購／優惠加購」標籤或優惠加購區塊。\n看到標籤後，再進下一步判斷商品頁有沒有顯示加價購標籤；若有顯示，才整理可加購與結帳頁實際顯示給客人。\n若客人是問加價購商品要搭配哪件主商品，則走反查主商品流程。";
  }

  flows("詢問加價購").forEach(flow => {
    (flow.steps || []).forEach(step => {
      if (step.prompt === "客人是哪一種加價購問題？") {
        step.prompt = "客人是要確認商品是否有加價購，還是要反查加價購商品搭配哪件主商品？";
      }
      if (step.prompt === "商品頁有沒有顯示加價購標籤？") {
        step.prompt = "商品頁有沒有顯示「加價購／優惠加購」標籤？";
      }
    });
    (flow.answerParts || []).forEach(part => {
      if (part.branch === "加價購標籤有顯示") part.branch = "有顯示加價購標籤";
      if (part.branch === "加價購標籤沒有顯示") part.branch = "沒有顯示加價購標籤";
      if (part.branch === "反查加價購主商品") part.branch = "加價購商品要搭配哪件主商品";
    });
  });

  const addonShown = template("Q008", "有顯示加價購標籤");
  if (addonShown) {
    addonShown.text = "確認結果：\n▪ 商品頁有顯示「加價購／優惠加購」標籤。\n▪ 此商品可以搭配其他商品進行優惠加購，價格通常會較優惠。\n\n下一步：\n1. 將商品加入購物車。\n2. 查看實際可加購商品與優惠價格。\n3. 活動內容、可搭配商品及價格皆以結帳頁面顯示為主。";
  }

  const addonMissing = template("Q008", "沒有顯示加價購標籤");
  if (addonMissing) {
    addonMissing.text = "確認結果：\n▪ 商品頁目前沒有顯示「加價購／優惠加購」標籤。\n▪ 目前無法確認有加價購活動。\n▪ 活動內容可能變動，請以商品頁、購物車及結帳頁實際顯示為主。";
  }

  const gift = questionById("Q009");
  if (gift) {
    gift.answerText = "確認步驟：\n1. 先看商品卡是否顯示「滿額贈」標籤。\n2. 商品頁目前不會另外顯示滿額贈區塊。\n3. 將商品加入購物車，確認系統是否自動加入贈品與剩餘數量。";
  }

  flows("詢問滿額贈").forEach(flow => {
    (flow.answerParts || []).forEach(part => {
      if (part.branch === "購物車有顯示滿額贈") part.branch = "購物車有自動加入贈品";
      if (part.branch === "購物車沒有顯示滿額贈") part.branch = "購物車沒有自動加入贈品";
    });
  });

  const giftShown = template("Q009", "購物車有自動加入贈品");
  if (giftShown) {
    giftShown.text = "確認結果：\n▪ 商品卡有顯示「滿額贈」標籤。\n▪ 商品頁目前不會另外顯示滿額贈區塊。\n▪ 符合活動條件時，系統會在購物車自動加入贈品，不需要另外選取。\n▪ 滿額贈商品：{{gift_item}}\n▪ 購物車顯示的剩餘數量：{{gift_remaining_quantity}}\n▪ 最終以購物車及結帳頁面實際顯示為主。";
  }

  const giftMissing = template("Q009", "購物車沒有自動加入贈品");
  if (giftMissing) {
    giftMissing.text = "確認結果：\n▪ 商品卡有顯示「滿額贈」標籤。\n▪ 商品頁目前不會另外顯示滿額贈區塊。\n▪ 購物車沒有自動出現贈品。\n\n確認步驟：\n1. 檢查購物車是否達到活動條件。\n2. 若符合條件仍未顯示，贈品可能已經贈完。\n\n注意：\n▪ 滿額贈若已贈完，購物車就不會顯示。\n▪ 最終以購物車及結帳頁面實際顯示為主。";
  }

  const upsert = (collection, key, item) => {
    const index = data[collection].findIndex(existing => existing[key] === item[key]);
    if (index >= 0) data[collection][index] = { ...data[collection][index], ...item };
    else data[collection].push(item);
  };

  const upsertTemplate = item => {
    const index = data.templates.findIndex(existing => existing.q === item.q && existing.branch === item.branch);
    if (index >= 0) data.templates[index] = { ...data.templates[index], ...item };
    else data.templates.push(item);
  };

  const upsertVariable = item => {
    const index = data.variables.findIndex(existing => existing.q === item.q && existing.branch === item.branch && existing.code === item.code);
    if (index >= 0) data.variables[index] = { ...data.variables[index], ...item };
    else data.variables.push({
      type: "text",
      autoDays: 0,
      required: false,
      multiline: false,
      common: false,
      fillRules: [],
      sourceLinks: [],
      ...item
    });
  };

  const upsertAction = item => {
    const index = data.actions.findIndex(existing => existing.q === item.q && existing.branch === item.branch && existing.action === item.action);
    if (index >= 0) data.actions[index] = { ...data.actions[index], ...item };
    else data.actions.push(item);
  };

  const upsertDecision = item => {
    const index = data.decisions.findIndex(existing => existing.prompt === item.prompt);
    if (index >= 0) data.decisions[index] = { ...data.decisions[index], ...item };
    else data.decisions.push(item);
  };

  const addQuestion = config => {
    upsert("questions", "id", {
      id: config.id,
      name: config.name,
      keywords: config.keywords,
      description: config.description,
      enabled: true,
      answerText: config.answerText || ""
    });

    if (config.prompt) {
      upsertDecision({ prompt: config.prompt, options: config.branches.map(branch => branch.name) });
    }

    config.branches.forEach(branch => {
      data.flows = data.flows.filter(flow => !(flow.question === config.name && flow.branch === branch.name));
      data.flows.push({
        question: config.name,
        steps: config.prompt ? [{ prompt: config.prompt, option: branch.name }] : [],
        branch: branch.name,
        next: branch.next || "確認欄位後產生回覆",
        routes: [],
        answerBranches: [branch.name],
        answerParts: [{ question: config.name, branch: branch.name, beforeText: "" }]
      });

      upsertTemplate({ q: config.id, branch: branch.name, text: branch.text });
      (branch.variables || []).forEach(variable => upsertVariable({ q: config.id, branch: branch.name, category: config.category, ...variable }));
      (branch.actions || []).forEach(action => upsertAction({ q: config.id, branch: branch.name, ...action }));
    });
  };

  const field = (code, label, hint = "", options = {}) => ({
    code,
    label,
    hint,
    required: options.required ?? true,
    multiline: options.multiline ?? false,
    type: options.type || "text"
  });

  const addonReverse = template("Q008", "加價購商品要搭配哪件主商品");
  if (addonReverse) {
    addonReverse.text = "確認方式：\n1. 複製加價購商品的 Product ID：{{product_id}}。\n2. 到 [DB] Add-on / Gift / Bundle 表單的 [Add-on_Sub] 分頁，搜尋此 PID 對應的 add_on_deal_id。\n3. 複製 add_on_deal_id：{{addon_campaign_id}}。\n4. 到 [Add-on_Main] 分頁搜尋同一組 add_on_deal_id，確認該檔期可搭配的主商品清單。\n\n查詢結果：\n▪ 加價購商品 Product ID：{{product_id}}\n▪ 活動檔期／add_on_deal_id：{{addon_campaign_id}}\n▪ 可搭配的主商品：{{addon_main_product}}\n\n提醒：若表單查無資料，先確認 PID 是否複製正確、是否有選到正確分頁與檔期，再回覆以表單目前查詢結果為主。";
  }

  addQuestion({
    id: "Q010",
    name: "詢問商品效期／進貨日",
    category: "售前商品工具",
    keywords: "效期,保存期限,到期日,有效日期,進貨日,補貨,什麼時候進貨,Inventory Expiration Date",
    description: "依商品 PID 查詢效期或商品進貨日",
    answerText: "先確認客人要問的是商品效期，還是商品何時進貨／補貨。商品效期與進貨日都以小工具查詢結果為主；如果客人沒有指定規格，效期可用小工具完整結果輔助說明。",
    prompt: "客人要查哪一種商品時間？",
    branches: [
      {
        name: "查商品效期",
        text: "確認方式：\n1. 請先取得商品頁 Product ID：{{product_id}}。\n2. 到商品效期 Inventory Expiration Date 小工具輸入 PID 查詢。\n3. 若客人有指定規格，對照指定規格的效期；若未指定規格，可整理小工具顯示的各規格效期。\n\n回覆重點：\n▪ 商品：{{product_name}}\n▪ 規格：{{product_spec}}\n▪ 小工具目前查詢到的效期：{{expiration_result}}\n▪ 商品效期會依實際出貨批次變動，仍以倉庫實際出貨商品標示為主。",
        variables: [
          field("product_id", "Product ID", "商品頁網址最後一串數字"),
          field("product_name", "商品名稱", "可簡填"),
          field("product_spec", "指定規格", "未指定可填：未指定", { required: false }),
          field("expiration_result", "小工具查詢效期", "貼上各規格或指定規格效期", { multiline: true })
        ],
        actions: [{ action: "查商品效期小工具", needed: true, note: "Inventory Expiration Date" }]
      },
      {
        name: "查商品進貨日",
        text: "確認方式：\n1. 請先取得商品頁 Product ID：{{product_id}}。\n2. 到商品進貨日小工具輸入 PID 查詢。\n3. 依小工具目前顯示整理給客人，避免自行承諾一定補貨時間。\n\n回覆重點：\n▪ 商品：{{product_name}}\n▪ 小工具目前顯示的進貨／補貨資訊：{{inbound_result}}\n▪ 進貨時間可能受供應與倉庫作業影響，請以商品頁後續實際上架狀態為主。",
        variables: [
          field("product_id", "Product ID", "商品頁網址最後一串數字"),
          field("product_name", "商品名稱", "可簡填"),
          field("inbound_result", "小工具查詢進貨日", "貼上小工具顯示結果", { multiline: true })
        ],
        actions: [{ action: "查商品進貨日小工具", needed: true, note: "商品進貨日" }]
      }
    ]
  });

  addQuestion({
    id: "Q011",
    name: "詢問訂單出貨狀態／OOS",
    category: "售後出貨配送",
    keywords: "出貨,待出貨,WMS,OMS,OOS,缺貨,包裹,配送進度,OUTBOUND,Created",
    description: "依 OMS/WMS/CS Portal 判斷出貨狀態、延遲或缺貨",
    answerText: "先用 OSN 查 CS Portal／Order Admin／OMS，再依狀態判斷：尚未入 WMS、已入 WMS 撿貨或出貨中、Outbound 後延遲、或 OMS/WMS 顯示 OOS 缺貨。",
    prompt: "後台查到的主要狀態是哪一種？",
    branches: [
      {
        name: "尚未進入 WMS",
        text: "確認結果：\n▪ 訂單：{{order_sn}}\n▪ 目前查詢結果：尚未進入 WMS，或 Fulfilment Type 顯示空白。\n▪ 可先跟客人說明訂單仍在出貨處理流程中，會依訂單狀態陸續更新。\n\n內部提醒：若已超過一般備貨或出貨時效，需依出貨異常流程追蹤或轉詢 OPS。",
        variables: [field("order_sn", "Order SN", "OSN"), field("backend_note", "後台查詢結果", "貼上 CS Portal / OMS / WMS 重點", { multiline: true })],
        actions: [{ action: "查 CS Portal／OMS／WMS", needed: true, note: "確認是否已入 WMS" }]
      },
      {
        name: "WMS 已出貨但延遲",
        text: "確認結果：\n▪ 訂單：{{order_sn}}\n▪ WMS 狀態：{{wms_status}}\n▪ 若已 Outbound 超過 2 天仍未更新，需依包裹延遲未配達流程登記或轉詢。\n\n可回覆客人：\n目前已協助確認包裹出貨狀態，因物流更新可能需要作業時間，我們會依流程追蹤配送進度，請您再留意蝦皮通知與物流狀態更新。",
        variables: [field("order_sn", "Order SN", "OSN"), field("wms_status", "WMS 狀態", "Created / Information Received / Outbound 等"), field("delay_days", "延遲天數", "例如：Outbound > 2D")],
        actions: [{ action: "登記出貨異常表單", needed: true, note: "Outbound > 2D 時使用" }]
      },
      {
        name: "OMS／WMS 顯示 OOS 缺貨",
        text: "確認結果：\n▪ 訂單：{{order_sn}}\n▪ 缺貨商品：{{oos_item}}\n▪ OMS Parcel Status 若顯示 ForderSourceFailed，即可判斷為 OOS 訂單。\n▪ OOS 代表揀貨過程發現庫存不足，訂單後續會由 OPS 取消，商品不會出貨。\n\n可回覆客人：\n很抱歉，經確認此訂單因商品庫存不足無法安排出貨，後續系統會依流程取消並退款，退款時間會依原付款方式處理。",
        variables: [field("order_sn", "Order SN", "OSN"), field("oos_item", "缺貨商品", "可填商品名稱或品項"), field("backend_note", "後台查詢結果", "貼上 OMS/WMS 重點", { multiline: true })],
        actions: [{ action: "通報／轉詢 OPS", needed: true, note: "OOS 或非既有狀況" }]
      }
    ]
  });

  addQuestion({
    id: "Q012",
    name: "詢問包裹貨態異常",
    category: "售後出貨配送",
    keywords: "貨態異常,包裹遺失,延遲未配達,配達門市未取件,已配達未收到,已取件未收到,COD,補匯款",
    description: "SCS 包裹延遲、門市滯留、已配達未收到、已取件但貨態未更新等情境",
    answerText: "先檢查 WMS 與物流貨態，再依異常類型決定是否登記表單、轉 SPX 調查、引導申退或通知補匯款。",
    prompt: "包裹目前是哪一種異常？",
    branches: [
      {
        name: "包裹延遲未配達",
        text: "處理方式：\n▪ 訂單：{{order_sn}}\n▪ 貨態：{{logistics_status}}\n▪ 若 WMS Outbound 超過 2 天且配送未更新，依包裹延遲未配達流程登記表單。\n\n可先通知客人：\n初步確認包裹配送狀態異常，已轉達相關單位協助確認。若包裹尋獲會再更新訂單狀態；若超過尋找期仍未找到，系統會依流程更新後續退款或訂單狀態。",
        variables: [field("order_sn", "Order SN", "OSN"), field("logistics_status", "物流貨態", "貼上目前貨態"), field("follow_note", "追蹤紀錄", "表單或轉詢紀錄", { multiline: true })],
        actions: [{ action: "登記包裹貨態異常表單", needed: true, note: "Outbound > 2D" }]
      },
      {
        name: "配達門市超過 10 天未取消",
        text: "處理方式：\n▪ 訂單：{{order_sn}}\n▪ 門市配達日：{{store_arrival_date}}\n▪ 若配達門市超過 10 天仍未取消，依流程填寫表單，請職代協助回壓 damaged。\n\n可通知客人：\n這邊確認包裹已超過門市滯留期，可能因系統串接異常未正常取消，已轉達相關單位協助調整，請您後續留意蝦皮通知。",
        variables: [field("order_sn", "Order SN", "OSN"), field("store_arrival_date", "門市配達日", "YYYY/MM/DD"), field("logistics_status", "目前貨態", "貼上目前貨態")]
      },
      {
        name: "貨態已配達但買家未收到",
        text: "處理方式：\n▪ 訂單：{{order_sn}}\n▪ 目前貨態：{{logistics_status}}\n▪ 先確認買家是否已回門市取貨；若未取貨，轉 SPX 調查。\n▪ 若門市找到包裹，引導用戶回店取貨；若確認遺失，依流程處理後續退款或訂單狀態。\n\n回覆客人時避免直接承諾結果，以調查結果與系統通知為主。",
        variables: [field("order_sn", "Order SN", "OSN"), field("logistics_status", "目前貨態", "貼上目前貨態"), field("buyer_confirm", "買家確認內容", "是否回門市、是否拿到包裹", { multiline: true })]
      },
      {
        name: "貨態配送中但買家已取件",
        text: "處理方式：\n▪ 訂單：{{order_sn}}\n▪ 付款方式：{{payment_method}}\n▪ 先提醒訂單狀態可能影響取件支付金額，並填寫表單請相關單位確認。\n▪ 若確認收款金額不正確，依流程引導買家補匯款並追蹤 2 天；若拒付或客訴，使用安撫說明並依流程回壓。\n\n補充：COD 與非 COD 處理路徑不同，請以表單與職代判斷為主。",
        variables: [field("order_sn", "Order SN", "OSN"), field("payment_method", "付款方式", "COD / 非 COD"), field("amount_note", "收款金額確認", "正確／不正確／待確認")]
      }
    ]
  });

  addQuestion({
    id: "Q013",
    name: "詢問商品異常／貨損申退",
    category: "售後商品問題",
    keywords: "貨損,破包,漏液,過期,長蟲,瑕疵,錯品,缺件,商品異常,低單,200元,照片,申退",
    description: "依照片、商品金額、管制區或高單條件判斷是否引導申退或轉詢",
    answerText: "先確認商品問題類型、是否有照片、商品金額與是否屬管制區／高單／特殊商品。符合低單或 SCS 貨損優化條件時，可優先引導買家申請退貨退款。",
    prompt: "商品異常屬於哪一種處理情境？",
    branches: [
      {
        name: "低單 200 元以下且有照片",
        text: "判斷結果：\n▪ 商品單價：{{item_amount}}\n▪ 問題類型：{{issue_type}}\n▪ 買家已提供照片：{{photo_status}}\n\n處理方式：\n若商品單價在 NT$200 以下，且屬毀損、瑕疵、錯品等商品問題並有照片，可直接引導買家申請退貨退款，不需再要求其他證據，由 Shop CS 吸收處理。\n\n提醒：仍需確認退貨原因、照片與 15 天鑑賞期內三項條件。",
        variables: [field("item_amount", "商品單價", "NT$"), field("issue_type", "問題類型", "破包／漏液／過期／缺件／錯品等"), field("photo_status", "照片狀態", "已提供／未提供")]
      },
      {
        name: "SCS 貨損有照片",
        text: "處理方式：\n▪ 問題類型：{{issue_type}}\n▪ 照片確認：{{photo_status}}\n▪ 若屬 SCS 貨損且有照片，依 SCS 貨損流程引導買家申退，並開單記錄貨損照片。\n▪ 一般情境不需轉 SPX／WH；但管制區、高單或特殊商品需依原流程反應。\n\n回覆客人：\n很抱歉商品狀況造成您的困擾，這邊會依退貨退款流程協助您處理，請您於訂單內提出退貨退款申請並上傳商品異常照片。",
        variables: [field("issue_type", "問題類型", "貨損／破包／漏液等"), field("photo_status", "照片狀態", "已提供／未提供"), field("special_note", "特殊條件", "管制區／高單／特殊商品，無則填無", { required: false })]
      },
      {
        name: "管制區／高單／特殊商品",
        text: "處理方式：\n▪ 商品／館別：{{product_name}}\n▪ 特殊條件：{{special_note}}\n▪ 若屬管制區、高單、特殊 3C、餐券等情境，不直接套用一般貨損優化流程，需依原流程轉 SPX／WH 或 KAM／廠商確認。\n\n內部提醒：先完成照片與訂單資訊蒐集，再依對應表單或工單流程追蹤。",
        variables: [field("product_name", "商品／館別", "商品名稱或館別"), field("special_note", "特殊條件", "管制區／高單／特殊 3C／餐券等"), field("case_note", "案件備註", "轉詢或表單紀錄", { multiline: true })],
        actions: [{ action: "依原流程轉詢", needed: true, note: "SPX／WH／KAM／廠商" }]
      }
    ]
  });

  addQuestion({
    id: "Q014",
    name: "詢問補償折扣碼／小額折扣碼",
    category: "售後補償",
    keywords: "補償折扣碼,補碼,原碼補碼,返還原折扣碼,返還損失折扣,小額折扣碼,價差,折扣碼無法使用",
    description: "判斷返還原折扣碼、返還損失折扣、個案補碼或小額折扣碼",
    answerText: "先確認客人要補的是原本失效的折扣碼、訂單取消造成的折扣／價差損失，還是商品異常的小額客維折扣碼。補碼前務必檢查原折扣碼是否失效、賣場是否已有相同或更優優惠、是否需綁定商品。",
    prompt: "補償折扣碼屬於哪一類？",
    branches: [
      {
        name: "返還原折扣碼",
        text: "申請前檢查：\n▪ Order SN：{{order_sn}}\n▪ User ID：{{user_id}}\n▪ 原 Voucher Code：{{voucher_code}}\n▪ 已確認原折扣碼失效：{{voucher_invalid}}\n▪ 已確認賣場無相同或更優優惠：{{better_voucher_check}}\n\n處理方式：\n到 Promotion Admin／補碼小工具依原碼補碼欄位填寫，並在工單中記錄申請原因與自我檢查結果。\n\n提醒客人：補發折扣碼是否成立與使用條件，仍以審核及實際發放結果為主。",
        variables: [field("order_sn", "Order SN", "OSN"), field("user_id", "User ID", "買家 UID"), field("voucher_code", "原 Voucher Code", "原折扣碼"), field("voucher_invalid", "原碼是否失效", "是／否"), field("better_voucher_check", "是否無更優優惠", "是／否"), field("ticket_id", "工單號碼", "Jira / Case", { required: false })]
      },
      {
        name: "返還損失折扣／價差",
        text: "判斷方式：\n▪ Order SN：{{order_sn}}\n▪ 折扣損失金額：{{discount_amount}}\n▪ 商品價差：{{price_difference}}\n▪ 最終補碼規格：滿 {{min_spend}} 折 {{voucher_amount}}\n\n處理原則：\n折扣金額加商品價差後計算補碼規格；若商品本身價差超過 500 元，需轉交職代評估。若是純補損失折扣，可依規範確認是否可擴至全店使用。\n\n提醒：複數折扣碼無法疊加使用，需明確告知買家。",
        variables: [field("order_sn", "Order SN", "OSN"), field("discount_amount", "折扣損失金額", "蝦皮＋賣家折扣"), field("price_difference", "商品價差", "現價 - Subtotal"), field("min_spend", "最低消費", "補碼低消"), field("voucher_amount", "折扣金額", "補碼折扣額"), field("ticket_id", "工單號碼", "Jira / Case", { required: false })]
      },
      {
        name: "小額折扣碼",
        text: "適用情境：\n▪ 問題類型：{{issue_type}}\n▪ 訂單／商品：{{order_sn}}\n▪ 確認照片或佐證：{{proof_status}}\n\n處理方式：\n若屬破包、漏液、過期、長蟲、缺件、商品出錯、重複出貨等小額客維情境，且已確認訂單狀況屬實，可至對應交接表領取折扣碼提供給客人。\n\n注意：折扣碼提供後，訂單問題仍需依流程處理，該新建工單、填出貨相關問題表或 KAM 表的情境仍要完成。",
        variables: [field("order_sn", "Order SN", "OSN 或商品資訊"), field("issue_type", "問題類型", "破包／漏液／缺件／錯品等"), field("proof_status", "佐證狀態", "照片／表單／OPS通知")]
      }
    ]
  });

  addQuestion({
    id: "Q015",
    name: "詢問退貨退款流程／NRR",
    category: "售後退貨退款",
    keywords: "退貨退款,NRR,自動退款,快速退款,包裹未送達,缺件,一般退貨,僅退款,退貨物流",
    description: "依退貨原因與金額判斷自動退款、快速退款、蝦皮審核或一般退貨",
    answerText: "先確認退貨原因、商品金額、是否包裹未送達、是否缺件僅退款，以及買家目前是否已提出退貨退款申請。不同原因會進不同審核路徑。",
    prompt: "退貨退款主要是哪一種情境？",
    branches: [
      {
        name: "60 元以下自動退款",
        text: "確認結果：\n▪ 退貨原因：{{return_reason}}\n▪ 商品金額：{{refund_amount}}\n▪ 若符合 60 元以下自動退款規則，系統會依流程處理退款。\n\n可回覆客人：\n請您依訂單內的退貨退款流程提出申請並填寫原因，系統會依申請內容與規則進行審核，退款進度可於退貨退款詳情查看。",
        variables: [field("return_reason", "退貨原因", "買家選擇／描述"), field("refund_amount", "退款金額", "NT$")]
      },
      {
        name: "61-1380 元快速退款",
        text: "確認結果：\n▪ 退貨原因：{{return_reason}}\n▪ 商品金額：{{refund_amount}}\n▪ 若符合快速退款門檻，系統會依流程審核並處理退款。\n\n提醒：若案件需補充圖片、退貨物流或蝦皮審核，仍以退貨退款詳情頁顯示為主。",
        variables: [field("return_reason", "退貨原因", "買家選擇／描述"), field("refund_amount", "退款金額", "NT$")]
      },
      {
        name: "包裹未送達進蝦皮審核",
        text: "處理方式：\n▪ 訂單：{{order_sn}}\n▪ 貨態：{{logistics_status}}\n▪ 若買家以包裹未送達提出退貨退款，通常會進蝦皮審核流程。\n\n可提醒客人：\n請您於退貨退款申請中完整描述未收到包裹的狀況，後續審核進度與結果會顯示在退貨退款詳情頁。",
        variables: [field("order_sn", "Order SN", "OSN"), field("logistics_status", "物流貨態", "貼上目前貨態")]
      },
      {
        name: "缺件僅退款進蝦皮審核",
        text: "處理方式：\n▪ 商品／缺件內容：{{missing_item}}\n▪ 證明資料：{{proof_status}}\n▪ 缺件僅退款通常需依申請內容與圖片進入審核。\n\n提醒客人：\n請於退貨退款申請中上傳收到商品與缺件狀況的照片，並清楚描述缺少的品項與數量，以利審核。",
        variables: [field("missing_item", "缺件內容", "缺少品項／數量"), field("proof_status", "證明資料", "照片／影片／描述")]
      },
      {
        name: "其他原因一般退貨",
        text: "處理方式：\n▪ 退貨原因：{{return_reason}}\n▪ 退貨物流：{{return_channel}}\n▪ 一般退貨需依系統指示選擇退貨方式並寄回商品，退款會依賣家驗收與平台流程處理。\n\n可回覆客人：\n請您在訂單的退貨退款詳情中依照系統指示完成退貨流程，包含選擇退貨物流與寄回商品；後續進度以退貨退款詳情頁顯示為主。",
        variables: [field("return_reason", "退貨原因", "買家選擇／描述"), field("return_channel", "退貨物流", "7-11／SPX／黑貓／賣家自行安排等", { required: false })]
      }
    ]
  });

  addQuestion({
    id: "Q016",
    name: "詢問 Offline RR／Agent AOC",
    category: "售後退貨退款",
    keywords: "Offline RR,ORR,AOC,AOCRR,完成訂單,線下退貨,專員代申請,Return ID,退貨原因備註",
    description: "完成訂單後的線下退貨退款、AOC 判斷與專員代發 RR",
    answerText: "先確認訂單是否已完成、是否仍在 15 天鑑賞期內、是否有延長撥款、是否可讓買家自行 AOC，或需由專員協助發起 Offline RR。",
    prompt: "Offline RR 目前判斷結果是什麼？",
    branches: [
      {
        name: "鑑賞期內優先引導買家自行 AOC",
        text: "判斷結果：\n▪ 訂單：{{order_sn}}\n▪ 完成／取貨日期：{{complete_date}}\n▪ 目前仍在 15 天鑑賞期內，優先引導買家自行於訂單內提出 Buyer AOC。\n\n提醒：若買家點了延長撥款，鑑賞期判斷可延長為 18 天，仍需依系統顯示確認。",
        variables: [field("order_sn", "Order SN", "OSN"), field("complete_date", "完成／取貨日期", "YYYY/MM/DD"), field("return_reason", "退貨原因", "買家描述", { multiline: true })]
      },
      {
        name: "可發起 Agent AOC",
        text: "處理方式：\n▪ Return ID：{{return_id}}\n▪ 退貨原因：{{return_reason}}\n▪ 判別小工具顯示可發起 AOC RR 時，可依 CS Portal 的 TW商城退貨/退款按鈕協助買家提出 RR。\n\n備註要求：\n退貨原因需清楚寫明進線對象與買家描述，例如：[買家]通知，收到商品缺少口罩一盒。備註越明確越有利後續審核。",
        variables: [field("return_id", "Return ID", "CS Portal Return ID"), field("return_reason", "退貨原因備註", "用公版格式", { multiline: true }), field("proof_status", "圖片／證明", "是否已上傳或放入案件")]
      },
      {
        name: "不可發起 AOC RR",
        text: "判斷結果：\n▪ Return ID：{{return_id}}\n▪ 小工具結果：{{tool_result}}\n▪ 若顯示已退款或紅字不可發起 AOC RR，代表此案件不可由專員發起 AOC RR。\n\n處理方式：\n依案件原因向買家說明，必要時改走工單／KAM／OPS 個案處理。",
        variables: [field("return_id", "Return ID", "CS Portal Return ID"), field("tool_result", "小工具結果", "已退款／不可發起原因"), field("case_note", "後續處理", "需轉詢或說明內容", { multiline: true })]
      },
      {
        name: "專員已代發 RR",
        text: "可通知買家：\n您好，久等了，因訂單已經完成，這邊已手動替您在系統上提出退貨申請，預計 3 個工作天內會完成審核。若審核通過後，您會在蝦皮通知中收到通知訊息，屆時請依通知內容於時限內點進退貨詳情內選擇退貨的運送方式，謝謝您。\n\n內部記錄：\n▪ Related Return/Refund ID：{{return_id}}\n▪ 退貨原因：{{return_reason}}",
        variables: [field("return_id", "Related Return/Refund ID", "專員建立後產生"), field("return_reason", "退貨原因", "備註內容", { multiline: true })]
      }
    ]
  });

  addQuestion({
    id: "Q017",
    name: "詢問取消配送中訂單",
    category: "售後退貨退款",
    keywords: "取消配送中,Intransit RR,取消配送中訂單,攔截,SPX,Pickup Done,SP_Ready_collection,RT1,RT2,RT3",
    description: "判斷買家是否可申請取消配送中訂單與 RR 狀態",
    answerText: "此功能適用於賣家寄件後到抵達門市前的部分訂單，並非所有物流都適用。先確認訂單頁是否有取消配送中訂單按鈕、物流是否屬適用範圍、RR 狀態與 Remark。",
    prompt: "取消配送中目前是哪一種狀態？",
    branches: [
      {
        name: "訂單可申請取消配送中",
        text: "判斷結果：\n▪ 訂單：{{order_sn}}\n▪ 物流：{{logistics_channel}}\n▪ 訂單頁若在賣家寄件後到抵達門市前顯示「取消配送中訂單」按鈕，買家可自行提出申請。\n\n限制提醒：僅適用部分蝦皮店到店訂單，排除 NDD、SCS、店到家宅配、其他物流、預購品與特殊規範商品。",
        variables: [field("order_sn", "Order SN", "OSN"), field("logistics_channel", "物流渠道", "SPX／店到店等"), field("button_status", "按鈕狀態", "有／沒有")]
      },
      {
        name: "申請處理中",
        text: "確認結果：\n▪ 訂單：{{order_sn}}\n▪ RR 狀態：{{rr_status}}\n▪ 申請後會被視為 RR，買家可在訂單頁或退貨退款標籤頁看到申請處理中。\n▪ 提出後 13 天內若 SPX 攔截成功，多數會在 2-3 天內成立，但仍以系統結果為主。",
        variables: [field("order_sn", "Order SN", "OSN"), field("rr_status", "RR 狀態", "例如 RT1:Requested"), field("remark", "Remark", "後台顯示 remark", { required: false })]
      },
      {
        name: "系統同意取消",
        text: "確認結果：\n▪ RR 狀態：{{rr_status}}\n▪ Remark：{{remark}}\n▪ 若系統同意取消，通常會從蝦皮審核轉為退款處理中，最後退款完成。\n\n可回覆客人：\n您的取消配送中訂單申請已依系統流程處理，後續退款進度請以退貨退款詳情與蝦皮通知為主。",
        variables: [field("rr_status", "RR 狀態", "RT2/RT5 Accept/Refund Paid"), field("remark", "Remark", "accepted reason")]
      },
      {
        name: "系統拒絕或買家撤回",
        text: "確認結果：\n▪ RR 狀態：{{rr_status}}\n▪ Remark：{{remark}}\n▪ 若超過監控時間、包裹已配達或買家自行撤回，系統會取消此 RR。\n\n回覆重點：\n請依訂單目前狀態向買家說明是否仍可取件、等待配送，或後續改依一般退貨退款流程處理。",
        variables: [field("rr_status", "RR 狀態", "RT3:Cancel"), field("remark", "Remark", "取消原因"), field("next_step", "後續建議", "取件／等配送／一般 RR", { multiline: true })]
      }
    ]
  });

  addQuestion({
    id: "Q018",
    name: "詢問工單／KAM 表是否要建立",
    category: "日常作業",
    keywords: "工單,KAM表,售前商品問題,廠直,轉詢,追蹤,平日追蹤,假日追蹤,未結案備註",
    description: "判斷售前商品問題、廠直情境是否需開單、填 KAM 表與追蹤",
    answerText: "先判斷是否只是單純資訊提供，還是涉及退換貨意圖、後續追蹤、廠商處理或資訊不齊。需要轉詢或追蹤時，才建立工單與對應表單。",
    prompt: "目前案件需要哪一種處理？",
    branches: [
      {
        name: "單純商品資訊不用開單",
        text: "判斷結果：\n▪ 問題：{{issue_summary}}\n▪ 若只是保固條件、配件使用方式、商品使用或規格、品質相關但僅確認資訊，且沒有退貨意圖，回覆資訊後即可結案，不需開單。\n\n提醒：若後續買家仍有爭議、要求佐證、提到退換貨或需要技術檢測，就要重新判斷是否需開單／KAM 表。",
        variables: [field("issue_summary", "客人問題", "簡述問題", { multiline: true })]
      },
      {
        name: "需開單＋填 KAM 表",
        text: "判斷結果：\n▪ 問題：{{issue_summary}}\n▪ 涉及退換貨意圖、商品瑕疵爭議、需要技術檢測、保固申請／驗證，或資訊不齊需後續追蹤時，需新建工單並填寫 KAM 表。\n\n未結案備註可寫：{{pending_note}}\n\n提醒：需等 KAM 二次回覆、買家回覆或 OPS 協助時，務必留下可交接的追蹤紀錄。",
        variables: [field("issue_summary", "客人問題", "簡述問題", { multiline: true }), field("ticket_id", "工單號碼", "建立後填入", { required: false }), field("pending_note", "未結案備註", "待追蹤內容", { multiline: true })],
        actions: [{ action: "新建工單＋填 KAM 表", needed: true, note: "需後續追蹤" }]
      },
      {
        name: "廠直問題需轉廠商",
        text: "判斷結果：\n▪ 訂單／商品：{{order_sn}}\n▪ 問題：{{issue_summary}}\n▪ 廠直訂單若無法一線解決或需廠商確認，依物流、商品、訂單類型填表；須開單類型需同時建立工單追蹤。\n\n提醒：可不開單問題若第一次轉詢並回覆買家後，買家再次進線反映，需協助開單追蹤。",
        variables: [field("order_sn", "Order SN／商品資訊", "OSN 或商品"), field("issue_summary", "問題摘要", "物流／商品／訂單問題", { multiline: true }), field("vendor_reply", "廠商回覆", "尚未回覆可填待回覆", { required: false, multiline: true })]
      },
      {
        name: "平日／假日追蹤話術",
        text: "處理方式：\n▪ 工單：{{ticket_id}}\n▪ 追蹤情境：{{follow_type}}\n▪ 若假日前或假日中接獲案件，需先告知工作日會盡快追蹤；平日追蹤約每 2 日安撫一次並積極追蹤。\n\n可用提醒：\n已為您轉交窗口確認並建立案件追蹤，待 1-2 個工作天內窗口回覆後，小幫手會再主動聊聊通知您，請您再耐心等候。",
        variables: [field("ticket_id", "工單號碼", "Jira / Case"), field("follow_type", "追蹤情境", "平日／假日／連假後／超過2工作天"), field("pending_note", "追蹤備註", "待追蹤內容", { multiline: true })]
      }
    ]
  });

  addQuestion({
    id: "Q019",
    name: "詢問聊聊轉二線",
    category: "日常作業",
    keywords: "轉二線,二線,OPS,BAU,QA,轉詢超過48小時,已說明3次,客訴,不雅字眼,性騷擾,SLA",
    description: "判斷聊聊是否需轉 OPS／BAU／QA 協助",
    answerText: "先確認是問題仍無法解決、轉詢超過 48 小時、買家重複來訊、已說明 3 次仍持續詢問，還是有情緒、不雅字眼或性騷擾等特殊情境。",
    prompt: "轉二線原因是哪一種？",
    branches: [
      {
        name: "轉詢 SLA 超過 48 小時",
        text: "處理方式：\n▪ 案件：{{ticket_id}}\n▪ 問題摘要：{{case_summary}}\n▪ 若問題需轉詢但超過 48 小時仍未收到回覆，可尋求 OPS／BAU 協助確認處理狀況或催促窗口。\n\n通知時需清楚標記訂單、目前卡點、已做過的處理與希望二線協助的事項。",
        variables: [field("ticket_id", "工單／案件編號", "Jira / Case"), field("case_summary", "案件摘要", "卡點與已處理事項", { multiline: true }), field("requested_team", "欲尋求協助對象", "OPS／BAU")]
      },
      {
        name: "已說明 3 次仍重複詢問",
        text: "處理方式：\n▪ 已回覆重點：{{reply_summary}}\n▪ 若已明確說明達 3 次但買家仍持續詢問，可請 OPS／BAU 協助判斷訴求合理性、是否需額外處理方向或明確回覆時間。\n\n提醒：二線協助後，需與買家給予明確回覆時間；若時間到仍無法答覆，也要主動聯繫說明。",
        variables: [field("reply_summary", "已回覆內容", "整理已說明的3次重點", { multiline: true }), field("case_summary", "目前訴求", "買家仍在意的點", { multiline: true })]
      },
      {
        name: "買家有情緒／不雅／性騷擾",
        text: "處理方式：\n▪ 風險類型：{{risk_type}}\n▪ 對話摘要：{{case_summary}}\n▪ 若買家已有情緒、關鍵字、不雅字眼或性騷擾，需依流程尋求 QA／OPS／BAU 協助話術或評估是否終止服務。\n\n提醒：通知二線時要附上具體對話脈絡與需要協助的方向，不只丟單號。",
        variables: [field("risk_type", "風險類型", "情緒／不雅／性騷擾／非理性用詞"), field("case_summary", "對話摘要", "貼上重點即可", { multiline: true }), field("requested_team", "欲尋求協助對象", "QA／OPS／BAU")]
      },
      {
        name: "無法判斷需協助方向",
        text: "處理方式：\n▪ 問題摘要：{{case_summary}}\n▪ 若一線無法判斷問題、訴求是否能再轉詢，或需要擬定更清楚的回覆方向，可標記 QA／OPS／BAU 協助確認。\n\n通知格式建議：\n訂單／案件、買家訴求、已查詢資料、目前判斷卡點、希望協助確認的問題。",
        variables: [field("case_summary", "問題摘要", "買家訴求＋已查資料＋卡點", { multiline: true }), field("requested_team", "欲尋求協助對象", "QA／OPS／BAU")]
      }
    ]
  });

  addQuestion({
    id: "Q020",
    name: "詢問延遲補償",
    category: "售後出貨配送",
    keywords: "延遲補償,delay voucher,隔日到貨,未收到補償,黑名單,付款時間,到貨時間,HighRisk",
    description: "判斷訂單是否適用延遲補償、是否黑名單或符合補發",
    answerText: "先確認物流渠道是否適用延遲補償，再查買家是否為黑名單或高風險名單；如買家提供單號，需用付款時間與實際到貨時間判斷是否真的符合補償資格。",
    prompt: "延遲補償查詢結果是哪一種？",
    branches: [
      {
        name: "物流渠道適用延遲補償",
        text: "確認方式：\n▪ 訂單：{{order_sn}}\n▪ 物流渠道：{{logistics_channel}}\n▪ 延遲補償適用於指定配送方式，例如蝦皮店到店、蝦皮店到店隔日到貨、店到家宅配、店取最快當日到、宅配最快隔日到等。\n\n下一步：\n確認付款時間、預計配達時間與實際到貨時間，再判斷是否超過補償門檻。",
        variables: [
          field("order_sn", "Order SN", "OSN"),
          field("logistics_channel", "物流渠道", "店到店／宅配等"),
          field("paid_time", "付款完成時間", "YYYY/MM/DD HH:mm", { required: false }),
          field("delivered_time", "實際到貨時間", "YYYY/MM/DD HH:mm", { required: false })
        ]
      },
      {
        name: "黑名單或不符合補償",
        text: "判斷結果：\n▪ Buyer ID：{{buyer_id}}\n▪ 查詢表結果：{{blacklist_result}}\n▪ 若買家為黑名單或訂單不符合補償條件，系統可能不會派發延遲補償。\n\n回覆重點：\n依訂單付款時間、配送方式與實際到貨時間判斷後，目前未符合延遲補償派發條件；如買家仍有疑問，可請買家提供單號再逐筆確認。",
        variables: [
          field("buyer_id", "Buyer ID", "買家 UID"),
          field("blacklist_result", "查詢表結果", "是否黑名單／不符合原因", { multiline: true }),
          field("order_sn", "Order SN", "OSN", { required: false })
        ],
        actions: [{ action: "查延遲補償黑名單／查詢表", needed: true, note: "以 Buyer ID 或 OSN 查詢" }]
      },
      {
        name: "符合補發延遲補償",
        text: "判斷結果：\n▪ 訂單：{{order_sn}}\n▪ 付款時間：{{paid_time}}\n▪ 實際到貨時間：{{delivered_time}}\n▪ 查詢後若確認符合補償資格但未派發，可依延遲補償補發流程處理。\n\n可回覆客人：\n這邊已協助確認訂單配送時間，若符合補償資格但尚未收到補償，我們會依流程協助確認補發，後續請您留意蝦皮通知或優惠券錢包。",
        variables: [
          field("order_sn", "Order SN", "OSN"),
          field("paid_time", "付款完成時間", "YYYY/MM/DD HH:mm"),
          field("delivered_time", "實際到貨時間", "YYYY/MM/DD HH:mm"),
          field("voucher_note", "補發紀錄", "補發表單或處理狀態", { required: false, multiline: true })
        ],
        actions: [{ action: "依延遲補償補發流程處理", needed: true, note: "符合但未派發時" }]
      }
    ]
  });

  const hideQuestionCard = id => {
    const question = questionById(id);
    if (question) question.enabled = false;
  };

  const replaceTemplateTokens = (q, branch, replacements) => {
    const item = template(q, branch);
    if (!item) return;
    Object.entries(replacements).forEach(([from, to]) => {
      item.text = item.text.split(`{{${from}}}`).join(`{{${to}}}`);
      item.text = item.text.split(`{${from}}`).join(`{{${to}}}`);
    });
  };

  const removeVariables = (q, codes) => {
    data.variables = data.variables.filter(variable => !(variable.q === q && codes.includes(variable.code)));
  };

  const cloneCanonicalVariable = (q, branch, code, overrides = {}) => {
    const source = data.variables.find(variable => variable.q === "GLOBAL" && variable.code === code)
      || data.fields?.find(field => field.code === code)
      || data.variables.find(variable => variable.code === code)
      || { code, label: code, type: "text", required: true };
    upsertVariable({ ...source, q, branch, ...overrides });
  };

  const prependTemplateLine = (q, branch, line) => {
    const item = template(q, branch);
    if (item && !item.text.includes(line)) item.text = `${line}\n${item.text}`;
  };

  const ensureAnswerPart = (questionName, branch, part) => {
    data.flows
      .filter(flow => flow.question === questionName && flow.branch === branch)
      .forEach(flow => {
        flow.answerParts ||= [{ question: questionName, branch, beforeText: "" }];
        if (!flow.answerParts.some(existing => existing.question === part.question && existing.branch === part.branch)) {
          flow.answerParts.push({ beforeText: "", ...part });
        }
      });
  };

  hideQuestionCard("Q018");
  hideQuestionCard("Q019");
  removeVariables("Q018", ["order_sn", "ticket_id"]);
  removeVariables("Q019", ["ticket_id"]);

  const availableVoucher = template("Q006", "查詢買家目前可用優惠券");
  if (availableVoucher) {
    availableVoucher.text = "查詢方式：\n▪ 到 CS Portal 搜尋 Buyer Username：{{V018}}\n▪ 進入「詳細資訊（買家）」→「優惠代碼錢包」。\n\n查詢結果：\n▪ Buyer Username：{{V018}}\n▪ 買家目前可使用的優惠代碼：\n{{available_voucher_codes}}";
  }
  cloneCanonicalVariable("Q006", "查詢買家目前可用優惠券", "V018", {
    required: true,
    category: "常用"
  });

  const flashSaleQuestion = questionById("Q005");
  if (flashSaleQuestion && !flashSaleQuestion.answerText.includes("Product ID：{{product_id}}")) {
    flashSaleQuestion.answerText = `確認商品：\n▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n\n${flashSaleQuestion.answerText}`;
  }
  ["product_id", "V008", "V010"].forEach(code => cloneCanonicalVariable("Q005", "共用", code));

  ["查商品效期", "查商品進貨日"].forEach(branch => {
    replaceTemplateTokens("Q010", branch, { product_name: "V008", product_spec: "V010" });
    cloneCanonicalVariable("Q010", branch, "product_id");
    cloneCanonicalVariable("Q010", branch, "V008");
  });
  cloneCanonicalVariable("Q010", "查商品效期", "V010");
  removeVariables("Q010", ["product_name", "product_spec"]);

  ["尚未進入 WMS", "WMS 已出貨但延遲", "OMS／WMS 顯示 OOS 缺貨"].forEach(branch => {
    replaceTemplateTokens("Q011", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q011", branch, "order_id");
  });
  removeVariables("Q011", ["order_sn"]);

  ["包裹延遲未配達", "配達門市超過 10 天未取消", "貨態已配達但買家未收到", "貨態配送中但買家已取件"].forEach(branch => {
    replaceTemplateTokens("Q012", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q012", branch, "order_id");
  });
  removeVariables("Q012", ["order_sn"]);

  ["低單 200 元以下且有照片", "SCS 貨損有照片", "管制區／高單／特殊商品"].forEach(branch => {
    replaceTemplateTokens("Q013", branch, { product_name: "V008" });
    prependTemplateLine("Q013", branch, "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}");
    cloneCanonicalVariable("Q013", branch, "product_id");
    cloneCanonicalVariable("Q013", branch, "V008");
    cloneCanonicalVariable("Q013", branch, "V010");
  });
  removeVariables("Q013", ["product_name"]);
  ensureAnswerPart("詢問商品異常／貨損申退", "管制區／高單／特殊商品", { question: "共用", branch: "KAM表" });

  ["返還原折扣碼", "返還損失折扣／價差", "小額折扣碼"].forEach(branch => {
    replaceTemplateTokens("Q014", branch, { order_sn: "order_id", ticket_id: "work_order" });
    cloneCanonicalVariable("Q014", branch, "order_id");
    cloneCanonicalVariable("Q014", branch, "work_order");
  });
  prependTemplateLine("Q014", "小額折扣碼", "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}");
  ["product_id", "V008", "V010"].forEach(code => cloneCanonicalVariable("Q014", "小額折扣碼", code));
  removeVariables("Q014", ["order_sn", "ticket_id"]);

  ["包裹未送達進蝦皮審核"].forEach(branch => {
    replaceTemplateTokens("Q015", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q015", branch, "order_id");
  });
  ["缺件僅退款進蝦皮審核", "其他原因一般退貨"].forEach(branch => {
    prependTemplateLine("Q015", branch, "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}");
    ["product_id", "V008", "V010"].forEach(code => cloneCanonicalVariable("Q015", branch, code));
  });
  removeVariables("Q015", ["order_sn"]);

  const giftQuestion = questionById("Q009");
  if (giftQuestion && !giftQuestion.answerText.includes("Product ID：{{product_id}}")) {
    giftQuestion.answerText = `確認商品：\n▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n\n${giftQuestion.answerText}`;
  }
  ["商品卡沒有顯示滿額贈", "購物車有自動加入贈品", "購物車沒有自動加入贈品"].forEach(branch => {
    ["product_id", "V008", "V010"].forEach(code => cloneCanonicalVariable("Q009", branch, code));
  });

  ["鑑賞期內優先引導買家自行 AOC"].forEach(branch => {
    replaceTemplateTokens("Q016", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q016", branch, "order_id");
  });
  removeVariables("Q016", ["order_sn"]);

  ["訂單可申請取消配送中", "申請處理中"].forEach(branch => {
    replaceTemplateTokens("Q017", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q017", branch, "order_id");
  });
  removeVariables("Q017", ["order_sn"]);

  ["物流渠道適用延遲補償", "黑名單或不符合補償", "符合補發延遲補償"].forEach(branch => {
    replaceTemplateTokens("Q020", branch, { order_sn: "order_id" });
    cloneCanonicalVariable("Q020", branch, "order_id", { required: branch !== "黑名單或不符合補償" });
    cloneCanonicalVariable("Q020", branch, "V018", { required: false, category: "常用" });
  });
  removeVariables("Q020", ["order_sn"]);

})();
