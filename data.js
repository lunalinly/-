// 由 SOP 視覺化編輯室產生；操作畫面僅使用中文。
window.SOP_DATA = {
  "version": "2026/8/1",
  "sourceUrl": "https://docs.google.com/spreadsheets/d/1cDKewCq-QZ6ln3f8keneZ8p8N7NXTCGnYPAouxmyveI/edit?gid=101001#gid=101001",
  "questions": [
    {
      "id": "Q001",
      "name": "詢問鑑賞期",
      "keywords": "鑑賞期,七天,15天,十五天,退貨期限",
      "description": "依取貨日期產生鑑賞期說明",
      "enabled": true,
      "answerText": "要跟客人說蝦皮有提供優於消保法（七天鑑賞期）的「15天鑑賞期」，是從系統判定的取貨日隔天開始算。\n取貨日為 {{pickup_date}}，那鑑賞期就是從 {{return_start}} 開始算 15 天。\n要記得在 {{return_deadline}} 前提出退貨申請。"
    },
    {
      "id": "Q002",
      "name": "詢問付款方式",
      "keywords": "付款,付款方式,刷卡,分期,貨到付款",
      "description": "說明商城支援付款方式",
      "enabled": true,
      "answerText": "告訴客人：\n▪ 蝦皮商城支援貨到付款（僅限現金）、信用卡／金融卡及信用卡分期付款。\n▪ 信用卡分期付款需結帳總金額滿 NT$1,000。\n▪ 若與其他蝦皮商家商品合併結帳，僅能選擇貨到付款。\n▪ 蝦皮商城訂單成立後，無法變更付款方式。\n{{V001}}"
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
      ],
      "answerParts": []
    },
    {
      "question": "詢問付款方式",
      "steps": [],
      "branch": "共用",
      "next": "直接複製付款方式說明",
      "routes": [],
      "answerBranches": [
        "共用"
      ],
      "answerParts": []
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
      ],
      "answerParts": [
        {
          "question": "詢問發票",
          "branch": "查詢發票",
          "beforeText": ""
        }
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
      ],
      "answerParts": [
        {
          "question": "詢問發票",
          "branch": "補打統編",
          "beforeText": ""
        }
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
      ],
      "answerParts": [
        {
          "question": "詢問發票",
          "branch": "統編／抬頭打錯",
          "beforeText": ""
        }
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
      ],
      "answerParts": [
        {
          "question": "詢問發票",
          "branch": "補發電子發票通知信",
          "beforeText": ""
        }
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
      ],
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁有找到",
          "beforeText": ""
        }
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
      "routes": [],
      "answerBranches": [
        "商品頁沒有找到"
      ],
      "next": "要去「歷史發問查詢」表查詢",
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        }
      ]
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
      "next": "整理完回覆給客人",
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        },
        {
          "question": "詢問商品資訊",
          "branch": "歷史發問查詢有找到",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "共用",
      "branch": "KAM表",
      "steps": [],
      "routes": [],
      "answerParts": [
        {
          "question": "共用",
          "branch": "KAM表",
          "beforeText": ""
        }
      ],
      "next": "等待KAM回覆並告訴客人要等1~2個工作天"
    },
    {
      "question": "共用",
      "branch": "KAM表．SBS",
      "steps": [],
      "routes": [],
      "answerParts": [
        {
          "question": "共用",
          "branch": "KAM表．SBS",
          "beforeText": ""
        }
      ],
      "next": "等待KAM回覆並告訴客人要等1~2個工作天"
    },
    {
      "question": "共用",
      "branch": "廠直表",
      "steps": [],
      "routes": [],
      "answerParts": [
        {
          "question": "共用",
          "branch": "廠直表．SMS",
          "beforeText": ""
        }
      ],
      "next": ""
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
      "routes": [
        {
          "sourceCode": "V003",
          "values": [
            "蝦皮直營 _ 生活超市 - 最快當日到"
          ],
          "targetQuestion": "詢問商品資訊",
          "targetBranch": "KAM表",
          "assignments": []
        },
        {
          "sourceCode": "V003",
          "values": [
            "電玩宅急便",
            "OPPO",
            "ASUS",
            "realme",
            "Google 產品官方授權旗艦店",
            "蝦皮耗材館",
            "電玩快客",
            "高雄物產館",
            "美食餐券、票券",
            "Apple產品旗艦館"
          ],
          "targetQuestion": "詢問商品資訊",
          "targetBranch": "KAM表．SBS",
          "assignments": []
        },
        {
          "sourceCode": "V006",
          "values": [
            "是"
          ],
          "targetQuestion": "詢問商品資訊",
          "targetBranch": "廠直表",
          "assignments": []
        }
      ],
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        },
        {
          "question": "共用",
          "branch": "KAM表",
          "beforeText": "沒有找到要到KAM表的{{V011}}分頁"
        }
      ],
      "next": ""
    },
    {
      "question": "詢問商品資訊",
      "branch": "KAM表",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "那在歷史發問查詢有找到嗎?",
          "option": "歷史發問查詢沒有找到"
        },
        {
          "prompt": "這個商城是要上KAM表還是廠直表",
          "option": "KAM表"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        },
        {
          "question": "共用",
          "branch": "KAM表",
          "beforeText": "沒有找到要到KAM表的{{V011}}分頁"
        }
      ],
      "next": "回覆客人等待廠商回覆"
    },
    {
      "question": "詢問商品資訊",
      "branch": "廠直表",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "那在歷史發問查詢有找到嗎?",
          "option": "歷史發問查詢沒有找到"
        },
        {
          "prompt": "這個商城是要上KAM表還是廠直表",
          "option": "廠直表"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        },
        {
          "question": "共用",
          "branch": "廠直表",
          "beforeText": "沒有找到要到廠直表的{{V024}}分頁"
        }
      ],
      "next": "回覆客人等待廠商回覆"
    },
    {
      "question": "詢問商品資訊",
      "branch": "KAM表．SBS",
      "steps": [
        {
          "prompt": "商品頁有沒有找到客人要的資訊？",
          "option": "商品頁沒有找到"
        },
        {
          "prompt": "那在歷史發問查詢有找到嗎?",
          "option": "歷史發問查詢沒有找到"
        },
        {
          "prompt": "這個商城是要上KAM表還是廠直表",
          "option": "KAM表．SBS"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到",
          "beforeText": ""
        },
        {
          "question": "共用",
          "branch": "KAM表．SBS",
          "beforeText": "沒有找到要到KAM表的{{V011}}分頁"
        }
      ],
      "next": "回覆客人等待廠商回覆"
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
      "hint": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": true,
      "category": "常用",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": [],
      "defaultValue": "[LN]"
    },
    {
      "q": "Q003",
      "branch": "查詢發票",
      "code": "V001",
      "label": "小編代號",
      "hint": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": true,
      "category": "常用",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": [],
      "defaultValue": "[LN]"
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
      "category": "物流相關",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": []
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
      "sourceNote": "",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": true,
      "category": "常用",
      "fillRules": [],
      "options": []
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "sourceNote": "",
      "sourceUrl": "",
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
      "sourceNote": "",
      "sourceUrl": "",
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
      "common": false,
      "category": "商品詢問",
      "fillRules": [],
      "sourceLinks": [],
      "options": [],
      "defaultValue": ""
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "code": "V003",
      "label": "商城名字",
      "hint": "",
      "sourceNote": "",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "蝦皮直營 _ 生活超市 - 最快當日到",
            "蝦皮超市"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "蝦皮超市",
            "蝦皮直送 美妝",
            "蝦皮直營 - 3C家電館",
            "蝦皮 免運直送",
            "超級品牌運動",
            "蝦皮日嚐選物所"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V006",
              "value": "",
              "answerText": "且{{V006}}廠商直送或大型運送",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V003"
            }
          ]
        },
        {
          "values": [
            "電玩宅急便",
            "OPPO",
            "ASUS",
            "realme",
            "Google 產品官方授權旗艦店",
            "蝦皮耗材館",
            "電玩快客",
            "高雄物產館",
            "美食餐券、票券",
            "Apple產品旗艦館"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-SBS",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "SBS商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ],
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "code": "V005",
      "label": "分頁_歷史發問",
      "hint": "",
      "sourceNote": "",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "歷史發問",
      "fillRules": [],
      "options": []
    },
    {
      "q": "Q004",
      "branch": "商品頁沒有找到",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "sourceNote": "",
      "sourceUrl": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": true,
      "category": "常用",
      "fillRules": [],
      "options": []
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢有找到",
      "code": "V004",
      "label": "KAM回覆_歷史發問",
      "hint": "",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "category": "歷史發問",
      "fillRules": [],
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢有找到",
      "code": "V007",
      "label": "發問內容_歷史發問",
      "hint": "填入歷史發問裡對應的發問內容",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "category": "歷史發問",
      "fillRules": [],
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "客人沒問不用填",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V009",
      "label": "買家問題_KAM",
      "hint": "整理客人問題後輸入",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V012",
      "label": "問題分類_KAM",
      "hint": "選擇對應的分類",
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceLinks": [],
      "options": [
        "退換貨",
        "退換貨-二次詢問",
        "商品使用",
        "商品規格",
        "配件/贈品",
        "保固相關",
        "品質諮詢",
        "其他",
        "售前-商品使用",
        "售前-商品規格",
        "售前-配件/贈品",
        "售前-保固相關",
        "售前-品質諮詢"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V013",
      "label": "R/R 分類_KAM表",
      "hint": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "sourceNote": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "sourceLinks": [],
      "options": [
        "換貨",
        "補寄",
        "冷鍊",
        "沒有訂單編號所以不用選",
        "沒有符合的選項所以不用選"
      ],
      "defaultValue": "沒有訂單編號所以不用選",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V014",
      "label": "已申退_KAM表",
      "hint": "訂單已經申請退款嗎？",
      "sourceNote": "售後訂單已經申請退款才要勾\n\n如何查詢有沒有退款：\n1. CS Portal\n輸入 OSN、Username 或 Return SN 查詢訂單；在一般資訊區查看 Return 資訊、訂單狀態及時間序。\n\n2. Order Admin Portal\n進入 Return → Return & Refund Requests，利用欄位搜尋訂單；進入詳情後可查看 申請狀態、申請資訊及更新時序。\n\n3. InHouse CS System／聊聊控制台\n從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。\nProcessing：已申請，處理中\nAccepted：退貨退款已完成／接受\nCancelled：曾申請，但已取消\n沒有退貨退款編號或相關欄位：通常表示尚未申請",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        }
      ],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V015",
      "label": "擴大安心退_KAM表",
      "hint": "商品總金額是否低於 NT$1,380",
      "sourceNote": "符合「擴大安心退」需要同時符合以下 4 個條件：\n在 15 天鑑賞期內\n屬於 商品瑕疵，不是買家個人因素\n欲退商品總金額 低於 NT$1,380\n具備 商品及包裝照片",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V016",
      "label": "PDP 建議_KAM表",
      "hint": "看看這個問題覺得要不要上產品頁",
      "sourceNote": "看看這個問題覺得要不要上產品頁",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V017",
      "label": "有沒有訂單編號_KAM表",
      "hint": "",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "有",
        "無"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": [
        {
          "values": [
            "有"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "order_id",
              "value": "",
              "answerText": "訂單編號，所以填入：{{order_id}}／{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        },
        {
          "values": [
            "無"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V018",
              "value": "",
              "answerText": "訂單編號，所以填入：{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        }
      ]
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "從聊聊介面找（最快）\n如果買家從「訂單詳情」進入聊聊，買家名稱附近會直接顯示 訂單編號。\n\n1. 從聊聊控制台找\n▪ 開啟「訂單詳情」：\n▪ 依訂單狀態或建立時間篩選\n▫ 若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除\n訂單列表中顯示的 Order SN 就是訂單編號\n\n2. 從 CS Portal 找\n在搜尋欄輸入買家的 Username，按 Enter 後展開底下的 Order，即可找到該買家的訂單及 OSN。\n▪ 注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。",
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": true,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "找「買家名稱（Buyer Username／User Name）」可用以下方式：\n1. 從 InHouse 聊聊介面找（最快）\n▪ 左側「買家列表」會顯示目前進線買家的名稱。\n▪ 點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。\n\n2. 從 CS Portal 找\n▪ 如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。\n▪ 展開 Order，再查看 Buyer & Seller Info，即可確認買家帳號。\n\n3. 從 User Portal 反查\n如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。（第 97～98 頁）\n\n注意：\nBuyer Username／User Name：買家的帳號名稱。\nUser ID／UID：買家的數字識別碼，兩者不同。\n建立售前案件時，Case Subject 使用的是 Username；售後案件則使用 OSN。",
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "options": [],
      "defaultValue": "Luna Lin",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V019",
      "label": "個案擁有者",
      "hint": "選自己",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "Luna Lin[LN]",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V020",
      "label": "詢問時間_KAM表",
      "hint": "",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "會自動填寫不用動",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。\n售前不用填\n\n查詢方式：\n▪ 進入 Project → Shopee TW SBS（SPTWSBS）。\n▪ 點選 Queues → Switch Queues → Assigned to me。\n▪ 清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。\n如果找不到工單：\n▪ 到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。\n▪ 沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。",
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "options": [],
      "defaultValue": "售前不用填",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V021",
      "label": "備註_KAM表",
      "hint": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "sourceNote": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "（空白）",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V022",
      "label": "結_KAM表",
      "hint": "結單了沒",
      "sourceNote": "結單了在勾",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V011",
      "label": "分頁_KAM表",
      "hint": "會自動填入",
      "sourceNote": "要從KAMS/PMS× CS × Listing 裡選擇對應的分頁",
      "sourceLinks": [
        {
          "title": "KAM表",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": false,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "客人沒問不用填",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V009",
      "label": "買家問題_KAM",
      "hint": "整理客人問題後輸入",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V012",
      "label": "問題分類_KAM",
      "hint": "選擇對應的分類",
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceLinks": [],
      "options": [
        "退換貨",
        "退換貨-二次詢問",
        "商品使用",
        "商品規格",
        "配件/贈品",
        "保固相關",
        "品質諮詢",
        "其他",
        "售前-商品使用",
        "售前-商品規格",
        "售前-配件/贈品",
        "售前-保固相關",
        "售前-品質諮詢"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V013",
      "label": "R/R 分類_KAM表",
      "hint": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "sourceNote": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "sourceLinks": [],
      "options": [
        "換貨",
        "補寄",
        "冷鍊",
        "沒有訂單編號所以不用選",
        "沒有符合的選項所以不用選"
      ],
      "defaultValue": "沒有訂單編號所以不用選",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V014",
      "label": "已申退_KAM表",
      "hint": "訂單已經申請退款嗎？",
      "sourceNote": "售後訂單已經申請退款才要勾\n\n如何查詢有沒有退款：\n1. CS Portal\n輸入 OSN、Username 或 Return SN 查詢訂單；在一般資訊區查看 Return 資訊、訂單狀態及時間序。\n\n2. Order Admin Portal\n進入 Return → Return & Refund Requests，利用欄位搜尋訂單；進入詳情後可查看 申請狀態、申請資訊及更新時序。\n\n3. InHouse CS System／聊聊控制台\n從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。\nProcessing：已申請，處理中\nAccepted：退貨退款已完成／接受\nCancelled：曾申請，但已取消\n沒有退貨退款編號或相關欄位：通常表示尚未申請",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        }
      ],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V015",
      "label": "擴大安心退_KAM表",
      "hint": "商品總金額是否低於 NT$1,380",
      "sourceNote": "符合「擴大安心退」需要同時符合以下 4 個條件：\n在 15 天鑑賞期內\n屬於 商品瑕疵，不是買家個人因素\n欲退商品總金額 低於 NT$1,380\n具備 商品及包裝照片",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V016",
      "label": "PDP 建議_KAM表",
      "hint": "看看這個問題覺得要不要上產品頁",
      "sourceNote": "看看這個問題覺得要不要上產品頁",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V017",
      "label": "有沒有訂單編號_KAM表",
      "hint": "",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "有",
        "無"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": [
        {
          "values": [
            "有"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "order_id",
              "value": "",
              "answerText": "訂單編號，所以填入：{{order_id}}／{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        },
        {
          "values": [
            "無"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V018",
              "value": "",
              "answerText": "訂單編號，所以填入：{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        }
      ]
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "從聊聊介面找（最快）\n如果買家從「訂單詳情」進入聊聊，買家名稱附近會直接顯示 訂單編號。\n\n1. 從聊聊控制台找\n▪ 開啟「訂單詳情」：\n▪ 依訂單狀態或建立時間篩選\n▫ 若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除\n訂單列表中顯示的 Order SN 就是訂單編號\n\n2. 從 CS Portal 找\n在搜尋欄輸入買家的 Username，按 Enter 後展開底下的 Order，即可找到該買家的訂單及 OSN。\n▪ 注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。",
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": true,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "找「買家名稱（Buyer Username／User Name）」可用以下方式：\n1. 從 InHouse 聊聊介面找（最快）\n▪ 左側「買家列表」會顯示目前進線買家的名稱。\n▪ 點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。\n\n2. 從 CS Portal 找\n▪ 如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。\n▪ 展開 Order，再查看 Buyer & Seller Info，即可確認買家帳號。\n\n3. 從 User Portal 反查\n如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。（第 97～98 頁）\n\n注意：\nBuyer Username／User Name：買家的帳號名稱。\nUser ID／UID：買家的數字識別碼，兩者不同。\n建立售前案件時，Case Subject 使用的是 Username；售後案件則使用 OSN。",
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "options": [],
      "defaultValue": "Luna Lin",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V019",
      "label": "個案擁有者",
      "hint": "選自己",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "Luna Lin[LN]",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V020",
      "label": "詢問時間_KAM表",
      "hint": "",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "會自動填寫不用動",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。\n售前不用填\n\n查詢方式：\n▪ 進入 Project → Shopee TW SBS（SPTWSBS）。\n▪ 點選 Queues → Switch Queues → Assigned to me。\n▪ 清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。\n如果找不到工單：\n▪ 到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。\n▪ 沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。",
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "options": [],
      "defaultValue": "售前不用填",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V021",
      "label": "備註_KAM表",
      "hint": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "sourceNote": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "（空白）",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V022",
      "label": "結_KAM表",
      "hint": "結單了沒",
      "sourceNote": "結單了在勾",
      "sourceLinks": [],
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V011",
      "label": "分頁_KAM表",
      "hint": "會自動填入",
      "sourceNote": "要從KAMS/PMS× CS × Listing 裡選擇對應的分頁",
      "sourceLinks": [
        {
          "title": "KAM表",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": false,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307",
      "category": "KAM表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V003",
      "label": "商城名字",
      "hint": "",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "蝦皮直營 _ 生活超市 - 最快當日到",
            "蝦皮超市"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "蝦皮超市",
            "蝦皮直送 美妝",
            "蝦皮直營 - 3C家電館",
            "蝦皮 免運直送",
            "超級品牌運動",
            "蝦皮日嚐選物所"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V006",
              "value": "",
              "answerText": "且{{V006}}廠商直送或大型運送",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V003"
            }
          ]
        },
        {
          "values": [
            "電玩宅急便",
            "OPPO",
            "ASUS",
            "realme",
            "Google 產品官方授權旗艦店",
            "蝦皮耗材館",
            "電玩快客",
            "高雄物產館",
            "美食餐券、票券",
            "Apple產品旗艦館"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-SBS",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "SBS商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ]
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "code": "V023",
      "label": "問題分類_KAM_SBS",
      "hint": "售前的話要選擇「售前-XXX」",
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceLinks": [],
      "options": [
        "退換貨",
        "商品規格",
        "商品使用",
        "配件/贈品",
        "售前-商品規格",
        "售前-商品使用",
        "售前-配件/贈品",
        "售前-保固相關",
        "售前-其他",
        "物流相關(改址/客訴)",
        "其他",
        "保固相關"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "未分類",
      "fillRules": []
    },
    {
      "q": "Q004",
      "branch": "KAM表．SBS",
      "code": "V006",
      "label": "是否是廠直",
      "hint": "選「是」或「不是」",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "是",
        "不是"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "是"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-廠直",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "不是",
            "否"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ]
    },
    {
      "q": "Q004",
      "branch": "KAM表",
      "code": "V006",
      "label": "是否是廠直",
      "hint": "選「是」或「不是」",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "是",
        "不是"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "是"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-廠直",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "不是",
            "否"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ]
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢沒有找到",
      "code": "V006",
      "label": "是否是廠直",
      "hint": "選「是」或「不是」",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "是",
        "不是"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "是"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-廠直",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "不是",
            "否"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ]
    },
    {
      "q": "Q004",
      "branch": "廠直表",
      "code": "V006",
      "label": "是否是廠直",
      "hint": "選「是」或「不是」",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "是",
        "不是"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "商家相關",
      "fillRules": [
        {
          "values": [
            "是"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-廠直",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "不是",
            "否"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ]
    },
    {
      "q": "Q004",
      "branch": "廠直表",
      "code": "V024",
      "label": "分頁_廠直表",
      "hint": "廠直表的下方選分頁",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "未分類",
      "fillRules": []
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
      "text": "去商品頁網址找出Product ID與內文查出商城名稱，Product ID是：{{product_id}}；商城名稱是：{{V003}}\n前往「歷史發問查詢」，因為他是{{V003}}，所以下面的分頁要選擇{{V005}}\n將{{product_id}}填入 PID 看看有沒有顧客詢問「{{customer_need}}」相關的問題"
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢有找到",
      "text": "查詢到曾經有人問過：{{V007}}\n有回覆：{{V004}}\n整理完回覆給客人"
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "text": "進入KAM表的{{V011}}分頁後\nproduct id 填入：{{product_id}}\n商品品項 填入：{{V008}}\n商品規格 填入：{{V010}}\n買家問題 填入：{{V009}}\n問題分類 填入：{{V012}}\nR/R 分類 填入：{{V013}}\n已申退 填入：{{V014}}\n擴大安心退 填入：{{V015}}\nOrder SN / User 填入：因為{{V017}}\n個案擁有者 填入：{{V019}}\n詢問時間 填入：{{V020}}\n工單號 填入：{{work_order}}\n備註 填入：{{V021}}\n結 填入：{{V022}}"
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "text": "進入KAM表的{{V011}}分頁後\n館別 填入：{{V003}}\nproduct id 填入：{{product_id}}\n商品名稱 填入：{{V008}}\n商品規格 填入：{{V010}}\n買家問題（簡述） 填入：{{V009}}\n問題分類 填入：{{V023}}\nCFS 填入：\nOrder SN / User 填入：因為{{V017}}\n個案擁有者 填入：{{V019}}\n工單號 填入：{{work_order}}\n詢問時間 填入：{{V020}}\n備註 填入：{{V021}}\n結 填入：{{V022}}"
    },
    {
      "q": "Q004",
      "branch": "KAM表．SBS",
      "text": "輸入完告訴客人要等1~2個工作天（不含假日）廠商會給回覆，有消息會於上班時間回覆給他"
    },
    {
      "q": "Q004",
      "branch": "KAM表",
      "text": "輸入完告訴客人要等1~2個工作天（不含假日）廠商會給回覆，有消息會於上班時間回覆給他"
    },
    {
      "q": "Q004",
      "branch": "歷史發問查詢沒有找到",
      "text": "輸入完告訴客人要等1~2個工作天（不含假日）廠商會給回覆，有消息會於上班時間回覆給他"
    },
    {
      "q": "Q004",
      "branch": "廠直表",
      "text": "輸入完告訴客人要等1~2個工作天（不含假日）廠商會給回覆，有消息會於上班時間回覆給他"
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
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "action": "KAM表",
      "needed": true,
      "note": "",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "開啟來源",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
        }
      ],
      "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "action": "KAM表",
      "needed": true,
      "note": "",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "開啟來源",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
        }
      ],
      "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
    }
  ],
  "updatedAt": "2026-08-01T03:49:05.532Z",
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
      "fillRules": [],
      "sourceLinks": []
    },
    {
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
      "required": true,
      "common": true,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "sourceNote": "從聊聊介面找（最快）\n如果買家從「訂單詳情」進入聊聊，買家名稱附近會直接顯示 訂單編號。\n\n1. 從聊聊控制台找\n▪ 開啟「訂單詳情」：\n▪ 依訂單狀態或建立時間篩選\n▫ 若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除\n訂單列表中顯示的 Order SN 就是訂單編號\n\n2. 從 CS Portal 找\n在搜尋欄輸入買家的 Username，按 Enter 後展開底下的 Order，即可找到該買家的訂單及 OSN。\n▪ 注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
    },
    {
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "required": true,
      "common": false,
      "category": "商品詢問",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceUrl": "",
      "fillRules": [],
      "sourceLinks": [],
      "options": [],
      "defaultValue": ""
    },
    {
      "code": "shipping_status",
      "label": "物流單號",
      "hint": "貼上系統查到的狀態",
      "required": true,
      "multiline": true,
      "category": "物流相關",
      "type": "text",
      "autoDays": 0,
      "common": false,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "sourceNote": "在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。\n售前不用填\n\n查詢方式：\n▪ 進入 Project → Shopee TW SBS（SPTWSBS）。\n▪ 點選 Queues → Switch Queues → Assigned to me。\n▪ 清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。\n如果找不到工單：\n▪ 到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。\n▪ 沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。",
      "options": [],
      "defaultValue": "售前不用填",
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
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
      "fillRules": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": []
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
      "fillRules": [],
      "sourceLinks": []
    },
    {
      "code": "V001",
      "label": "小編代號",
      "hint": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": true,
      "category": "常用",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": [],
      "defaultValue": "[LN]"
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
      "category": "物流相關",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": []
    },
    {
      "code": "V003",
      "label": "商城名字",
      "category": "商家相關",
      "hint": "",
      "type": "text",
      "required": true,
      "fillRules": [
        {
          "values": [
            "蝦皮直營 _ 生活超市 - 最快當日到",
            "蝦皮超市"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "蝦皮超市",
            "蝦皮直送 美妝",
            "蝦皮直營 - 3C家電館",
            "蝦皮 免運直送",
            "超級品牌運動",
            "蝦皮日嚐選物所"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V006",
              "value": "",
              "answerText": "且{{V006}}廠商直送或大型運送",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V003"
            }
          ]
        },
        {
          "values": [
            "電玩宅急便",
            "OPPO",
            "ASUS",
            "realme",
            "Google 產品官方授權旗艦店",
            "蝦皮耗材館",
            "電玩快客",
            "高雄物產館",
            "美食餐券、票券",
            "Apple產品旗艦館"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-SBS",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "SBS商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V004",
      "label": "KAM回覆_歷史發問",
      "category": "歷史發問",
      "hint": "",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V005",
      "label": "分頁_歷史發問",
      "category": "歷史發問",
      "hint": "",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "options": [],
      "sourceLinks": []
    },
    {
      "code": "V006",
      "label": "是否是廠直",
      "category": "商家相關",
      "hint": "選「是」或「不是」",
      "type": "select",
      "required": true,
      "fillRules": [
        {
          "values": [
            "是"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-廠直",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "不是",
            "否"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V005",
              "value": "歷史提問-24H",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V011",
              "value": "商品問題",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "options": [
        "是",
        "不是"
      ],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V007",
      "label": "發問內容_歷史發問",
      "category": "歷史發問",
      "hint": "填入歷史發問裡對應的發問內容",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "common": false,
      "multiline": true,
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V008",
      "label": "商品品項",
      "category": "商品詢問",
      "hint": "貼上產品頁的完整標題",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V009",
      "label": "買家問題_KAM",
      "category": "KAM表",
      "hint": "整理客人問題後輸入",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "common": false,
      "multiline": true,
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V010",
      "label": "商品規格",
      "category": "商品詢問",
      "hint": "如果客人有詢問再填",
      "type": "text",
      "required": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceLinks": []
    },
    {
      "code": "V011",
      "label": "分頁_KAM表",
      "category": "KAM表",
      "hint": "會自動填入",
      "type": "text",
      "required": false,
      "fillRules": [],
      "sourceNote": "要從KAMS/PMS× CS × Listing 裡選擇對應的分頁",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307",
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "options": [],
      "sourceLinks": [
        {
          "title": "KAM表",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307"
        }
      ],
      "defaultValue": ""
    },
    {
      "code": "V012",
      "label": "問題分類_KAM",
      "category": "KAM表",
      "hint": "選擇對應的分類",
      "type": "select",
      "required": true,
      "fillRules": [],
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceUrl": "",
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "options": [
        "退換貨",
        "退換貨-二次詢問",
        "商品使用",
        "商品規格",
        "配件/贈品",
        "保固相關",
        "品質諮詢",
        "其他",
        "售前-商品使用",
        "售前-商品規格",
        "售前-配件/贈品",
        "售前-保固相關",
        "售前-品質諮詢"
      ],
      "sourceLinks": [],
      "defaultValue": ""
    },
    {
      "code": "V013",
      "label": "R/R 分類_KAM表",
      "category": "KAM表",
      "hint": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "type": "text",
      "required": true,
      "options": [
        "換貨",
        "補寄",
        "冷鍊",
        "沒有訂單編號所以不用選",
        "沒有符合的選項所以不用選"
      ],
      "fillRules": [],
      "sourceNote": "有訂單編號才需要選符合的選項，沒有的話不需要",
      "sourceUrl": "",
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "defaultValue": "沒有訂單編號所以不用選",
      "sourceLinks": []
    },
    {
      "code": "V014",
      "label": "已申退_KAM表",
      "category": "KAM表",
      "hint": "訂單已經申請退款嗎？",
      "type": "select",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "fillRules": [],
      "sourceNote": "售後訂單已經申請退款才要勾\n\n如何查詢有沒有退款：\n1. CS Portal\n輸入 OSN、Username 或 Return SN 查詢訂單；在一般資訊區查看 Return 資訊、訂單狀態及時間序。\n\n2. Order Admin Portal\n進入 Return → Return & Refund Requests，利用欄位搜尋訂單；進入詳情後可查看 申請狀態、申請資訊及更新時序。\n\n3. InHouse CS System／聊聊控制台\n從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。\nProcessing：已申請，處理中\nAccepted：退貨退款已完成／接受\nCancelled：曾申請，但已取消\n沒有退貨退款編號或相關欄位：通常表示尚未申請",
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        }
      ]
    },
    {
      "code": "V015",
      "label": "擴大安心退_KAM表",
      "category": "KAM表",
      "hint": "商品總金額是否低於 NT$1,380",
      "type": "select",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "符合「擴大安心退」需要同時符合以下 4 個條件：\n在 15 天鑑賞期內\n屬於 商品瑕疵，不是買家個人因素\n欲退商品總金額 低於 NT$1,380\n具備 商品及包裝照片",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V016",
      "label": "PDP 建議_KAM表",
      "category": "KAM表",
      "hint": "看看這個問題覺得要不要上產品頁",
      "type": "select",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "fillRules": [],
      "sourceNote": "看看這個問題覺得要不要上產品頁",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V017",
      "label": "有沒有訂單編號_KAM表",
      "category": "KAM表",
      "hint": "",
      "type": "select",
      "required": true,
      "options": [
        "有",
        "無"
      ],
      "defaultValue": "",
      "fillRules": [
        {
          "values": [
            "有"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "order_id",
              "value": "",
              "answerText": "訂單編號，所以填入：{{order_id}}／{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        },
        {
          "values": [
            "無"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V018",
              "value": "",
              "answerText": "訂單編號，所以填入：{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V017"
            }
          ]
        }
      ],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "category": "常用",
      "hint": "是填入Buyer Username／User Name",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "Luna Lin",
      "fillRules": [],
      "sourceNote": "找「買家名稱（Buyer Username／User Name）」可用以下方式：\n1. 從 InHouse 聊聊介面找（最快）\n▪ 左側「買家列表」會顯示目前進線買家的名稱。\n▪ 點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。\n\n2. 從 CS Portal 找\n▪ 如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。\n▪ 展開 Order，再查看 Buyer & Seller Info，即可確認買家帳號。\n\n3. 從 User Portal 反查\n如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。（第 97～98 頁）\n\n注意：\nBuyer Username／User Name：買家的帳號名稱。\nUser ID／UID：買家的數字識別碼，兩者不同。\n建立售前案件時，Case Subject 使用的是 Username；售後案件則使用 OSN。",
      "sourceLinks": [
        {
          "title": "InHouse聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
    },
    {
      "code": "V019",
      "label": "個案擁有者",
      "category": "常用",
      "hint": "選自己",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "Luna Lin[LN]",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V020",
      "label": "詢問時間_KAM表",
      "category": "KAM表",
      "hint": "",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "會自動填寫不用動",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V021",
      "label": "備註_KAM表",
      "category": "KAM表",
      "hint": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "（空白）",
      "fillRules": [],
      "sourceNote": "有甚麼特別想備註的再填，如客人的情緒不太友善之類的",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V022",
      "label": "結_KAM表",
      "category": "KAM表",
      "hint": "結單了沒",
      "type": "text",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "fillRules": [],
      "sourceNote": "結單了在勾",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V023",
      "label": "問題分類_KAM_SBS",
      "category": "未分類",
      "hint": "售前的話要選擇「售前-XXX」",
      "type": "select",
      "required": true,
      "options": [
        "退換貨",
        "商品規格",
        "商品使用",
        "配件/贈品",
        "售前-商品規格",
        "售前-商品使用",
        "售前-配件/贈品",
        "售前-保固相關",
        "售前-其他",
        "物流相關(改址/客訴)",
        "其他",
        "保固相關"
      ],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceLinks": [],
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "sourceUrl": ""
    },
    {
      "code": "V024",
      "label": "分頁_廠直表",
      "category": "未分類",
      "hint": "廠直表的下方選分頁",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "common": false,
      "multiline": false,
      "sourceUrl": ""
    },
    {
      "code": "V025",
      "label": "Sheet-ID＿廠直表",
      "category": "廠直表",
      "hint": "不用輸入",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "不用輸入",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V026",
      "label": "Type_廠直表",
      "category": "廠直表",
      "hint": "order=訂單問題 ；return=退貨問題；sku=商品問題",
      "type": "select",
      "required": true,
      "options": [
        "order",
        "return",
        "sku"
      ],
      "defaultValue": "",
      "fillRules": [
        {
          "values": [
            "order"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V027",
              "value": "SCM Order ID",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "return"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V027",
              "value": "SCM Return Order ID",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        },
        {
          "values": [
            "sku"
          ],
          "assignments": [
            {
              "action": "fill",
              "targetCode": "V027",
              "value": "MP SKU ID",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            }
          ]
        }
      ],
      "sourceNote": "order=訂單問題\nreturn=退貨問題\nsku=商品問題",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V027",
      "label": "ID-Type_廠直表",
      "category": "廠直表",
      "hint": "會自動帶入",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [
        {
          "values": [
            "SCM Order ID"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "invoice_period_deadline",
              "value": "",
              "answerText": "：{{V028}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V027"
            }
          ]
        },
        {
          "values": [
            "SCM Return Order ID"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "invoice_period_deadline",
              "value": "",
              "answerText": "：{{V029}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V027"
            }
          ]
        },
        {
          "values": [
            "MP SKU ID"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "invoice_period_deadline",
              "value": "",
              "answerText": "：{{V030}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V027"
            }
          ]
        }
      ],
      "sourceNote": "Type=order ，填入SCM Order ID \nType=return ，填入SCM Return Order ID \nType=sku ，填入MP SKU ID",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V028",
      "label": "SCM Order ID_廠直表",
      "category": "廠直表",
      "hint": "DSS → 訂單查詢 → 輸入 {Order SN_OSN} → 搜尋 → 詳細資料 → SCM Order ID",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "1. 先取得訂單編號（Order SN）\n2. 開啟 Shopee Drop Shipping（DSS）。\n3. 點選 「訂單查詢」。\n4. 輸入訂單編號（Order SN）\n5. 點選 「搜尋」。\n6. 找到對應訂單後，點選 「詳細資料」。\n7. 在訂單詳細資料中找到並複製 【SCM Order ID】",
      "sourceLinks": [
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        }
      ],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": "https://scm.internal.shopee.tw/homepage/backlogs"
    },
    {
      "code": "V029",
      "label": "SCM Return Order ID_廠直表",
      "category": "廠直表",
      "hint": "CS Portal → 搜尋 {Order SN_OSN／Buyer Username} → Return 資訊 → {Return SN} → DSS → Admin_Return → {SCM Return Order ID}",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "方法一：CS Portal 反查\n1. 開啟 CS Portal。\n2. 搜尋欄輸入：{Order SN_OSN}，或{Buyer Username}\n▪ 若使用 Username 查詢，選擇正確的 {Order SN_OSN}\n3. 按 Enter\n4, 展開 Order\n▪ 在一般資訊區找到 Return 資訊。\n5. 複製 {Return SN}。\n6. 開啟 Shopee Drop Shipping（DSS）。\n7. 進入 Admin_Return／退貨訂單查詢。\n8. 貼上 {Return SN}，點選搜尋。\n9. 進入退貨訂單詳細資料。\n10. 複製 {SCM Return Order ID}。\n\n方法二：Order Admin Portal 反查\n1. 開啟 Order Admin Portal。\n2. 進入：Return → Return & Refund Requests\n3. 在查詢欄位輸入 {Order SN_OSN}。\n4. 找到對應的退貨退款申請。\n5. 進入申請詳情。\n6. 複製 {Return SN／Return ID}。\n7. 開啟 DSS。\n8. 進入 Admin_Return／退貨訂單查詢。\n9. 輸入 {Return SN}。\n10. 點選搜尋並開啟詳細資料。\n11.複製 {SCM Return Order ID}。\n\n方法三：InHouse CS System／聊聊控制台反查\n1. 開啟買家的聊聊。\n2. 切換到 訂單詳情。\n3. 選擇正確的 {Order SN_OSN}。\n4. 展開 Order Info。\n5. 找到「退貨退款編號」，複製 {Return SN}。\n▪ 同時確認退貨退款狀態：\n▫ Processing：已申請，處理中\n▫ Accepted：申請已接受／退款完成\n▫ Cancelled：申請已取消\n6. 開啟 DSS。\n7. 進入 Admin_Return／退貨訂單查詢。\n8. 輸入 {Return SN}。\n9. 開啟詳細資料並複製 {SCM Return Order ID}。\n\n方法四：從既有案件紀錄查詢\n如果案件之前有人處理過，可以先查：\n1. 使用 {Order SN} 搜尋 KAM／廠商直送表。\n2. 使用 {Order SN} 或 {Buyer Username} 搜尋 Shopee Jira。\n查看既有紀錄是否已填寫：\n{Return SN}\n{SCM Return Order ID}\n如果只有 Return SN，再貼到 DSS 的 Admin_Return 查詢 SCM Return Order ID。\n使用既有 ID 前，務必確認是同一筆訂單、同一次退貨退款申請。",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V030",
      "label": "MP SKU ID_廠直表",
      "category": "廠直表",
      "hint": "商品頁 → 取得 {Product ID} → DSS → 供應商管理 → 商品 → 搜尋 {Product ID} → 選擇 {商品規格}（如果客人有指定）→ 複製 {MP SKU ID}",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "方法一：只有 Product ID，從 DSS 查 MP SKU ID\n1. 開啟商品頁，從網址取得 {Product ID}。\n▪ 商品頁網址通常有兩段數字，後面一段是 Product ID。\n2. 開啟 Shopee Drop Shipping（DSS）。\n3. 進入：供應商管理 → 商品\n4. 使用 {Product ID} 搜尋商品。\n5. 搜尋結果會列出該商品的不同規格，根據買家詢問的 {商品規格}（如果客人有指定），找到正確的 {Model ID}。\n6. 複製系統顯示的 {MP SKU ID}。\n注意：同一個 Product ID 可能有多個 Model ID，必須依買家詢問的規格選擇（如果客人有指定），沒指定就隨便選一個。\n\n方法二：從 Order Admin 同時取得 Product ID 與 Model ID\n適用於已經有 {Order SN} 的售後訂單。\n1. 開啟 Order Admin Portal。\n2. 進入：Orders → 訂單查詢\n3. 輸入 {Order SN_OSN}。\n4. 點選搜尋並進入訂單詳細資料。\n5. 到商品資訊區，找到買家詢問的 {商品名稱} 與 {商品規格}。\n6. 在同一筆商品規格資料中取得：\n▪ Product ID：{Product ID}\n▪ Model ID：{Model ID}\n7. 將兩個 ID 用底線組合：\n{Product ID}_{Model ID}\n組合完成的結果就是：\n{MP SKU ID}\n範例：\nProduct ID：{Product ID}\nModel ID：{Model ID}\nMP SKU ID：{Product ID}_{Model ID}\n\n使用時怎麼選\n▪ 只有商品頁及 Product ID：使用 方法一，從 DSS 查詢。\n▪ 已有訂單編號：使用 方法二，從 Order Admin 同時取得 Product ID 與 Model ID。\n\n商品只有單一規格，也不建議自行填 {Product ID}_0；仍應確認實際 Model ID。",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
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
    },
    {
      "prompt": "這個商城是要上KAM表還是廠直表",
      "options": [
        "KAM表",
        "KAM表．SBS",
        "廠直表"
      ]
    }
  ]
};
