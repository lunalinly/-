// 由 SOP 視覺化編輯室產生；操作畫面僅使用中文。
window.SOP_DATA = {
  "version": "2026/7/31",
  "sourceUrl": "https://docs.google.com/spreadsheets/d/1cDKewCq-QZ6ln3f8keneZ8p8N7NXTCGnYPAouxmyveI/edit?gid=101001#gid=101001",
  "questions": [
    {
      "id": "Q001",
      "name": "詢問鑑賞期",
      "keywords": "鑑賞期,七天,15天,十五天,退貨期限",
      "description": "依取貨日期產生鑑賞期說明",
      "enabled": true
    },
    {
      "id": "Q002",
      "name": "詢問付款方式",
      "keywords": "付款,付款方式,刷卡,分期,貨到付款",
      "description": "說明商城支援付款方式",
      "enabled": true
    },
    {
      "id": "Q003",
      "name": "詢問發票",
      "keywords": "發票,電子發票,統編,抬頭,補發,補打",
      "description": "依發票需求分支產生不同 SOP",
      "enabled": true
    },
    {
      "id": "Q004",
      "name": "詢問商品資訊",
      "keywords": "規格,款式,圖片,商品資訊,尺寸,材質,功能",
      "description": "依商品頁是否有資訊決定回覆或查廠商",
      "enabled": true
    },
    {
      "id": "Q005",
      "name": "出貨/配送查詢",
      "keywords": "出貨,配送,物流,廠商直送,一般出貨,宅配",
      "description": "依出貨類型決定查詢來源與是否建單",
      "enabled": true
    },
    {
      "id": "Q006",
      "name": "商品異常/需回報",
      "keywords": "瑕疵,破損,故障,異常,少件,缺件",
      "description": "依是否需回報廠商決定工單/Jira",
      "enabled": true
    }
  ],
  "flows": [
    {
      "question": "詢問鑑賞期",
      "steps": [],
      "branch": "共用",
      "next": "填入取貨日期，產生鑑賞期回覆"
    },
    {
      "question": "詢問付款方式",
      "steps": [],
      "branch": "共用",
      "next": "直接複製付款方式說明"
    },
    {
      "question": "詢問發票",
      "steps": [
        {
          "prompt": "客人是哪一種發票需求？",
          "option": "查詢發票"
        }
      ],
      "branch": "查詢發票",
      "next": "請客人查會員編號、歸戶驗證碼，再到關貿平台查詢"
    },
    {
      "question": "詢問發票",
      "steps": [
        {
          "prompt": "客人是哪一種發票需求？",
          "option": "補打統編"
        }
      ],
      "branch": "補打統編",
      "next": "引導客人到關貿平台補打統編，提醒申請期限"
    },
    {
      "question": "詢問發票",
      "steps": [
        {
          "prompt": "客人是哪一種發票需求？",
          "option": "統編／抬頭打錯"
        }
      ],
      "branch": "統編／抬頭打錯",
      "next": "先取消目前三聯式資訊，再重新補打正確資料"
    },
    {
      "question": "詢問發票",
      "steps": [
        {
          "prompt": "客人是哪一種發票需求？",
          "option": "補發電子發票通知信"
        }
      ],
      "branch": "補發電子發票通知信",
      "next": "提供自助中心或關貿平台補發方式"
    },
    {
      "question": "詢問商品資訊",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁有找到"
        }
      ],
      "branch": "商品頁有找到",
      "next": "填寫在產品頁哪裡找到、找到什麼內容，整理後回覆客人"
    },
    {
      "question": "詢問商品資訊",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "接下來要用哪一種方式詢問/查詢？",
          "option": "廠商直送，填表問廠商"
        }
      ],
      "branch": "廠商直送，填表問廠商",
      "next": "到廠商直送表填資料，送出後等待廠商回覆"
    },
    {
      "question": "詢問商品資訊",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "接下來要用哪一種方式詢問/查詢？",
          "option": "自有物流/一般商品，填表問廠商"
        }
      ],
      "branch": "自有物流/一般商品，填表問廠商",
      "next": "到一般商品詢問表填資料，送出後等待回覆"
    },
    {
      "question": "詢問商品資訊",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "接下來要用哪一種方式詢問/查詢？",
          "option": "先不用填表，直接回覆會確認"
        }
      ],
      "branch": "先不用填表，直接回覆會確認",
      "next": "回覆會與廠商確認，最晚 2 個工作天內回覆"
    },
    {
      "question": "出貨/配送查詢",
      "steps": [
        {
          "prompt": "這張訂單是哪一種出貨類型？",
          "option": "廠商直送"
        }
      ],
      "branch": "廠商直送",
      "next": "查廠商直送表，必要時建立追蹤紀錄"
    },
    {
      "question": "出貨/配送查詢",
      "steps": [
        {
          "prompt": "這張訂單是哪一種出貨類型？",
          "option": "一般出貨"
        }
      ],
      "branch": "一般出貨",
      "next": "查訂單/物流系統，不用查廠商直送表"
    },
    {
      "question": "商品異常/需回報",
      "steps": [
        {
          "prompt": "這個狀況要不要回報廠商？",
          "option": "需要回報廠商"
        }
      ],
      "branch": "需要回報廠商",
      "next": "建立工單與 Jira，記錄商品異常資訊"
    },
    {
      "question": "商品異常/需回報",
      "steps": [
        {
          "prompt": "這個狀況要不要回報廠商？",
          "option": "不用回報廠商"
        }
      ],
      "branch": "不用回報廠商",
      "next": "整理現有資訊直接回覆客人，不用建立 Jira"
    }
  ],
  "variables": [
    {
      "q": "Q003",
      "branch": "補打統編",
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "required": true,
      "type": "date"
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "required": true,
      "type": "date"
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "required": true
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "found_keyword",
      "label": "找到的關鍵字／內容",
      "hint": "把商品頁看到的資訊貼上",
      "required": true,
      "multiline": true
    },
    {
      "q": "Q004",
      "branch": "先不用填表，直接回覆會確認",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "order_id",
      "label": "訂單編號",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "product_id",
      "label": "商品代碼",
      "hint": "貼上商品代碼",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "order_id",
      "label": "訂單編號",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "product_id",
      "label": "商品代碼",
      "hint": "貼上商品代碼",
      "required": true,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true
    },
    {
      "q": "Q005",
      "branch": "廠商直送",
      "code": "order_id",
      "label": "訂單編號",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true
    },
    {
      "q": "Q005",
      "branch": "廠商直送",
      "code": "vendor_name",
      "label": "廠商名稱",
      "hint": "廠商直送表上的廠商",
      "required": true
    },
    {
      "q": "Q005",
      "branch": "廠商直送",
      "code": "lookup_result",
      "label": "查詢結果",
      "hint": "貼上查表後的狀態",
      "required": true,
      "multiline": true
    },
    {
      "q": "Q005",
      "branch": "一般出貨",
      "code": "order_id",
      "label": "訂單編號",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true
    },
    {
      "q": "Q005",
      "branch": "一般出貨",
      "code": "shipping_status",
      "label": "物流／訂單狀態",
      "hint": "貼上系統查到的狀態",
      "required": true,
      "multiline": true
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "code": "order_id",
      "label": "訂單編號",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "code": "product_id",
      "label": "商品代碼",
      "hint": "貼上商品代碼",
      "required": true,
      "common": true
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "code": "issue_detail",
      "label": "問題描述",
      "hint": "描述破損／瑕疵／少件狀況",
      "required": true,
      "multiline": true
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "required": true
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "code": "jira_key",
      "label": "Jira 單號",
      "hint": "建立後填入",
      "required": true
    },
    {
      "q": "Q006",
      "branch": "不用回報廠商",
      "code": "issue_detail",
      "label": "問題描述",
      "hint": "填客人反應的狀況",
      "required": true,
      "multiline": true
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "pickup_date",
      "label": "取貨日期",
      "hint": "日期，例如 2026/7/30",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "return_start",
      "label": "第一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "type": "text",
      "autoSource": "pickup_date",
      "autoDays": 1,
      "required": false,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "return_deadline",
      "label": "最後一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "type": "text",
      "autoSource": "pickup_date",
      "autoDays": 15,
      "required": false,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q002",
      "branch": "共用",
      "code": "V001",
      "label": "小編代號",
      "hint": "[LN]",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q003",
      "branch": "查詢發票",
      "code": "V002",
      "label": "新欄位",
      "hint": "",
      "type": "text",
      "required": true
    }
  ],
  "templates": [
    {
      "q": "Q003",
      "branch": "補打統編",
      "text": "請客人先查詢「會員編號」及「歸戶驗證碼」，再前往關貿網路電子發票平台申請補打統編。\n提醒客人：發票異動申請期限為 {{invoice_period_deadline}} 前；若已捐贈或超過期限，將無法修改或補打統一編號。"
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "text": "請客人先取消目前的三聯式發票資訊，再重新申請補打正確資料。\n提醒客人：發票異動申請期限為 {{invoice_period_deadline}} 前；若已捐贈或超過期限，將無法修改或補打統一編號。"
    },
    {
      "q": "Q003",
      "branch": "補發電子發票通知信",
      "text": "可請客人透過自助服務中心或關貿網路電子發票平台申請補發電子發票通知信。\n若使用自助服務中心，通知信約 3～5 個工作天補發；若使用關貿平台，通知信約 1～2 個工作天補發。"
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "text": "請先打開商品頁，確認商品圖片、商品規格與商品描述。\n客人要找 {{customer_need}}，在 {{product_page_area}} 裡有看到：{{found_keyword}}。\n請把這些資訊整理後回覆客人。"
    },
    {
      "q": "Q004",
      "branch": "先不用填表，直接回覆會確認",
      "text": "目前商品頁沒有看到客人詢問的 {{customer_need}}。\n請回覆客人：我們會再與廠商確認，最晚 2 個工作天（不含假日）內回覆。"
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "text": "商品頁沒有看到客人詢問的 {{customer_need}}。\n此單／商品需要走廠商直送詢問，請到廠商直送表填資料：\n訂單編號：{{order_id}}\n商品代碼：{{product_id}}\n客人要找：{{customer_need}}\n送出後可先回覆客人：我們會再與廠商確認，最晚 2 個工作天（不含假日）內回覆。"
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "text": "商品頁沒有看到客人詢問的 {{customer_need}}。\n請到一般商品詢問表填資料：\n訂單編號：{{order_id}}\n商品代碼：{{product_id}}\n客人要找：{{customer_need}}\n送出後可先回覆客人：我們會再與廠商確認，最晚 2 個工作天（不含假日）內回覆。"
    },
    {
      "q": "Q005",
      "branch": "廠商直送",
      "text": "此訂單 {{order_id}} 為廠商直送，請先查詢廠商直送表。\n廠商：{{vendor_name}}\n查詢結果：{{lookup_result}}\n請依查詢結果整理後回覆客人；若狀態異常，再建立追蹤紀錄。"
    },
    {
      "q": "Q005",
      "branch": "一般出貨",
      "text": "此訂單 {{order_id}} 為一般出貨，請查訂單／物流系統。\n目前狀態：{{shipping_status}}\n請依系統狀態整理後回覆客人。"
    },
    {
      "q": "Q006",
      "branch": "不用回報廠商",
      "text": "目前可依現有資訊回覆客人，暫時不用建立工單或 Jira。\n問題描述：{{issue_detail}}"
    },
    {
      "q": "Q001",
      "branch": "共用",
      "text": "要跟客人說蝦皮有提供優於消保法（七天鑑賞期）的「15天鑑賞期」，是從系統判定的取貨日隔天開始算。\n取貨日為 {{pickup_date}}，那鑑賞期就是從 {{return_start}} 開始算 15 天。\n要記得在 {{return_deadline}} 前提出退貨申請。"
    },
    {
      "q": "Q002",
      "branch": "共用",
      "text": "告訴客人：\n▪ 蝦皮商城支援貨到付款（僅限現金）、信用卡／金融卡及信用卡分期付款。\n▪ 信用卡分期付款需結帳總金額滿 NT$1,000。\n▪ 若與其他蝦皮商家商品合併結帳，僅能選擇貨到付款。\n▪ 蝦皮商城訂單成立後，無法變更付款方式。\n{{V001}}"
    }
  ],
  "actions": [
    {
      "q": "Q003",
      "branch": "補打統編",
      "action": "查關貿電子發票平台",
      "needed": true,
      "note": "補打統編"
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "action": "查關貿電子發票平台",
      "needed": true,
      "note": "先取消再補打"
    },
    {
      "q": "Q005",
      "branch": "廠商直送",
      "action": "查廠商直送表",
      "needed": true,
      "note": "使用廠商名稱與訂單編號查詢"
    },
    {
      "q": "Q005",
      "branch": "一般出貨",
      "action": "查訂單／物流系統",
      "needed": true,
      "note": "不用查廠商直送表"
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "action": "key 工單",
      "needed": true,
      "note": "把工單號填回變數區"
    },
    {
      "q": "Q006",
      "branch": "需要回報廠商",
      "action": "key Jira",
      "needed": true,
      "note": "把 Jira 單號填回變數區"
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "action": "填廠商直送詢問表",
      "needed": true,
      "note": "填訂單編號、商品代碼、客人要找的資訊"
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "action": "填一般商品詢問表",
      "needed": true,
      "note": "填訂單編號、商品代碼、客人要找的資訊"
    },
    {
      "q": "Q006",
      "branch": "不用回報廠商",
      "action": "不用 key Jira",
      "needed": false,
      "note": "直接整理回覆"
    },
    {
      "q": "Q001",
      "branch": "共用",
      "action": "不用建單",
      "needed": true,
      "note": "只需回覆客人"
    }
  ],
  "updatedAt": "2026-07-31T02:54:27.684Z"
};
