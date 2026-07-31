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
          "branch": "查詢發票"
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
          "branch": "補打統編"
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
          "branch": "統編／抬頭打錯"
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
          "branch": "補發電子發票通知信"
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
          "branch": "商品頁有找到"
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
          "branch": "商品頁沒有找到"
        }
      ]
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
            "S"
          ],
          "targetQuestion": "共用",
          "targetBranch": "KAM表",
          "assignments": []
        }
      ],
      "answerBranches": [
        "商品頁沒有找到",
        "歷史發問查詢沒有找到"
      ],
      "next": "這個商城是要上KAM表還是廠直表",
      "answerParts": [
        {
          "question": "詢問商品資訊",
          "branch": "商品頁沒有找到"
        },
        {
          "question": "共用",
          "branch": "KAM表"
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
          "branch": "商品頁沒有找到"
        },
        {
          "question": "詢問商品資訊",
          "branch": "歷史發問查詢有找到"
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
          "branch": "KAM表"
        }
      ],
      "next": "等待KAM回覆並告訴客人要等1~2個工作天"
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
      "category": "常用",
      "fillRules": []
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
            "蝦皮直營_餐券&禮券 - 最快當日到",
            "蝦皮耗材館",
            "OPPO產品旗艦店",
            "realme產品旗艦店",
            "Google產品旗艦店",
            "電玩宅急便",
            "蝦皮直營 - Apple品牌旗艦館",
            "蝦皮直營 - 遊戲點數旗艦店",
            "ASUS華碩官方旗艦店"
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
            }
          ]
        }
      ],
      "options": []
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
      "options": []
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
      "options": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "category": "商品詢問",
      "fillRules": [],
      "options": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V003",
      "label": "商城名字",
      "hint": "",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
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
            "蝦皮直營_餐券&禮券 - 最快當日到",
            "蝦皮耗材館",
            "OPPO產品旗艦店",
            "realme產品旗艦店",
            "Google產品旗艦店",
            "電玩宅急便",
            "蝦皮直營 - Apple品牌旗艦館",
            "蝦皮直營 - 遊戲點數旗艦店",
            "ASUS華碩官方旗艦店"
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
            }
          ]
        }
      ],
      "options": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V009",
      "label": "買家問題_KAM",
      "hint": "整理客人問題後輸入",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "category": "KAM表",
      "fillRules": [],
      "options": []
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "category": "商品詢問",
      "fillRules": [],
      "options": [],
      "defaultValue": "客人沒問不用填"
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V011",
      "label": "分頁_KAM表",
      "hint": "會自動填入",
      "sourceNote": "要從KAMS/PMS× CS × Listing 裡選擇對應的分頁",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?gid=931279307#gid=931279307",
      "autoDays": 0,
      "required": false,
      "common": false,
      "type": "text",
      "multiline": false,
      "category": "KAM表",
      "fillRules": [],
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
      "q": "GLOBAL",
      "branch": "KAM表",
      "code": "V012",
      "label": "問題分類_KAM",
      "hint": "選擇對應的分類",
      "sourceNote": "售前的話要選擇「售前-XXX」",
      "sourceUrl": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "category": "KAM表",
      "fillRules": [],
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
      ]
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
      "text": "進入KAM表後\nproduct id 填入：{{product_id}}\n商品品項 填入：{{V008}}\n商品規格 填入：{{V010}}\n買家問題 填入：{{V009}}"
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
      "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
    }
  ],
  "updatedAt": "2026-07-31T09:40:43.482Z",
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
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": false,
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "sourceUrl": "",
      "fillRules": [],
      "sourceLinks": []
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
      "sourceLinks": []
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
            "蝦皮直營_餐券&禮券 - 最快當日到",
            "蝦皮耗材館",
            "OPPO產品旗艦店",
            "realme產品旗艦店",
            "Google產品旗艦店",
            "電玩宅急便",
            "蝦皮直營 - Apple品牌旗艦館",
            "蝦皮直營 - 遊戲點數旗艦店",
            "ASUS華碩官方旗艦店"
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
      "sourceLinks": []
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
      "sourceLinks": []
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
      "sourceLinks": []
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
      "sourceLinks": []
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
      "sourceLinks": []
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
      "sourceLinks": []
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
      "sourceLinks": []
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
        "KAM表"
      ]
    }
  ]
};
