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
    }
  ],
  "variables": [
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "required": true,
      "type": "date",
      "category": "發票相關",
      "autoDays": 0,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "required": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "found_keyword",
      "label": "找到的關鍵字／內容",
      "hint": "把商品頁看到的資訊貼上",
      "required": true,
      "multiline": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "廠商直送，填表問廠商",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false
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
      "common": false,
      "category": "常用"
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
      "common": false,
      "category": "鑑賞期"
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
      "common": false,
      "category": "鑑賞期"
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
      "common": false,
      "category": "常用"
    },
    {
      "q": "Q003",
      "branch": "查詢發票",
      "code": "V001",
      "label": "小編代號",
      "hint": "[LN]",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用"
    },
    {
      "q": "Q003",
      "branch": "補打統編",
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "發票相關"
    },
    {
      "q": "Q003",
      "branch": "補打統編",
      "code": "V002",
      "label": "發貨日期",
      "hint": "數入發貨日期",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用"
    }
  ],
  "templates": [
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
      "branch": "廠商直送，填表問廠商",
      "text": "商品頁沒有看到客人詢問的 {{customer_need}}。\n此單／商品需要走廠商直送詢問，請到廠商直送表填資料：\n訂單編號：{{order_id}}\n商品代碼：{{product_id}}\n客人要找：{{customer_need}}\n送出後可先回覆客人：我們會再與廠商確認，最晚 2 個工作天（不含假日）內回覆。"
    },
    {
      "q": "Q004",
      "branch": "自有物流/一般商品，填表問廠商",
      "text": "商品頁沒有看到客人詢問的 {{customer_need}}。\n請到一般商品詢問表填資料：\n訂單編號：{{order_id}}\n商品代碼：{{product_id}}\n客人要找：{{customer_need}}\n送出後可先回覆客人：我們會再與廠商確認，最晚 2 個工作天（不含假日）內回覆。"
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
    },
    {
      "q": "Q003",
      "branch": "查詢發票",
      "text": "回答客人\n查詢「會員編號」及「歸戶驗證碼」，查詢方式如下：\n▪ App 版操作：\n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：\n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n\n操作方式如下：\n▪ 前往關貿網路電子發票平台：https://reurl.cc/0k2NaM\n▪ 填寫「發票號碼」、「會員編號」、「歸戶驗證碼」\n▪ 選擇欲查詢的發票月份\n{{V001}}"
    },
    {
      "q": "Q003",
      "branch": "補打統編",
      "text": "要跟客人說以下：\n查詢「會員編號」及「歸戶驗證碼」，查詢方式如下：\n▪ App 版操作：\n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：\n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n\n補打統編操作方式如下：\n▪ 前往關貿網路電子發票平台：https://reurl.cc/0k2NaM\n▪ 填寫「發票號碼」、「會員編號」、「歸戶驗證碼」\n▪ 選擇欲查詢的發票日期\n▪ 點選【補打統編】\n▪ 輸入發票編號、統一編號及公司抬頭\n▪ 確認資料無誤後點選【確認】，即可完成申請。\n\n要提醒客人：\n▪ 申請完成後，約 1～2 個工作天（不含假日）會收到新的電子發票通知信。\n▪ 如需三聯式紙本發票，可自行列印通知信中的 PDF 附檔；開啟密碼為客人填寫的統一編號。\n▪ 若原先填寫的統一編號或公司抬頭有誤，且仍在可異動期限內，請參考：https://reurl.cc/3yjVRX\n▪ 若發票已設定為捐贈，或超過申請期限，將無法修改或補打統一編號。\n▪ 發票異動申請期限為發票開立期別的下一個單月 5 日前；例如 3、4 月期發票可申請至 5 月 5 日，5、6 月期發票則可申請至 7 月 5 日。\n▪ （如果看得到發貨日期）要提醒客人在{{V002}}發貨的發票應該在{{invoice_period_deadline}}前做申請"
    }
  ],
  "actions": [
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "action": "查關貿電子發票平台",
      "needed": true,
      "note": "先取消再補打"
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
      "q": "Q001",
      "branch": "共用",
      "action": "不用建單",
      "needed": true,
      "note": "只需回覆客人"
    },
    {
      "q": "Q003",
      "branch": "補打統編",
      "action": "查關貿電子發票平台",
      "needed": true,
      "note": "補打統編"
    }
  ],
  "updatedAt": "2026-07-31T03:31:06.654Z",
  "fields": [
    {
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "required": true,
      "type": "date",
      "category": "發票相關",
      "autoDays": 0,
      "multiline": false,
      "common": false
    },
    {
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "required": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "common": false
    },
    {
      "code": "found_keyword",
      "label": "找到的關鍵字／內容",
      "hint": "把商品頁看到的資訊貼上",
      "required": true,
      "multiline": true,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "common": false
    },
    {
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false
    },
    {
      "code": "shipping_status",
      "label": "物流單號",
      "hint": "貼上系統查到的狀態",
      "required": true,
      "multiline": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "common": false
    },
    {
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "required": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "common": false
    },
    {
      "code": "pickup_date",
      "label": "取貨日期",
      "hint": "日期，例如 2026/7/30",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用"
    },
    {
      "code": "return_start",
      "label": "第一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "type": "text",
      "autoSource": "pickup_date",
      "autoDays": 1,
      "required": false,
      "multiline": false,
      "common": false,
      "category": "鑑賞期"
    },
    {
      "code": "return_deadline",
      "label": "最後一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "type": "text",
      "autoSource": "pickup_date",
      "autoDays": 15,
      "required": false,
      "multiline": false,
      "common": false,
      "category": "鑑賞期"
    },
    {
      "code": "V001",
      "label": "小編代號",
      "hint": "[LN]",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用"
    },
    {
      "code": "V002",
      "label": "發貨日期",
      "hint": "數入發貨日期",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用"
    }
  ]
};
