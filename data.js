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
      "enabled": true,
      "answerText": ""
    },
    {
      "id": "Q002",
      "name": "詢問付款方式",
      "keywords": "付款,付款方式,刷卡,分期,貨到付款",
      "description": "說明商城支援付款方式",
      "enabled": true,
      "answerText": ""
    },
    {
      "id": "Q003",
      "name": "詢問發票",
      "keywords": "發票,電子發票,統編,抬頭,補發,補打",
      "description": "依發票需求分支產生不同 SOP",
      "enabled": true,
      "answerText": ""
    },
    {
      "id": "Q004",
      "name": "詢問商品資訊",
      "keywords": "規格,款式,圖片,商品資訊,尺寸,材質,功能",
      "description": "依商品頁是否有資訊決定回覆或查廠商",
      "enabled": true,
      "answerText": "請先打開商品頁，確認商品圖片、商品規格與商品描述。"
    }
  ],
  "flows": [
    {
      "question": "詢問鑑賞期",
      "steps": [],
      "branch": "共用",
      "next": "填入取貨日期，產生鑑賞期回覆",
      "routes": [],
      "answerBranches": [
        "共用"
      ]
    },
    {
      "question": "詢問付款方式",
      "steps": [],
      "branch": "共用",
      "next": "直接複製付款方式說明",
      "routes": [],
      "answerBranches": [
        "共用"
      ]
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
      "next": "請客人查會員編號、歸戶驗證碼，再到關貿平台查詢",
      "routes": [],
      "answerBranches": [
        "查詢發票"
      ]
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
      "next": "引導客人到關貿平台補打統編，提醒申請期限",
      "routes": [],
      "answerBranches": [
        "補打統編"
      ]
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
      "next": "先取消目前三聯式資訊，再重新補打正確資料",
      "routes": [],
      "answerBranches": [
        "統編／抬頭打錯"
      ]
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
      "next": "提供自助中心或關貿平台補發方式",
      "routes": [],
      "answerBranches": [
        "補發電子發票通知信"
      ]
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
      "next": "填寫在產品頁哪裡找到、找到什麼內容，整理後回覆客人",
      "routes": [],
      "answerBranches": [
        "商品頁有找到"
      ]
    },
    {
      "question": "詢問商品資訊",
      "branch": "商品頁沒有找到",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        }
      ],
      "routes": [
        {
          "sourceCode": "V003",
          "value": "蝦皮直營 _ 生活超市 - 最快當日到",
          "targetBranch": "商品頁有找到",
          "values": [
            "蝦皮直營 _ 生活超市 - 最快當日到"
          ],
          "assignments": []
        }
      ],
      "answerBranches": [
        "商品頁沒有找到"
      ],
      "next": "要去「歷史發問查詢」表查詢"
    },
    {
      "question": "詢問商品資訊",
      "branch": "歷史發問查詢沒有找到",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "那在歷史發問查詢有找到嗎?",
          "option": "歷史發問查詢沒有找到"
        }
      ],
      "routes": [],
      "answerBranches": [
        "商品頁沒有找到",
        "歷史發問查詢沒有找到"
      ],
      "next": "這個商城是要上KAM表還是廠直表"
    },
    {
      "question": "詢問商品資訊",
      "branch": "歷史發問查詢有找到",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "那在歷史發問查詢有找到嗎?",
          "option": "歷史發問查詢有找到"
        }
      ],
      "routes": [],
      "answerBranches": [
        "商品頁沒有找到",
        "歷史發問查詢有找到"
      ],
      "next": "整理完回覆給客人"
    }
  ],
  "variables": [
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
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "code": "invoice_period_deadline",
      "label": "發票異動期限",
      "hint": "可填下一個單月 5 日",
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": true
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "found_keyword",
      "label": "找到的關鍵字／內容",
      "hint": "把商品頁看到的資訊貼上",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "code": "V003",
      "label": "商城名字",
      "hint": "產品頁查出商城名稱",
      "sourceNote": "產品頁往下滑，電腦版的商店名稱在加入購物車下面，手機板在評論與精選影片下面",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢有找到",
      "code": "V004",
      "label": "KAM回覆_歷史發問",
      "hint": "",
      "sourceNote": "歷史發問查詢的試算表的KAM回覆裡會有",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false
    }
  ],
  "templates": [
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
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "text": "要請客人先取消目前的三聯式發票資訊，再重新申請補打正確資料。\n\n請客人先查詢「會員編號」及「歸戶驗證碼」，查詢方式如下：\n▪ App 版操作：  \n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：  \n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n\n第一步｜取消目前的三聯式發票資訊\n▪ 前往「關貿網路電子發票平台」（連結：https://reurl.cc/0k2NaM）\n▪ 填寫會員及發票相關資訊  \n▪ 選取欲查詢的發票日期區間  \n▪ 點選【取消統編】\n\n取消作業約需 2 個工作天；完成後，您將收到關貿寄出的通知信件。\n\n第二步｜重新申請補打統編\n收到取消完成通知後，請再次前往關貿網路電子發票平台，輸入發票資訊、會員編號及歸戶驗證碼，選取發票日期區間後點選【補打統編】，即可重新填寫正確的統一編號及公司行號抬頭。\n\n\n要提醒客人：\n▪ 發票異動申請期限為發票開立期別的下一個單月 5 日前；例如 3、4 月期發票可申請至 5 月 5 日，5、6 月期發票則可申請至 7 月 5 日。  \n▪ （如果看得到發貨日期）要提醒客人在{發貨日期}發貨的發票應該在{{invoice_period_deadline}}前做申請\n▪ 若發票已設定為捐贈，或超過申請期限，將無法修改或補打統一編號，敬請見諒。  \n▪ 補打申請完成後，約 1～2 個工作天（不含假日）會收到新的電子發票通知信。  \n▪ 如需三聯式紙本發票，可自行列印通知信中的 PDF 附檔；開啟密碼為您填寫的統一編號。"
    },
    {
      "q": "Q003",
      "branch": "補發電子發票通知信",
      "text": "可透過以下兩種方式申請補發：\n\n方式一｜自助服務中心申請\n前往「發票開立通知補發申請表單」（連結：https://reurl.cc/DYdVlR）提出申請。\n若填寫資料正確，通知信將於 3～5 個工作天（不含假日）補發至客人填寫的電子信箱。客人可透過「查詢進度」（連結：https://reurl.cc/gN0qeX）查看申請狀態。\n\n方式二｜關貿網路電子發票平台申請\n請先查詢「會員編號」及「歸戶驗證碼」：\n▪ App 版操作：  \n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：  \n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n取得資料後，請依下列步驟申請：\n▪ 前往「關貿網路電子發票平台」（連結：https://reurl.cc/0k2NaM） \n▪ 填寫會員及發票相關資訊  \n▪ 選擇欲查詢的發票日期  \n▪ 點選【補發開立通知】  \n▪ 點選【變更】並輸入欲收取通知信的電子信箱  \n▪ 點選【寄送】，即可完成申請  \n通知信將於 1～2 個工作天（不含假日）補發至客人填寫的電子信箱。\n\n申請補發時填寫的電子信箱，可與帳號原先設定的收信信箱不同。"
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "text": "客人要找 {{customer_need}}，在 {{product_page_area}} 裡有看到：{{found_keyword}}。\n請把這些資訊整理後回覆客人。"
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "text": "去商品頁網址找出Product ID與內文查出商城名稱，Product ID是：{{product_id}}；商城名稱是：{{V003}}\n前往「歷史發問查詢」，因為他是{{V003}}"
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢有找到",
      "text": "查詢到曾經廠商有回覆過：{{V004}}\n整理完回覆給客人"
    }
  ],
  "actions": [
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
    },
    {
      "q": "Q003",
      "branch": "統編／抬頭打錯",
      "action": "查關貿電子發票平台",
      "needed": true,
      "note": "先取消再補打"
    }
  ],
  "updatedAt": "2026-07-31T05:31:46.902Z",
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
      "common": false,
      "fillRules": []
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
      "multiline": false,
      "fillRules": []
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
      "common": false,
      "fillRules": []
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
      "common": false,
      "fillRules": []
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
      "multiline": false,
      "fillRules": []
    },
    {
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "required": true,
      "common": false,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceUrl": "",
      "fillRules": []
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
      "common": false,
      "fillRules": []
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
      "common": false,
      "fillRules": []
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
      "category": "常用",
      "fillRules": []
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
      "category": "鑑賞期",
      "fillRules": []
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
      "category": "鑑賞期",
      "fillRules": []
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
      "category": "常用",
      "fillRules": []
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
      "category": "常用",
      "fillRules": []
    },
    {
      "code": "V003",
      "label": "新欄位",
      "category": "未分類",
      "hint": "",
      "type": "text",
      "required": true,
      "fillRules": []
    },
    {
      "code": "V004",
      "label": "新欄位",
      "category": "未分類",
      "hint": "",
      "type": "text",
      "required": true,
      "fillRules": []
    }
  ],
  "decisions": [
    {
      "prompt": "客人是哪一種發票需求？",
      "options": [
        "查詢發票",
        "補打統編",
        "統編／抬頭打錯",
        "補發電子發票通知信"
      ]
    },
    {
      "prompt": "商品頁有沒有找到客人要的資訊？",
      "options": [
        "商品頁有找到",
        "商品頁沒有找到"
      ]
    },
    {
      "prompt": "那在歷史發問查詢有找到嗎?",
      "options": [
        "歷史發問查詢沒有找到",
        "歷史發問查詢有找到"
      ]
    }
  ]
};
