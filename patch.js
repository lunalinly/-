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

  const setVariableProps = (q, branch, code, props) => {
    data.variables
      .filter(variable => variable.q === q && variable.branch === branch && variable.code === code)
      .forEach(variable => Object.assign(variable, props));
  };
  const setPropsAllBranches = (q, code, props) => {
    data.variables
      .filter(variable => variable.q === q && variable.code === code)
      .forEach(variable => Object.assign(variable, props));
  };
  const asSelect = options => ({ type: "select", multiline: false, options });
  const asSingleText = { type: "text", multiline: false };
  const asLongText = { type: "text", multiline: true };
  const asDate = { type: "date", multiline: false };

  setPropsAllBranches("Q009", "gift_item", asSingleText);

  setVariableProps("Q011", "尚未進入 WMS", "backend_note", asLongText);
  setVariableProps("Q011", "WMS 已出貨但延遲", "wms_status", asSelect(["Created", "Information Received", "Outbound", "其他／需補充"]));
  setVariableProps("Q011", "WMS 已出貨但延遲", "delay_days", asSingleText);
  setVariableProps("Q011", "OMS／WMS 顯示 OOS 缺貨", "backend_note", asLongText);

  setPropsAllBranches("Q012", "logistics_status", asSingleText);
  setVariableProps("Q012", "包裹延遲未配達", "follow_note", asLongText);
  setVariableProps("Q012", "配達門市超過 10 天未取消", "store_arrival_date", asDate);
  setVariableProps("Q012", "貨態已配達但買家未收到", "buyer_confirm", asLongText);
  setVariableProps("Q012", "貨態配送中但買家已取件", "payment_method", asSelect(["COD", "非 COD", "待確認"]));
  setVariableProps("Q012", "貨態配送中但買家已取件", "amount_note", asSelect(["收款金額正確", "收款金額不正確", "待確認"]));

  setPropsAllBranches("Q013", "item_amount", asSingleText);
  setPropsAllBranches("Q013", "issue_type", asSelect(["破包", "破碎／破裂", "漏液", "過期", "長蟲", "缺件", "錯品", "商品瑕疵", "其他"]));
  setPropsAllBranches("Q013", "photo_status", asSelect(["已提供照片", "未提供照片", "照片不足需補充"]));
  setPropsAllBranches("Q013", "special_note", asSingleText);
  setVariableProps("Q013", "管制區／高單／特殊商品", "case_note", asLongText);

  setVariableProps("Q014", "返還原折扣碼", "voucher_invalid", asSelect(["已失效", "未失效", "查無資料"]));
  setVariableProps("Q014", "返還原折扣碼", "better_voucher_check", asSelect(["已確認無更優優惠", "已有相同或更優優惠", "尚未確認"]));
  ["discount_amount", "price_difference", "min_spend", "voucher_amount"].forEach(code => setVariableProps("Q014", "返還損失折扣／價差", code, asSingleText));
  setVariableProps("Q014", "小額折扣碼", "issue_type", asSelect(["破包", "漏液", "過期", "長蟲", "缺件", "商品出錯", "重複出貨", "其他"]));
  setVariableProps("Q014", "小額折扣碼", "proof_status", asSelect(["照片已確認", "表單／OPS 通知", "待補佐證"]));

  setPropsAllBranches("Q015", "return_reason", asSelect(["包裹未收到", "商品缺件", "不需要了／已購買類似商品", "實品與描述／圖片有落差", "收到不對的商品", "商品功能有問題", "商品外表瑕疵／毀損", "其他"]));
  setPropsAllBranches("Q015", "refund_amount", asSingleText);
  setVariableProps("Q015", "包裹未送達進蝦皮審核", "logistics_status", asSingleText);
  setVariableProps("Q015", "缺件僅退款進蝦皮審核", "proof_status", asSelect(["照片已上傳", "影片已上傳", "待補證明"]));
  setVariableProps("Q015", "其他原因一般退貨", "return_channel", asSelect(["7-11", "SPX", "黑貓／蝦宅", "賣家自行安排", "待系統顯示"]));

  setVariableProps("Q016", "鑑賞期內優先引導買家自行 AOC", "complete_date", asDate);
  setPropsAllBranches("Q016", "return_reason", asLongText);
  setVariableProps("Q016", "可發起 Agent AOC", "proof_status", asSelect(["圖片已上傳", "圖片放入案件", "圖片過多已備註", "待補圖片"]));
  setVariableProps("Q016", "不可發起 AOC RR", "tool_result", asSelect(["已退款", "紅字不可發起 AOC RR", "查無發起按鈕", "其他"]));
  setVariableProps("Q016", "不可發起 AOC RR", "case_note", asLongText);

  setVariableProps("Q017", "訂單可申請取消配送中", "logistics_channel", asSelect(["蝦皮店到店", "蝦皮店到店 - 隔日到貨", "SCS", "店到家宅配", "其他物流"]));
  setVariableProps("Q017", "訂單可申請取消配送中", "button_status", asSelect(["有取消配送中訂單按鈕", "沒有按鈕", "待確認"]));
  setPropsAllBranches("Q017", "rr_status", asSelect(["RT1:Requested", "RT2:Accept", "RT5:Refund Paid", "RT3:Cancel", "其他"]));
  setPropsAllBranches("Q017", "remark", asSingleText);
  setVariableProps("Q017", "系統拒絕或買家撤回", "next_step", asLongText);

  setPropsAllBranches("Q020", "logistics_channel", asSelect(["蝦皮店到店", "蝦皮店到店 - 隔日到貨", "店到家宅配", "店取 - 最快當日到", "宅配 - 最快隔日到", "蝦皮店到店 - 無包裝隔日到", "不適用渠道"]));
  setPropsAllBranches("Q020", "paid_time", asSingleText);
  setPropsAllBranches("Q020", "delivered_time", asSingleText);
  setVariableProps("Q020", "黑名單或不符合補償", "blacklist_result", asLongText);
  setVariableProps("Q020", "符合補發延遲補償", "voucher_note", asLongText);

  const appreciationQuestion = questionById("Q001");
  if (appreciationQuestion) {
    appreciationQuestion.answerText = "";
  }

  const q001Template = template("Q001", "共用");
  if (q001Template) {
    upsertTemplate({
      q: "GLOBAL",
      branch: "鑑賞期",
      text: q001Template.text
    });
  }

  data.variables
    .filter(variable => variable.q === "Q001" && variable.branch === "共用")
    .forEach(variable => upsertVariable({
      ...variable,
      q: "GLOBAL",
      branch: "鑑賞期",
      category: variable.category || "鑑賞期"
    }));

  data.flows = data.flows.filter(flow => !(flow.question === "詢問鑑賞期"));
  data.flows.push({
    question: "詢問鑑賞期",
    steps: [],
    branch: "鑑賞期",
    next: "填入取貨日期，套用共用鑑賞期判斷",
    routes: [],
    answerBranches: ["鑑賞期"],
    answerParts: [{ question: "共用", branch: "鑑賞期", beforeText: "" }]
  });

  const returnStepParts = [
    { question: "詢問運費／物流", branch: "退貨步驟是什麼", beforeText: "" },
    { question: "共用", branch: "鑑賞期", beforeText: "先確認是否仍在 15 天鑑賞期內：" }
  ];
  const returnStepFlow = data.flows.find(flow => flow.question === "詢問運費／物流" && flow.branch === "退貨步驟是什麼");
  if (returnStepFlow) {
    returnStepFlow.answerParts = returnStepParts;
    returnStepFlow.answerBranches = ["退貨步驟是什麼", "鑑賞期"];
  } else {
    data.flows.push({
      question: "詢問運費／物流",
      steps: [{ prompt: "客人問的是哪一種物流／退貨問題？", option: "退貨步驟是什麼" }],
      branch: "退貨步驟是什麼",
      next: "先說明退貨步驟，再確認是否仍在 15 天鑑賞期內",
      routes: [],
      answerBranches: ["退貨步驟是什麼", "鑑賞期"],
      answerParts: returnStepParts
    });
  }
  upsertDecision({
    prompt: "客人問的是哪一種物流／退貨問題？",
    options: ["問運費", "問什麼時候到貨", "退貨步驟是什麼"]
  });

  setVariableProps("Q007", "問運費", "shipping_fee_details", asSingleText);
  setVariableProps("Q007", "問什麼時候到貨", "estimated_delivery_result", asDate);
  setVariableProps("Q010", "查商品效期", "expiration_result", asDate);
  setVariableProps("Q010", "查商品進貨日", "inbound_result", asDate);
  setPropsAllBranches("Q014", "discount_amount", asSingleText);
  setPropsAllBranches("Q014", "price_difference", asSingleText);
  setPropsAllBranches("Q014", "min_spend", asSingleText);
  setPropsAllBranches("Q014", "voucher_amount", asSingleText);
  setPropsAllBranches("Q015", "refund_amount", asSingleText);
  setPropsAllBranches("Q013", "item_amount", asSingleText);

  const toolLinks = [
    { title: "SCS CS Tool（正職）", url: "https://sites.google.com/shopee.com/scs-cs-tool/home" },
    { title: "SCS CS Tool（派遣）", url: "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/home" }
  ];
  const orderAdminLink = { title: "Order Admin Portal", url: "https://order-admin.shopee.tw/" };
  const promotionAdminLink = { title: "Promotion Admin", url: "https://promotion-admin.shopee.tw/" };
  const delayHelpLink = { title: "隔日到貨服務說明", url: "https://help.shopee.tw/portal/4/article/149656" };

  setVariableProps("Q010", "查商品效期", "expiration_result", {
    sourceLinks: toolLinks,
    sourceUrl: toolLinks[0].url,
    sourceNote: "<div><b>使用小工具協作平台查詢商品效期</b></div><ol><li>開啟 SCS CS Tool（依身分選正職或派遣連結）。</li><li>若首次登入，先點選【Review Permissions】完成授權。</li><li>進入【商品效期 Inventory Expiration Date】。</li><li>輸入 Product ID 查詢；若買家有指定規格，請對照該規格的效期。</li></ol><div><b>注意：</b></div><ul><li>工具會帶出目前商品規格對應效期，但無法確認是哪個倉別庫存。</li><li>若買家未指定規格，可以截圖小工具畫面給買家；其他系統／工具不可以。</li><li>回覆時仍需提醒實際以收到商品包裝標示日期為準。</li></ul>"
  });
  setVariableProps("Q010", "查商品進貨日", "inbound_result", {
    sourceLinks: toolLinks,
    sourceUrl: toolLinks[0].url,
    sourceNote: "<div><b>使用小工具協作平台查詢商品進貨日</b></div><ol><li>開啟 SCS CS Tool（依身分選正職或派遣連結）。</li><li>若首次登入，先點選【Review Permissions】完成授權。</li><li>進入【商品進貨日】。</li><li>輸入 Product ID 查詢目前預計進貨日期。</li></ol><div><b>回覆提醒：</b></div><ul><li>若工具查得到日期，仍需說明實際進貨時間會受廠商配送、倉庫驗收與上架作業影響，可能提前或延後。</li><li>若工具查不到時間，請回覆近期無較新的進貨安排，建議買家持續關注商品頁或收藏商品。</li></ul>"
  });

  ["返還原折扣碼", "返還損失折扣／價差", "小額折扣碼"].forEach(branch => {
    ["voucher_code", "voucher_invalid", "better_voucher_check", "discount_amount", "price_difference", "min_spend", "voucher_amount", "proof_status"].forEach(code => {
      setVariableProps("Q014", branch, code, {
        sourceLinks: [orderAdminLink, promotionAdminLink],
        sourceUrl: branch === "返還原折扣碼" ? promotionAdminLink.url : orderAdminLink.url
      });
    });
  });
  setVariableProps("Q014", "返還原折扣碼", "voucher_code", {
    sourceNote: "<div><b>補償折扣碼流程：返還原折扣碼</b></div><ol><li>先到 Promotion Admin 或 CS Portal 確認原 Voucher Code 是否已失效。</li><li>確認賣場目前沒有相同或更優優惠券；若已有更優優惠，不重複申請。</li><li>使用 Shopee CS Tool 補碼小工具填寫原碼補碼欄位。</li><li>工單中記錄 Order SN、Order ID、User ID、原 Voucher Code 與申請類別。</li></ol><div><b>注意：</b>複數折扣碼無法疊加使用，需明確告知買家。</div>"
  });
  setVariableProps("Q014", "返還損失折扣／價差", "voucher_amount", {
    sourceNote: "<div><b>補償折扣碼流程：返還損失折扣／價差</b></div><ol><li>到 Order Admin 開啟訂單。</li><li>啟動 Shopee CS Tool 補碼小工具，讓系統帶入包裹、折扣與綁定資訊。</li><li>計算：折扣金額（蝦皮＋賣家）＋商品價差（現價－Subtotal）。</li><li>依計算結果填寫最終發碼規格：滿多少折多少。</li></ol><div><b>注意：</b>商品本身價差超過 500 元需轉職代評估；系統預設綁品，若為純補損失折扣可依規範確認是否擴至全店。</div>"
  });
  setVariableProps("Q014", "小額折扣碼", "proof_status", {
    sourceNote: "<div><b>小額折扣碼處理提示</b></div><ol><li>先確認問題類型與照片／表單／OPS 通知等佐證。</li><li>符合破包、漏液、過期、長蟲、缺件、商品出錯或重複出貨等情境時，再到對應交接表或工具領取折扣碼。</li><li>折扣碼提供後，訂單問題仍需依流程開單、填出貨相關問題表或 KAM 表。</li></ol>"
  });

  ["物流渠道適用延遲補償", "黑名單或不符合補償", "符合補發延遲補償"].forEach(branch => {
    ["logistics_channel", "paid_time", "delivered_time", "blacklist_result", "voucher_note"].forEach(code => {
      setVariableProps("Q020", branch, code, {
        sourceLinks: [delayHelpLink],
        sourceUrl: delayHelpLink.url
      });
    });
  });
  setVariableProps("Q020", "黑名單或不符合補償", "blacklist_result", {
    sourceNote: "<div><b>延遲補償黑名單／資格查詢</b></div><ol><li>先以 Buyer ID 至【2025查詢表4】確認是否為黑名單用戶。</li><li>也可輸入訂單 OSN 查詢該筆訂單是否為延遲訂單；若未顯示，通常代表無延遲。</li><li>若屬黑名單或不符合補償條件，不可承諾會派發延遲補償。</li></ol><div><b>參考：</b>若涉及 14:00 後付款、變更付款方式等情境，可開啟隔日到貨服務說明連結確認規則。</div>"
  });
  setVariableProps("Q020", "符合補發延遲補償", "voucher_note", {
    sourceNote: "<div><b>延遲補償補發提示</b></div><ol><li>以付款完成時間與實際到貨時間確認是否符合補償資格。</li><li>若符合資格但未派發，依【2025HighRisk_Buyer / voucherList】或延遲補償補發流程處理。</li><li>通知買家後續留意蝦皮通知或優惠券錢包。</li></ol>"
  });

  // Exact PPT tool links supplied on 2026-08-02.
  const exactLinks = {
    inventoryExpiration: {
      title: "商品效期 Inventory Expiration Date",
      url: "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Expiration-Date?authuser=3"
    },
    aodMain: {
      title: "加價購主商品 AOD-Main",
      url: "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/AOD-Main?authuser=3"
    },
    addonDbSub: {
      title: "[DB] Add-on / Gift / Bundle 反查流程 - Sub",
      url: "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
    },
    addonDbMain: {
      title: "[DB] Add-on / Gift / Bundle 反查流程 - Main",
      url: "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=0#gid=0"
    },
    inventoryInbound: {
      title: "商品進貨日 Inventory Inbound Date",
      url: "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Inbound-Date?authuser=3"
    },
    voucherTracking: {
      title: "個案補碼追蹤表",
      url: "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    delayDashboard: {
      title: "延遲補償工具",
      url: "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    highRiskBuyer: {
      title: "2025 查詢表4 / HighRisk Buyer 查詢表",
      url: "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
    },
    csPortal: {
      title: "CS Portal",
      url: "https://dms.cs.shopee.tw/portal/info/search"
    },
    orderAdmin: {
      title: "Order Admin Portal",
      url: "https://order-admin.shopee.tw/"
    },
    promotionAdmin: {
      title: "Promotion Admin",
      url: "https://promotion-admin.shopee.tw/"
    },
    delayHelp: {
      title: "延遲訂單補償規則",
      url: "https://help.shopee.tw/portal/4/article/149656"
    }
  };

  function setVarByCode(questionId, code, props, branchIncludes = null) {
    data.variables.forEach(variable => {
      const branchMatched = !branchIncludes || branchIncludes.some(text => variable.branch.includes(text));
      if ((variable.questionId === questionId || variable.q === questionId) && variable.code === code && branchMatched) {
        Object.assign(variable, props);
      }
    });
  }

  const sourceBlock = (title, items, extra = "") => {
    const steps = items.map(item => `<li>${item}</li>`).join("");
    return `<div><b>${title}</b></div><ol>${steps}</ol>${extra}`;
  };

  setVarByCode("Q010", "expiration_result", {
    sourceLinks: [exactLinks.inventoryExpiration],
    sourceUrl: exactLinks.inventoryExpiration.url,
    sourceNote: sourceBlock("商品效期查詢", [
      "到 SCS CS Tool 的 Inventory Expiration Date。",
      "以 Product ID 查詢；若客人提供規格，需確認對應 variation / spec。",
      "回覆前提醒商品實際效期仍以包裝標示為準。"
    ])
  });
  setVarByCode("Q010", "inbound_result", {
    sourceLinks: [exactLinks.inventoryInbound],
    sourceUrl: exactLinks.inventoryInbound.url,
    sourceNote: sourceBlock("商品進貨日查詢", [
      "到 SCS CS Tool 的 Inventory Inbound Date。",
      "以 Product ID 查詢商品進貨日；若有規格差異，需確認對應品項。",
      "把查到的進貨日轉成客人看得懂的說法，不直接貼內部欄位名稱。"
    ])
  });

  ["addon_campaign_id", "addon_main_product"].forEach(code => {
    setVarByCode("Q008", code, {
      sourceLinks: [exactLinks.aodMain, exactLinks.addonDbSub, exactLinks.addonDbMain],
      sourceUrl: exactLinks.aodMain.url,
      sourceNote: sourceBlock("加價購主商品確認", [
        "問題本身先在下方打字說明：需到 AOD-Main 確認商品是否為加價購主商品。",
        "若工具查不到，再用 [DB] Add-on / Gift / Bundle：先在 Sub 以 Product ID 反查 add_on_deal_id。",
        "再到 Main 用 add_on_deal_id 查主商品資訊；有加價購標籤才繼續產出下一層答案。",
        "回覆時帶入主商品 Product ID / 商品名稱；需要時請一併傳送商品卡。"
      ])
    });
  });

  ["voucher_code", "voucher_invalid", "better_voucher_check", "discount_amount", "price_difference", "min_spend", "voucher_amount", "proof_status"].forEach(code => {
    setVarByCode("Q014", code, {
      sourceLinks: [exactLinks.orderAdmin, exactLinks.promotionAdmin, exactLinks.voucherTracking],
      sourceUrl: exactLinks.voucherTracking.url
    });
  });
  setVarByCode("Q014", "voucher_code", {
    sourceNote: sourceBlock("補償折扣碼 / 原折扣碼確認", [
      "Shopee CS Tool 補碼小工具是瀏覽器擴充功能，只能在 CP 或 DSS 上使用。",
      "先確認原折扣碼是否失效、是否沒有同等或更好的券可以提供。",
      "依工具產出的內容貼到個案補碼追蹤表，再帶回可回覆客人的折扣碼資訊。"
    ])
  });
  setVarByCode("Q014", "voucher_amount", {
    sourceNote: sourceBlock("返還損失折扣 / 價差", [
      "在 CP 或 DSS 使用 Shopee CS Tool 補碼小工具。",
      "將工具結果貼到個案補碼追蹤表指定欄位，依表內結果確認補償金額與門檻。",
      "金額欄位用單行文字填寫，保留幣別或必要說明。"
    ])
  });
  setVarByCode("Q014", "proof_status", {
    sourceNote: sourceBlock("小額折扣碼", [
      "先確認客人佐證是否足夠，不足時補請截圖或訂單資訊。",
      "需要補碼時走共用補碼流程與個案補碼追蹤表；小額券不代表原訂單問題已處理完。",
      "若仍涉及物流、商品或退款問題，另外接回對應共用分支處理。"
    ])
  });

  ["logistics_channel", "paid_time", "delivered_time", "blacklist_result", "voucher_note"].forEach(code => {
    setVarByCode("Q020", code, {
      sourceLinks: [exactLinks.delayDashboard, exactLinks.highRiskBuyer, exactLinks.delayHelp],
      sourceUrl: exactLinks.delayDashboard.url
    });
  });
  setVarByCode("Q020", "blacklist_result", {
    sourceNote: sourceBlock("延遲補償資格確認", [
      "先用延遲補償工具確認物流渠道、付款時間與配達時間是否符合規則。",
      "再到 2025 查詢表4 / HighRisk Buyer 查詢表，用 Buyer Username / Buyer ID 或 OSN 確認是否為高風險或排除名單。",
      "若命中黑名單、未延遲或不符規則，不要承諾補償；可參考規則頁說明 14:00 與付款異動相關判斷。"
    ])
  });
  setVarByCode("Q020", "voucher_note", {
    sourceNote: sourceBlock("補發延遲補償", [
      "延遲補償工具確認符合後，再用 HighRisk Buyer 查詢表排除黑名單或不可補償情境。",
      "符合才執行補發，並告知買家留意通知與優惠券錢包。",
      "回覆文字需帶入補發結果或預計可查看的位置。"
    ])
  });

  setVarByCode("Q016", "proof_status", {
    sourceLinks: [exactLinks.csPortal],
    sourceUrl: exactLinks.csPortal.url,
    sourceNote: sourceBlock("Offline RR / AOC_OPS_V2 判別", [
      "AOC_OPS_V2 是瀏覽器擴充功能，只能在 CsP 使用。",
      "到 CS Portal 以 Return ID 查詢案件，再點選 AOC_OPS_V2 判別小工具。",
      "判別為可發起 Agent AOC 才建立；若顯示已退款或不可發起，改走對應退貨 / 退款處理分支。"
    ])
  });

  // Shared ticket / table handling from PPT pages 68, 161, 194-196, 215, 243, 250-251, 254, 257, 260, 315, 318-319, 321.
  const ticketLinks = {
    jira: { title: "Shopee Jira - TW SBS", url: "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717" },
    kam: { title: "KAM 表", url: "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing" },
    vendor: { title: "廠商直送表", url: "https://docs.google.com/spreadsheets/d/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8/edit?gid=0#gid=0" },
    inhouse: { title: "InHouse 聊聊", url: "https://cs.localshop.shopee.tw/portal/inhouse/chat/home" },
    csPortal: { title: "CS Portal", url: "https://dms.cs.shopee.tw/portal/info/search" }
  };

  const q018 = questionById("Q018");
  if (q018) {
    q018.enabled = true;
    q018.description = "判斷是否需新建工單、填 KAM 表、填廠直／產值表，以及後續 1-2 個工作天追蹤。要判斷 KAM 表或廠直／產值表前，一定先確認商店名字。";
    q018.answerText = "先確認客人問題是否只是單純資訊提供；若涉及退換貨意圖、後續追蹤、廠商處理、資訊不齊、商品異常或需跨窗口確認，就要建立工單或上對應表單。判斷要上 KAM 表或廠直／產值表時，一定要先取得商店名字／店鋪名稱，才能判斷該走 KAM 表、KAM 表．SBS 或廠直表。";
  }

  const sharedFlow = (branch, next = "填完欄位後產生共用處理內容") => {
    const flow = data.flows.find(item => item.question === "共用" && item.branch === branch);
    if (flow) {
      flow.steps = [];
      flow.next = next;
      flow.answerBranches = [branch];
      flow.answerParts = [{ question: "共用", branch, beforeText: "" }];
    } else {
      data.flows.push({
        question: "共用",
        steps: [],
        branch,
        next,
        routes: [],
        answerBranches: [branch],
        answerParts: [{ question: "共用", branch, beforeText: "" }]
      });
    }
  };

  sharedFlow("新建工單");
  sharedFlow("工單追蹤／未回覆安撫");

  upsertTemplate({
    q: "GLOBAL",
    branch: "新建工單",
    text: "新建工單前先確認：\n▪ 是否需要後續追蹤、廠商／KAM／OPS／WH／VM 確認，或資訊不齊不能直接結案。\n▪ 售前商品問題若只是單純資訊提供，不用開單；若涉及退換貨意圖、商品瑕疵爭議、保固驗證、技術檢測或品質爭議，就要開單。\n▪ 售後商品／退貨退款／廠直個案需要追蹤時，需新建工單並搭配對應表單。\n\nJira 工單填寫重點：\n▪ 案件主旨：{{ticket_subject}}\n▪ Order SN / Buyer Username：{{ticket_customer_key}}\n▪ 商店名字／店鋪名稱：{{shop_name}}\n▪ 問題摘要：{{ticket_summary}}\n▪ 已確認資料：{{checked_info}}\n▪ 待追蹤事項：{{pending_note}}\n\n建立後取得工單號：{{work_order}}\n提醒：若此案件同時需要上 KAM 表或廠直／產值表，必須先用商店名字判斷表別，再把工單號回填到該表。"
  });
  upsertTemplate({
    q: "GLOBAL",
    branch: "工單追蹤／未回覆安撫",
    text: "工單／表單追蹤：\n▪ 工單號：{{work_order}}\n▪ 追蹤情境：{{follow_type}}\n▪ 上次追蹤時間：{{last_follow_date}}\n▪ 未結案備註：{{pending_note}}\n\n處理原則：\n1. 平日案件約每 2 日追蹤一次，並積極確認窗口是否回覆。\n2. 假日前或假日中接獲案件，要先告知會在工作日追蹤。\n3. 假日後第一個上班日，若仍未回覆，要再次安撫並追蹤。\n4. 平日超過 2 個工作天仍未回覆，可先主動告知客人仍在確認，並在工單未結案備註留下「KAM 未回，已再次詢問，待追蹤」或對應內容。\n5. 若轉詢 SLA 達 48 小時仍無法解決，或買家重複來訊、情緒升高，可走聊聊轉二線／OPS／BAU 協助流程。\n\n可回覆客人：\n關於您詢問的商品／訂單問題，這邊已為您建立案件編號 {{work_order}} 進行追蹤，目前窗口仍在確認中。後續若有回覆，小幫手會再主動透過聊聊通知您，感謝您的耐心等候。"
  });

  [
    ["ticket_subject", "工單主旨", "例：商品瑕疵／退貨退款／廠商確認／物流異常", false, true, "text"],
    ["ticket_customer_key", "Order SN / Buyer Username", "售後填 Order SN；售前可填 Buyer Username", false, true, "text"],
    ["shop_name", "商店名字／店鋪名稱", "要判斷 KAM 表或廠直／產值表前必填", false, true, "text"],
    ["ticket_summary", "問題摘要", "簡述客人問題與目前卡點", true, true, "text"],
    ["checked_info", "已確認資料", "已查商品頁、訂單、照片、貨態、是否申退等", true, false, "text"],
    ["pending_note", "待追蹤事項／未結案備註", "例：KAM 未回，已再次詢問，待追蹤", true, true, "text"],
    ["work_order", "工單號", "建立 Jira 後填入，例如 SPTWSBS-XXXXX", false, true, "text"]
  ].forEach(([code, label, hint, multiline, required, type]) => upsertVariable({
    q: "GLOBAL",
    branch: "新建工單",
    code,
    label,
    hint,
    multiline,
    required,
    type,
    category: "工單",
    sourceLinks: code === "work_order" ? [ticketLinks.jira] : [],
    sourceUrl: code === "work_order" ? ticketLinks.jira.url : "",
    sourceNote: code === "shop_name" ? "商店名字是判斷要上 KAM 表、KAM 表．SBS 或廠直／產值表的必要資訊；沒有店名時不要直接判斷表別。" : ""
  }));

  [
    ["work_order", "工單號", "貼上 Jira 工單號", false, true, "text"],
    ["follow_type", "追蹤情境", "平日／假日前／假日中／假後第一天／超過2工作天／48小時未回覆", false, true, "select", ["平日 1-2 工作天內等待回覆", "假日前或假日中", "假後第一個上班日", "平日超過2個工作天仍未回覆", "轉詢 SLA >= 48 小時仍未解決"]],
    ["last_follow_date", "上次追蹤日期", "選擇上次追蹤或安撫日期", false, false, "date"],
    ["pending_note", "未結案備註", "可填：KAM 未回，已再次詢問，待追蹤", true, true, "text"]
  ].forEach(([code, label, hint, multiline, required, type, options]) => upsertVariable({
    q: "GLOBAL",
    branch: "工單追蹤／未回覆安撫",
    code,
    label,
    hint,
    multiline,
    required,
    type,
    options: options || [],
    category: "工單",
    sourceLinks: code === "work_order" ? [ticketLinks.jira] : [],
    sourceUrl: code === "work_order" ? ticketLinks.jira.url : ""
  }));

  upsertAction({
    q: "GLOBAL",
    branch: "新建工單",
    action: "新建 Jira 工單",
    needed: true,
    note: "需要追蹤或跨窗口確認時建立",
    sourceLinks: [ticketLinks.jira],
    url: ticketLinks.jira.url,
    sourceNote: "<div><b>建立工單時機</b></div><ul><li>需要後續追蹤、廠商／KAM／OPS／WH／VM 確認。</li><li>買家有退換貨意圖、商品瑕疵爭議、品質爭議、保固驗證或技術檢測。</li><li>廠直、線下申退、Offline RR、特殊高單、假貨爭議等需個案處理。</li></ul>"
  });
  upsertAction({
    q: "Q018",
    branch: "需開單＋填 KAM 表",
    action: "PPT 上表／工單情境索引",
    needed: true,
    note: "依 PPT 頁面判斷是否需上表或開工單",
    sourceLinks: [ticketLinks.jira, ticketLinks.kam],
    url: ticketLinks.jira.url,
    sourceNote: "<div><b>PPT 對應頁面</b></div><ul><li>第 68 頁：售前商品問題，售前填 KAM 表；售後新建工單＋填 KAM 表。</li><li>第 161 頁：SCS 特殊情境，出貨／配送異常需填表；商品瑕疵／異常／要求退貨需填 KAM 表轉詢。</li><li>第 215 頁：小額折扣碼後，訂單問題仍需處理，需新建工單＋出貨相關問題表＋KAM 表。</li><li>第 243 頁：SCS 三原則可引導申退，同時新建工單詢問 KAM／VM／WH；商品完整未拆封可不開單。</li><li>第 250-251 頁：線上／線下申退，依情境新建 Jira 單、填 KAM 表；KAM 48 小時未回覆由 OPS 協助。</li><li>第 254 頁：高單商品需新建工單、填 KAM 表並轉 OPS 值日生或與 KAM／用戶溝通。</li><li>第 257 頁：假貨爭議需新建工單、通報 OPS、登記假貨表單或填 KAM 表。</li><li>第 260 頁：Offline RR 需新建工單、填 KAM 表，後續依線上申退流程處理。</li><li>第 315 頁：工單處理總原則，單純資訊不用開單；有退換貨意圖、後續追蹤、廠商處理或資訊不齊就要開單／上表。</li><li>第 318-319 頁：1-2 工作天、假日、超過 2 個工作天未回覆的追蹤話術與未結案備註。</li><li>第 321 頁：轉詢 SLA >= 48 小時、重複來訊或情緒升高時，走聊聊轉二線／OPS／BAU。</li></ul>"
  });
  upsertAction({
    q: "Q018",
    branch: "廠直問題需轉廠商",
    action: "PPT 廠直／DSS 商談情境索引",
    needed: true,
    note: "依商店名字判斷廠直／產值表，必要時到 DSS 商談問廠商",
    sourceLinks: [ticketLinks.vendor, { title: "Shopee Drop Shipping（DSS）", url: "https://scm.internal.shopee.tw/homepage/backlogs" }],
    url: "https://scm.internal.shopee.tw/homepage/backlogs",
    sourceNote: "<div><b>PPT 對應頁面</b></div><ul><li>第 73、128 頁：MP SKU ID 必須查正確，錯誤會導致找不到正確供應商，無法催促 KAM／PM 回覆。</li><li>第 132 頁：DSS 商談更新回覆時，需移除 KAM 表廠商回覆；商談結案時，KAM 表也同步結案。</li><li>第 194 頁：廠商直送物流配送流程，商品問題、OOS、改址、簽收單等依情境填廠直 KAM 表、通知 OPS 或 Jira 工單＋填表。</li><li>第 195 頁：廠直退換貨補寄，請務必確認資訊後才上表；換貨／補寄與退貨皆需 Jira 工單＋填廠直 KAM 表。</li><li>第 196 頁：買家反映瑕疵／破損／缺件，需先確認照片、是否組裝使用、買家訴求；上表格式要清楚，避免二次來回詢問。</li></ul>"
  });
  upsertAction({
    q: "GLOBAL",
    branch: "工單追蹤／未回覆安撫",
    action: "追蹤工單／表單回覆",
    needed: true,
    note: "1-2 工作天未回覆或 48 小時未解決時追蹤",
    sourceLinks: [ticketLinks.jira],
    url: ticketLinks.jira.url
  });

  const tableReminder = "<div><b>表別判斷前必填：商店名字／店鋪名稱。</b></div><div>要上 KAM 表、KAM 表．SBS 或廠直／產值表時，先用商店名字判斷出貨來源與對應表單；沒有商店名字時，不要直接判斷表別。</div>";
  ["KAM表", "KAM表．SBS", "廠直表"].forEach(branch => {
    const tpl = template("GLOBAL", branch);
    if (tpl && !tpl.text.includes("商店名字／店鋪名稱")) {
      tpl.text = `表別判斷前先確認：\n▪ 商店名字／店鋪名稱：{{shop_name}}\n▪ 依店名判斷要上 KAM 表、KAM 表．SBS 或廠直／產值表。\n\n${tpl.text}`;
    }
    upsertVariable({
      q: "GLOBAL",
      branch,
      code: "shop_name",
      label: "商店名字／店鋪名稱",
      hint: "要判斷 KAM 表或廠直／產值表前必填",
      required: true,
      multiline: false,
      type: "text",
      category: "商家相關",
      sourceNote: tableReminder,
      sourceLinks: [ticketLinks.kam, ticketLinks.vendor],
      sourceUrl: ticketLinks.kam.url
    });
  });

  const setFlowParts = (question, branch, parts) => {
    const flow = data.flows.find(item => item.question === question && item.branch === branch);
    if (!flow) return;
    flow.answerParts = parts;
    flow.answerBranches = parts.map(part => part.branch);
  };

  setFlowParts("詢問工單／KAM 表是否要建立", "需開單＋填 KAM 表", [
    { question: "詢問工單／KAM 表是否要建立", branch: "需開單＋填 KAM 表", beforeText: "" },
    { question: "共用", branch: "新建工單", beforeText: "需先建立工單：" },
    { question: "共用", branch: "KAM表", beforeText: "再依商店名字判斷並填 KAM 表：" },
    { question: "共用", branch: "工單追蹤／未回覆安撫", beforeText: "若 1-2 個工作天仍未回覆，使用追蹤話術與未結案備註：" }
  ]);
  setFlowParts("詢問工單／KAM 表是否要建立", "廠直問題需轉廠商", [
    { question: "詢問工單／KAM 表是否要建立", branch: "廠直問題需轉廠商", beforeText: "" },
    { question: "共用", branch: "新建工單", beforeText: "需先建立工單：" },
    { question: "共用", branch: "廠直表", beforeText: "再依商店名字判斷並填廠直／產值表：" },
    { question: "共用", branch: "工單追蹤／未回覆安撫", beforeText: "若 1-2 個工作天仍未回覆，使用追蹤話術與未結案備註：" }
  ]);
  setFlowParts("詢問工單／KAM 表是否要建立", "平日／假日追蹤話術", [
    { question: "詢問工單／KAM 表是否要建立", branch: "平日／假日追蹤話術", beforeText: "" },
    { question: "共用", branch: "工單追蹤／未回覆安撫", beforeText: "" }
  ]);

  upsertDecision({
    prompt: "這個案件需要建立工單或上表嗎？",
    options: ["單純商品資訊不用開單", "需開單＋填 KAM 表", "廠直問題需轉廠商", "平日／假日追蹤話術"]
  });

  ["詢問商品異常／貨損申退", "詢問補償折扣碼／小額折扣碼", "詢問退貨退款流程／NRR", "詢問 Offline RR／Agent AOC"].forEach(questionName => {
    flows(questionName).forEach(flow => {
      flow.routes ||= [];
      flow.actions ||= [];
      if (!flow.answerParts) flow.answerParts = [{ question: flow.question, branch: flow.branch, beforeText: "" }];
    });
  });

  // Shared DSS vendor negotiation branch.
  sharedFlow("DSS 商談詢問廠商");
  upsertTemplate({
    q: "GLOBAL",
    branch: "DSS 商談詢問廠商",
    text: "DSS 商談詢問廠商前先確認：\n▪ 商店名字／店鋪名稱：{{shop_name}}\n▪ Order SN：{{order_id}}\n▪ Product ID：{{product_id}}\n▪ MP SKU ID：{{V030}}\n▪ 商品名稱／規格：{{V008}}／{{V010}}\n▪ 買家訴求：{{vendor_question}}\n\n操作方式：\n1. 開啟 Shopee Drop Shipping（DSS）。\n2. 進入對應訂單或供應商管理資料，確認 MP SKU ID 正確；不要直接使用系統預設的 PID_0。\n3. 進入商談，將 Question／商談內容整理成廠商看得懂的問題。\n4. 若是換貨／補寄，需一次問完：買家訴求、補寄規格、是否同原訂單資訊、是否需更改地址或收件資訊。\n5. 送出後記錄商談狀態與待回覆事項。\n\n商談內容建議：\n{{vendor_question}}\n\n廠商回覆：{{vendor_reply}}\n\n提醒：商談更新回覆時，要同步移除 KAM 表／廠直表中的待回覆註記；商談結案時，KAM 表／廠直表也要同步結案。"
  });
  [
    ["shop_name", "商店名字／店鋪名稱", "判斷廠直／產值表與 DSS 商談前必填", false, true, "text", []],
    ["order_id", "Order SN", "貼上訂單編號", false, true, "text", []],
    ["product_id", "Product ID", "貼上商品頁 Product ID", false, true, "text", []],
    ["V008", "商品名稱", "貼上產品頁完整標題", false, true, "text", []],
    ["V010", "商品規格", "買家有指定規格時必填", false, false, "text", []],
    ["V030", "MP SKU ID", "DSS → 供應商管理 → 商品 → 以 Product ID 查正確 MP SKU ID", false, true, "text", []],
    ["vendor_question", "商談內容／要問廠商的問題", "一次問完買家訴求、規格、退貨／換貨／補寄需求", true, true, "text", []],
    ["vendor_reply", "廠商回覆", "尚未回覆可填：待廠商回覆", true, false, "text", []],
    ["dss_chat_status", "DSS 商談狀態", "選擇目前狀態", false, true, "select", ["已送出，待廠商回覆", "廠商已回覆，需整理回覆客人", "需再次補問廠商", "商談已結案"]]
  ].forEach(([code, label, hint, multiline, required, type, options]) => upsertVariable({
    q: "GLOBAL",
    branch: "DSS 商談詢問廠商",
    code,
    label,
    hint,
    multiline,
    required,
    type,
    options,
    category: "DSS 商談",
    sourceLinks: ["V030", "dss_chat_status"].includes(code) ? [
      { title: "Shopee Drop Shipping（DSS）", url: "https://scm.internal.shopee.tw/homepage/backlogs" },
      ticketLinks.vendor
    ] : [],
    sourceUrl: ["V030", "dss_chat_status"].includes(code) ? "https://scm.internal.shopee.tw/homepage/backlogs" : "",
    sourceNote: code === "V030"
      ? "PPT 第 73、128 頁提醒：MP SKU ID 必須查正確，資料不能包含空白、分行或多餘符號；若系統預設 PID_0，仍須查詢正確 SKU，否則可能找不到正確供應商，也無法催促 KAM／PM 回覆。"
      : (code === "shop_name" ? "商店名字是判斷是否走廠直／產值表與 DSS 商談的必要資訊；沒有店名不要直接判斷。" : "")
  }));
  upsertAction({
    q: "GLOBAL",
    branch: "DSS 商談詢問廠商",
    action: "到 DSS 商談詢問廠商",
    needed: true,
    note: "廠直／廠商確認、換貨／補寄、配送或商品問題需廠商回覆時使用",
    sourceLinks: [{ title: "Shopee Drop Shipping（DSS）", url: "https://scm.internal.shopee.tw/homepage/backlogs" }, ticketLinks.vendor],
    url: "https://scm.internal.shopee.tw/homepage/backlogs",
    sourceNote: "<div><b>DSS 商談重點</b></div><ul><li>先確認商店名字、Product ID、MP SKU ID 與訂單資訊。</li><li>問題要一次問完，避免二次來回。</li><li>商談有回覆時，整理內容回覆客人；商談結案時，同步結案 KAM 表／廠直表。</li></ul>"
  });
  const vendorFlow = data.flows.find(flow => flow.question === "詢問工單／KAM 表是否要建立" && flow.branch === "廠直問題需轉廠商");
  if (vendorFlow) {
    vendorFlow.answerParts ||= [{ question: vendorFlow.question, branch: vendorFlow.branch, beforeText: "" }];
    const hasDssPart = vendorFlow.answerParts.some(part => part.question === "共用" && part.branch === "DSS 商談詢問廠商");
    if (!hasDssPart) {
      const trackIndex = vendorFlow.answerParts.findIndex(part => part.question === "共用" && String(part.branch).includes("追蹤"));
      const dssPart = { question: "共用", branch: "DSS 商談詢問廠商", beforeText: "需要廠商確認時，到 DSS 商談詢問廠商：" };
      if (trackIndex >= 0) vendorFlow.answerParts.splice(trackIndex, 0, dssPart);
      else vendorFlow.answerParts.push(dssPart);
      vendorFlow.answerBranches = vendorFlow.answerParts.map(part => part.branch);
    }
  }

  // Q18 is not a standalone customer question. Keep its logic as reusable common branches.
  const q18Standalone = questionById("Q018");
  if (q18Standalone) q18Standalone.enabled = false;

  function cloneSharedBranch(sourceBranch, aliasBranch, introLine) {
    sharedFlow(aliasBranch);
    const sourceTemplate = template("GLOBAL", sourceBranch);
    if (sourceTemplate) {
      upsertTemplate({
        q: "GLOBAL",
        branch: aliasBranch,
        text: `${introLine}\n\n${sourceTemplate.text}`
      });
    }
    data.variables
      .filter(variable => variable.q === "GLOBAL" && variable.branch === sourceBranch)
      .forEach(variable => upsertVariable({ ...variable, branch: aliasBranch }));
    data.actions
      .filter(action => action.q === "GLOBAL" && action.branch === sourceBranch)
      .forEach(action => upsertAction({ ...action, branch: aliasBranch }));
  }

  cloneSharedBranch("KAM表", "CAM表", "此共用分支對應 KAM/CAM 表；要判斷前一定先確認商店名字／店鋪名稱。");
  cloneSharedBranch("廠直表", "廠直／產值表", "此共用分支對應廠直／產值表；要判斷前一定先確認商店名字／店鋪名稱。");

  function ensureCommonPart(questionId, branchName, commonBranch, beforeText = "") {
    const question = questionById(questionId);
    if (!question) return;
    data.flows
      .filter(flow => flow.question === question.name && flow.branch === branchName)
      .forEach(flow => {
        flow.answerParts ||= [{ question: flow.question, branch: flow.branch, beforeText: "" }];
        if (!flow.answerParts.some(part => part.question === "共用" && part.branch === commonBranch)) {
          flow.answerParts.push({ question: "共用", branch: commonBranch, beforeText });
          flow.answerBranches = flow.answerParts.map(part => part.branch);
        }
      });
  }

  ensureCommonPart("Q013", "管制區／高單／特殊商品", "新建工單", "此類特殊商品／管制區／高單若需跨窗口確認，先建立工單：");
  ensureCommonPart("Q013", "管制區／高單／特殊商品", "KAM表", "再依商店名字判斷並填 KAM/CAM 表：");
  ensureCommonPart("Q014", "小額折扣碼", "新建工單", "若提供小額折扣碼後仍有訂單問題要追蹤，需另建工單：");
  ensureCommonPart("Q014", "小額折扣碼", "KAM表", "若商品／出貨問題仍需回報，依商店名字判斷是否填 KAM/CAM 表：");
  ensureCommonPart("Q016", "可發起 Agent AOC", "新建工單", "若屬 Offline RR 或需專員代處理並追蹤，需建立工單：");
  ensureCommonPart("Q016", "可發起 Agent AOC", "KAM表", "若需確認是否可退／個案處理，依商店名字判斷並填 KAM/CAM 表：");

  const ticketFormatBranches = ["新建工單", "KAM表", "KAM表．SBS", "廠直表", "CAM表", "廠直／產值表"];
  const ticketCategoryOptions = [
    "售前-商品規格",
    "售前-商品使用",
    "售前-配件/贈品",
    "售前-保固相關",
    "售前-品質諮詢",
    "售後-退換貨",
    "售後-商品異常",
    "售後-保固/檢測",
    "物流-催促配送",
    "物流-配送異常",
    "訂單備註",
    "補償折扣碼-返還原折扣碼",
    "補償折扣碼-返還損失折扣",
    "補償折扣碼-其餘個案補碼"
  ];
  const ticketFormatRules = [
    {
      values: ["一般 KAM/CAM 商品問題"],
      conditions: [{ code: "ticket_issue_category", values: ["售前-商品規格", "售前-商品使用", "售前-配件/贈品", "售前-保固相關", "售前-品質諮詢"] }],
      assignments: [
        { targetCode: "jira_summary", value: "售前商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{product_id}}" },
        { targetCode: "jira_description", value: "Project：不變\nIssues Type：Problem\nSummary：售前商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{product_id}}\nShop Name：{{shop_name}}\nUsername：{{buyer_username}}\nDescription：請貼上 KAM/CAM 表的 CS 詢問用格式，並補上客文截圖或商品頁連結。\nIssue Links：{{related_link}}\nAssignee：assign to me\nAttachment：{{proof_status}}" },
        { targetCode: "sheet_question_format", value: "#{{sheet_row_no}}\nHI,{{kam_owner}}\n【問題分類】{{ticket_issue_category}}\n【商品名稱】{{V008}}\n【商品規格】{{V010}}\n【廠商】{{supplier_name}}\n【Product ID】{{product_id}}\n【Order/User】{{order_sn}} / {{buyer_username}}\n【商品問題】\n{{customer_question}}\n【已確認資訊】\n{{checked_info}}\n【工單號】{{work_order}}" }
      ]
    },
    {
      values: ["一般 KAM/CAM 商品問題"],
      conditions: [{ code: "ticket_issue_category", values: ["售後-退換貨", "售後-商品異常", "售後-保固/檢測"] }],
      assignments: [
        { targetCode: "jira_summary", value: "售後商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{order_sn}}" },
        { targetCode: "jira_description", value: "Project：不變\nIssues Type：Problem\nSummary：售後商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{order_sn}}\nShop Name：{{shop_name}}\nUsername：{{buyer_username}}\nDescription：請貼上 KAM/CAM 表的 CS 詢問用格式，並說明是否已有退貨/退款意圖、十五天鑑賞期判斷、商品狀態與佐證。\nIssue Links：{{related_link}}\nAssignee：assign to me\nAttachment：{{proof_status}}" },
        { targetCode: "sheet_question_format", value: "#{{sheet_row_no}}\nHI,{{kam_owner}}\n【問題分類】{{ticket_issue_category}}\n【商品名稱】{{V008}}\n【商品規格】{{V010}}\n【廠商】{{supplier_name}}\n【Product ID】{{product_id}}\n【Order/User】{{order_sn}} / {{buyer_username}}\n【商品問題】\n{{customer_question}}\n【退貨/保固/異常確認】\n{{checked_info}}\n【工單號】{{work_order}}" }
      ]
    },
    {
      values: ["SBS KAM/CAM 商品問題"],
      assignments: [
        { targetCode: "jira_summary", value: "SBS商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{product_id}}" },
        { targetCode: "jira_description", value: "Project：不變\nIssues Type：Problem\nSummary：SBS商品問題｜{{shop_name}}｜{{ticket_issue_category}}｜{{product_id}}\nShop Name：{{shop_name}}\nUsername：{{buyer_username}}\nDescription：請貼上 SBS 商品問題表的 CS 詢問自動公式，並補上客文/商品頁/訂單佐證。\nIssue Links：{{related_link}}\nAssignee：assign to me\nAttachment：{{proof_status}}" },
        { targetCode: "sheet_question_format", value: "#{{sheet_row_no}}\n【分館】{{shop_name}}\n【問題分類】{{ticket_issue_category}}\n【商品名稱】{{V008}}\n【商品規格】{{V010}}\n【Product ID】{{product_id}}\n【Order SN/User】{{order_sn}} / {{buyer_username}}\n【問題訴求】\n{{customer_question}}\n【備註】{{checked_info}}\n【工單號】{{work_order}}" }
      ]
    },
    {
      values: ["補償折扣碼"],
      conditions: [{ code: "ticket_issue_category", values: ["補償折扣碼-返還原折扣碼", "補償折扣碼-返還損失折扣", "補償折扣碼-其餘個案補碼"] }],
      assignments: [
        { targetCode: "jira_summary", value: "補償折扣碼申請｜{{ticket_issue_category}}｜{{order_sn}}" },
        { targetCode: "jira_description", value: "Order SN：{{order_sn}}\nOrder ID：{{order_id}}\nUser ID：{{user_id}}\nBuyer Username：{{buyer_username}}\n簡述訴求：{{customer_question}}\n申請類別：{{ticket_issue_category}}\n原 Voucher Code：{{voucher_code}}\n申請包裹(Parcel)：{{parcel_id}}\n折扣碼綁定資訊：{{voucher_binding}}\nA. 折扣金額(蝦皮＋賣家)：{{discount_amount}}\nB. 商品價差(現價－Subtotal)：{{price_difference}}\n最終發碼規格：滿 ${{voucher_threshold}} 折 ${{voucher_amount}}\n自我檢查：{{checked_info}}" },
        { targetCode: "sheet_question_format", value: "個案補碼追蹤表：\nOrder SN：{{order_sn}}\nUser ID：{{user_id}}\nBuyer Username：{{buyer_username}}\n申請類別：{{ticket_issue_category}}\n補碼金額：{{voucher_amount}}\n工單號：{{work_order}}\n備註：{{pending_note}}" }
      ]
    },
    {
      values: ["廠直／產值表"],
      conditions: [{ code: "vendor_table_type", values: ["order"] }],
      assignments: [
        { targetCode: "vendor_required_id_hint", value: "Type 填 order；ID 填 SCM Order ID。請先確認商店名字，再填前台訂單/SCM Order ID 與工單號。" },
        { targetCode: "jira_summary", value: "廠直轉詢｜訂單問題｜{{shop_name}}｜{{order_sn}}" },
        { targetCode: "sheet_question_format", value: "Type：order\nID：{{scm_order_id}}\nPriority：{{vendor_priority}}\n填表人：{{case_owner}}\n前台訂單：{{order_sn}}\n工單號：{{work_order}}\n問題分類：{{ticket_issue_category}}\nCS內部備註/買家帳號：{{buyer_username}}\n\nQuestion(公式)：\nSheet ID：{{sheet_row_no}}\n*Ordersn：{{order_sn}}\n*簡述問題(相關連結)：\n{{customer_question}}\n{{related_link}}" }
      ]
    },
    {
      values: ["廠直／產值表"],
      conditions: [{ code: "vendor_table_type", values: ["return"] }],
      assignments: [
        { targetCode: "vendor_required_id_hint", value: "Type 填 return；ID 填 SCM Return Order ID。請先確認商店名字，再填退貨單資訊與工單號。" },
        { targetCode: "jira_summary", value: "廠直轉詢｜退貨問題｜{{shop_name}}｜{{return_id}}" },
        { targetCode: "sheet_question_format", value: "Type：return\nID：{{scm_return_id}}\nPriority：{{vendor_priority}}\n填表人：{{case_owner}}\n前台訂單：{{order_sn}}\n工單號：{{work_order}}\n問題分類：{{ticket_issue_category}}\nCS內部備註/買家帳號：{{buyer_username}}\n\nQuestion(公式)：\nSheet ID：{{sheet_row_no}}\n*Return ID：{{return_id}}\n*簡述問題(相關連結)：\n{{customer_question}}\n{{related_link}}" }
      ]
    },
    {
      values: ["廠直／產值表"],
      conditions: [{ code: "vendor_table_type", values: ["sku"] }],
      assignments: [
        { targetCode: "vendor_required_id_hint", value: "Type 填 sku；ID 填 MP SKU ID。MP SKU ID 需要到 DSS/SCM 查，不要直接用 PID_0。" },
        { targetCode: "jira_summary", value: "廠直轉詢｜商品問題｜{{shop_name}}｜{{V030}}" },
        { targetCode: "sheet_question_format", value: "Type：sku\nID：{{V030}}\nPriority：{{vendor_priority}}\n填表人：{{case_owner}}\nMP SKU：{{V030}}\n工單號：{{work_order}}\n問題分類：{{ticket_issue_category}}\nCS內部備註/買家帳號：{{buyer_username}}\n\nQuestion(公式)：\nSheet ID：{{sheet_row_no}}\n*MP SKU ID：{{V030}}\n*Ordersn：{{order_sn}}\n*簡述問題(相關連結)：\n{{customer_question}}\n{{related_link}}" }
      ]
    }
  ];

  function appendTemplateSection(q, branch, marker, text) {
    const item = template(q, branch);
    if (!item || String(item.text || "").includes(marker)) return;
    item.text = `${item.text}\n\n${marker}\n${text}`;
  }

  appendTemplateSection("GLOBAL", "新建工單", "【工單/上表格式自動整理】", "依下方欄位選擇工單/表單種類與問題分類後，系統會依多層條件帶出：\n▪ Jira 主旨：{{jira_summary}}\n▪ Jira Description：\n{{jira_description}}\n\n若同時需要上表，請貼入：\n{{sheet_question_format}}\n\n廠直/產值表 ID 判斷：{{vendor_required_id_hint}}");
  ["KAM表", "KAM表．SBS", "CAM表"].forEach(branch => appendTemplateSection("GLOBAL", branch, "【KAM/CAM 表填寫格式】", "依商店名字判斷表別後，選擇問題分類；系統會帶出 CS 詢問用格式：\n{{sheet_question_format}}\n\n建立 Jira 時可使用：\n▪ Summary：{{jira_summary}}\n▪ Description：\n{{jira_description}}"));
  ["廠直表", "廠直／產值表"].forEach(branch => appendTemplateSection("GLOBAL", branch, "【廠直/產值表填寫格式】", "先確認商店名字，再選 Type：order / return / sku。\n{{vendor_required_id_hint}}\n\n請貼入轉單詢問表：\n{{sheet_question_format}}\n\n建立 Jira 時可用主旨：{{jira_summary}}"));

  ticketFormatBranches.forEach(branch => {
    [
      ["ticket_case_kind", "工單/表單種類", "先判斷要走哪一種共用流程；KAM/CAM 或廠直/產值表一定要先有商店名字才能判斷。", false, true, "select", ["一般 KAM/CAM 商品問題", "SBS KAM/CAM 商品問題", "廠直／產值表", "補償折扣碼", "InHouse Case／轉單任務"], ticketFormatRules],
      ["ticket_issue_category", "問題分類", "依客人實際詢問內容選擇。若是上 KAM/CAM 表，請對應表格中的問題分類；若是補碼，請選補償折扣碼分類。", false, true, "select", ticketCategoryOptions, []],
      ["vendor_table_type", "廠直/產值表 Type", "只有走廠直/產值表時需要。order=訂單問題；return=退貨問題；sku=商品問題。", false, false, "select", ["order", "return", "sku"], []],
      ["vendor_required_id_hint", "廠直/產值表 ID 判斷", "選擇 Type 後自動帶出要填哪一種 ID。", true, false, "text", [], []],
      ["jira_summary", "Jira 工單主旨", "依工單/表單種類 + 問題分類自動帶入，可再依實際案件微調。", false, false, "text", [], []],
      ["jira_description", "Jira Description / 案件內容", "依多層條件自動整理；貼到 Jira Description 後補齊截圖、連結或附件。", true, false, "text", [], []],
      ["sheet_question_format", "上表/詢問格式", "依 KAM 表、SBS 表、廠直/產值表或補碼追蹤表的欄位整理。", true, false, "text", [], []],
      ["buyer_username", "Buyer Username（買家帳號）", "查詢買家、補碼、廠直/產值表 CS 內部備註或 Jira Username 欄位會用到。", false, false, "text", [], []],
      ["order_sn", "Order SN（訂單編號）", "訂單、退貨、補碼、廠直/產值表常用參數。", false, false, "text", [], []],
      ["scm_order_id", "SCM Order ID", "廠直/產值表 Type=order 時填入 ID 欄。", false, false, "text", [], []],
      ["scm_return_id", "SCM Return Order ID", "廠直/產值表 Type=return 時填入 ID 欄。", false, false, "text", [], []],
      ["return_id", "Return ID（退貨單號）", "退貨問題或 Type=return 時使用。", false, false, "text", [], []],
      ["sheet_row_no", "表格列號 / Sheet ID", "KAM/SBS 表的列號或廠直表 Sheet ID；若尚未建立可先留空。", false, false, "text", [], []],
      ["kam_owner", "KAM/CAM 收件窗口", "若表格公式已有帶出窗口，可貼上；沒有就依店鋪對應窗口填。", false, false, "text", [], []],
      ["supplier_name", "廠商名稱", "KAM/CAM 表廠商欄位或廠直表供應商資訊。", false, false, "text", [], []],
      ["customer_question", "客人問題/訴求", "以客人實際問什麼為主，整理成可讓 KAM/廠商判斷的一段文字。", true, true, "text", [], []],
      ["related_link", "相關連結", "商品頁、訂單頁、客文截圖、影片或內部查詢頁連結。", true, false, "text", [], []],
      ["case_owner", "個案擁有者/填表人", "填你的名字或當班負責人。", false, false, "text", [], []],
      ["vendor_priority", "Priority（廠直表）", "廠直表代碼：0=High、1=Medium、2=Low。", false, false, "select", ["0", "1", "2"], []],
      ["user_id", "User ID", "補償折扣碼或 Jira Description 需要時填入。", false, false, "text", [], []],
      ["voucher_code", "原 Voucher Code", "返還原折扣碼時填原始折扣碼。", false, false, "text", [], []],
      ["parcel_id", "Parcel（包裹）", "補碼申請包裹資訊。", false, false, "text", [], []],
      ["voucher_binding", "折扣碼綁定資訊", "例如指定店家或指定商品。", false, false, "text", [], []],
      ["discount_amount", "折扣金額", "金額欄位用單行文字，格式例如 100。", false, false, "text", [], []],
      ["price_difference", "商品價差", "金額欄位用單行文字，格式例如 100。", false, false, "text", [], []],
      ["voucher_threshold", "補碼門檻金額", "金額欄位用單行文字，格式例如 0 或 999。", false, false, "text", [], []],
      ["voucher_amount", "補碼折抵金額", "金額欄位用單行文字，格式例如 100。", false, false, "text", [], []]
    ].forEach(([code, label, hint, multiline, required, type, options, fillRules]) => upsertVariable({
      q: "GLOBAL",
      branch,
      code,
      label,
      hint,
      multiline,
      required,
      type,
      options,
      fillRules,
      category: "工單/上表",
      sourceLinks: [ticketLinks.jira, ticketLinks.kam, ticketLinks.vendor].filter(Boolean),
      sourceUrl: ticketLinks.jira?.url || "",
      sourceNote: "PPT 對應：第 136-138 頁 Jira 欄位；第 179 頁補償折扣碼 Jira 格式；KAMS/PMS×CS×Listing 的「商品問題 / SBS商品問題」可帶 CS 詢問用格式；廠商直送 For Supplier - NEW 的「轉單詢問」可帶 Question(公式)。"
    }));
  });

  const pptQuestionPages = {
    Q001: "19、241、250-251、254、260",
    Q002: "20-21",
    Q003: "23-24",
    Q004: "25-26、68",
    Q005: "25",
    Q006: "22、25、171-179",
    Q007: "25、39-40、241、272",
    Q008: "25、27、57-60、351-352",
    Q009: "28、351-352",
    Q010: "52-56、61-66",
    Q011: "113-122、181、189、199-200",
    Q012: "39-40、161-166、181、190、199-200、272",
    Q013: "168、215、241、243、246、250-251、254、257、260",
    Q014: "171-179、215",
    Q015: "221-237、241、250-251",
    Q016: "260-270、263-265",
    Q017: "272-275",
    Q018: "67-73、128、132、194-196、315、318-321",
    Q019: "315、318-321",
    Q020: "183-187"
  };

  Object.entries(pptQuestionPages).forEach(([id, pages]) => {
    const question = questionById(id);
    if (!question) return;
    question.pptPages = pages;
    const marker = `PPT 出處：第 ${pages} 頁`;
    if (!String(question.description || "").includes("PPT 出處")) {
      question.description = `${question.description || ""}\n${marker}`.trim();
    }
  });

  const pptBranchPages = {
    "鑑賞期": "19、241、250-251、254、260",
    "新建工單": "68、136-138、315",
    "工單追蹤／未回覆安撫": "318-321",
    "KAM表": "67-70、315",
    "CAM表": "67-70、315",
    "KAM表．SBS": "67-70、315",
    "廠直表": "67、70、73、128、132、194-196",
    "廠直／產值表": "67、70、73、128、132、194-196",
    "DSS 商談詢問廠商": "73、128、132、194-196"
  };

  Object.entries(pptBranchPages).forEach(([branch, pages]) => {
    const tpl = template("GLOBAL", branch);
    const marker = `PPT 出處：第 ${pages} 頁`;
    if (tpl && !String(tpl.text || "").includes(marker)) tpl.text = `${tpl.text}\n\n${marker}`;
    data.variables
      .filter(variable => variable.q === "GLOBAL" && variable.branch === branch)
      .forEach(variable => {
        const note = String(variable.sourceNote || "");
        if (!note.includes("PPT 出處")) variable.sourceNote = `${note}${note ? "\n\n" : ""}${marker}`;
      });
    data.actions
      .filter(action => action.q === "GLOBAL" && action.branch === branch)
      .forEach(action => {
        const note = String(action.sourceNote || "");
        if (!note.includes("PPT 出處")) action.sourceNote = `${note}${note ? "\n\n" : ""}${marker}`;
      });
  });

  const pptLinkPageRules = [
    [/Inventory-Expiration-Date/i, "53-56"],
    [/AOD-Main/i, "57-60"],
    [/Inventory-Inbound-Date/i, "61-66"],
    [/sites\.google\.com\/shopee(?:mobile-external)?\.com\/scs-cs-tool\/home|SCS CS Tool/i, "52"],
    [/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI|Add-on_Sub|Add-on_Main|Add-on \/ Gift \/ Bundle/i, "351-352"],
    [/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc|個案補碼追蹤表/i, "175-176"],
    [/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk|HighRisk|2025查詢表4/i, "185-187"],
    [/1daef549-eeb1-475a-81b1-af4a599ad6c9|延遲補償/i, "184"],
    [/AOC_OPS_V2|Offline RR.*小工具/i, "263-265"],
    [/scm\.internal\.shopee\.tw|Shopee Drop Shipping|DSS/i, "73、128、132、194-196"],
    [/jira\.shopee\.io|Shopee Jira|Jira/i, "68、136-138、315"],
    [/dms\.cs\.shopee\.tw|CS Portal/i, "5、116、185-186、264、266"],
    [/cs\.localshop\.shopee\.tw|InHouse/i, "5、79、283、347-348"],
    [/order-admin\.shopee\.tw|Order Admin/i, "5、20-21、195、221-237"],
    [/promotion-admin\.shopee\.tw|Promotion Admin/i, "171-179"],
    [/admin\.user\.shopee\.io|User Portal/i, "5、185-187"],
    [/sci\.twtc\.shopee\.tw|SCI/i, "5、134、161-166、181"],
    [/shopee24-hub|Information Hub/i, "5、134"],
    [/help\.shopee\.tw\/portal\/4\/article\/80178|七天鑑賞期|鑑賞期/i, "19"],
    [/help\.shopee\.tw\/portal\/4\/article\/79943|help\.shopee\.tw\/portal\/4\/article\/79856|退貨申請|商品如何退回/i, "241、250-251"],
    [/help\.shopee\.tw\/portal\/4\/article\/149656|延遲訂單補償規則/i, "183-187"],
    [/help\.shopee\.tw\/portal\/4\/article\/186734|help\.shopee\.tw\/portal\/4\/article\/145979|最快隔日到|隔日到貨/i, "25、183"],
    [/docs\.google\.com\/spreadsheets\/d\/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I|KAM表/i, "67-70、315"],
    [/docs\.google\.com\/spreadsheets\/d\/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8|廠商直送/i, "67、70、194-196"]
  ];

  function pptPagesForLink(link) {
    const haystack = `${link?.title || ""} ${link?.url || ""}`;
    const found = pptLinkPageRules.find(([pattern]) => pattern.test(haystack));
    return found ? found[1] : "";
  }

  function annotatePptLink(link) {
    if (!link?.url) return link;
    const pages = pptPagesForLink(link);
    if (!pages || String(link.title || "").includes("PPT 第")) return link;
    return { ...link, title: `${link.title || "來源連結"}（PPT 第 ${pages} 頁）` };
  }

  function annotateSourceItem(item) {
    if (!item || !Array.isArray(item.sourceLinks)) return;
    const pages = [...new Set(item.sourceLinks.map(pptPagesForLink).filter(Boolean))];
    item.sourceLinks = item.sourceLinks.map(annotatePptLink);
    item.sourceUrl = item.sourceLinks[0]?.url || item.sourceUrl || "";
    if (pages.length && !String(item.sourceNote || "").includes("連結出處")) {
      item.sourceNote = `${item.sourceNote || ""}${item.sourceNote ? "\n\n" : ""}連結出處：PPT 第 ${pages.join("、")} 頁`;
    }
  }

  [...data.variables, ...data.actions, ...(data.fields || [])].forEach(annotateSourceItem);

  const glossaryTerms = [
    ["Buyer Username", "買家帳號"],
    ["Order SN", "訂單編號"],
    ["Product ID", "商品 ID"],
    ["Voucher Code", "優惠券代碼"],
    ["Return ID", "退貨退款案件編號"],
    ["User ID", "使用者 ID"],
    ["add_on_deal_id", "加價購活動 ID"],
    ["AOC", "After Order Completed，訂單完成後退貨退款"],
    ["AOD", "Add-on Deal，加價購活動"],
    ["BAU", "Business as Usual，日常營運支援窗口"],
    ["COD", "Cash on Delivery，貨到付款"],
    ["CsP", "CS Portal，客服查詢系統"],
    ["CP", "Customer Portal，客服系統"],
    ["DB", "Database，資料表"],
    ["DSS", "Data Suite / 內部查詢系統"],
    ["KAM", "Key Account Manager，品牌或賣場窗口"],
    ["NDD", "Next Day Delivery，隔日到貨"],
    ["NRR", "Normal Return/Refund，一般退貨退款"],
    ["OMS", "Order Management System，訂單管理系統"],
    ["OOS", "Out of Stock，缺貨"],
    ["OPS", "Operations，營運窗口"],
    ["OSN", "Order SN，訂單編號"],
    ["PID", "Product ID，商品 ID"],
    ["QA", "Quality Assurance，品質或話術協助窗口"],
    ["RR", "Return/Refund，退貨退款案件"],
    ["SCS", "Shopee Mall / 商城相關流程"],
    ["SPX", "Shopee Xpress，蝦皮物流"],
    ["UID", "User ID，使用者 ID"],
    ["WH", "Warehouse，倉庫"],
    ["WMS", "Warehouse Management System，倉儲管理系統"]
  ].sort((a, b) => b[0].length - a[0].length);

  function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function addGlossary(text) {
    let result = String(text || "");
    glossaryTerms.forEach(([term, explanation]) => {
      const pattern = new RegExp(`(^|[^A-Za-z0-9_])(${escapeRegExp(term)})(?![A-Za-z0-9_]*[（(])`, "g");
      let applied = false;
      result = result.replace(pattern, (match, prefix, value) => {
        if (applied) return match;
        applied = true;
        return `${prefix}${value}（${explanation}）`;
      });
    });
    return result
      .replace(/OOS（Out of Stock，缺貨）\s*缺貨/g, "OOS（Out of Stock，缺貨）")
      .replace(/COD（Cash on Delivery，貨到付款）\s*付款/g, "COD（Cash on Delivery，貨到付款）");
  }

  function shouldGlossaryQuestionId(qid) {
    const match = String(qid || "").match(/^Q(\d+)$/);
    return match && Number(match[1]) >= 5;
  }

  data.questions.forEach(question => {
    if (!shouldGlossaryQuestionId(question.id)) return;
    question.description = addGlossary(question.description);
    question.answerText = addGlossary(question.answerText);
  });
  data.templates.forEach(templateItem => {
    if (shouldGlossaryQuestionId(templateItem.q)) templateItem.text = addGlossary(templateItem.text);
  });
  data.variables.forEach(variable => {
    if (!shouldGlossaryQuestionId(variable.q)) return;
    variable.hint = addGlossary(variable.hint);
    variable.sourceNote = addGlossary(variable.sourceNote);
  });
  data.actions.forEach(action => {
    if (!shouldGlossaryQuestionId(action.q)) return;
    action.note = addGlossary(action.note);
    action.sourceNote = addGlossary(action.sourceNote);
  });

})();
