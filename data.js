// 由 SOP 視覺化編輯室產生；操作畫面僅使用中文。
window.SOP_DATA = {
  "version": "2026/8/2",
  "sourceUrl": "https://docs.google.com/spreadsheets/d/1cDKewCq-QZ6ln3f8keneZ8p8N7NXTCGnYPAouxmyveI/edit?gid=101001#gid=101001",
  "questions": [
    {
      "id": "Q001",
      "name": "詢問鑑賞期",
      "keywords": "鑑賞期,七天,15天,十五天,退貨期限",
      "description": "依取貨日期產生鑑賞期說明",
      "enabled": true,
      "answerText": "要跟客人說蝦皮有提供優於消保法（七天鑑賞期）的「15天鑑賞期」，是從系統判定的取貨日隔天開始算。\n取貨日為 {{{pickup_date}}}，那鑑賞期就是從 {{{return_start}}} 開始算 15 天。\n要記得在 {{{return_deadline}}} 前提出退貨申請。"
    },
    {
      "id": "Q002",
      "name": "詢問付款方式",
      "keywords": "付款,付款方式,刷卡,分期,貨到付款",
      "description": "說明商城支援付款方式",
      "enabled": true,
      "answerText": "告訴客人：\n▪ 蝦皮商城支援貨到付款（僅限現金）、信用卡／金融卡及信用卡分期付款。\n▪ 信用卡分期付款需結帳總金額滿 NT$1,000。\n▪ 若與其他蝦皮商家商品合併結帳，僅能選擇貨到付款。\n▪ 蝦皮商城訂單成立後，無法變更付款方式。"
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
      "answerText": "請先打開商品頁，確認商品圖片、商品規格與商品描述，看看有沒有客人詢問：\n「{{customer_need}}」\n相關的問題"
    },
    {
      "id": "Q005",
      "name": "詢問限時特賣／限購數量",
      "keywords": "限時特賣,限時優惠,特價,限購,購買數量,最多買幾個,一次買幾件",
      "description": "確認限時特賣及結帳頁的實際限購數量",
      "enabled": true,
      "answerText": "確認商品：\n▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n\n確認步驟：\n1. 打開商品頁，確認是否顯示「限時特賣」標籤或限時特賣區塊。\n2. 若商品頁有顯示限時特賣，通常會限制購買數量。\n3. 將商品加入購物車，進入結帳頁確認實際可購買數量。\n\n回覆重點：\n▪ 商品頁可先判斷是否正在限時特賣。\n▪ 限購數量仍以結帳頁面實際顯示為主。\n▪ 結帳頁目前顯示：{{flash_sale_limit}}。"
    },
    {
      "id": "Q006",
      "name": "詢問優惠券／賣場優惠券",
      "keywords": "優惠券,賣場優惠券,折扣券,優惠代碼,領券,券在哪裡,取消訂單優惠券",
      "description": "依領取、查詢可用狀態或取消訂單後返還需求提供操作",
      "enabled": true,
      "answerText": "先確認客人問的是哪一種優惠券問題。\n可先從商品頁的賣場優惠券、活動頁、賣場首頁或優惠券錢包確認；如果是查買家帳號目前可用優惠券，才到 CS Portal 查優惠代碼錢包。"
    },
    {
      "id": "Q007",
      "name": "詢問運費／物流",
      "keywords": "運費,免運門檻,滿額免運,店取最快當日到,宅配最快隔日到,蝦皮店到店隔日到貨,到貨時間,什麼時候到貨,預計配達,退貨步驟,商品怎麼退",
      "description": "共用處理直營物流運費、預計到貨時間及一般退貨步驟",
      "enabled": true,
      "answerText": "先確認客人問的是運費、到貨時間，還是退貨步驟。\n運費與預計到貨時間可先看商品頁的運費說明與物流標籤，再以購物車／結帳頁或訂單系統實際顯示為主。"
    },
    {
      "id": "Q008",
      "name": "詢問加價購",
      "keywords": "加價購,優惠加購,搭配商品,主商品,加購商品,add-on",
      "description": "確認加價購標籤，或使用工具反查可搭配的主商品",
      "enabled": true,
      "answerText": "如果客人是問商品有沒有加價購，先打開商品頁確認是否有「加價購／優惠加購」標籤或優惠加購區塊。\n看到標籤後，再進下一步判斷商品頁有沒有顯示加價購標籤；若有顯示，才整理可加購與結帳頁實際顯示給客人。\n若客人是問加價購商品要搭配哪件主商品，則走反查主商品流程。"
    },
    {
      "id": "Q009",
      "name": "詢問滿額贈",
      "keywords": "滿額贈,贈品,贈完,剩餘數量,購物車沒有贈品,贈品怎麼拿",
      "description": "依商品卡標籤與購物車是否自動加入贈品判斷",
      "enabled": true,
      "answerText": "確認商品：\n▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n\n確認步驟：\n1. 先看商品卡是否顯示「滿額贈」標籤。\n2. 商品頁目前不會另外顯示滿額贈區塊。\n3. 將商品加入購物車，確認系統是否自動加入贈品與剩餘數量。"
    },
    {
      "id": "Q010",
      "name": "詢問商品效期／進貨日",
      "keywords": "效期,保存期限,到期日,有效日期,進貨日,補貨,什麼時候進貨,Inventory Expiration Date",
      "description": "依商品 PID 查詢效期或商品進貨日",
      "enabled": true,
      "answerText": "先確認客人要問的是商品效期，還是商品何時進貨／補貨。商品效期與進貨日都以小工具查詢結果為主；如果客人沒有指定規格，效期可用小工具完整結果輔助說明。"
    },
    {
      "id": "Q011",
      "name": "詢問訂單出貨狀態／OOS",
      "keywords": "出貨,待出貨,WMS,OMS,OOS,缺貨,包裹,配送進度,OUTBOUND,Created",
      "description": "依 OMS/WMS/CS Portal 判斷出貨狀態、延遲或缺貨",
      "enabled": true,
      "answerText": "先用 OSN 查 CS Portal／Order Admin／OMS，再依狀態判斷：尚未入 WMS、已入 WMS 撿貨或出貨中、Outbound 後延遲、或 OMS/WMS 顯示 OOS 缺貨。"
    },
    {
      "id": "Q012",
      "name": "詢問包裹貨態異常",
      "keywords": "貨態異常,包裹遺失,延遲未配達,配達門市未取件,已配達未收到,已取件未收到,COD,補匯款",
      "description": "SCS 包裹延遲、門市滯留、已配達未收到、已取件但貨態未更新等情境",
      "enabled": true,
      "answerText": "先檢查 WMS 與物流貨態，再依異常類型決定是否登記表單、轉 SPX 調查、引導申退或通知補匯款。"
    },
    {
      "id": "Q013",
      "name": "詢問商品異常／貨損申退",
      "keywords": "貨損,破包,漏液,過期,長蟲,瑕疵,錯品,缺件,商品異常,低單,200元,照片,申退",
      "description": "依照片、商品金額、管制區或高單條件判斷是否引導申退或轉詢",
      "enabled": true,
      "answerText": "先確認商品問題類型、是否有照片、商品金額與是否屬管制區／高單／特殊商品。符合低單或 SCS 貨損優化條件時，可優先引導買家申請退貨退款。"
    },
    {
      "id": "Q014",
      "name": "詢問補償折扣碼／小額折扣碼",
      "keywords": "補償折扣碼,補碼,原碼補碼,返還原折扣碼,返還損失折扣,小額折扣碼,價差,折扣碼無法使用",
      "description": "判斷返還原折扣碼、返還損失折扣、個案補碼或小額折扣碼",
      "enabled": true,
      "answerText": "先確認客人要補的是原本失效的折扣碼、訂單取消造成的折扣／價差損失，還是商品異常的小額客維折扣碼。補碼前務必檢查原折扣碼是否失效、賣場是否已有相同或更優優惠、是否需綁定商品。"
    },
    {
      "id": "Q015",
      "name": "詢問退貨退款流程／NRR",
      "keywords": "退貨退款,NRR,自動退款,快速退款,包裹未送達,缺件,一般退貨,僅退款,退貨物流",
      "description": "依退貨原因與金額判斷自動退款、快速退款、蝦皮審核或一般退貨",
      "enabled": true,
      "answerText": "先確認退貨原因、商品金額、是否包裹未送達、是否缺件僅退款，以及買家目前是否已提出退貨退款申請。不同原因會進不同審核路徑。"
    },
    {
      "id": "Q016",
      "name": "詢問 Offline RR／Agent AOC",
      "keywords": "Offline RR,ORR,AOC,AOCRR,完成訂單,線下退貨,專員代申請,Return ID,退貨原因備註",
      "description": "完成訂單後的線下退貨退款、AOC 判斷與專員代發 RR",
      "enabled": true,
      "answerText": "先確認訂單是否已完成、是否仍在 15 天鑑賞期內、是否有延長撥款、是否可讓買家自行 AOC，或需由專員協助發起 Offline RR。"
    },
    {
      "id": "Q017",
      "name": "詢問取消配送中訂單",
      "keywords": "取消配送中,Intransit RR,取消配送中訂單,攔截,SPX,Pickup Done,SP_Ready_collection,RT1,RT2,RT3",
      "description": "判斷買家是否可申請取消配送中訂單與 RR 狀態",
      "enabled": true,
      "answerText": "此功能適用於賣家寄件後到抵達門市前的部分訂單，並非所有物流都適用。先確認訂單頁是否有取消配送中訂單按鈕、物流是否屬適用範圍、RR 狀態與 Remark。"
    },
    {
      "id": "Q018",
      "name": "詢問工單／KAM 表是否要建立",
      "keywords": "工單,KAM表,售前商品問題,廠直,轉詢,追蹤,平日追蹤,假日追蹤,未結案備註",
      "description": "判斷售前商品問題、廠直情境是否需開單、填 KAM 表與追蹤",
      "enabled": false,
      "answerText": "先判斷是否只是單純資訊提供，還是涉及退換貨意圖、後續追蹤、廠商處理或資訊不齊。需要轉詢或追蹤時，才建立工單與對應表單。"
    },
    {
      "id": "Q019",
      "name": "詢問聊聊轉二線",
      "keywords": "轉二線,二線,OPS,BAU,QA,轉詢超過48小時,已說明3次,客訴,不雅字眼,性騷擾,SLA",
      "description": "判斷聊聊是否需轉 OPS／BAU／QA 協助",
      "enabled": false,
      "answerText": "先確認是問題仍無法解決、轉詢超過 48 小時、買家重複來訊、已說明 3 次仍持續詢問，還是有情緒、不雅字眼或性騷擾等特殊情境。"
    },
    {
      "id": "Q020",
      "name": "詢問延遲補償",
      "keywords": "延遲補償,delay voucher,隔日到貨,未收到補償,黑名單,付款時間,到貨時間,HighRisk",
      "description": "判斷訂單是否適用延遲補償、是否黑名單或符合補發",
      "enabled": true,
      "answerText": "先確認物流渠道是否適用延遲補償，再查買家是否為黑名單或高風險名單；如買家提供單號，需用付款時間與實際到貨時間判斷是否真的符合補償資格。"
    }
  ],
  "flows": [
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
          "branch": "廠直表",
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
    },
    {
      "question": "詢問限時特賣／限購數量",
      "branch": "共用",
      "steps": [],
      "routes": [],
      "answerParts": [],
      "next": "填入結帳頁顯示的限購數量後回覆買家"
    },
    {
      "question": "詢問優惠券／賣場優惠券",
      "branch": "哪裡領取／查看優惠券",
      "steps": [
        {
          "prompt": "客人是哪一種優惠券問題？",
          "option": "哪裡領取／查看優惠券"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "哪裡領取／查看優惠券",
          "beforeText": ""
        }
      ],
      "next": "引導買家查看商品頁、活動頁、賣場首頁或優惠券錢包"
    },
    {
      "question": "詢問優惠券／賣場優惠券",
      "branch": "查詢買家目前可用優惠券",
      "steps": [
        {
          "prompt": "客人是哪一種優惠券問題？",
          "option": "查詢買家目前可用優惠券"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "查詢買家目前可用優惠券",
          "beforeText": ""
        }
      ],
      "next": "到 CS Portal 的優惠代碼錢包查詢"
    },
    {
      "question": "詢問優惠券／賣場優惠券",
      "branch": "可以返還／可以再次使用",
      "steps": [
        {
          "prompt": "客人是哪一種優惠券問題？",
          "option": "取消訂單後優惠券是否返還"
        },
        {
          "prompt": "後台查詢結果顯示優惠券是否可返還／再次使用？",
          "option": "可以返還／可以再次使用"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "取消訂單後優惠券是否返還",
          "beforeText": ""
        },
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "可以返還／可以再次使用",
          "beforeText": ""
        }
      ],
      "next": "依後台狀態告知優惠券已返還且仍可再次使用"
    },
    {
      "question": "詢問優惠券／賣場優惠券",
      "branch": "不能返還／不能再次使用",
      "steps": [
        {
          "prompt": "客人是哪一種優惠券問題？",
          "option": "取消訂單後優惠券是否返還"
        },
        {
          "prompt": "後台查詢結果顯示優惠券是否可返還／再次使用？",
          "option": "不能返還／不能再次使用"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "取消訂單後優惠券是否返還",
          "beforeText": ""
        },
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "不能返還／不能再次使用",
          "beforeText": ""
        }
      ],
      "next": "依後台狀態說明優惠券目前不能返還或再次使用"
    },
    {
      "question": "詢問運費／物流",
      "branch": "問運費",
      "steps": [
        {
          "prompt": "客人詢問哪一種物流問題？",
          "option": "問運費"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問運費／物流",
          "branch": "問運費",
          "beforeText": ""
        }
      ],
      "next": "依直營物流費率說明，並填入結帳頁實際顯示的運費"
    },
    {
      "question": "詢問運費／物流",
      "branch": "問什麼時候到貨",
      "steps": [
        {
          "prompt": "客人詢問哪一種物流問題？",
          "option": "問什麼時候到貨"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問運費／物流",
          "branch": "問什麼時候到貨",
          "beforeText": ""
        }
      ],
      "next": "依物流方式、下單時間與配送區域判斷，並以系統預計配達日為準"
    },
    {
      "question": "詢問運費／物流",
      "branch": "退貨步驟是什麼",
      "steps": [
        {
          "prompt": "客人詢問哪一種物流問題？",
          "option": "退貨步驟是什麼"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問運費／物流",
          "branch": "退貨步驟是什麼",
          "beforeText": ""
        },
        {
          "question": "共用",
          "branch": "鑑賞期",
          "beforeText": "先確認是否仍在 15 天鑑賞期內："
        }
      ],
      "next": "先確認退貨原因、照片及退貨規範，再引導買家依系統申請與交寄",
      "answerBranches": [
        "退貨步驟是什麼",
        "鑑賞期"
      ]
    },
    {
      "question": "詢問加價購",
      "branch": "有顯示加價購標籤",
      "steps": [
        {
          "prompt": "客人是要確認商品是否有加價購，還是要反查加價購商品搭配哪件主商品？",
          "option": "確認商品是否有加價購"
        },
        {
          "prompt": "商品頁有沒有顯示「加價購／優惠加購」標籤？",
          "option": "有顯示加價購標籤"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問加價購",
          "branch": "有顯示加價購標籤",
          "beforeText": ""
        }
      ],
      "next": "請買家將商品加入購物車，依結帳頁查看加購商品與優惠價格"
    },
    {
      "question": "詢問加價購",
      "branch": "沒有顯示加價購標籤",
      "steps": [
        {
          "prompt": "客人是要確認商品是否有加價購，還是要反查加價購商品搭配哪件主商品？",
          "option": "確認商品是否有加價購"
        },
        {
          "prompt": "商品頁有沒有顯示「加價購／優惠加購」標籤？",
          "option": "沒有顯示加價購標籤"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問加價購",
          "branch": "沒有顯示加價購標籤",
          "beforeText": ""
        }
      ],
      "next": "告知目前商品頁未顯示加價購，依商品頁與結帳頁為主"
    },
    {
      "question": "詢問加價購",
      "branch": "加價購商品要搭配哪件主商品",
      "steps": [
        {
          "prompt": "客人是要確認商品是否有加價購，還是要反查加價購商品搭配哪件主商品？",
          "option": "加價購商品要搭配哪件主商品"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問加價購",
          "branch": "加價購商品要搭配哪件主商品",
          "beforeText": ""
        }
      ],
      "next": "查出主商品後，用聊聊商品卡推薦給買家"
    },
    {
      "question": "詢問滿額贈",
      "branch": "商品卡沒有顯示滿額贈",
      "steps": [
        {
          "prompt": "商品卡有沒有顯示滿額贈標籤？",
          "option": "商品卡沒有顯示滿額贈"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問滿額贈",
          "branch": "商品卡沒有顯示滿額贈",
          "beforeText": ""
        }
      ],
      "next": "告知目前無滿額贈標籤，以商品卡與購物車顯示為主"
    },
    {
      "question": "詢問滿額贈",
      "branch": "購物車有自動加入贈品",
      "steps": [
        {
          "prompt": "商品卡有沒有顯示滿額贈標籤？",
          "option": "商品卡有顯示滿額贈"
        },
        {
          "prompt": "購物車有沒有自動加入滿額贈商品？",
          "option": "購物車有自動加入贈品"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問滿額贈",
          "branch": "購物車有自動加入贈品",
          "beforeText": ""
        }
      ],
      "next": "填入贈品名稱與剩餘數量後回覆"
    },
    {
      "question": "詢問滿額贈",
      "branch": "購物車沒有自動加入贈品",
      "steps": [
        {
          "prompt": "商品卡有沒有顯示滿額贈標籤？",
          "option": "商品卡有顯示滿額贈"
        },
        {
          "prompt": "購物車有沒有自動加入滿額贈商品？",
          "option": "購物車沒有自動加入贈品"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問滿額贈",
          "branch": "購物車沒有自動加入贈品",
          "beforeText": ""
        }
      ],
      "next": "確認活動門檻；若仍未顯示，可能已贈完"
    },
    {
      "question": "詢問優惠券／賣場優惠券",
      "branch": "取消訂單後優惠券是否返還",
      "steps": [
        {
          "prompt": "客人是哪一種優惠券問題？",
          "option": "取消訂單後優惠券是否返還"
        }
      ],
      "routes": [],
      "answerParts": [
        {
          "question": "詢問優惠券／賣場優惠券",
          "branch": "取消訂單後優惠券是否返還",
          "beforeText": ""
        }
      ],
      "next": "選擇優惠券是否能返還"
    },
    {
      "question": "詢問商品效期／進貨日",
      "steps": [
        {
          "prompt": "客人要查哪一種商品時間？",
          "option": "查商品效期"
        }
      ],
      "branch": "查商品效期",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "查商品效期"
      ],
      "answerParts": [
        {
          "question": "詢問商品效期／進貨日",
          "branch": "查商品效期",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問商品效期／進貨日",
      "steps": [
        {
          "prompt": "客人要查哪一種商品時間？",
          "option": "查商品進貨日"
        }
      ],
      "branch": "查商品進貨日",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "查商品進貨日"
      ],
      "answerParts": [
        {
          "question": "詢問商品效期／進貨日",
          "branch": "查商品進貨日",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問訂單出貨狀態／OOS",
      "steps": [
        {
          "prompt": "後台查到的主要狀態是哪一種？",
          "option": "尚未進入 WMS"
        }
      ],
      "branch": "尚未進入 WMS",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "尚未進入 WMS"
      ],
      "answerParts": [
        {
          "question": "詢問訂單出貨狀態／OOS",
          "branch": "尚未進入 WMS",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問訂單出貨狀態／OOS",
      "steps": [
        {
          "prompt": "後台查到的主要狀態是哪一種？",
          "option": "WMS 已出貨但延遲"
        }
      ],
      "branch": "WMS 已出貨但延遲",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "WMS 已出貨但延遲"
      ],
      "answerParts": [
        {
          "question": "詢問訂單出貨狀態／OOS",
          "branch": "WMS 已出貨但延遲",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問訂單出貨狀態／OOS",
      "steps": [
        {
          "prompt": "後台查到的主要狀態是哪一種？",
          "option": "OMS／WMS 顯示 OOS 缺貨"
        }
      ],
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "OMS／WMS 顯示 OOS 缺貨"
      ],
      "answerParts": [
        {
          "question": "詢問訂單出貨狀態／OOS",
          "branch": "OMS／WMS 顯示 OOS 缺貨",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問包裹貨態異常",
      "steps": [
        {
          "prompt": "包裹目前是哪一種異常？",
          "option": "包裹延遲未配達"
        }
      ],
      "branch": "包裹延遲未配達",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "包裹延遲未配達"
      ],
      "answerParts": [
        {
          "question": "詢問包裹貨態異常",
          "branch": "包裹延遲未配達",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問包裹貨態異常",
      "steps": [
        {
          "prompt": "包裹目前是哪一種異常？",
          "option": "配達門市超過 10 天未取消"
        }
      ],
      "branch": "配達門市超過 10 天未取消",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "配達門市超過 10 天未取消"
      ],
      "answerParts": [
        {
          "question": "詢問包裹貨態異常",
          "branch": "配達門市超過 10 天未取消",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問包裹貨態異常",
      "steps": [
        {
          "prompt": "包裹目前是哪一種異常？",
          "option": "貨態已配達但買家未收到"
        }
      ],
      "branch": "貨態已配達但買家未收到",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "貨態已配達但買家未收到"
      ],
      "answerParts": [
        {
          "question": "詢問包裹貨態異常",
          "branch": "貨態已配達但買家未收到",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問包裹貨態異常",
      "steps": [
        {
          "prompt": "包裹目前是哪一種異常？",
          "option": "貨態配送中但買家已取件"
        }
      ],
      "branch": "貨態配送中但買家已取件",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "貨態配送中但買家已取件"
      ],
      "answerParts": [
        {
          "question": "詢問包裹貨態異常",
          "branch": "貨態配送中但買家已取件",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問商品異常／貨損申退",
      "steps": [
        {
          "prompt": "商品異常屬於哪一種處理情境？",
          "option": "低單 200 元以下且有照片"
        }
      ],
      "branch": "低單 200 元以下且有照片",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "低單 200 元以下且有照片"
      ],
      "answerParts": [
        {
          "question": "詢問商品異常／貨損申退",
          "branch": "低單 200 元以下且有照片",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問商品異常／貨損申退",
      "steps": [
        {
          "prompt": "商品異常屬於哪一種處理情境？",
          "option": "SCS 貨損有照片"
        }
      ],
      "branch": "SCS 貨損有照片",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "SCS 貨損有照片"
      ],
      "answerParts": [
        {
          "question": "詢問商品異常／貨損申退",
          "branch": "SCS 貨損有照片",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問商品異常／貨損申退",
      "steps": [
        {
          "prompt": "商品異常屬於哪一種處理情境？",
          "option": "管制區／高單／特殊商品"
        }
      ],
      "branch": "管制區／高單／特殊商品",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "管制區／高單／特殊商品"
      ],
      "answerParts": [
        {
          "question": "詢問商品異常／貨損申退",
          "branch": "管制區／高單／特殊商品",
          "beforeText": ""
        },
        {
          "beforeText": "",
          "question": "共用",
          "branch": "KAM表"
        }
      ]
    },
    {
      "question": "詢問補償折扣碼／小額折扣碼",
      "steps": [
        {
          "prompt": "補償折扣碼屬於哪一類？",
          "option": "返還原折扣碼"
        }
      ],
      "branch": "返還原折扣碼",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "返還原折扣碼"
      ],
      "answerParts": [
        {
          "question": "詢問補償折扣碼／小額折扣碼",
          "branch": "返還原折扣碼",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問補償折扣碼／小額折扣碼",
      "steps": [
        {
          "prompt": "補償折扣碼屬於哪一類？",
          "option": "返還損失折扣／價差"
        }
      ],
      "branch": "返還損失折扣／價差",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "返還損失折扣／價差"
      ],
      "answerParts": [
        {
          "question": "詢問補償折扣碼／小額折扣碼",
          "branch": "返還損失折扣／價差",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問補償折扣碼／小額折扣碼",
      "steps": [
        {
          "prompt": "補償折扣碼屬於哪一類？",
          "option": "小額折扣碼"
        }
      ],
      "branch": "小額折扣碼",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "小額折扣碼"
      ],
      "answerParts": [
        {
          "question": "詢問補償折扣碼／小額折扣碼",
          "branch": "小額折扣碼",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問退貨退款流程／NRR",
      "steps": [
        {
          "prompt": "退貨退款主要是哪一種情境？",
          "option": "60 元以下自動退款"
        }
      ],
      "branch": "60 元以下自動退款",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "60 元以下自動退款"
      ],
      "answerParts": [
        {
          "question": "詢問退貨退款流程／NRR",
          "branch": "60 元以下自動退款",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問退貨退款流程／NRR",
      "steps": [
        {
          "prompt": "退貨退款主要是哪一種情境？",
          "option": "61-1380 元快速退款"
        }
      ],
      "branch": "61-1380 元快速退款",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "61-1380 元快速退款"
      ],
      "answerParts": [
        {
          "question": "詢問退貨退款流程／NRR",
          "branch": "61-1380 元快速退款",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問退貨退款流程／NRR",
      "steps": [
        {
          "prompt": "退貨退款主要是哪一種情境？",
          "option": "包裹未送達進蝦皮審核"
        }
      ],
      "branch": "包裹未送達進蝦皮審核",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "包裹未送達進蝦皮審核"
      ],
      "answerParts": [
        {
          "question": "詢問退貨退款流程／NRR",
          "branch": "包裹未送達進蝦皮審核",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問退貨退款流程／NRR",
      "steps": [
        {
          "prompt": "退貨退款主要是哪一種情境？",
          "option": "缺件僅退款進蝦皮審核"
        }
      ],
      "branch": "缺件僅退款進蝦皮審核",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "缺件僅退款進蝦皮審核"
      ],
      "answerParts": [
        {
          "question": "詢問退貨退款流程／NRR",
          "branch": "缺件僅退款進蝦皮審核",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問退貨退款流程／NRR",
      "steps": [
        {
          "prompt": "退貨退款主要是哪一種情境？",
          "option": "其他原因一般退貨"
        }
      ],
      "branch": "其他原因一般退貨",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "其他原因一般退貨"
      ],
      "answerParts": [
        {
          "question": "詢問退貨退款流程／NRR",
          "branch": "其他原因一般退貨",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問 Offline RR／Agent AOC",
      "steps": [
        {
          "prompt": "Offline RR 目前判斷結果是什麼？",
          "option": "鑑賞期內優先引導買家自行 AOC"
        }
      ],
      "branch": "鑑賞期內優先引導買家自行 AOC",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "鑑賞期內優先引導買家自行 AOC"
      ],
      "answerParts": [
        {
          "question": "詢問 Offline RR／Agent AOC",
          "branch": "鑑賞期內優先引導買家自行 AOC",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問 Offline RR／Agent AOC",
      "steps": [
        {
          "prompt": "Offline RR 目前判斷結果是什麼？",
          "option": "可發起 Agent AOC"
        }
      ],
      "branch": "可發起 Agent AOC",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "可發起 Agent AOC"
      ],
      "answerParts": [
        {
          "question": "詢問 Offline RR／Agent AOC",
          "branch": "可發起 Agent AOC",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問 Offline RR／Agent AOC",
      "steps": [
        {
          "prompt": "Offline RR 目前判斷結果是什麼？",
          "option": "不可發起 AOC RR"
        }
      ],
      "branch": "不可發起 AOC RR",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "不可發起 AOC RR"
      ],
      "answerParts": [
        {
          "question": "詢問 Offline RR／Agent AOC",
          "branch": "不可發起 AOC RR",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問 Offline RR／Agent AOC",
      "steps": [
        {
          "prompt": "Offline RR 目前判斷結果是什麼？",
          "option": "專員已代發 RR"
        }
      ],
      "branch": "專員已代發 RR",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "專員已代發 RR"
      ],
      "answerParts": [
        {
          "question": "詢問 Offline RR／Agent AOC",
          "branch": "專員已代發 RR",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問取消配送中訂單",
      "steps": [
        {
          "prompt": "取消配送中目前是哪一種狀態？",
          "option": "訂單可申請取消配送中"
        }
      ],
      "branch": "訂單可申請取消配送中",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "訂單可申請取消配送中"
      ],
      "answerParts": [
        {
          "question": "詢問取消配送中訂單",
          "branch": "訂單可申請取消配送中",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問取消配送中訂單",
      "steps": [
        {
          "prompt": "取消配送中目前是哪一種狀態？",
          "option": "申請處理中"
        }
      ],
      "branch": "申請處理中",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "申請處理中"
      ],
      "answerParts": [
        {
          "question": "詢問取消配送中訂單",
          "branch": "申請處理中",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問取消配送中訂單",
      "steps": [
        {
          "prompt": "取消配送中目前是哪一種狀態？",
          "option": "系統同意取消"
        }
      ],
      "branch": "系統同意取消",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "系統同意取消"
      ],
      "answerParts": [
        {
          "question": "詢問取消配送中訂單",
          "branch": "系統同意取消",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問取消配送中訂單",
      "steps": [
        {
          "prompt": "取消配送中目前是哪一種狀態？",
          "option": "系統拒絕或買家撤回"
        }
      ],
      "branch": "系統拒絕或買家撤回",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "系統拒絕或買家撤回"
      ],
      "answerParts": [
        {
          "question": "詢問取消配送中訂單",
          "branch": "系統拒絕或買家撤回",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問工單／KAM 表是否要建立",
      "steps": [
        {
          "prompt": "目前案件需要哪一種處理？",
          "option": "單純商品資訊不用開單"
        }
      ],
      "branch": "單純商品資訊不用開單",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "單純商品資訊不用開單"
      ],
      "answerParts": [
        {
          "question": "詢問工單／KAM 表是否要建立",
          "branch": "單純商品資訊不用開單",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問工單／KAM 表是否要建立",
      "steps": [
        {
          "prompt": "目前案件需要哪一種處理？",
          "option": "需開單＋填 KAM 表"
        }
      ],
      "branch": "需開單＋填 KAM 表",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "需開單＋填 KAM 表"
      ],
      "answerParts": [
        {
          "question": "詢問工單／KAM 表是否要建立",
          "branch": "需開單＋填 KAM 表",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問工單／KAM 表是否要建立",
      "steps": [
        {
          "prompt": "目前案件需要哪一種處理？",
          "option": "廠直問題需轉廠商"
        }
      ],
      "branch": "廠直問題需轉廠商",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "廠直問題需轉廠商"
      ],
      "answerParts": [
        {
          "question": "詢問工單／KAM 表是否要建立",
          "branch": "廠直問題需轉廠商",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問工單／KAM 表是否要建立",
      "steps": [
        {
          "prompt": "目前案件需要哪一種處理？",
          "option": "平日／假日追蹤話術"
        }
      ],
      "branch": "平日／假日追蹤話術",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "平日／假日追蹤話術"
      ],
      "answerParts": [
        {
          "question": "詢問工單／KAM 表是否要建立",
          "branch": "平日／假日追蹤話術",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問聊聊轉二線",
      "steps": [
        {
          "prompt": "轉二線原因是哪一種？",
          "option": "轉詢 SLA 超過 48 小時"
        }
      ],
      "branch": "轉詢 SLA 超過 48 小時",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "轉詢 SLA 超過 48 小時"
      ],
      "answerParts": [
        {
          "question": "詢問聊聊轉二線",
          "branch": "轉詢 SLA 超過 48 小時",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問聊聊轉二線",
      "steps": [
        {
          "prompt": "轉二線原因是哪一種？",
          "option": "已說明 3 次仍重複詢問"
        }
      ],
      "branch": "已說明 3 次仍重複詢問",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "已說明 3 次仍重複詢問"
      ],
      "answerParts": [
        {
          "question": "詢問聊聊轉二線",
          "branch": "已說明 3 次仍重複詢問",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問聊聊轉二線",
      "steps": [
        {
          "prompt": "轉二線原因是哪一種？",
          "option": "買家有情緒／不雅／性騷擾"
        }
      ],
      "branch": "買家有情緒／不雅／性騷擾",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "買家有情緒／不雅／性騷擾"
      ],
      "answerParts": [
        {
          "question": "詢問聊聊轉二線",
          "branch": "買家有情緒／不雅／性騷擾",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問聊聊轉二線",
      "steps": [
        {
          "prompt": "轉二線原因是哪一種？",
          "option": "無法判斷需協助方向"
        }
      ],
      "branch": "無法判斷需協助方向",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "無法判斷需協助方向"
      ],
      "answerParts": [
        {
          "question": "詢問聊聊轉二線",
          "branch": "無法判斷需協助方向",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問延遲補償",
      "steps": [
        {
          "prompt": "延遲補償查詢結果是哪一種？",
          "option": "物流渠道適用延遲補償"
        }
      ],
      "branch": "物流渠道適用延遲補償",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "物流渠道適用延遲補償"
      ],
      "answerParts": [
        {
          "question": "詢問延遲補償",
          "branch": "物流渠道適用延遲補償",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問延遲補償",
      "steps": [
        {
          "prompt": "延遲補償查詢結果是哪一種？",
          "option": "黑名單或不符合補償"
        }
      ],
      "branch": "黑名單或不符合補償",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "黑名單或不符合補償"
      ],
      "answerParts": [
        {
          "question": "詢問延遲補償",
          "branch": "黑名單或不符合補償",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問延遲補償",
      "steps": [
        {
          "prompt": "延遲補償查詢結果是哪一種？",
          "option": "符合補發延遲補償"
        }
      ],
      "branch": "符合補發延遲補償",
      "next": "確認欄位後產生回覆",
      "routes": [],
      "answerBranches": [
        "符合補發延遲補償"
      ],
      "answerParts": [
        {
          "question": "詢問延遲補償",
          "branch": "符合補發延遲補償",
          "beforeText": ""
        }
      ]
    },
    {
      "question": "詢問鑑賞期",
      "steps": [],
      "branch": "鑑賞期",
      "next": "填入取貨日期，套用共用鑑賞期判斷",
      "routes": [],
      "answerBranches": [
        "鑑賞期"
      ],
      "answerParts": [
        {
          "question": "共用",
          "branch": "鑑賞期",
          "beforeText": ""
        }
      ]
    }
  ],
  "variables": [
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
      "common": false,
      "category": "常用",
      "fillRules": [],
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
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
      "defaultValue": "轉單詢問",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
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
      "sourceNote": "<div>有訂單編號才需要選符合的選項，沒有的話不需要</div>",
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
      "sourceNote": "<div>售後訂單已經申請退款才要勾</div><div><br></div><h2>如何查詢有沒有退款：</h2><h3>方法一．<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><div><ol><li>輸入 OSN、Username 或 Return SN 查詢訂單</li><li>在一般資訊區查看 Return 資訊、訂單狀態及時間序</li></ol></div><div><br></div><h3>方法二．<a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin Portal</a></h3><div><ol><li>進入 Return</li><li>Return &amp; Refund Requests</li><li>利用欄位搜尋訂單</li><li>進入詳情後可查看 申請狀態、申請資訊及更新時序。</li></ol></div><div><br></div><h3>方法三．<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse聊聊控制台</a></h3><div>從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。</div><div><ul><li>Processing：已申請，處理中</li><li>Accepted：退貨退款已完成／接受</li><li>Cancelled：曾申請，但已取消</li></ul></div><div>沒有退貨退款編號或相關欄位：通常表示尚未申請</div>",
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
      "sourceNote": "<div>符合「擴大安心退」需要同時符合以下 4 個條件：</div><div><ul><li>在 15 天鑑賞期內</li><li>屬於 商品瑕疵，不是買家個人因素</li><li>欲退商品總金額 低於 NT$1,380</li><li>具備 商品及包裝照片</li></ul></div>",
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
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "label": "個案擁有者／填表人",
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
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
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
      "category": "KAM表",
      "fillRules": []
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
      "sourceNote": "<div>有訂單編號才需要選符合的選項，沒有的話不需要</div>",
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
      "sourceNote": "<div>售後訂單已經申請退款才要勾</div><div><br></div><h2>如何查詢有沒有退款：</h2><h3>方法一．<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><div><ol><li>輸入 OSN、Username 或 Return SN 查詢訂單</li><li>在一般資訊區查看 Return 資訊、訂單狀態及時間序</li></ol></div><div><br></div><h3>方法二．<a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin Portal</a></h3><div><ol><li>進入 Return</li><li>Return &amp; Refund Requests</li><li>利用欄位搜尋訂單</li><li>進入詳情後可查看 申請狀態、申請資訊及更新時序。</li></ol></div><div><br></div><h3>方法三．<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse聊聊控制台</a></h3><div>從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。</div><div><ul><li>Processing：已申請，處理中</li><li>Accepted：退貨退款已完成／接受</li><li>Cancelled：曾申請，但已取消</li></ul></div><div>沒有退貨退款編號或相關欄位：通常表示尚未申請</div>",
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
      "sourceNote": "<div>符合「擴大安心退」需要同時符合以下 4 個條件：</div><div><ul><li>在 15 天鑑賞期內</li><li>屬於 商品瑕疵，不是買家個人因素</li><li>欲退商品總金額 低於 NT$1,380</li><li>具備 商品及包裝照片</li></ul></div>",
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
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "label": "個案擁有者／填表人",
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
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
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
      "branch": "廠直表",
      "code": "V026",
      "label": "Type_廠直表",
      "hint": "order=訂單問題 ；return=退貨問題；sku=商品問題",
      "sourceNote": "order=訂單問題\nreturn=退貨問題\nsku=商品問題",
      "sourceLinks": [],
      "options": [
        "order",
        "return",
        "sku"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
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
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "order",
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
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "return",
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
            },
            {
              "action": "fill",
              "targetCode": "V032",
              "value": "2",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "sku",
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
      "branch": "廠直表",
      "code": "V025",
      "label": "Sheet-ID_廠直表",
      "hint": "不用輸入",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "不用輸入",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V024",
      "label": "分頁_廠直表",
      "hint": "廠直表的下方選分頁",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "轉單詢問",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V034",
      "label": "問題分類_廠直表",
      "hint": "依照問題種類做選擇",
      "sourceNote": "",
      "sourceLinks": [],
      "options": [
        "退貨-廠商出錯貨",
        "退貨-商品瑕疵",
        "退貨-缺件",
        "退貨-拒收",
        "退貨-驗收流程",
        "退貨-其他",
        "換貨-商品瑕疵",
        "補寄-缺件",
        "補寄-商品瑕疵",
        "物流-改資訊",
        "物流-調閱簽收單",
        "物流-分箱出貨單號",
        "物流-合併訂單",
        "物流-配送追蹤",
        "物流-客訴配送服務",
        "物流-催促配送",
        "商品規格",
        "商品使用配件/贈品",
        "OOS",
        "保固相關",
        "訂單備註",
        "其他",
        "廠商-多寄"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V039",
      "label": "需再次溝通_廠直表",
      "hint": "要第二次溝通再打勾",
      "sourceNote": "",
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
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V019",
      "label": "個案擁有者／填表人",
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
      "branch": "廠直表",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "branch": "廠直表",
      "code": "V035",
      "label": "廠商回覆（剛填表）_廠直表",
      "hint": "不用輸入",
      "sourceNote": "有回覆了整理一下內容再給客人回覆",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "不用輸入",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V033",
      "label": "簡述問題_廠直表",
      "hint": "簡述問題",
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
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V038",
      "label": "A組聊聊結案_廠直表",
      "hint": "結案再打勾",
      "sourceNote": "",
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
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V037",
      "label": "CS內部備註TYPE_廠直表",
      "hint": "自動填入",
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
      "category": "廠直表",
      "fillRules": [
        {
          "values": [
            "sku"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V018",
              "value": "",
              "answerText": "，所以要填{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V037"
            }
          ]
        },
        {
          "values": [
            "return",
            "order"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V026",
              "value": "",
              "answerText": "，不用輸入",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V037"
            }
          ]
        }
      ]
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V027",
      "label": "ID-Type_廠直表",
      "hint": "會自動帶入",
      "sourceNote": "Type=order ，填入SCM Order ID \nType=return ，填入SCM Return Order ID \nType=sku ，填入MP SKU ID",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": [
        {
          "values": [
            "SCM Order ID"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V028",
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
              "targetCode": "V029",
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
              "targetCode": "V030",
              "value": "",
              "answerText": "：{{V030}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V027"
            }
          ]
        }
      ]
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V030",
      "label": "MP SKU ID",
      "hint": "商品頁 → 取得 {Product ID} → DSS → 供應商管理 → 商品 → 搜尋 {Product ID} → 選擇 {商品規格}（如果客人有指定）→ 複製 {MP SKU ID}",
      "sourceNote": "<h3>方法一．只有 Product ID，從 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS </a>查 MP SKU ID</h3><div><ol><li>開啟商品頁，從網址取得 {Product ID}<br>▪ 商品頁網址通常有兩段數字，後面一段是 Product ID。</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></li><li>進入：供應商管理 → 商品</li><li>使用 {Product ID} 搜尋商品。</li><li>搜尋結果會列出該商品的不同規格，根據買家詢問的 {商品規格}（如果客人有指定），找到正確的 {Model ID}。</li><li>複製系統顯示的 {MP SKU ID}。</li></ol></div><div>注意：同一個 Product ID 可能有多個 Model ID，必須依買家詢問的規格選擇（如果客人有指定），沒指定就隨便選一個。</div><h3>方法二．從 <a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin</a> 同時取得 Product ID 與 Model ID</h3><div>適用於已經有 {Order SN} 的售後訂單。</div><div><ol><li>開啟 Order Admin Portal。</li><li>進入：Orders → 訂單查詢</li><li>輸入 {Order SN_OSN}。</li><li>點選搜尋並進入訂單詳細資料。</li><li>到商品資訊區，找到買家詢問的 {商品名稱} 與 {商品規格}。</li><li>在同一筆商品規格資料中取得：<br>▪ Product ID：{Product ID}<br>▪ Model ID：{Model ID}</li><li>&nbsp;將兩個 ID 用底線組合：{Product ID}_{Model ID}</li></ol></div><div>組合完成的結果就是：{MP SKU ID}</div><h3>使用時怎麼選</h3><div><ul><li>只有商品頁及 Product ID：使用 方法一，從 DSS 查詢。</li><li>已有訂單編號：使用 方法二，從 Order Admin 同時取得 Product ID 與 Model ID。</li></ul></div><div>商品只有單一規格，也不建議自行填 {Product ID}_0；仍應確認實際 Model ID。</div>",
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://order-admin.shopee.tw/",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V032",
      "label": "Priority_廠直表",
      "hint": "依照緊急程度選擇",
      "sourceNote": "０：社群媒體法律健康風險(關鍵字等)\n１：有時間性問題(如改地址)\n２：一般基礎問題",
      "sourceLinks": [],
      "options": [
        "0",
        "1",
        "2"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V031",
      "label": "Question_廠直表",
      "hint": "不用填",
      "sourceNote": "<div>Question 會自動帶出，主要用於：</div><div><ul><li>DSS 的「商談」內容，讓 KAM／廠商查看問題並回覆。</li><li>&nbsp;「歷史發問查詢」，供後續專員搜尋過往相同問題與答案。</li></ul></div>",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "不用動",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "廠直表",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V028",
      "label": "SCM Order ID",
      "hint": "DSS → 訂單查詢 → 輸入 {Order SN_OSN} → 搜尋 → 詳細資料 → SCM Order ID",
      "sourceNote": "<div>1. 先取得訂單編號（Order SN）</div><div>2. 開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></div><div>3. 點選 「訂單查詢」</div><div>4. 輸入訂單編號（Order SN）</div><div>5. 點選 「搜尋」</div><div>6. 找到對應訂單後，點選 「詳細資料」</div><div>7. 在訂單詳細資料中找到並複製 【SCM Order ID】</div>",
      "sourceLinks": [
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://scm.internal.shopee.tw/homepage/backlogs",
      "category": "訂單相關",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "V029",
      "label": "SCM Return Order ID",
      "hint": "CS Portal → 搜尋 {Order SN_OSN／Buyer Username} → Return 資訊 → {Return SN} → DSS → Admin_Return → {SCM Return Order ID}",
      "sourceNote": "<h3><b>方法一．<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 反查</b></h3><div><ol><li>開啟 CS Portal。</li><li>&nbsp;搜尋欄輸入：{Order SN_OSN}，或{Buyer Username}<br>▪ 若使用 Username 查詢，選擇正確的 {Order SN_OSN}</li><li>按 Enter</li><li>展開 Order<br>▪ 在一般資訊區找到 Return 資訊</li><li>複製 {Return SN}</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></li><li>進入 Admin_Return／退貨訂單查詢</li><li>貼上 {Return SN}，點選搜尋</li><li>進入退貨訂單詳細資料</li><li>複製 {SCM Return Order ID}</li></ol></div><div><br></div><h3><b>方法二．<a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin Portal</a> 反查</b></h3><div><ol><li>開啟 Order Admin Portal。</li><li>進入：Return → Return &amp; Refund Requests</li><li>在查詢欄位輸入 {Order SN_OSN}。</li><li>找到對應的退貨退款申請。</li><li>進入申請詳情。</li><li>複製 {Return SN／Return ID}。</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS</a>。</li><li>進入 Admin_Return／退貨訂單查詢。</li><li>輸入 {Return SN}。</li><li>點選搜尋並開啟詳細資料。</li><li>複製 {SCM Return Order ID}。</li></ol></div><div><br></div><div><b>方法三．<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>控制台反查</b></div><div><ol><li>開啟買家的聊聊。</li><li>切換到 訂單詳情。</li><li>選擇正確的 {Order SN_OSN}。</li><li>展開 Order Info。</li><li>找到「退貨退款編號」，複製 {Return SN}。<br>▪ 同時確認退貨退款狀態：<br>▫ Processing：已申請，處理中<br>▫ Accepted：申請已接受／退款完成<br>▫ Cancelled：申請已取消</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS</a>。</li><li>進入 Admin_Return／退貨訂單查詢。</li><li>輸入 {Return SN}。</li><li>&nbsp;開啟詳細資料並複製 {SCM Return Order ID}。</li></ol></div><div><br></div><h3>方法四<b>．</b>從既有案件紀錄查詢</h3><div>如果案件之前有人處理過，可以先查：</div><div><ul><li>使用 {Order SN} 搜尋 <a href=\"https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing\" target=\"_blank\" rel=\"noopener\">KAM表</a>／<a href=\"https://docs.google.com/spreadsheets/d/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8/edit?gid=0#gid=0\" target=\"_blank\" rel=\"noopener\">廠商直送表</a>。</li><li>使用 {Order SN} 或 {Buyer Username} 搜尋 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee Jira</a>。</li></ul></div><div>查看既有紀錄是否已填寫：</div><div>{Return SN} {SCM Return Order ID}</div><div>如果只有 Return SN，再貼到 DSS 的 Admin_Return 查詢 SCM Return Order ID。</div><div>使用既有 ID 前，務必確認是同一筆訂單、同一次退貨退款申請。</div>",
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
        },
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        },
        {
          "title": "KAM表",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
        },
        {
          "title": "廠商直送表",
          "url": "https://docs.google.com/spreadsheets/d/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8/edit?gid=0#gid=0"
        },
        {
          "title": "Shopee Jira",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "訂單相關",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
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
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "customer_need",
      "label": "客人要找",
      "hint": "例如：尺寸、材質、商品圖片",
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
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "product_page_area",
      "label": "產品頁的哪裡",
      "hint": "例如：商品描述、規格表、圖片",
      "sourceNote": "<div><br></div>",
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
      "q": "Q004",
      "branch": "商品頁有找到",
      "code": "found_keyword",
      "label": "找到的關鍵字／內容",
      "hint": "把商品頁看到的資訊貼上",
      "sourceNote": "<div><br></div>",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "商品詢問",
      "fillRules": []
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "pickup_date",
      "label": "取貨日期",
      "hint": "日期，例如 2026/7/30",
      "sourceNote": "<h3>方法一：<a href=\"https://sci.twtc.shopee.tw/shopee24-hub/search\" target=\"_blank\" rel=\"noopener\">SCI 貨態系統（優先）</a></h3><ol><li>開啟 SCI 貨態系統。</li><li>輸入 {物流單號} 或 {Order SN} 查詢。</li><li>找到狀態「已取件／Delivered／Picked Up」。</li><li>該狀態旁的日期時間就是 {取貨日期}。</li></ol><h3>方法二：<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><ol><li>輸入 {Order SN}。</li><li>展開正確的 Order。</li><li>查看「物流資訊」或「訂單與物流歷程」。</li><li>找到「買家已取件／訂單已送達」。</li><li>取該狀態的日期作為 {取貨日期}。</li></ol><p>如果查不到「已取件」紀錄，代表貨態可能尚未更新，先不要自行推算日期。</p><p>如果你問的是退貨物流到府取件日期：<br>Order Admin → Return → Return &amp; Refund Requests → 申退詳情 → Status &amp; Timeline</p><p>黑貓／蝦宅退貨也可在買家端「退貨退款詳情」查看取件時間與地址。<br></p>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "SCI 貨態系統",
          "url": "https://sci.twtc.shopee.tw/shopee24-hub/search"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "date",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "return_start",
      "label": "第一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "sourceNote": "<div><br></div>",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoSource": "pickup_date",
      "autoDays": 1,
      "required": false,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "鑑賞期",
      "fillRules": []
    },
    {
      "q": "Q001",
      "branch": "共用",
      "code": "return_deadline",
      "label": "最後一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "sourceNote": "<div><br></div>",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoSource": "pickup_date",
      "autoDays": 15,
      "required": false,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "鑑賞期",
      "fillRules": []
    },
    {
      "code": "flash_sale_limit",
      "label": "結帳頁顯示的限購數量",
      "hint": "例如：每人限購 2 件",
      "sourceNote": "查詢步驟：\n1. 在商品頁確認是否有「限時特賣」。\n2. 將商品加入購物車。\n3. 進入結帳頁確認實際可購買數量。\n\n注意：\n▪ 限時特賣通常會限制數量。\n▪ 實際數量以結帳頁面顯示為主。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": [],
      "q": "Q005",
      "branch": "共用"
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
      "defaultValue": "",
      "q": "Q008",
      "branch": "加價購商品要搭配哪件主商品"
    },
    {
      "code": "addon_campaign_id",
      "label": "活動檔期／add_on_deal_id",
      "hint": "填入工具顯示的活動檔期或 add_on_deal_id",
      "sourceNote": "<div><b>加價購主商品確認</b></div><ol><li>問題本身先在下方打字說明：需到 AOD-Main 確認商品是否為加價購主商品。</li><li>若工具查不到，再用 [DB] Add-on / Gift / Bundle：先在 Sub 以 Product ID 反查 add_on_deal_id。</li><li>再到 Main 用 add_on_deal_id 查主商品資訊；有加價購標籤才繼續產出下一層答案。</li><li>回覆時帶入主商品 Product ID / 商品名稱；需要時請一併傳送商品卡。</li></ol>",
      "sourceLinks": [
        {
          "title": "加價購主商品 AOD-Main",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/AOD-Main?authuser=3"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle 反查流程 - Sub",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle 反查流程 - Main",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=0#gid=0"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/AOD-Main?authuser=3",
      "category": "促銷活動",
      "fillRules": [],
      "q": "Q008",
      "branch": "加價購商品要搭配哪件主商品"
    },
    {
      "code": "addon_main_product",
      "label": "可搭配的主商品",
      "hint": "填入主商品的 Product ID 或商品名稱",
      "sourceNote": "<div><b>加價購主商品確認</b></div><ol><li>問題本身先在下方打字說明：需到 AOD-Main 確認商品是否為加價購主商品。</li><li>若工具查不到，再用 [DB] Add-on / Gift / Bundle：先在 Sub 以 Product ID 反查 add_on_deal_id。</li><li>再到 Main 用 add_on_deal_id 查主商品資訊；有加價購標籤才繼續產出下一層答案。</li><li>回覆時帶入主商品 Product ID / 商品名稱；需要時請一併傳送商品卡。</li></ol>",
      "sourceLinks": [
        {
          "title": "加價購主商品 AOD-Main",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/AOD-Main?authuser=3"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle 反查流程 - Sub",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle 反查流程 - Main",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=0#gid=0"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/AOD-Main?authuser=3",
      "category": "促銷活動",
      "fillRules": [],
      "q": "Q008",
      "branch": "加價購商品要搭配哪件主商品"
    },
    {
      "code": "gift_item",
      "label": "滿額贈商品",
      "hint": "填入購物車自動加入的贈品名稱",
      "sourceNote": "確認方式：\n▪ 滿額贈不會顯示在商品頁的獨立區塊。\n▪ 達到活動條件時，系統會在購物車自動加入贈品。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": [],
      "q": "Q009",
      "branch": "購物車有自動加入贈品"
    },
    {
      "code": "gift_remaining_quantity",
      "label": "滿額贈剩餘數量",
      "hint": "填入購物車顯示的贈品剩餘數量",
      "sourceNote": "確認方式：\n▪ 購物車會顯示目前滿額贈剩餘數量。\n▪ 若贈品已贈完，購物車不會顯示。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": [],
      "q": "Q009",
      "branch": "購物車有自動加入贈品"
    },
    {
      "code": "available_voucher_codes",
      "label": "優惠代碼有哪些",
      "hint": "把 CS Portal 顯示可使用的優惠代碼全部貼上；多筆請一行一個",
      "sourceNote": "<div>使用 CS Portal 查詢：</div><div>1. 搜尋買家 Username。</div><div>2. 進入「詳細資訊（買家）」。</div><div>3. 點選「優惠代碼錢包」。</div><div>4. 將目前可使用的優惠代碼填入此欄位。</div><div><br></div><div>其他查詢方式：</div><div>▪ 也可以直接用優惠代碼在 CS Portal 搜尋。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": [],
      "q": "Q006",
      "branch": "查詢買家目前可用優惠券"
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
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "q": "Q006",
      "branch": "查詢買家目前可用優惠券"
    },
    {
      "q": "Q006",
      "branch": "取消訂單後優惠券是否返還",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "取消訂單後優惠券是否返還",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "q": "Q006",
      "branch": "取消訂單後優惠券是否返還",
      "code": "original_voucher_code",
      "label": "原優惠代碼_Voucher Code",
      "hint": "填入取消訂單前使用的原 Voucher Code",
      "sourceNote": "<div>查找位置：</div><div>▪ CS Portal → 搜尋 {Order SN} → 一般資訊 → 優惠券資訊。</div><div>▪ 如果是免運券，可到 Order Admin → Orders → Order Information → Free Shipping Fee Voucher Promo ID 確認該訂單使用的免運券資料。</div>",
      "sourceLinks": [
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "code": "original_voucher_code",
      "label": "原優惠代碼_Voucher Code",
      "hint": "填入取消訂單前使用的原 Voucher Code",
      "sourceNote": "<div>查找位置：</div><div>▪ CS Portal → 搜尋 {Order SN} → 一般資訊 → 優惠券資訊。</div><div>▪ 如果是免運券，可到 Order Admin → Orders → Order Information → Free Shipping Fee Voucher Promo ID 確認該訂單使用的免運券資料。</div>",
      "sourceLinks": [
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "code": "voucher_return_status",
      "label": "優惠券返還／使用狀態",
      "hint": "請選擇後台查詢結果",
      "sourceNote": "<div>查詢步驟：</div><div>1. 開啟 CS Portal。</div><div>2. 使用 {Buyer Username} 搜尋買家。</div><div>3. 進入「詳細資訊（買家）」→「優惠代碼錢包」。</div><div>4. 使用原 Voucher Code 搜尋或比對清單。</div><div>5. 查看優惠券是否出現在可用清單、目前狀態及有效期限。</div><div><br></div><div>判斷方式：</div><div>▪ 顯示在可用清單且狀態為 Valid／可使用：代表已返還且仍可使用。</div><div>▪ 未出現在可用清單，或狀態為失效／過期／不可使用：代表目前不能再次使用。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "options": [
        "已返還，可再次使用",
        "已返還，但已失效／不可使用",
        "未返還，可再次使用",
        "未返還，但已失效／不可使用",
        "未返還",
        "查無原優惠券資料"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "code": "available_voucher_codes",
      "label": "優惠代碼有哪些",
      "hint": "把 CS Portal 顯示可使用的優惠代碼全部貼上；多筆請一行一個",
      "sourceNote": "<div>使用 CS Portal 查詢：</div><div>1. 搜尋買家 Username。</div><div>2. 進入「詳細資訊（買家）」。</div><div>3. 點選「優惠代碼錢包」。</div><div>4. 將目前可使用的優惠代碼填入此欄位。</div><div><br></div><div>其他查詢方式：</div><div>▪ 也可以直接用優惠代碼在 CS Portal 搜尋。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "code": "original_voucher_code",
      "label": "原優惠代碼_Voucher Code",
      "hint": "填入取消訂單前使用的原 Voucher Code",
      "sourceNote": "<div>查找位置：</div><div>▪ CS Portal → 搜尋 {Order SN} → 一般資訊 → 優惠券資訊。</div><div>▪ 如果是免運券，可到 Order Admin → Orders → Order Information → Free Shipping Fee Voucher Promo ID 確認該訂單使用的免運券資料。</div>",
      "sourceLinks": [
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "code": "voucher_return_status",
      "label": "優惠券返還／使用狀態",
      "hint": "請選擇後台查詢結果",
      "sourceNote": "<div>查詢步驟：</div><div>1. 開啟 CS Portal。</div><div>2. 使用 {Buyer Username} 搜尋買家。</div><div>3. 進入「詳細資訊（買家）」→「優惠代碼錢包」。</div><div>4. 使用原 Voucher Code 搜尋或比對清單。</div><div>5. 查看優惠券是否出現在可用清單、目前狀態及有效期限。</div><div><br></div><div>判斷方式：</div><div>▪ 顯示在可用清單且狀態為 Valid／可使用：代表已返還且仍可使用。</div><div>▪ 未出現在可用清單，或狀態為失效／過期／不可使用：代表目前不能再次使用。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "options": [
        "已返還，可再次使用",
        "已返還，但已失效／不可使用",
        "未返還，可再次使用",
        "未返還，但已失效／不可使用",
        "未返還",
        "查無原優惠券資料"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "code": "available_voucher_codes",
      "label": "優惠代碼有哪些",
      "hint": "把 CS Portal 顯示可使用的優惠代碼全部貼上；多筆請一行一個",
      "sourceNote": "<div>使用 CS Portal 查詢：</div><div>1. 搜尋買家 Username。</div><div>2. 進入「詳細資訊（買家）」。</div><div>3. 點選「優惠代碼錢包」。</div><div>4. 將目前可使用的優惠代碼填入此欄位。</div><div><br></div><div>其他查詢方式：</div><div>▪ 也可以直接用優惠代碼在 CS Portal 搜尋。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "code": "shipping_fee_details",
      "label": "結帳頁實際運費",
      "hint": "填入結帳頁顯示的物流方式、免運門檻及實際運費",
      "sourceNote": "查詢方式：\n\n方法一．從商品頁查看\n1. 開啟商品頁。\n2. 查看「運費說明」及商品可使用的物流方式。\n3. 確認是否有「店取 - 最快當日到」或「宅配 - 最快隔日到」標籤。\n\n方法二．從結帳頁查看\n1. 將商品加入購物車。\n2. 進入結帳頁。\n3. 點選「寄送方式」。\n4. 查看可選物流、免運門檻及實際運費。\n\n注意事項：\n▪ 一般宅配及活動期間的實際運費，以結帳頁系統顯示為準。\n▪ 商品、配送地址或區域不適用時，結帳頁可能不會顯示該物流方式。",
      "sourceLinks": [
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles",
      "category": "物流相關",
      "fillRules": [],
      "q": "Q007",
      "branch": "問運費"
    },
    {
      "code": "estimated_delivery_result",
      "label": "系統預計配達日期",
      "hint": "填入系統顯示的物流方式、預計配達日期及服務區域",
      "sourceNote": "查詢方式：\n\n方法一．從商品頁或結帳頁確認\n1. 查看商品是否有「店取 - 最快當日到」、「宅配 - 最快隔日到」或「蝦皮店到店 - 隔日到貨」標籤。\n2. 進入結帳頁選擇寄送方式及收件地址。\n3. 查看系統顯示的預計配達日期。\n\n方法二．從 InHouse 聊聊控制台查詢已成立訂單\n1. 開啟買家的訂單資訊。\n2. 依訂單狀態、建立時間或 Order SN 找到正確訂單。\n3. 點選 Order SN，開啟 CS Portal。\n4. 查看訂單資訊中的「預計交貨日期」及物流狀態。\n\n注意事項：\n▪ 一般宅配的預計配達時間為系統預測，實際到貨時間以物流通知為準。\n▪ 若商品、地址、時段或配送量不適用，系統可能不會顯示快速配送。\n▪ 辦公室地址、國定假日、天災、特殊活動或不可抗力因素，可能使配送時間順延。",
      "sourceLinks": [
        {
          "title": "InHouse 聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "date",
      "multiline": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "物流相關",
      "fillRules": [],
      "q": "Q007",
      "branch": "問什麼時候到貨"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q010",
      "branch": "查商品效期",
      "category": "商品詢問",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "商品效期 Inventory Expiration Date",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Expiration-Date?authuser=3"
        }
      ],
      "q": "Q010",
      "branch": "查商品效期",
      "category": "售前商品工具",
      "code": "expiration_result",
      "label": "小工具查詢效期",
      "hint": "貼上各規格或指定規格效期",
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Expiration-Date?authuser=3",
      "sourceNote": "<div><b>商品效期查詢</b></div><ol><li>到 SCS CS Tool 的 Inventory Expiration Date。</li><li>以 Product ID 查詢；若客人提供規格，需確認對應 variation / spec。</li><li>回覆前提醒商品實際效期仍以包裝標示為準。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q010",
      "branch": "查商品進貨日",
      "category": "商品詢問",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "商品進貨日 Inventory Inbound Date",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Inbound-Date?authuser=3"
        }
      ],
      "q": "Q010",
      "branch": "查商品進貨日",
      "category": "售前商品工具",
      "code": "inbound_result",
      "label": "小工具查詢進貨日",
      "hint": "貼上小工具顯示結果",
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Inbound-Date?authuser=3",
      "sourceNote": "<div><b>商品進貨日查詢</b></div><ol><li>到 SCS CS Tool 的 Inventory Inbound Date。</li><li>以 Product ID 查詢商品進貨日；若有規格差異，需確認對應品項。</li><li>把查到的進貨日轉成客人看得懂的說法，不直接貼內部欄位名稱。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q011",
      "branch": "尚未進入 WMS",
      "category": "售後出貨配送",
      "code": "backend_note",
      "label": "後台查詢結果",
      "hint": "貼上 CS Portal / OMS / WMS 重點"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q011",
      "branch": "WMS 已出貨但延遲",
      "category": "售後出貨配送",
      "code": "wms_status",
      "label": "WMS 狀態",
      "hint": "Created / Information Received / Outbound 等",
      "options": [
        "Created",
        "Information Received",
        "Outbound",
        "其他／需補充"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q011",
      "branch": "WMS 已出貨但延遲",
      "category": "售後出貨配送",
      "code": "delay_days",
      "label": "延遲天數",
      "hint": "例如：Outbound > 2D"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q011",
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "category": "售後出貨配送",
      "code": "oos_item",
      "label": "缺貨商品",
      "hint": "可填商品名稱或品項"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q011",
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "category": "售後出貨配送",
      "code": "backend_note",
      "label": "後台查詢結果",
      "hint": "貼上 OMS/WMS 重點"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "包裹延遲未配達",
      "category": "售後出貨配送",
      "code": "logistics_status",
      "label": "物流貨態",
      "hint": "貼上目前貨態"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "包裹延遲未配達",
      "category": "售後出貨配送",
      "code": "follow_note",
      "label": "追蹤紀錄",
      "hint": "表單或轉詢紀錄"
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "配達門市超過 10 天未取消",
      "category": "售後出貨配送",
      "code": "store_arrival_date",
      "label": "門市配達日",
      "hint": "YYYY/MM/DD"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "配達門市超過 10 天未取消",
      "category": "售後出貨配送",
      "code": "logistics_status",
      "label": "目前貨態",
      "hint": "貼上目前貨態"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "貨態已配達但買家未收到",
      "category": "售後出貨配送",
      "code": "logistics_status",
      "label": "目前貨態",
      "hint": "貼上目前貨態"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "貨態已配達但買家未收到",
      "category": "售後出貨配送",
      "code": "buyer_confirm",
      "label": "買家確認內容",
      "hint": "是否回門市、是否拿到包裹"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "貨態配送中但買家已取件",
      "category": "售後出貨配送",
      "code": "payment_method",
      "label": "付款方式",
      "hint": "COD / 非 COD",
      "options": [
        "COD",
        "非 COD",
        "待確認"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q012",
      "branch": "貨態配送中但買家已取件",
      "category": "售後出貨配送",
      "code": "amount_note",
      "label": "收款金額確認",
      "hint": "正確／不正確／待確認",
      "options": [
        "收款金額正確",
        "收款金額不正確",
        "待確認"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "category": "售後商品問題",
      "code": "item_amount",
      "label": "商品單價",
      "hint": "NT$"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "category": "售後商品問題",
      "code": "issue_type",
      "label": "問題類型",
      "hint": "破包／漏液／過期／缺件／錯品等",
      "options": [
        "破包",
        "破碎／破裂",
        "漏液",
        "過期",
        "長蟲",
        "缺件",
        "錯品",
        "商品瑕疵",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "category": "售後商品問題",
      "code": "photo_status",
      "label": "照片狀態",
      "hint": "已提供／未提供",
      "options": [
        "已提供照片",
        "未提供照片",
        "照片不足需補充"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "category": "售後商品問題",
      "code": "issue_type",
      "label": "問題類型",
      "hint": "貨損／破包／漏液等",
      "options": [
        "破包",
        "破碎／破裂",
        "漏液",
        "過期",
        "長蟲",
        "缺件",
        "錯品",
        "商品瑕疵",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "category": "售後商品問題",
      "code": "photo_status",
      "label": "照片狀態",
      "hint": "已提供／未提供",
      "options": [
        "已提供照片",
        "未提供照片",
        "照片不足需補充"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "category": "售後商品問題",
      "code": "special_note",
      "label": "特殊條件",
      "hint": "管制區／高單／特殊商品，無則填無"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "category": "售後商品問題",
      "code": "special_note",
      "label": "特殊條件",
      "hint": "管制區／高單／特殊 3C／餐券等"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "category": "售後商品問題",
      "code": "case_note",
      "label": "案件備註",
      "hint": "轉詢或表單紀錄"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q014",
      "branch": "返還原折扣碼",
      "category": "售後補償",
      "code": "user_id",
      "label": "User ID",
      "hint": "買家 UID"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還原折扣碼",
      "category": "售後補償",
      "code": "voucher_code",
      "label": "原 Voucher Code",
      "hint": "原折扣碼",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>補償折扣碼 / 原折扣碼確認</b></div><ol><li>Shopee CS Tool 補碼小工具是瀏覽器擴充功能，只能在 CP 或 DSS 上使用。</li><li>先確認原折扣碼是否失效、是否沒有同等或更好的券可以提供。</li><li>依工具產出的內容貼到個案補碼追蹤表，再帶回可回覆客人的折扣碼資訊。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還原折扣碼",
      "category": "售後補償",
      "code": "voucher_invalid",
      "label": "原碼是否失效",
      "hint": "是／否",
      "options": [
        "已失效",
        "未失效",
        "查無資料"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還原折扣碼",
      "category": "售後補償",
      "code": "better_voucher_check",
      "label": "是否無更優優惠",
      "hint": "是／否",
      "options": [
        "已確認無更優優惠",
        "已有相同或更優優惠",
        "尚未確認"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "category": "售後補償",
      "code": "discount_amount",
      "label": "折扣損失金額",
      "hint": "蝦皮＋賣家折扣",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "category": "售後補償",
      "code": "price_difference",
      "label": "商品價差",
      "hint": "現價 - Subtotal",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "category": "售後補償",
      "code": "min_spend",
      "label": "最低消費",
      "hint": "補碼低消",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "category": "售後補償",
      "code": "voucher_amount",
      "label": "折扣金額",
      "hint": "補碼折扣額",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>返還損失折扣 / 價差</b></div><ol><li>在 CP 或 DSS 使用 Shopee CS Tool 補碼小工具。</li><li>將工具結果貼到個案補碼追蹤表指定欄位，依表內結果確認補償金額與門檻。</li><li>金額欄位用單行文字填寫，保留幣別或必要說明。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q014",
      "branch": "小額折扣碼",
      "category": "售後補償",
      "code": "issue_type",
      "label": "問題類型",
      "hint": "破包／漏液／缺件／錯品等",
      "options": [
        "破包",
        "漏液",
        "過期",
        "長蟲",
        "缺件",
        "商品出錯",
        "重複出貨",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "q": "Q014",
      "branch": "小額折扣碼",
      "category": "售後補償",
      "code": "proof_status",
      "label": "佐證狀態",
      "hint": "照片／表單／OPS通知",
      "options": [
        "照片已確認",
        "表單／OPS 通知",
        "待補佐證"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>小額折扣碼</b></div><ol><li>先確認客人佐證是否足夠，不足時補請截圖或訂單資訊。</li><li>需要補碼時走共用補碼流程與個案補碼追蹤表；小額券不代表原訂單問題已處理完。</li><li>若仍涉及物流、商品或退款問題，另外接回對應共用分支處理。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "60 元以下自動退款",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "買家選擇／描述",
      "options": [
        "包裹未收到",
        "商品缺件",
        "不需要了／已購買類似商品",
        "實品與描述／圖片有落差",
        "收到不對的商品",
        "商品功能有問題",
        "商品外表瑕疵／毀損",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "60 元以下自動退款",
      "category": "售後退貨退款",
      "code": "refund_amount",
      "label": "退款金額",
      "hint": "NT$"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "61-1380 元快速退款",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "買家選擇／描述",
      "options": [
        "包裹未收到",
        "商品缺件",
        "不需要了／已購買類似商品",
        "實品與描述／圖片有落差",
        "收到不對的商品",
        "商品功能有問題",
        "商品外表瑕疵／毀損",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "61-1380 元快速退款",
      "category": "售後退貨退款",
      "code": "refund_amount",
      "label": "退款金額",
      "hint": "NT$"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "包裹未送達進蝦皮審核",
      "category": "售後退貨退款",
      "code": "logistics_status",
      "label": "物流貨態",
      "hint": "貼上目前貨態"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "category": "售後退貨退款",
      "code": "missing_item",
      "label": "缺件內容",
      "hint": "缺少品項／數量"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "category": "售後退貨退款",
      "code": "proof_status",
      "label": "證明資料",
      "hint": "照片／影片／描述",
      "options": [
        "照片已上傳",
        "影片已上傳",
        "待補證明"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "買家選擇／描述",
      "options": [
        "包裹未收到",
        "商品缺件",
        "不需要了／已購買類似商品",
        "實品與描述／圖片有落差",
        "收到不對的商品",
        "商品功能有問題",
        "商品外表瑕疵／毀損",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "category": "售後退貨退款",
      "code": "return_channel",
      "label": "退貨物流",
      "hint": "7-11／SPX／黑貓／賣家自行安排等",
      "options": [
        "7-11",
        "SPX",
        "黑貓／蝦宅",
        "賣家自行安排",
        "待系統顯示"
      ]
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "鑑賞期內優先引導買家自行 AOC",
      "category": "售後退貨退款",
      "code": "complete_date",
      "label": "完成／取貨日期",
      "hint": "YYYY/MM/DD"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "鑑賞期內優先引導買家自行 AOC",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "買家描述"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "可發起 Agent AOC",
      "category": "售後退貨退款",
      "code": "return_id",
      "label": "Return ID",
      "hint": "CS Portal Return ID"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "可發起 Agent AOC",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因備註",
      "hint": "用公版格式"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "q": "Q016",
      "branch": "可發起 Agent AOC",
      "category": "售後退貨退款",
      "code": "proof_status",
      "label": "圖片／證明",
      "hint": "是否已上傳或放入案件",
      "options": [
        "圖片已上傳",
        "圖片放入案件",
        "圖片過多已備註",
        "待補圖片"
      ],
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "sourceNote": "<div><b>Offline RR / AOC_OPS_V2 判別</b></div><ol><li>AOC_OPS_V2 是瀏覽器擴充功能，只能在 CsP 使用。</li><li>到 CS Portal 以 Return ID 查詢案件，再點選 AOC_OPS_V2 判別小工具。</li><li>判別為可發起 Agent AOC 才建立；若顯示已退款或不可發起，改走對應退貨 / 退款處理分支。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "不可發起 AOC RR",
      "category": "售後退貨退款",
      "code": "return_id",
      "label": "Return ID",
      "hint": "CS Portal Return ID"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "不可發起 AOC RR",
      "category": "售後退貨退款",
      "code": "tool_result",
      "label": "小工具結果",
      "hint": "已退款／不可發起原因",
      "options": [
        "已退款",
        "紅字不可發起 AOC RR",
        "查無發起按鈕",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "不可發起 AOC RR",
      "category": "售後退貨退款",
      "code": "case_note",
      "label": "後續處理",
      "hint": "需轉詢或說明內容"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "專員已代發 RR",
      "category": "售後退貨退款",
      "code": "return_id",
      "label": "Related Return/Refund ID",
      "hint": "專員建立後產生"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q016",
      "branch": "專員已代發 RR",
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "備註內容"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "訂單可申請取消配送中",
      "category": "售後退貨退款",
      "code": "logistics_channel",
      "label": "物流渠道",
      "hint": "SPX／店到店等",
      "options": [
        "蝦皮店到店",
        "蝦皮店到店 - 隔日到貨",
        "SCS",
        "店到家宅配",
        "其他物流"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "訂單可申請取消配送中",
      "category": "售後退貨退款",
      "code": "button_status",
      "label": "按鈕狀態",
      "hint": "有／沒有",
      "options": [
        "有取消配送中訂單按鈕",
        "沒有按鈕",
        "待確認"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "申請處理中",
      "category": "售後退貨退款",
      "code": "rr_status",
      "label": "RR 狀態",
      "hint": "例如 RT1:Requested",
      "options": [
        "RT1:Requested",
        "RT2:Accept",
        "RT5:Refund Paid",
        "RT3:Cancel",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "申請處理中",
      "category": "售後退貨退款",
      "code": "remark",
      "label": "Remark",
      "hint": "後台顯示 remark"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "系統同意取消",
      "category": "售後退貨退款",
      "code": "rr_status",
      "label": "RR 狀態",
      "hint": "RT2/RT5 Accept/Refund Paid",
      "options": [
        "RT1:Requested",
        "RT2:Accept",
        "RT5:Refund Paid",
        "RT3:Cancel",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "系統同意取消",
      "category": "售後退貨退款",
      "code": "remark",
      "label": "Remark",
      "hint": "accepted reason"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "系統拒絕或買家撤回",
      "category": "售後退貨退款",
      "code": "rr_status",
      "label": "RR 狀態",
      "hint": "RT3:Cancel",
      "options": [
        "RT1:Requested",
        "RT2:Accept",
        "RT5:Refund Paid",
        "RT3:Cancel",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "系統拒絕或買家撤回",
      "category": "售後退貨退款",
      "code": "remark",
      "label": "Remark",
      "hint": "取消原因"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q017",
      "branch": "系統拒絕或買家撤回",
      "category": "售後退貨退款",
      "code": "next_step",
      "label": "後續建議",
      "hint": "取件／等配送／一般 RR"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "單純商品資訊不用開單",
      "category": "日常作業",
      "code": "issue_summary",
      "label": "客人問題",
      "hint": "簡述問題"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "需開單＋填 KAM 表",
      "category": "日常作業",
      "code": "issue_summary",
      "label": "客人問題",
      "hint": "簡述問題"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "需開單＋填 KAM 表",
      "category": "日常作業",
      "code": "pending_note",
      "label": "未結案備註",
      "hint": "待追蹤內容"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "廠直問題需轉廠商",
      "category": "日常作業",
      "code": "issue_summary",
      "label": "問題摘要",
      "hint": "物流／商品／訂單問題"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "廠直問題需轉廠商",
      "category": "日常作業",
      "code": "vendor_reply",
      "label": "廠商回覆",
      "hint": "尚未回覆可填待回覆"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "平日／假日追蹤話術",
      "category": "日常作業",
      "code": "follow_type",
      "label": "追蹤情境",
      "hint": "平日／假日／連假後／超過2工作天"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q018",
      "branch": "平日／假日追蹤話術",
      "category": "日常作業",
      "code": "pending_note",
      "label": "追蹤備註",
      "hint": "待追蹤內容"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "轉詢 SLA 超過 48 小時",
      "category": "日常作業",
      "code": "case_summary",
      "label": "案件摘要",
      "hint": "卡點與已處理事項"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "轉詢 SLA 超過 48 小時",
      "category": "日常作業",
      "code": "requested_team",
      "label": "欲尋求協助對象",
      "hint": "OPS／BAU"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "已說明 3 次仍重複詢問",
      "category": "日常作業",
      "code": "reply_summary",
      "label": "已回覆內容",
      "hint": "整理已說明的3次重點"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "已說明 3 次仍重複詢問",
      "category": "日常作業",
      "code": "case_summary",
      "label": "目前訴求",
      "hint": "買家仍在意的點"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "買家有情緒／不雅／性騷擾",
      "category": "日常作業",
      "code": "risk_type",
      "label": "風險類型",
      "hint": "情緒／不雅／性騷擾／非理性用詞"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "買家有情緒／不雅／性騷擾",
      "category": "日常作業",
      "code": "case_summary",
      "label": "對話摘要",
      "hint": "貼上重點即可"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "買家有情緒／不雅／性騷擾",
      "category": "日常作業",
      "code": "requested_team",
      "label": "欲尋求協助對象",
      "hint": "QA／OPS／BAU"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "無法判斷需協助方向",
      "category": "日常作業",
      "code": "case_summary",
      "label": "問題摘要",
      "hint": "買家訴求＋已查資料＋卡點"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q019",
      "branch": "無法判斷需協助方向",
      "category": "日常作業",
      "code": "requested_team",
      "label": "欲尋求協助對象",
      "hint": "QA／OPS／BAU"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "category": "售後出貨配送",
      "code": "logistics_channel",
      "label": "物流渠道",
      "hint": "店到店／宅配等",
      "options": [
        "蝦皮店到店",
        "蝦皮店到店 - 隔日到貨",
        "店到家宅配",
        "店取 - 最快當日到",
        "宅配 - 最快隔日到",
        "蝦皮店到店 - 無包裝隔日到",
        "不適用渠道"
      ],
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "category": "售後出貨配送",
      "code": "paid_time",
      "label": "付款完成時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "category": "售後出貨配送",
      "code": "delivered_time",
      "label": "實際到貨時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "category": "售後出貨配送",
      "code": "buyer_id",
      "label": "Buyer ID",
      "hint": "買家 UID"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "category": "售後出貨配送",
      "code": "blacklist_result",
      "label": "查詢表結果",
      "hint": "是否黑名單／不符合原因",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22",
      "sourceNote": "<div><b>延遲補償資格確認</b></div><ol><li>先用延遲補償工具確認物流渠道、付款時間與配達時間是否符合規則。</li><li>再到 2025 查詢表4 / HighRisk Buyer 查詢表，用 Buyer Username / Buyer ID 或 OSN 確認是否為高風險或排除名單。</li><li>若命中黑名單、未延遲或不符規則，不要承諾補償；可參考規則頁說明 14:00 與付款異動相關判斷。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "category": "售後出貨配送",
      "code": "paid_time",
      "label": "付款完成時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "category": "售後出貨配送",
      "code": "delivered_time",
      "label": "實際到貨時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "category": "售後出貨配送",
      "code": "voucher_note",
      "label": "補發紀錄",
      "hint": "補發表單或處理狀態",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22",
      "sourceNote": "<div><b>補發延遲補償</b></div><ol><li>延遲補償工具確認符合後，再用 HighRisk Buyer 查詢表排除黑名單或不可補償情境。</li><li>符合才執行補發，並告知買家留意通知與優惠券錢包。</li><li>回覆文字需帶入補發結果或預計可查看的位置。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q005",
      "branch": "共用",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q005",
      "branch": "共用",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q005",
      "branch": "共用",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q010",
      "branch": "查商品效期",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q010",
      "branch": "查商品進貨日",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q010",
      "branch": "查商品效期",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q011",
      "branch": "尚未進入 WMS",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q011",
      "branch": "WMS 已出貨但延遲",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q011",
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q012",
      "branch": "包裹延遲未配達",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q012",
      "branch": "配達門市超過 10 天未取消",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q012",
      "branch": "貨態已配達但買家未收到",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q012",
      "branch": "貨態配送中但買家已取件",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q014",
      "branch": "返還原折扣碼",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "q": "Q014",
      "branch": "返還原折扣碼",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
      "options": [],
      "defaultValue": "售前不用填",
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
      "options": [],
      "defaultValue": "售前不用填",
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q014",
      "branch": "小額折扣碼",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Jura工單",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "q": "Q014",
      "branch": "小額折扣碼",
      "code": "work_order",
      "label": "工單號",
      "hint": "建立後填入",
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
      "options": [],
      "defaultValue": "售前不用填",
      "sourceUrl": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q014",
      "branch": "小額折扣碼",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q014",
      "branch": "小額折扣碼",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q014",
      "branch": "小額折扣碼",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q015",
      "branch": "包裹未送達進蝦皮審核",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "商品卡沒有顯示滿額贈",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "商品卡沒有顯示滿額贈",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "商品卡沒有顯示滿額贈",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車有自動加入贈品",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車有自動加入贈品",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車有自動加入贈品",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車沒有自動加入贈品",
      "code": "product_id",
      "label": "商品代碼_Product ID",
      "hint": "貼上Product ID",
      "sourceNote": "產品頁網址有兩段數字，後面那一段就是Product ID",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車沒有自動加入贈品",
      "code": "V008",
      "label": "商品品項",
      "hint": "貼上產品頁的完整標題",
      "sourceNote": "",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "Q009",
      "branch": "購物車沒有自動加入贈品",
      "code": "V010",
      "label": "商品規格",
      "hint": "如果客人有詢問再填",
      "sourceNote": "",
      "options": [],
      "defaultValue": "客人沒問不用填",
      "sourceUrl": "",
      "category": "商品詢問"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q016",
      "branch": "鑑賞期內優先引導買家自行 AOC",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q017",
      "branch": "訂單可申請取消配送中",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q017",
      "branch": "申請處理中",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
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
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
      "options": [],
      "defaultValue": "Luna Lin",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
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
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
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
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
      "options": [],
      "defaultValue": "Luna Lin",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
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
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
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
          "title": "User Portal",
          "url": "https://admin.user.shopee.io/"
        }
      ],
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "code": "V018",
      "label": "買家名字_Buyer Username",
      "hint": "是填入Buyer Username／User Name",
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
      "options": [],
      "defaultValue": "Luna Lin",
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "常用"
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "SCI 貨態系統",
          "url": "https://sci.twtc.shopee.tw/shopee24-hub/search"
        }
      ],
      "q": "GLOBAL",
      "branch": "鑑賞期",
      "code": "pickup_date",
      "label": "取貨日期",
      "hint": "日期，例如 2026/7/30",
      "sourceNote": "<h3>方法一：<a href=\"https://sci.twtc.shopee.tw/shopee24-hub/search\" target=\"_blank\" rel=\"noopener\">SCI 貨態系統（優先）</a></h3><ol><li>開啟 SCI 貨態系統。</li><li>輸入 {物流單號} 或 {Order SN} 查詢。</li><li>找到狀態「已取件／Delivered／Picked Up」。</li><li>該狀態旁的日期時間就是 {取貨日期}。</li></ol><h3>方法二：<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><ol><li>輸入 {Order SN}。</li><li>展開正確的 Order。</li><li>查看「物流資訊」或「訂單與物流歷程」。</li><li>找到「買家已取件／訂單已送達」。</li><li>取該狀態的日期作為 {取貨日期}。</li></ol><p>如果查不到「已取件」紀錄，代表貨態可能尚未更新，先不要自行推算日期。</p><p>如果你問的是退貨物流到府取件日期：<br>Order Admin → Return → Return &amp; Refund Requests → 申退詳情 → Status &amp; Timeline</p><p>黑貓／蝦宅退貨也可在買家端「退貨退款詳情」查看取件時間與地址。<br></p>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "常用"
    },
    {
      "type": "text",
      "autoDays": 1,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "GLOBAL",
      "branch": "鑑賞期",
      "code": "return_start",
      "label": "第一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "autoSource": "pickup_date",
      "sourceUrl": "",
      "category": "鑑賞期"
    },
    {
      "type": "text",
      "autoDays": 15,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "q": "GLOBAL",
      "branch": "鑑賞期",
      "code": "return_deadline",
      "label": "最後一天（鑑賞期）",
      "hint": "由取貨日期自動計算",
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "autoSource": "pickup_date",
      "sourceUrl": "",
      "category": "鑑賞期"
    }
  ],
  "templates": [
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
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表．SBS",
      "text": "進入KAM表的{{V011}}分頁後填入以下內容：\n館別 填入：{{V003}}\nproduct id 填入：{{product_id}}\n商品名稱 填入：{{V008}}\n商品規格 填入：{{V010}}\n買家問題（簡述） 填入：{{V009}}\n問題分類 填入：{{V023}}\nCFS 填入：\nOrder SN / User 填入：因為{{V017}}\n個案擁有者 填入：{{V019}}\n工單號 填入：{{work_order}}\n詢問時間 填入：{{V020}}\n備註 填入：{{V021}}\n結 填入：{{V022}}"
    },
    {
      "q": "GLOBAL",
      "branch": "KAM表",
      "text": "進入KAM表的{{V011}}分頁後填入以下內容：\nproduct id 填入：{{product_id}}\n商品品項 填入：{{V008}}\n商品規格 填入：{{V010}}\n買家問題 填入：{{V009}}\n問題分類 填入：{{V012}}\nR/R 分類 填入：{{V013}}\n已申退 填入：{{V014}}\n擴大安心退 填入：{{V015}}\nOrder SN / User 填入：因為{{V017}}\n個案擁有者 填入：{{V019}}\n詢問時間 填入：{{V020}}\n工單號 填入：{{work_order}}\n備註 填入：{{V021}}\n結 填入：{{V022}}"
    },
    {
      "q": "GLOBAL",
      "branch": "廠直表",
      "text": "進入廠直表的{{V024}}分頁後填入以下內容：\nSheet ID 填入：{{V025}}\nType 填入：{{V026}}\nID 填入：{{V027}}\nQuestion 填入：{{V031}}\nPriority 填入：{{V032}}\n填表人 填入：{{V019}}\n前台訂單 填入：{{order_id}}\nMP SKU 填入：{{V030}}\n簡述問題 填入：{{V033}}\n工單號 填入：{{work_order}}\n問題分類 填入：{{V034}}\n廠商回覆 填入：{{V035}}\nCS內部備註/買家帳號 填入：因為Type是{{V037}}\nA組聊聊結案 填入：{{V038}}\n需再次溝通 填入：{{V039}}"
    },
    {
      "q": "Q004",
      "branch": "商品頁有找到",
      "text": "客人詢問 {{customer_need}}，在 {{product_page_area}} 裡有看到：{{found_keyword}}。\n請把這些資訊整理後回覆客人。"
    },
    {
      "q": "Q001",
      "branch": "共用",
      "text": "要跟客人說蝦皮有提供優於消保法（七天鑑賞期）的「15天鑑賞期」，是從系統判定的取貨日隔天開始算。\n取貨日為 {{pickup_date}}，那鑑賞期就是從 {{return_start}} 開始算 15 天。\n要記得在 {{return_deadline}} 前提出退貨申請。"
    },
    {
      "q": "Q006",
      "branch": "哪裡領取／查看優惠券",
      "text": "可查找優惠券的位置：\n▪ 商品頁：查看目前商品適用的賣場優惠券。\n▪ 蝦皮活動頁\n▪ 電子票券頁\n▪ 蝦皮會員\n▪ 我的蝦幣\n▪ 賣場店鋪首頁\n▪ 遊戲\n\n查看方式：\n▪ 已領取的優惠券：到「我的優惠券」查看。\n▪ 使用紀錄：到「歷史記錄」查看已用完、已過期或已使用過的優惠券。"
    },
    {
      "q": "Q006",
      "branch": "查詢買家目前可用優惠券",
      "text": "查詢方式：\n▪ 到 CS Portal 搜尋 Buyer Username：{{V018}}\n▪ 進入「詳細資訊（買家）」→「優惠代碼錢包」。\n\n查詢結果：\n▪ Buyer Username：{{V018}}\n▪ 買家目前可使用的優惠代碼：\n{{available_voucher_codes}}"
    },
    {
      "q": "Q007",
      "branch": "問運費",
      "text": "蝦皮直營物流與運費：\n▪ 店取 - 最快當日到：滿 NT$69 免運；未達門檻運費 NT$9。\n▪ 宅配 - 最快隔日到：滿 NT$199 免運；未達門檻運費 NT$65。\n▪ 宅配：滿 NT$490 免運；未達門檻運費 NT$70。\n▪ 一般宅配及推廣期間的運費可能調整，實際金額以結帳頁系統顯示為準。\n\n查詢結果：\n▪ 結帳頁實際顯示：{{shipping_fee_details}}"
    },
    {
      "q": "Q007",
      "branch": "問什麼時候到貨",
      "text": "店取 - 最快當日到：\n▪ 週一至週日 00:00～09:59 下單：最快當日到。\n▪ 週一至週日 10:00～23:59 下單：最快隔日到。\n▪ 並非所有商品與地區都適用，實際到貨時間以系統顯示為準。\n\n宅配 - 最快隔日到：\n▪ 臺北、新北適用區域：週一至週日 00:00～23:59 下單，最快隔日到。\n▪ 桃園、新竹、臺中、彰化、雲林、嘉義、臺南、高雄適用區域：00:00～09:59 下單最快隔日到；10:00～23:59 下單最快後天到。\n▪ 部分行政區及區域不適用；辦公室地址僅限平日配送，遇假日順延至下一個工作日。\n▪ 商品可能依大小與數量合併或拆成多個包裹，可到「訂單詳情」查看包裝編號。\n\n蝦皮店到店 - 隔日到貨：\n▪ 週一至週五 14:00 前下單：隔天 16:00 後可至門市取貨。\n▪ 週一至週四 14:00 後下單：後天 16:00 後可至門市取貨。\n▪ 週五 14:00 至週日 23:59 下單：下週二 16:00 後可至門市取貨。\n▪ 非貨到付款訂單以下單付款完成時間為準；部分門市、國定假日、大型活動或特殊節慶可能不適用。\n\n一般宅配：\n▪ 預計配達時間依系統顯示。\n▪ 實際到貨時間依物流通知為準。\n\n查詢結果：\n▪ 系統顯示的物流方式與預計配達日期：{{estimated_delivery_result}}"
    },
    {
      "q": "Q007",
      "branch": "退貨步驟是什麼",
      "text": "退貨前先確認：\n1. 詢問買家的退貨原因。\n2. 請買家提供商品、瑕疵處及包裝照片。\n3. 確認是否仍在 15 天鑑賞期內。\n4. 提醒商品、包裝、說明書、保固書及配件需完整退回，以免影響退款權益。\n5. 接觸性商品、已拆封使用或人為毀損商品，可能不符合退貨規範；高單價或特殊 3C 商品可能需要回收檢測。\n\n買家自行申請退貨退款：\n1. 進入「我的」→「購買清單」。\n2. 點選「退貨／退款」。\n3. 選擇要退貨的商品並調整數量。\n4. 選擇退貨退款類型及退貨原因。\n5. 填寫說明並上傳商品、包裝或瑕疵照片。\n6. 送出申請；若顯示「申請審核中」，需等待蝦皮審核並留意推播通知。\n7. 審核通過後，在退貨退款詳情中依期限選擇退貨方式。\n8. 依系統顯示的寄件編號、取件時間或地址完成退貨，並保留退貨單據或取件證明至退款完成。\n\n可選擇的退貨方式：\n▪ 7-11／蝦皮店到店寄件：系統會產生退貨寄件編號，需在期限內將商品完整包裝後交寄。\n▪ 黑貓宅急便／宅配通／新竹物流取件：物流通常會在申請後 3～7 天內聯繫取件。\n▪ 賣家自行安排：等待賣家聯繫安排取件；系統不會產生寄件編號。\n▪ 實際可用的退貨方式依訂單與系統顯示為準。\n\n退貨後流程：\n1. 買家交寄後，狀態會顯示「退貨進行中」。\n2. 賣家收到退貨商品後，狀態會顯示「檢驗中／商品驗收中」。\n3. 賣家驗收無誤並同意退款後，狀態會進入「退款處理中」。\n4. 完成退款後，狀態會顯示「退貨退款已完成」。\n5. 若賣家提出爭議，後續依蝦皮審核結果處理。\n\n若需客服代替買家提出 Offline RR：\n1. 在 CS Portal 搜尋訂單。\n2. 點選「TW 商城退貨／退款」。\n3. 選擇「退還商品並退款」或「僅需退回款項」。\n4. 選擇要退貨退款的商品。\n5. 選擇退貨原因，填寫公版備註並上傳退貨圖片。\n6. 送出後告知買家留意蝦皮通知；審核通過後，需在通知期限內到退貨退款詳情選擇退貨物流。"
    },
    {
      "q": "Q008",
      "branch": "有顯示加價購標籤",
      "text": "確認結果：\n▪ 商品頁有顯示「加價購／優惠加購」標籤。\n▪ 此商品可以搭配其他商品進行優惠加購，價格通常會較優惠。\n\n下一步：\n1. 將商品加入購物車。\n2. 查看實際可加購商品與優惠價格。\n3. 活動內容、可搭配商品及價格皆以結帳頁面顯示為主。"
    },
    {
      "q": "Q008",
      "branch": "沒有顯示加價購標籤",
      "text": "確認結果：\n▪ 商品頁目前沒有顯示「加價購／優惠加購」標籤。\n▪ 目前無法確認有加價購活動。\n▪ 活動內容可能變動，請以商品頁、購物車及結帳頁實際顯示為主。"
    },
    {
      "q": "Q008",
      "branch": "加價購商品要搭配哪件主商品",
      "text": "確認方式：\n1. 複製加價購商品的 Product ID：{{product_id}}。\n2. 到 [DB] Add-on / Gift / Bundle 表單的 [Add-on_Sub] 分頁，搜尋此 PID 對應的 add_on_deal_id。\n3. 複製 add_on_deal_id：{{addon_campaign_id}}。\n4. 到 [Add-on_Main] 分頁搜尋同一組 add_on_deal_id，確認該檔期可搭配的主商品清單。\n\n查詢結果：\n▪ 加價購商品 Product ID：{{product_id}}\n▪ 活動檔期／add_on_deal_id：{{addon_campaign_id}}\n▪ 可搭配的主商品：{{addon_main_product}}\n\n提醒：若表單查無資料，先確認 PID 是否複製正確、是否有選到正確分頁與檔期，再回覆以表單目前查詢結果為主。"
    },
    {
      "q": "Q009",
      "branch": "商品卡沒有顯示滿額贈",
      "text": "確認結果：\n▪ 商品卡目前沒有顯示「滿額贈」標籤。\n▪ 目前無法確認商品有綁定滿額贈活動。\n▪ 活動內容可能變動，請以商品卡與購物車實際顯示為主。"
    },
    {
      "q": "Q009",
      "branch": "購物車有自動加入贈品",
      "text": "確認結果：\n▪ 商品卡有顯示「滿額贈」標籤。\n▪ 商品頁目前不會另外顯示滿額贈區塊。\n▪ 符合活動條件時，系統會在購物車自動加入贈品，不需要另外選取。\n▪ 滿額贈商品：{{gift_item}}\n▪ 購物車顯示的剩餘數量：{{gift_remaining_quantity}}\n▪ 最終以購物車及結帳頁面實際顯示為主。"
    },
    {
      "q": "Q009",
      "branch": "購物車沒有自動加入贈品",
      "text": "確認結果：\n▪ 商品卡有顯示「滿額贈」標籤。\n▪ 商品頁目前不會另外顯示滿額贈區塊。\n▪ 購物車沒有自動出現贈品。\n\n確認步驟：\n1. 檢查購物車是否達到活動條件。\n2. 若符合條件仍未顯示，贈品可能已經贈完。\n\n注意：\n▪ 滿額贈若已贈完，購物車就不會顯示。\n▪ 最終以購物車及結帳頁面實際顯示為主。"
    },
    {
      "q": "Q006",
      "branch": "取消訂單後優惠券是否返還",
      "text": "準備資料：\n▪ Order SN：{order_id}\n▪ Buyer Username：{{V018}}\n▪ 原 Voucher Code：{original_voucher_code}"
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "text": "查詢資料與結果：\n▪ 原 Voucher Code：{{original_voucher_code}}\n▪ 優惠券返還／使用狀態：{{voucher_return_status}}\n▪ 買家目前可使用的優惠代碼：\n{{available_voucher_codes}}\n\n判斷結果：\n▪ 原優惠券已出現在可用清單，且狀態／有效期限仍可使用。\n▪ 可以告知買家優惠券已返還並可再次使用；實際使用仍須符合該券規則。"
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "text": "查詢資料與結果：\n▪ 原 Voucher Code：{{original_voucher_code}}\n▪ 優惠券返還／使用狀態：{{voucher_return_status}}\n▪ 買家目前其他可使用的優惠代碼：\n{{available_voucher_codes}}\n\n判斷結果：\n▪ 原優惠券未出現在可用清單，或狀態／有效期限顯示不可使用。\n▪ 目前不能告知買家原優惠券可以再次使用。\n▪ 可能原因包含優惠券規則不返還、活動已結束、優惠券已過期或名額已用完。\n▪ 不要承諾原優惠券一定會返還。"
    },
    {
      "q": "Q002",
      "branch": "共用",
      "text": "告訴客人：\n▪ 蝦皮商城支援貨到付款（僅限現金）、信用卡／金融卡及信用卡分期付款。\n▪ 信用卡分期付款需結帳總金額滿 NT$1,000。\n▪ 若與其他蝦皮商家商品合併結帳，僅能選擇貨到付款。\n▪ 蝦皮商城訂單成立後，無法變更付款方式。"
    },
    {
      "q": "Q003",
      "branch": "查詢發票",
      "text": "回答客人\n查詢「會員編號」及「歸戶驗證碼」，查詢方式如下：\n▪ App 版操作：\n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：\n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n\n操作方式如下：\n▪ 前往關貿網路電子發票平台：https://reurl.cc/0k2NaM\n▪ 填寫「發票號碼」、「會員編號」、「歸戶驗證碼」\n▪ 選擇欲查詢的發票月份"
    },
    {
      "q": "Q003",
      "branch": "補發電子發票通知信",
      "text": "可透過以下兩種方式申請補發：\n\n方式一｜自助服務中心申請\n前往「發票開立通知補發申請表單」（連結：https://reurl.cc/DYdVlR）提出申請。\n若填寫資料正確，通知信將於 3～5 個工作天（不含假日）補發至客人填寫的電子信箱。客人可透過「查詢進度」（連結：https://reurl.cc/gN0qeX）查看申請狀態。\n\n方式二｜關貿網路電子發票平台申請\n請先查詢「會員編號」及「歸戶驗證碼」：\n▪ App 版操作：  \n進入【我的】➜ 點選右上角【⚙️】進入帳號設定 ➜ 點選【我的電子發票】即可查看。\n▪ 網頁版操作：  \n進入【賣家中心】➜ 點選左側【賣場設定】➜【帳號與隱私設定】➜ 於【我的電子發票】旁點選【查看】即可。\n取得資料後，請依下列步驟申請：\n▪ 前往「關貿網路電子發票平台」（連結：https://reurl.cc/0k2NaM） \n▪ 填寫會員及發票相關資訊  \n▪ 選擇欲查詢的發票日期  \n▪ 點選【補發開立通知】  \n▪ 點選【變更】並輸入欲收取通知信的電子信箱  \n▪ 點選【寄送】，即可完成申請  \n通知信將於 1～2 個工作天（不含假日）補發至客人填寫的電子信箱。\n\n申請補發時填寫的電子信箱，可與帳號原先設定的收信信箱不同。"
    },
    {
      "q": "Q010",
      "branch": "查商品效期",
      "text": "確認方式：\n1. 請先取得商品頁 Product ID：{{product_id}}。\n2. 到商品效期 Inventory Expiration Date 小工具輸入 PID 查詢。\n3. 若客人有指定規格，對照指定規格的效期；若未指定規格，可整理小工具顯示的各規格效期。\n\n回覆重點：\n▪ 商品：{{V008}}\n▪ 規格：{{V010}}\n▪ 小工具目前查詢到的效期：{{expiration_result}}\n▪ 商品效期會依實際出貨批次變動，仍以倉庫實際出貨商品標示為主。"
    },
    {
      "q": "Q010",
      "branch": "查商品進貨日",
      "text": "確認方式：\n1. 請先取得商品頁 Product ID：{{product_id}}。\n2. 到商品進貨日小工具輸入 PID 查詢。\n3. 依小工具目前顯示整理給客人，避免自行承諾一定補貨時間。\n\n回覆重點：\n▪ 商品：{{V008}}\n▪ 小工具目前顯示的進貨／補貨資訊：{{inbound_result}}\n▪ 進貨時間可能受供應與倉庫作業影響，請以商品頁後續實際上架狀態為主。"
    },
    {
      "q": "Q011",
      "branch": "尚未進入 WMS",
      "text": "確認結果：\n▪ 訂單：{{order_id}}\n▪ 目前查詢結果：尚未進入 WMS，或 Fulfilment Type 顯示空白。\n▪ 可先跟客人說明訂單仍在出貨處理流程中，會依訂單狀態陸續更新。\n\n內部提醒：若已超過一般備貨或出貨時效，需依出貨異常流程追蹤或轉詢 OPS。"
    },
    {
      "q": "Q011",
      "branch": "WMS 已出貨但延遲",
      "text": "確認結果：\n▪ 訂單：{{order_id}}\n▪ WMS 狀態：{{wms_status}}\n▪ 若已 Outbound 超過 2 天仍未更新，需依包裹延遲未配達流程登記或轉詢。\n\n可回覆客人：\n目前已協助確認包裹出貨狀態，因物流更新可能需要作業時間，我們會依流程追蹤配送進度，請您再留意蝦皮通知與物流狀態更新。"
    },
    {
      "q": "Q011",
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "text": "確認結果：\n▪ 訂單：{{order_id}}\n▪ 缺貨商品：{{oos_item}}\n▪ OMS Parcel Status 若顯示 ForderSourceFailed，即可判斷為 OOS 訂單。\n▪ OOS 代表揀貨過程發現庫存不足，訂單後續會由 OPS 取消，商品不會出貨。\n\n可回覆客人：\n很抱歉，經確認此訂單因商品庫存不足無法安排出貨，後續系統會依流程取消並退款，退款時間會依原付款方式處理。"
    },
    {
      "q": "Q012",
      "branch": "包裹延遲未配達",
      "text": "處理方式：\n▪ 訂單：{{order_id}}\n▪ 貨態：{{logistics_status}}\n▪ 若 WMS Outbound 超過 2 天且配送未更新，依包裹延遲未配達流程登記表單。\n\n可先通知客人：\n初步確認包裹配送狀態異常，已轉達相關單位協助確認。若包裹尋獲會再更新訂單狀態；若超過尋找期仍未找到，系統會依流程更新後續退款或訂單狀態。"
    },
    {
      "q": "Q012",
      "branch": "配達門市超過 10 天未取消",
      "text": "處理方式：\n▪ 訂單：{{order_id}}\n▪ 門市配達日：{{store_arrival_date}}\n▪ 若配達門市超過 10 天仍未取消，依流程填寫表單，請職代協助回壓 damaged。\n\n可通知客人：\n這邊確認包裹已超過門市滯留期，可能因系統串接異常未正常取消，已轉達相關單位協助調整，請您後續留意蝦皮通知。"
    },
    {
      "q": "Q012",
      "branch": "貨態已配達但買家未收到",
      "text": "處理方式：\n▪ 訂單：{{order_id}}\n▪ 目前貨態：{{logistics_status}}\n▪ 先確認買家是否已回門市取貨；若未取貨，轉 SPX 調查。\n▪ 若門市找到包裹，引導用戶回店取貨；若確認遺失，依流程處理後續退款或訂單狀態。\n\n回覆客人時避免直接承諾結果，以調查結果與系統通知為主。"
    },
    {
      "q": "Q012",
      "branch": "貨態配送中但買家已取件",
      "text": "處理方式：\n▪ 訂單：{{order_id}}\n▪ 付款方式：{{payment_method}}\n▪ 先提醒訂單狀態可能影響取件支付金額，並填寫表單請相關單位確認。\n▪ 若確認收款金額不正確，依流程引導買家補匯款並追蹤 2 天；若拒付或客訴，使用安撫說明並依流程回壓。\n\n補充：COD 與非 COD 處理路徑不同，請以表單與職代判斷為主。"
    },
    {
      "q": "Q013",
      "branch": "低單 200 元以下且有照片",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n判斷結果：\n▪ 商品單價：{{item_amount}}\n▪ 問題類型：{{issue_type}}\n▪ 買家已提供照片：{{photo_status}}\n\n處理方式：\n若商品單價在 NT$200 以下，且屬毀損、瑕疵、錯品等商品問題並有照片，可直接引導買家申請退貨退款，不需再要求其他證據，由 Shop CS 吸收處理。\n\n提醒：仍需確認退貨原因、照片與 15 天鑑賞期內三項條件。"
    },
    {
      "q": "Q013",
      "branch": "SCS 貨損有照片",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n處理方式：\n▪ 問題類型：{{issue_type}}\n▪ 照片確認：{{photo_status}}\n▪ 若屬 SCS 貨損且有照片，依 SCS 貨損流程引導買家申退，並開單記錄貨損照片。\n▪ 一般情境不需轉 SPX／WH；但管制區、高單或特殊商品需依原流程反應。\n\n回覆客人：\n很抱歉商品狀況造成您的困擾，這邊會依退貨退款流程協助您處理，請您於訂單內提出退貨退款申請並上傳商品異常照片。"
    },
    {
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n處理方式：\n▪ 商品／館別：{{V008}}\n▪ 特殊條件：{{special_note}}\n▪ 若屬管制區、高單、特殊 3C、餐券等情境，不直接套用一般貨損優化流程，需依原流程轉 SPX／WH 或 KAM／廠商確認。\n\n內部提醒：先完成照片與訂單資訊蒐集，再依對應表單或工單流程追蹤。"
    },
    {
      "q": "Q014",
      "branch": "返還原折扣碼",
      "text": "申請前檢查：\n▪ Order SN：{{order_id}}\n▪ User ID：{{user_id}}\n▪ 原 Voucher Code：{{voucher_code}}\n▪ 已確認原折扣碼失效：{{voucher_invalid}}\n▪ 已確認賣場無相同或更優優惠：{{better_voucher_check}}\n\n處理方式：\n到 Promotion Admin／補碼小工具依原碼補碼欄位填寫，並在工單中記錄申請原因與自我檢查結果。\n\n提醒客人：補發折扣碼是否成立與使用條件，仍以審核及實際發放結果為主。"
    },
    {
      "q": "Q014",
      "branch": "返還損失折扣／價差",
      "text": "判斷方式：\n▪ Order SN：{{order_id}}\n▪ 折扣損失金額：{{discount_amount}}\n▪ 商品價差：{{price_difference}}\n▪ 最終補碼規格：滿 {{min_spend}} 折 {{voucher_amount}}\n\n處理原則：\n折扣金額加商品價差後計算補碼規格；若商品本身價差超過 500 元，需轉交職代評估。若是純補損失折扣，可依規範確認是否可擴至全店使用。\n\n提醒：複數折扣碼無法疊加使用，需明確告知買家。"
    },
    {
      "q": "Q014",
      "branch": "小額折扣碼",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n適用情境：\n▪ 問題類型：{{issue_type}}\n▪ 訂單／商品：{{order_id}}\n▪ 確認照片或佐證：{{proof_status}}\n\n處理方式：\n若屬破包、漏液、過期、長蟲、缺件、商品出錯、重複出貨等小額客維情境，且已確認訂單狀況屬實，可至對應交接表領取折扣碼提供給客人。\n\n注意：折扣碼提供後，訂單問題仍需依流程處理，該新建工單、填出貨相關問題表或 KAM 表的情境仍要完成。"
    },
    {
      "q": "Q015",
      "branch": "60 元以下自動退款",
      "text": "確認結果：\n▪ 退貨原因：{{return_reason}}\n▪ 商品金額：{{refund_amount}}\n▪ 若符合 60 元以下自動退款規則，系統會依流程處理退款。\n\n可回覆客人：\n請您依訂單內的退貨退款流程提出申請並填寫原因，系統會依申請內容與規則進行審核，退款進度可於退貨退款詳情查看。"
    },
    {
      "q": "Q015",
      "branch": "61-1380 元快速退款",
      "text": "確認結果：\n▪ 退貨原因：{{return_reason}}\n▪ 商品金額：{{refund_amount}}\n▪ 若符合快速退款門檻，系統會依流程審核並處理退款。\n\n提醒：若案件需補充圖片、退貨物流或蝦皮審核，仍以退貨退款詳情頁顯示為主。"
    },
    {
      "q": "Q015",
      "branch": "包裹未送達進蝦皮審核",
      "text": "處理方式：\n▪ 訂單：{{order_id}}\n▪ 貨態：{{logistics_status}}\n▪ 若買家以包裹未送達提出退貨退款，通常會進蝦皮審核流程。\n\n可提醒客人：\n請您於退貨退款申請中完整描述未收到包裹的狀況，後續審核進度與結果會顯示在退貨退款詳情頁。"
    },
    {
      "q": "Q015",
      "branch": "缺件僅退款進蝦皮審核",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n處理方式：\n▪ 商品／缺件內容：{{missing_item}}\n▪ 證明資料：{{proof_status}}\n▪ 缺件僅退款通常需依申請內容與圖片進入審核。\n\n提醒客人：\n請於退貨退款申請中上傳收到商品與缺件狀況的照片，並清楚描述缺少的品項與數量，以利審核。"
    },
    {
      "q": "Q015",
      "branch": "其他原因一般退貨",
      "text": "▪ Product ID：{{product_id}}\n▪ 商品名稱：{{V008}}\n▪ 商品規格：{{V010}}\n處理方式：\n▪ 退貨原因：{{return_reason}}\n▪ 退貨物流：{{return_channel}}\n▪ 一般退貨需依系統指示選擇退貨方式並寄回商品，退款會依賣家驗收與平台流程處理。\n\n可回覆客人：\n請您在訂單的退貨退款詳情中依照系統指示完成退貨流程，包含選擇退貨物流與寄回商品；後續進度以退貨退款詳情頁顯示為主。"
    },
    {
      "q": "Q016",
      "branch": "鑑賞期內優先引導買家自行 AOC",
      "text": "判斷結果：\n▪ 訂單：{{order_id}}\n▪ 完成／取貨日期：{{complete_date}}\n▪ 目前仍在 15 天鑑賞期內，優先引導買家自行於訂單內提出 Buyer AOC。\n\n提醒：若買家點了延長撥款，鑑賞期判斷可延長為 18 天，仍需依系統顯示確認。"
    },
    {
      "q": "Q016",
      "branch": "可發起 Agent AOC",
      "text": "處理方式：\n▪ Return ID：{{return_id}}\n▪ 退貨原因：{{return_reason}}\n▪ 判別小工具顯示可發起 AOC RR 時，可依 CS Portal 的 TW商城退貨/退款按鈕協助買家提出 RR。\n\n備註要求：\n退貨原因需清楚寫明進線對象與買家描述，例如：[買家]通知，收到商品缺少口罩一盒。備註越明確越有利後續審核。"
    },
    {
      "q": "Q016",
      "branch": "不可發起 AOC RR",
      "text": "判斷結果：\n▪ Return ID：{{return_id}}\n▪ 小工具結果：{{tool_result}}\n▪ 若顯示已退款或紅字不可發起 AOC RR，代表此案件不可由專員發起 AOC RR。\n\n處理方式：\n依案件原因向買家說明，必要時改走工單／KAM／OPS 個案處理。"
    },
    {
      "q": "Q016",
      "branch": "專員已代發 RR",
      "text": "可通知買家：\n您好，久等了，因訂單已經完成，這邊已手動替您在系統上提出退貨申請，預計 3 個工作天內會完成審核。若審核通過後，您會在蝦皮通知中收到通知訊息，屆時請依通知內容於時限內點進退貨詳情內選擇退貨的運送方式，謝謝您。\n\n內部記錄：\n▪ Related Return/Refund ID：{{return_id}}\n▪ 退貨原因：{{return_reason}}"
    },
    {
      "q": "Q017",
      "branch": "訂單可申請取消配送中",
      "text": "判斷結果：\n▪ 訂單：{{order_id}}\n▪ 物流：{{logistics_channel}}\n▪ 訂單頁若在賣家寄件後到抵達門市前顯示「取消配送中訂單」按鈕，買家可自行提出申請。\n\n限制提醒：僅適用部分蝦皮店到店訂單，排除 NDD、SCS、店到家宅配、其他物流、預購品與特殊規範商品。"
    },
    {
      "q": "Q017",
      "branch": "申請處理中",
      "text": "確認結果：\n▪ 訂單：{{order_id}}\n▪ RR 狀態：{{rr_status}}\n▪ 申請後會被視為 RR，買家可在訂單頁或退貨退款標籤頁看到申請處理中。\n▪ 提出後 13 天內若 SPX 攔截成功，多數會在 2-3 天內成立，但仍以系統結果為主。"
    },
    {
      "q": "Q017",
      "branch": "系統同意取消",
      "text": "確認結果：\n▪ RR 狀態：{{rr_status}}\n▪ Remark：{{remark}}\n▪ 若系統同意取消，通常會從蝦皮審核轉為退款處理中，最後退款完成。\n\n可回覆客人：\n您的取消配送中訂單申請已依系統流程處理，後續退款進度請以退貨退款詳情與蝦皮通知為主。"
    },
    {
      "q": "Q017",
      "branch": "系統拒絕或買家撤回",
      "text": "確認結果：\n▪ RR 狀態：{{rr_status}}\n▪ Remark：{{remark}}\n▪ 若超過監控時間、包裹已配達或買家自行撤回，系統會取消此 RR。\n\n回覆重點：\n請依訂單目前狀態向買家說明是否仍可取件、等待配送，或後續改依一般退貨退款流程處理。"
    },
    {
      "q": "Q018",
      "branch": "單純商品資訊不用開單",
      "text": "判斷結果：\n▪ 問題：{{issue_summary}}\n▪ 若只是保固條件、配件使用方式、商品使用或規格、品質相關但僅確認資訊，且沒有退貨意圖，回覆資訊後即可結案，不需開單。\n\n提醒：若後續買家仍有爭議、要求佐證、提到退換貨或需要技術檢測，就要重新判斷是否需開單／KAM 表。"
    },
    {
      "q": "Q018",
      "branch": "需開單＋填 KAM 表",
      "text": "判斷結果：\n▪ 問題：{{issue_summary}}\n▪ 涉及退換貨意圖、商品瑕疵爭議、需要技術檢測、保固申請／驗證，或資訊不齊需後續追蹤時，需新建工單並填寫 KAM 表。\n\n未結案備註可寫：{{pending_note}}\n\n提醒：需等 KAM 二次回覆、買家回覆或 OPS 協助時，務必留下可交接的追蹤紀錄。"
    },
    {
      "q": "Q018",
      "branch": "廠直問題需轉廠商",
      "text": "判斷結果：\n▪ 訂單／商品：{{order_sn}}\n▪ 問題：{{issue_summary}}\n▪ 廠直訂單若無法一線解決或需廠商確認，依物流、商品、訂單類型填表；須開單類型需同時建立工單追蹤。\n\n提醒：可不開單問題若第一次轉詢並回覆買家後，買家再次進線反映，需協助開單追蹤。"
    },
    {
      "q": "Q018",
      "branch": "平日／假日追蹤話術",
      "text": "處理方式：\n▪ 工單：{{ticket_id}}\n▪ 追蹤情境：{{follow_type}}\n▪ 若假日前或假日中接獲案件，需先告知工作日會盡快追蹤；平日追蹤約每 2 日安撫一次並積極追蹤。\n\n可用提醒：\n已為您轉交窗口確認並建立案件追蹤，待 1-2 個工作天內窗口回覆後，小幫手會再主動聊聊通知您，請您再耐心等候。"
    },
    {
      "q": "Q019",
      "branch": "轉詢 SLA 超過 48 小時",
      "text": "處理方式：\n▪ 案件：{{ticket_id}}\n▪ 問題摘要：{{case_summary}}\n▪ 若問題需轉詢但超過 48 小時仍未收到回覆，可尋求 OPS／BAU 協助確認處理狀況或催促窗口。\n\n通知時需清楚標記訂單、目前卡點、已做過的處理與希望二線協助的事項。"
    },
    {
      "q": "Q019",
      "branch": "已說明 3 次仍重複詢問",
      "text": "處理方式：\n▪ 已回覆重點：{{reply_summary}}\n▪ 若已明確說明達 3 次但買家仍持續詢問，可請 OPS／BAU 協助判斷訴求合理性、是否需額外處理方向或明確回覆時間。\n\n提醒：二線協助後，需與買家給予明確回覆時間；若時間到仍無法答覆，也要主動聯繫說明。"
    },
    {
      "q": "Q019",
      "branch": "買家有情緒／不雅／性騷擾",
      "text": "處理方式：\n▪ 風險類型：{{risk_type}}\n▪ 對話摘要：{{case_summary}}\n▪ 若買家已有情緒、關鍵字、不雅字眼或性騷擾，需依流程尋求 QA／OPS／BAU 協助話術或評估是否終止服務。\n\n提醒：通知二線時要附上具體對話脈絡與需要協助的方向，不只丟單號。"
    },
    {
      "q": "Q019",
      "branch": "無法判斷需協助方向",
      "text": "處理方式：\n▪ 問題摘要：{{case_summary}}\n▪ 若一線無法判斷問題、訴求是否能再轉詢，或需要擬定更清楚的回覆方向，可標記 QA／OPS／BAU 協助確認。\n\n通知格式建議：\n訂單／案件、買家訴求、已查詢資料、目前判斷卡點、希望協助確認的問題。"
    },
    {
      "q": "Q020",
      "branch": "物流渠道適用延遲補償",
      "text": "確認方式：\n▪ 訂單：{{order_id}}\n▪ 物流渠道：{{logistics_channel}}\n▪ 延遲補償適用於指定配送方式，例如蝦皮店到店、蝦皮店到店隔日到貨、店到家宅配、店取最快當日到、宅配最快隔日到等。\n\n下一步：\n確認付款時間、預計配達時間與實際到貨時間，再判斷是否超過補償門檻。"
    },
    {
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "text": "判斷結果：\n▪ Buyer ID：{{buyer_id}}\n▪ 查詢表結果：{{blacklist_result}}\n▪ 若買家為黑名單或訂單不符合補償條件，系統可能不會派發延遲補償。\n\n回覆重點：\n依訂單付款時間、配送方式與實際到貨時間判斷後，目前未符合延遲補償派發條件；如買家仍有疑問，可請買家提供單號再逐筆確認。"
    },
    {
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "text": "判斷結果：\n▪ 訂單：{{order_id}}\n▪ 付款時間：{{paid_time}}\n▪ 實際到貨時間：{{delivered_time}}\n▪ 查詢後若確認符合補償資格但未派發，可依延遲補償補發流程處理。\n\n可回覆客人：\n這邊已協助確認訂單配送時間，若符合補償資格但尚未收到補償，我們會依流程協助確認補發，後續請您留意蝦皮通知或優惠券錢包。"
    },
    {
      "q": "GLOBAL",
      "branch": "鑑賞期",
      "text": "要跟客人說蝦皮有提供優於消保法（七天鑑賞期）的「15天鑑賞期」，是從系統判定的取貨日隔天開始算。\n取貨日為 {{pickup_date}}，那鑑賞期就是從 {{return_start}} 開始算 15 天。\n要記得在 {{return_deadline}} 前提出退貨申請。"
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
      "q": "Q001",
      "branch": "共用",
      "action": "不用建單",
      "needed": true,
      "note": "只需回覆客人",
      "sourceNote": "<div><br></div>",
      "sourceLinks": [],
      "url": ""
    },
    {
      "q": "Q006",
      "branch": "查詢買家目前可用優惠券",
      "action": "CS Portal",
      "needed": true,
      "note": "查詢買家目前可用的優惠代碼",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "url": "https://dms.cs.shopee.tw/portal/info/search"
    },
    {
      "q": "Q008",
      "branch": "加價購商品要搭配哪件主商品",
      "action": "反查加價購主商品",
      "needed": true,
      "note": "可使用 SCS CS Tool，或 [DB] Add-on / Gift / Bundle",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "SCS CS Tool（正職）",
          "url": "https://sites.google.com/shopee.com/scs-cs-tool/home"
        },
        {
          "title": "SCS CS Tool（派遣）",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/home"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
        }
      ],
      "url": "https://sites.google.com/shopee.com/scs-cs-tool/home"
    },
    {
      "q": "Q006",
      "branch": "可以返還／可以再次使用",
      "action": "查詢優惠券返還狀態",
      "needed": true,
      "note": "使用 CS Portal 為主；免運券可用 Order Admin 輔助確認",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "url": "https://dms.cs.shopee.tw/portal/info/search"
    },
    {
      "q": "Q006",
      "branch": "不能返還／不能再次使用",
      "action": "查詢優惠券返還狀態",
      "needed": true,
      "note": "使用 CS Portal 為主；免運券可用 Order Admin 輔助確認",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "url": "https://dms.cs.shopee.tw/portal/info/search"
    },
    {
      "q": "Q007",
      "branch": "問運費",
      "action": "查看直營物流運費",
      "needed": true,
      "note": "查看適用物流；實際運費以結帳頁為準",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
    },
    {
      "q": "Q007",
      "branch": "問什麼時候到貨",
      "action": "查詢預計配達日期",
      "needed": true,
      "note": "從商品／結帳頁或 InHouse 訂單資訊確認",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "InHouse 聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
    },
    {
      "q": "Q007",
      "branch": "退貨步驟是什麼",
      "action": "查看退貨申請與交寄方式",
      "needed": true,
      "note": "依系統顯示的退貨方式與期限完成交寄",
      "sourceNote": "",
      "sourceLinks": [
        {
          "title": "如何申請退貨退款",
          "url": "https://help.shopee.tw/portal/4/article/79943"
        },
        {
          "title": "申請退貨後，商品如何退回",
          "url": "https://help.shopee.tw/portal/4/article/79856"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "url": "https://help.shopee.tw/portal/4/article/79943"
    },
    {
      "q": "Q010",
      "branch": "查商品效期",
      "action": "查商品效期小工具",
      "needed": true,
      "note": "Inventory Expiration Date"
    },
    {
      "q": "Q010",
      "branch": "查商品進貨日",
      "action": "查商品進貨日小工具",
      "needed": true,
      "note": "商品進貨日"
    },
    {
      "q": "Q011",
      "branch": "尚未進入 WMS",
      "action": "查 CS Portal／OMS／WMS",
      "needed": true,
      "note": "確認是否已入 WMS"
    },
    {
      "q": "Q011",
      "branch": "WMS 已出貨但延遲",
      "action": "登記出貨異常表單",
      "needed": true,
      "note": "Outbound > 2D 時使用"
    },
    {
      "q": "Q011",
      "branch": "OMS／WMS 顯示 OOS 缺貨",
      "action": "通報／轉詢 OPS",
      "needed": true,
      "note": "OOS 或非既有狀況"
    },
    {
      "q": "Q012",
      "branch": "包裹延遲未配達",
      "action": "登記包裹貨態異常表單",
      "needed": true,
      "note": "Outbound > 2D"
    },
    {
      "q": "Q013",
      "branch": "管制區／高單／特殊商品",
      "action": "依原流程轉詢",
      "needed": true,
      "note": "SPX／WH／KAM／廠商"
    },
    {
      "q": "Q018",
      "branch": "需開單＋填 KAM 表",
      "action": "新建工單＋填 KAM 表",
      "needed": true,
      "note": "需後續追蹤"
    },
    {
      "q": "Q020",
      "branch": "黑名單或不符合補償",
      "action": "查延遲補償黑名單／查詢表",
      "needed": true,
      "note": "以 Buyer ID 或 OSN 查詢"
    },
    {
      "q": "Q020",
      "branch": "符合補發延遲補償",
      "action": "依延遲補償補發流程處理",
      "needed": true,
      "note": "符合但未派發時"
    }
  ],
  "updatedAt": "2026-08-02T04:42:59.219Z",
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
      "common": false,
      "category": "常用",
      "type": "text",
      "autoDays": 0,
      "multiline": true,
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": [],
      "defaultValue": ""
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
      "sourceLinks": [],
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
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
      "sourceLinks": [],
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
    },
    {
      "code": "order_id",
      "label": "訂單編號_Order SN",
      "hint": "貼上訂單編號",
      "required": true,
      "common": false,
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
      "sourceNote": "<div><b>方法一．從<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">聊聊控制台</a>找（最快）</b></div><div><ol><li>開啟「訂單詳情」：依訂單狀態或建立時間篩選<br>若訂單沒有顯示完整，將 Created Time 的條件按 ⓧ 清除</li><li>訂單列表中顯示的 Order SN 就是訂單編號</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>在搜尋欄輸入買家的 Username</li><li>按 Enter&nbsp;</li><li>展開底下的 Order，即可找到該買家的訂單及 OSN。</li></ol></div><div>注意：Order SN／OSN 是一般使用的訂單編號；如果需要的是純數字的 Order ID，可從「聊聊 → 訂單詳情 → 網址列」取得。</div>",
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
      "sourceNote": "<div><b>在 Shopee Jira 中，工單號就是案件的 Key，格式通常類似 SPTWSBS-XXXXX。</b></div><div><b>售前不用填</b></div><div><br></div><div>查詢方式：</div><div><ul><li>進入 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee TW SBS（SPTWSBS）</a>。</li><li>點選 Queues → Switch Queues → Assigned to me。</li><li>清單中的 Key 欄位就是工單號；點擊 Key 或 Summary 可開啟案件。</li></ul></div><div>如果找不到工單：</div><div><ul><li>到 Global Search／TW SBS ticket search，用訂單編號、買家帳號或案件關鍵字搜尋；結果包含已結案工單。</li><li>沒有工單號且關鍵字也找不到時，可進入指定佇列，清除 Contains text，再用 Assignee 搜尋經辦人。</li></ul></div>",
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
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "SCI 貨態系統",
          "url": "https://sci.twtc.shopee.tw/shopee24-hub/search"
        }
      ],
      "sourceNote": "<h3>方法一：<a href=\"https://sci.twtc.shopee.tw/shopee24-hub/search\" target=\"_blank\" rel=\"noopener\">SCI 貨態系統（優先）</a></h3><ol><li>開啟 SCI 貨態系統。</li><li>輸入 {物流單號} 或 {Order SN} 查詢。</li><li>找到狀態「已取件／Delivered／Picked Up」。</li><li>該狀態旁的日期時間就是 {取貨日期}。</li></ol><h3>方法二：<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><ol><li>輸入 {Order SN}。</li><li>展開正確的 Order。</li><li>查看「物流資訊」或「訂單與物流歷程」。</li><li>找到「買家已取件／訂單已送達」。</li><li>取該狀態的日期作為 {取貨日期}。</li></ol><p>如果查不到「已取件」紀錄，代表貨態可能尚未更新，先不要自行推算日期。</p><p>如果你問的是退貨物流到府取件日期：<br>Order Admin → Return → Return &amp; Refund Requests → 申退詳情 → Status &amp; Timeline</p><p>黑貓／蝦宅退貨也可在買家端「退貨退款詳情」查看取件時間與地址。<br></p>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search"
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
      "sourceLinks": [],
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
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
      "sourceLinks": [],
      "sourceNote": "<div><br></div>",
      "options": [],
      "defaultValue": "",
      "sourceUrl": ""
    },
    {
      "code": "V001",
      "label": "小編代號",
      "hint": "",
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "category": "常用",
      "fillRules": [],
      "sourceNote": "",
      "sourceUrl": "",
      "options": [],
      "sourceLinks": [],
      "defaultValue": "[LN}"
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
      "sourceNote": "<div>有訂單編號才需要選符合的選項，沒有的話不需要</div>",
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
      "sourceNote": "<div>售後訂單已經申請退款才要勾</div><div><br></div><h2>如何查詢有沒有退款：</h2><h3>方法一．<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a></h3><div><ol><li>輸入 OSN、Username 或 Return SN 查詢訂單</li><li>在一般資訊區查看 Return 資訊、訂單狀態及時間序</li></ol></div><div><br></div><h3>方法二．<a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin Portal</a></h3><div><ol><li>進入 Return</li><li>Return &amp; Refund Requests</li><li>利用欄位搜尋訂單</li><li>進入詳情後可查看 申請狀態、申請資訊及更新時序。</li></ol></div><div><br></div><h3>方法三．<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse聊聊控制台</a></h3><div>從買家訂單資訊展開 Order Info，查看有沒有退貨退款編號及狀態。</div><div><ul><li>Processing：已申請，處理中</li><li>Accepted：退貨退款已完成／接受</li><li>Cancelled：曾申請，但已取消</li></ul></div><div>沒有退貨退款編號或相關欄位：通常表示尚未申請</div>",
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
      "sourceNote": "<div>符合「擴大安心退」需要同時符合以下 4 個條件：</div><div><ul><li>在 15 天鑑賞期內</li><li>屬於 商品瑕疵，不是買家個人因素</li><li>欲退商品總金額 低於 NT$1,380</li><li>具備 商品及包裝照片</li></ul></div>",
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
      "sourceNote": "<div><b>方法一．從 <a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>介面找（最快）</b></div><div><ol><li>左側「買家列表」會顯示目前進線買家的名稱。</li><li>點選該買家的對話後，可在控制台切換到 「用戶資訊」 查看買家資料。</li></ol></div><div><b>方法二．從 <a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 找</b></div><div><ol><li>如果已有訂單編號，在搜尋欄輸入 OSN 後按 Enter。</li><li>展開 Order，再查看 Buyer &amp; Seller Info，即可確認買家帳號。</li></ol></div><div><b>方法三．從 <a href=\"https://admin.user.shopee.io/\" target=\"_blank\" rel=\"noopener\">User Portal</a> 反查</b></div><blockquote><div>如果已有 User ID，可在 User Portal 首頁輸入 User ID，查詢對應的 User Name。</div></blockquote><div><b>注意：</b></div><div>Buyer Username／User Name：買家的帳號名稱。</div><div>User ID／UID：買家的數字識別碼，兩者不同。</div><div>建立售前案件時，Case Subject 使用的是 Username；售後案件則使用Order SN。</div>",
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
      "label": "個案擁有者／填表人",
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
      "category": "KAM表",
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
      "category": "廠直表",
      "hint": "廠直表的下方選分頁",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "轉單詢問",
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
      "label": "Sheet-ID_廠直表",
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
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "order",
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
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "return",
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
            },
            {
              "action": "fill",
              "targetCode": "V032",
              "value": "2",
              "answerText": "",
              "answerPosition": "end",
              "answerAnchor": "",
              "answerFieldCode": ""
            },
            {
              "action": "fill",
              "targetCode": "V037",
              "value": "sku",
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
              "targetCode": "V028",
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
              "targetCode": "V029",
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
              "targetCode": "V030",
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
      "label": "SCM Order ID",
      "category": "訂單相關",
      "hint": "DSS → 訂單查詢 → 輸入 {Order SN_OSN} → 搜尋 → 詳細資料 → SCM Order ID",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "<div>1. 先取得訂單編號（Order SN）</div><div>2. 開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></div><div>3. 點選 「訂單查詢」</div><div>4. 輸入訂單編號（Order SN）</div><div>5. 點選 「搜尋」</div><div>6. 找到對應訂單後，點選 「詳細資料」</div><div>7. 在訂單詳細資料中找到並複製 【SCM Order ID】</div>",
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
      "label": "SCM Return Order ID",
      "category": "訂單相關",
      "hint": "CS Portal → 搜尋 {Order SN_OSN／Buyer Username} → Return 資訊 → {Return SN} → DSS → Admin_Return → {SCM Return Order ID}",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "<h3><b>方法一．<a href=\"https://dms.cs.shopee.tw/portal/info/search\" target=\"_blank\" rel=\"noopener\">CS Portal</a> 反查</b></h3><div><ol><li>開啟 CS Portal。</li><li>&nbsp;搜尋欄輸入：{Order SN_OSN}，或{Buyer Username}<br>▪ 若使用 Username 查詢，選擇正確的 {Order SN_OSN}</li><li>按 Enter</li><li>展開 Order<br>▪ 在一般資訊區找到 Return 資訊</li><li>複製 {Return SN}</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></li><li>進入 Admin_Return／退貨訂單查詢</li><li>貼上 {Return SN}，點選搜尋</li><li>進入退貨訂單詳細資料</li><li>複製 {SCM Return Order ID}</li></ol></div><div><br></div><h3><b>方法二．<a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin Portal</a> 反查</b></h3><div><ol><li>開啟 Order Admin Portal。</li><li>進入：Return → Return &amp; Refund Requests</li><li>在查詢欄位輸入 {Order SN_OSN}。</li><li>找到對應的退貨退款申請。</li><li>進入申請詳情。</li><li>複製 {Return SN／Return ID}。</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS</a>。</li><li>進入 Admin_Return／退貨訂單查詢。</li><li>輸入 {Return SN}。</li><li>點選搜尋並開啟詳細資料。</li><li>複製 {SCM Return Order ID}。</li></ol></div><div><br></div><div><b>方法三．<a href=\"https://cs.localshop.shopee.tw/portal/inhouse/chat/home\" target=\"_blank\" rel=\"noopener\">InHouse 聊聊</a>控制台反查</b></div><div><ol><li>開啟買家的聊聊。</li><li>切換到 訂單詳情。</li><li>選擇正確的 {Order SN_OSN}。</li><li>展開 Order Info。</li><li>找到「退貨退款編號」，複製 {Return SN}。<br>▪ 同時確認退貨退款狀態：<br>▫ Processing：已申請，處理中<br>▫ Accepted：申請已接受／退款完成<br>▫ Cancelled：申請已取消</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS</a>。</li><li>進入 Admin_Return／退貨訂單查詢。</li><li>輸入 {Return SN}。</li><li>&nbsp;開啟詳細資料並複製 {SCM Return Order ID}。</li></ol></div><div><br></div><h3>方法四<b>．</b>從既有案件紀錄查詢</h3><div>如果案件之前有人處理過，可以先查：</div><div><ul><li>使用 {Order SN} 搜尋 <a href=\"https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing\" target=\"_blank\" rel=\"noopener\">KAM表</a>／<a href=\"https://docs.google.com/spreadsheets/d/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8/edit?gid=0#gid=0\" target=\"_blank\" rel=\"noopener\">廠商直送表</a>。</li><li>使用 {Order SN} 或 {Buyer Username} 搜尋 <a href=\"https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717\" target=\"_blank\" rel=\"noopener\">Shopee Jira</a>。</li></ul></div><div>查看既有紀錄是否已填寫：</div><div>{Return SN} {SCM Return Order ID}</div><div>如果只有 Return SN，再貼到 DSS 的 Admin_Return 查詢 SCM Return Order ID。</div><div>使用既有 ID 前，務必確認是同一筆訂單、同一次退貨退款申請。</div>",
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
        },
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        },
        {
          "title": "KAM表",
          "url": "https://docs.google.com/spreadsheets/d/1_xD77w4iiQAEz3VG1L3UpTPZ5OPTpC1wJG5XHDQHz-I/edit?usp=sharing"
        },
        {
          "title": "廠商直送表",
          "url": "https://docs.google.com/spreadsheets/d/1o4-K6POsC0vBq7z7KE_jGeyEtytzhYPH7XdmuVhLre8/edit?gid=0#gid=0"
        },
        {
          "title": "Shopee Jira",
          "url": "https://jira.shopee.io/projects/SPTWSBS/queues/custom/2717"
        }
      ],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
    },
    {
      "code": "V030",
      "label": "MP SKU ID",
      "category": "商品詢問",
      "hint": "商品頁 → 取得 {Product ID} → DSS → 供應商管理 → 商品 → 搜尋 {Product ID} → 選擇 {商品規格}（如果客人有指定）→ 複製 {MP SKU ID}",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "<h3>方法一．只有 Product ID，從 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">DSS </a>查 MP SKU ID</h3><div><ol><li>開啟商品頁，從網址取得 {Product ID}<br>▪ 商品頁網址通常有兩段數字，後面一段是 Product ID。</li><li>開啟 <a href=\"https://scm.internal.shopee.tw/homepage/backlogs\" target=\"_blank\" rel=\"noopener\">Shopee Drop Shipping（DSS）</a></li><li>進入：供應商管理 → 商品</li><li>使用 {Product ID} 搜尋商品。</li><li>搜尋結果會列出該商品的不同規格，根據買家詢問的 {商品規格}（如果客人有指定），找到正確的 {Model ID}。</li><li>複製系統顯示的 {MP SKU ID}。</li></ol></div><div>注意：同一個 Product ID 可能有多個 Model ID，必須依買家詢問的規格選擇（如果客人有指定），沒指定就隨便選一個。</div><h3>方法二．從 <a href=\"https://order-admin.shopee.tw/\" target=\"_blank\" rel=\"noopener\">Order Admin</a> 同時取得 Product ID 與 Model ID</h3><div>適用於已經有 {Order SN} 的售後訂單。</div><div><ol><li>開啟 Order Admin Portal。</li><li>進入：Orders → 訂單查詢</li><li>輸入 {Order SN_OSN}。</li><li>點選搜尋並進入訂單詳細資料。</li><li>到商品資訊區，找到買家詢問的 {商品名稱} 與 {商品規格}。</li><li>在同一筆商品規格資料中取得：<br>▪ Product ID：{Product ID}<br>▪ Model ID：{Model ID}</li><li>&nbsp;將兩個 ID 用底線組合：{Product ID}_{Model ID}</li></ol></div><div>組合完成的結果就是：{MP SKU ID}</div><h3>使用時怎麼選</h3><div><ul><li>只有商品頁及 Product ID：使用 方法一，從 DSS 查詢。</li><li>已有訂單編號：使用 方法二，從 Order Admin 同時取得 Product ID 與 Model ID。</li></ul></div><div>商品只有單一規格，也不建議自行填 {Product ID}_0；仍應確認實際 Model ID。</div>",
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Shopee Drop Shipping（DSS）",
          "url": "https://scm.internal.shopee.tw/homepage/backlogs"
        }
      ],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": "https://order-admin.shopee.tw/"
    },
    {
      "code": "V031",
      "label": "Question_廠直表",
      "category": "廠直表",
      "hint": "不用填",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "不用動",
      "fillRules": [],
      "sourceLinks": [],
      "sourceNote": "<div>Question 會自動帶出，主要用於：</div><div><ul><li>DSS 的「商談」內容，讓 KAM／廠商查看問題並回覆。</li><li>&nbsp;「歷史發問查詢」，供後續專員搜尋過往相同問題與答案。</li></ul></div>",
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V032",
      "label": "Priority_廠直表",
      "category": "廠直表",
      "hint": "依照緊急程度選擇",
      "type": "select",
      "required": true,
      "options": [
        "0",
        "1",
        "2"
      ],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "０：社群媒體法律健康風險(關鍵字等)\n１：有時間性問題(如改地址)\n２：一般基礎問題",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V033",
      "label": "簡述問題_廠直表",
      "category": "廠直表",
      "hint": "簡述問題",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V035",
      "label": "廠商回覆（剛填表）_廠直表",
      "category": "廠直表",
      "hint": "不用輸入",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "不用輸入",
      "fillRules": [],
      "sourceNote": "有回覆了整理一下內容再給客人回覆",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V036",
      "label": "廠商回覆（有回覆）_廠直表",
      "category": "廠直表",
      "hint": "不用輸入",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "有回覆了整理一下內容再給客人回覆",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": true,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V034",
      "label": "問題分類_廠直表",
      "category": "廠直表",
      "hint": "依照問題種類做選擇",
      "type": "select",
      "required": true,
      "options": [
        "退貨-廠商出錯貨",
        "退貨-商品瑕疵",
        "退貨-缺件",
        "退貨-拒收",
        "退貨-驗收流程",
        "退貨-其他",
        "換貨-商品瑕疵",
        "補寄-缺件",
        "補寄-商品瑕疵",
        "物流-改資訊",
        "物流-調閱簽收單",
        "物流-分箱出貨單號",
        "物流-合併訂單",
        "物流-配送追蹤",
        "物流-客訴配送服務",
        "物流-催促配送",
        "商品規格",
        "商品使用配件/贈品",
        "OOS",
        "保固相關",
        "訂單備註",
        "其他",
        "廠商-多寄"
      ],
      "defaultValue": "",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V037",
      "label": "CS內部備註TYPE_廠直表",
      "category": "廠直表",
      "hint": "自動填入",
      "type": "text",
      "required": true,
      "options": [],
      "defaultValue": "",
      "fillRules": [
        {
          "values": [
            "sku"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V018",
              "value": "",
              "answerText": "，所以要填{{V018}}",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V037"
            }
          ]
        },
        {
          "values": [
            "return",
            "order"
          ],
          "assignments": [
            {
              "action": "reveal",
              "targetCode": "V026",
              "value": "",
              "answerText": "，不用輸入",
              "answerPosition": "after_field",
              "answerAnchor": "",
              "answerFieldCode": "V037"
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
      "code": "V038",
      "label": "A組聊聊結案_廠直表",
      "category": "廠直表",
      "hint": "結案再打勾",
      "type": "select",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "V039",
      "label": "需再次溝通_廠直表",
      "category": "廠直表",
      "hint": "要第二次溝通再打勾",
      "type": "select",
      "required": true,
      "options": [
        "要打勾",
        "不打勾"
      ],
      "defaultValue": "不打勾",
      "fillRules": [],
      "sourceNote": "",
      "sourceLinks": [],
      "autoDays": 0,
      "multiline": false,
      "common": false,
      "sourceUrl": ""
    },
    {
      "code": "shipping_fee_details",
      "label": "結帳頁實際運費",
      "hint": "填入結帳頁顯示的物流方式、免運門檻及實際運費",
      "sourceNote": "查詢方式：\n\n方法一．從商品頁查看\n1. 開啟商品頁。\n2. 查看「運費說明」及商品可使用的物流方式。\n3. 確認是否有「店取 - 最快當日到」或「宅配 - 最快隔日到」標籤。\n\n方法二．從結帳頁查看\n1. 將商品加入購物車。\n2. 進入結帳頁。\n3. 點選「寄送方式」。\n4. 查看可選物流、免運門檻及實際運費。\n\n注意事項：\n▪ 一般宅配及活動期間的實際運費，以結帳頁系統顯示為準。\n▪ 商品、配送地址或區域不適用時，結帳頁可能不會顯示該物流方式。",
      "sourceLinks": [
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles",
      "category": "物流相關",
      "fillRules": []
    },
    {
      "code": "estimated_delivery_result",
      "label": "系統預計配達日期",
      "hint": "填入系統顯示的物流方式、預計配達日期及服務區域",
      "sourceNote": "查詢方式：\n\n方法一．從商品頁或結帳頁確認\n1. 查看商品是否有「店取 - 最快當日到」、「宅配 - 最快隔日到」或「蝦皮店到店 - 隔日到貨」標籤。\n2. 進入結帳頁選擇寄送方式及收件地址。\n3. 查看系統顯示的預計配達日期。\n\n方法二．從 InHouse 聊聊控制台查詢已成立訂單\n1. 開啟買家的訂單資訊。\n2. 依訂單狀態、建立時間或 Order SN 找到正確訂單。\n3. 點選 Order SN，開啟 CS Portal。\n4. 查看訂單資訊中的「預計交貨日期」及物流狀態。\n\n注意事項：\n▪ 一般宅配的預計配達時間為系統預測，實際到貨時間以物流通知為準。\n▪ 若商品、地址、時段或配送量不適用，系統可能不會顯示快速配送。\n▪ 辦公室地址、國定假日、天災、特殊活動或不可抗力因素，可能使配送時間順延。",
      "sourceLinks": [
        {
          "title": "InHouse 聊聊",
          "url": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home"
        },
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "什麼是宅配 - 最快隔日到",
          "url": "https://help.shopee.tw/portal/4/article/186734?previousPage=other%20articles"
        },
        {
          "title": "什麼是蝦皮店到店隔日到貨",
          "url": "https://help.shopee.tw/portal/4/article/145979?previousPage=other%20articles"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://cs.localshop.shopee.tw/portal/inhouse/chat/home",
      "category": "物流相關",
      "fillRules": []
    },
    {
      "code": "flash_sale_limit",
      "label": "結帳頁顯示的限購數量",
      "hint": "例如：每人限購 2 件",
      "sourceNote": "查詢步驟：\n1. 在商品頁確認是否有「限時特賣」。\n2. 將商品加入購物車。\n3. 進入結帳頁確認實際可購買數量。\n\n注意：\n▪ 限時特賣通常會限制數量。\n▪ 實際數量以結帳頁面顯示為主。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": []
    },
    {
      "code": "addon_campaign_id",
      "label": "活動檔期／add_on_deal_id",
      "hint": "填入工具顯示的活動檔期或 add_on_deal_id",
      "sourceNote": "可使用以下兩種方式查找：\n▪ SCS CS Tool：從下拉選單查看活動檔期。\n▪ [DB] Add-on / Gift / Bundle：先在 Add-on_Sub 使用 Product ID 查出 add_on_deal_id，再到 Add-on_Main 反查主商品。",
      "sourceLinks": [
        {
          "title": "SCS CS Tool（正職）",
          "url": "https://sites.google.com/shopee.com/scs-cs-tool/home"
        },
        {
          "title": "SCS CS Tool（派遣）",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/home"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": []
    },
    {
      "code": "addon_main_product",
      "label": "可搭配的主商品",
      "hint": "填入主商品的 Product ID 或商品名稱",
      "sourceNote": "查到主商品後：\n1. 複製主商品的商品 ID 或商品名稱。\n2. 到聊聊系統搜尋。\n3. 透過商品卡傳送給買家。",
      "sourceLinks": [
        {
          "title": "SCS CS Tool（正職）",
          "url": "https://sites.google.com/shopee.com/scs-cs-tool/home"
        },
        {
          "title": "SCS CS Tool（派遣）",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/home"
        },
        {
          "title": "[DB] Add-on / Gift / Bundle",
          "url": "https://docs.google.com/spreadsheets/d/1GCKyl0EVCbwzoaUuS3XseQV3U3TICOgKN-jmpEgbzQI/edit?gid=726032763#gid=726032763"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": []
    },
    {
      "code": "gift_item",
      "label": "滿額贈商品",
      "hint": "填入購物車自動加入的贈品名稱",
      "sourceNote": "確認方式：\n▪ 滿額贈不會顯示在商品頁的獨立區塊。\n▪ 達到活動條件時，系統會在購物車自動加入贈品。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": []
    },
    {
      "code": "gift_remaining_quantity",
      "label": "滿額贈剩餘數量",
      "hint": "填入購物車顯示的贈品剩餘數量",
      "sourceNote": "確認方式：\n▪ 購物車會顯示目前滿額贈剩餘數量。\n▪ 若贈品已贈完，購物車不會顯示。",
      "sourceLinks": [],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "",
      "category": "促銷活動",
      "fillRules": []
    },
    {
      "code": "available_voucher_codes",
      "label": "優惠代碼有哪些",
      "hint": "把 CS Portal 顯示可使用的優惠代碼全部貼上；多筆請一行一個",
      "sourceNote": "<div>使用 CS Portal 查詢：</div><div>1. 搜尋買家 Username。</div><div>2. 進入「詳細資訊（買家）」。</div><div>3. 點選「優惠代碼錢包」。</div><div>4. 將目前可使用的優惠代碼填入此欄位。</div><div><br></div><div>其他查詢方式：</div><div>▪ 也可以直接用優惠代碼在 CS Portal 搜尋。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        }
      ],
      "options": [],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "text",
      "multiline": true,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "code": "original_voucher_code",
      "label": "原優惠代碼_Voucher Code",
      "hint": "填入取消訂單前使用的原 Voucher Code",
      "sourceNote": "<div>查找位置：</div><div>▪ CS Portal → 搜尋 {Order SN} → 一般資訊 → 優惠券資訊。</div><div>▪ 如果是免運券，可到 Order Admin → Orders → Order Information → Free Shipping Fee Voucher Promo ID 確認該訂單使用的免運券資料。</div>",
      "sourceLinks": [
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
      "common": false,
      "type": "text",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "code": "voucher_return_status",
      "label": "優惠券返還／使用狀態",
      "hint": "請選擇後台查詢結果",
      "sourceNote": "<div>查詢步驟：</div><div>1. 開啟 CS Portal。</div><div>2. 使用 {Buyer Username} 搜尋買家。</div><div>3. 進入「詳細資訊（買家）」→「優惠代碼錢包」。</div><div>4. 使用原 Voucher Code 搜尋或比對清單。</div><div>5. 查看優惠券是否出現在可用清單、目前狀態及有效期限。</div><div><br></div><div>判斷方式：</div><div>▪ 顯示在可用清單且狀態為 Valid／可使用：代表已返還且仍可使用。</div><div>▪ 未出現在可用清單，或狀態為失效／過期／不可使用：代表目前不能再次使用。</div>",
      "sourceLinks": [
        {
          "title": "CS Portal",
          "url": "https://dms.cs.shopee.tw/portal/info/search"
        },
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        }
      ],
      "options": [
        "已返還，可再次使用",
        "已返還，但已失效／不可使用",
        "未返還，可再次使用",
        "未返還，但已失效／不可使用",
        "未返還",
        "查無原優惠券資料"
      ],
      "defaultValue": "",
      "autoDays": 0,
      "required": true,
      "common": false,
      "type": "select",
      "multiline": false,
      "sourceUrl": "https://dms.cs.shopee.tw/portal/info/search",
      "category": "優惠券",
      "fillRules": []
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "商品效期 Inventory Expiration Date",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Expiration-Date?authuser=3"
        }
      ],
      "category": "售前商品工具",
      "code": "expiration_result",
      "label": "小工具查詢效期",
      "hint": "貼上各規格或指定規格效期",
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Expiration-Date?authuser=3",
      "sourceNote": "<div><b>商品效期查詢</b></div><ol><li>到 SCS CS Tool 的 Inventory Expiration Date。</li><li>以 Product ID 查詢；若客人提供規格，需確認對應 variation / spec。</li><li>回覆前提醒商品實際效期仍以包裝標示為準。</li></ol>"
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "商品進貨日 Inventory Inbound Date",
          "url": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Inbound-Date?authuser=3"
        }
      ],
      "category": "售前商品工具",
      "code": "inbound_result",
      "label": "小工具查詢進貨日",
      "hint": "貼上小工具顯示結果",
      "sourceUrl": "https://sites.google.com/shopeemobile-external.com/scs-cs-tool/Inventory-Inbound-Date?authuser=3",
      "sourceNote": "<div><b>商品進貨日查詢</b></div><ol><li>到 SCS CS Tool 的 Inventory Inbound Date。</li><li>以 Product ID 查詢商品進貨日；若有規格差異，需確認對應品項。</li><li>把查到的進貨日轉成客人看得懂的說法，不直接貼內部欄位名稱。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "backend_note",
      "label": "後台查詢結果",
      "hint": "貼上 CS Portal / OMS / WMS 重點"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "wms_status",
      "label": "WMS 狀態",
      "hint": "Created / Information Received / Outbound 等",
      "options": [
        "Created",
        "Information Received",
        "Outbound",
        "其他／需補充"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "delay_days",
      "label": "延遲天數",
      "hint": "例如：Outbound > 2D"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "oos_item",
      "label": "缺貨商品",
      "hint": "可填商品名稱或品項"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "logistics_status",
      "label": "物流貨態",
      "hint": "貼上目前貨態"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "follow_note",
      "label": "追蹤紀錄",
      "hint": "表單或轉詢紀錄"
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "store_arrival_date",
      "label": "門市配達日",
      "hint": "YYYY/MM/DD"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "buyer_confirm",
      "label": "買家確認內容",
      "hint": "是否回門市、是否拿到包裹"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "payment_method",
      "label": "付款方式",
      "hint": "COD / 非 COD",
      "options": [
        "COD",
        "非 COD",
        "待確認"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "amount_note",
      "label": "收款金額確認",
      "hint": "正確／不正確／待確認",
      "options": [
        "收款金額正確",
        "收款金額不正確",
        "待確認"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後商品問題",
      "code": "item_amount",
      "label": "商品單價",
      "hint": "NT$"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後商品問題",
      "code": "issue_type",
      "label": "問題類型",
      "hint": "破包／漏液／過期／缺件／錯品等",
      "options": [
        "破包",
        "破碎／破裂",
        "漏液",
        "過期",
        "長蟲",
        "缺件",
        "錯品",
        "商品瑕疵",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後商品問題",
      "code": "photo_status",
      "label": "照片狀態",
      "hint": "已提供／未提供",
      "options": [
        "已提供照片",
        "未提供照片",
        "照片不足需補充"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後商品問題",
      "code": "special_note",
      "label": "特殊條件",
      "hint": "管制區／高單／特殊商品，無則填無"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後商品問題",
      "code": "case_note",
      "label": "案件備註",
      "hint": "轉詢或表單紀錄"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後補償",
      "code": "user_id",
      "label": "User ID",
      "hint": "買家 UID"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "voucher_code",
      "label": "原 Voucher Code",
      "hint": "原折扣碼",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>補償折扣碼 / 原折扣碼確認</b></div><ol><li>Shopee CS Tool 補碼小工具是瀏覽器擴充功能，只能在 CP 或 DSS 上使用。</li><li>先確認原折扣碼是否失效、是否沒有同等或更好的券可以提供。</li><li>依工具產出的內容貼到個案補碼追蹤表，再帶回可回覆客人的折扣碼資訊。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "voucher_invalid",
      "label": "原碼是否失效",
      "hint": "是／否",
      "options": [
        "已失效",
        "未失效",
        "查無資料"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "better_voucher_check",
      "label": "是否無更優優惠",
      "hint": "是／否",
      "options": [
        "已確認無更優優惠",
        "已有相同或更優優惠",
        "尚未確認"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "discount_amount",
      "label": "折扣損失金額",
      "hint": "蝦皮＋賣家折扣",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "price_difference",
      "label": "商品價差",
      "hint": "現價 - Subtotal",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "min_spend",
      "label": "最低消費",
      "hint": "補碼低消",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "voucher_amount",
      "label": "折扣金額",
      "hint": "補碼折扣額",
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>返還損失折扣 / 價差</b></div><ol><li>在 CP 或 DSS 使用 Shopee CS Tool 補碼小工具。</li><li>將工具結果貼到個案補碼追蹤表指定欄位，依表內結果確認補償金額與門檻。</li><li>金額欄位用單行文字填寫，保留幣別或必要說明。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "Order Admin Portal",
          "url": "https://order-admin.shopee.tw/"
        },
        {
          "title": "Promotion Admin",
          "url": "https://promotion-admin.shopee.tw/"
        },
        {
          "title": "個案補碼追蹤表",
          "url": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082"
        }
      ],
      "category": "售後補償",
      "code": "proof_status",
      "label": "佐證狀態",
      "hint": "照片／表單／OPS通知",
      "options": [
        "照片已確認",
        "表單／OPS 通知",
        "待補佐證"
      ],
      "sourceUrl": "https://docs.google.com/spreadsheets/d/1mCF93s6coyGKAHdbCG8gwiXf4xYB7BHxwdEIQNSO-cc/edit?gid=1135706082#gid=1135706082",
      "sourceNote": "<div><b>小額折扣碼</b></div><ol><li>先確認客人佐證是否足夠，不足時補請截圖或訂單資訊。</li><li>需要補碼時走共用補碼流程與個案補碼追蹤表；小額券不代表原訂單問題已處理完。</li><li>若仍涉及物流、商品或退款問題，另外接回對應共用分支處理。</li></ol>"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "return_reason",
      "label": "退貨原因",
      "hint": "買家選擇／描述",
      "options": [
        "包裹未收到",
        "商品缺件",
        "不需要了／已購買類似商品",
        "實品與描述／圖片有落差",
        "收到不對的商品",
        "商品功能有問題",
        "商品外表瑕疵／毀損",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "refund_amount",
      "label": "退款金額",
      "hint": "NT$"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "missing_item",
      "label": "缺件內容",
      "hint": "缺少品項／數量"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "return_channel",
      "label": "退貨物流",
      "hint": "7-11／SPX／黑貓／賣家自行安排等",
      "options": [
        "7-11",
        "SPX",
        "黑貓／蝦宅",
        "賣家自行安排",
        "待系統顯示"
      ]
    },
    {
      "type": "date",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "complete_date",
      "label": "完成／取貨日期",
      "hint": "YYYY/MM/DD"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "return_id",
      "label": "Return ID",
      "hint": "CS Portal Return ID"
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "tool_result",
      "label": "小工具結果",
      "hint": "已退款／不可發起原因",
      "options": [
        "已退款",
        "紅字不可發起 AOC RR",
        "查無發起按鈕",
        "其他"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "logistics_channel",
      "label": "物流渠道",
      "hint": "SPX／店到店等",
      "options": [
        "蝦皮店到店",
        "蝦皮店到店 - 隔日到貨",
        "SCS",
        "店到家宅配",
        "其他物流"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "button_status",
      "label": "按鈕狀態",
      "hint": "有／沒有",
      "options": [
        "有取消配送中訂單按鈕",
        "沒有按鈕",
        "待確認"
      ]
    },
    {
      "type": "select",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "rr_status",
      "label": "RR 狀態",
      "hint": "例如 RT1:Requested",
      "options": [
        "RT1:Requested",
        "RT2:Accept",
        "RT5:Refund Paid",
        "RT3:Cancel",
        "其他"
      ]
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "remark",
      "label": "Remark",
      "hint": "後台顯示 remark"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後退貨退款",
      "code": "next_step",
      "label": "後續建議",
      "hint": "取件／等配送／一般 RR"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "issue_summary",
      "label": "客人問題",
      "hint": "簡述問題"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "pending_note",
      "label": "未結案備註",
      "hint": "待追蹤內容"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "vendor_reply",
      "label": "廠商回覆",
      "hint": "尚未回覆可填待回覆"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "follow_type",
      "label": "追蹤情境",
      "hint": "平日／假日／連假後／超過2工作天"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "case_summary",
      "label": "案件摘要",
      "hint": "卡點與已處理事項"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "requested_team",
      "label": "欲尋求協助對象",
      "hint": "OPS／BAU"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "reply_summary",
      "label": "已回覆內容",
      "hint": "整理已說明的3次重點"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "日常作業",
      "code": "risk_type",
      "label": "風險類型",
      "hint": "情緒／不雅／性騷擾／非理性用詞"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "category": "售後出貨配送",
      "code": "paid_time",
      "label": "付款完成時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "category": "售後出貨配送",
      "code": "delivered_time",
      "label": "實際到貨時間",
      "hint": "YYYY/MM/DD HH:mm",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": false,
      "common": false,
      "fillRules": [],
      "sourceLinks": [],
      "category": "售後出貨配送",
      "code": "buyer_id",
      "label": "Buyer ID",
      "hint": "買家 UID"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": true,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "category": "售後出貨配送",
      "code": "blacklist_result",
      "label": "查詢表結果",
      "hint": "是否黑名單／不符合原因",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22",
      "sourceNote": "<div><b>延遲補償資格確認</b></div><ol><li>先用延遲補償工具確認物流渠道、付款時間與配達時間是否符合規則。</li><li>再到 2025 查詢表4 / HighRisk Buyer 查詢表，用 Buyer Username / Buyer ID 或 OSN 確認是否為高風險或排除名單。</li><li>若命中黑名單、未延遲或不符規則，不要承諾補償；可參考規則頁說明 14:00 與付款異動相關判斷。</li></ol>"
    },
    {
      "type": "text",
      "autoDays": 0,
      "required": false,
      "multiline": true,
      "common": false,
      "fillRules": [],
      "sourceLinks": [
        {
          "title": "延遲補償工具",
          "url": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22"
        },
        {
          "title": "2025 查詢表4 / HighRisk Buyer 查詢表",
          "url": "https://docs.google.com/spreadsheets/d/1TbXd1qRfSnRbb71hNxQpZg_G1JxaOqmggcGlFtEfCrk/edit?gid=1664747531#gid=1664747531"
        },
        {
          "title": "延遲訂單補償規則",
          "url": "https://help.shopee.tw/portal/4/article/149656"
        }
      ],
      "category": "售後出貨配送",
      "code": "voucher_note",
      "label": "補發紀錄",
      "hint": "補發表單或處理狀態",
      "sourceUrl": "https://datasuite.shopee.io/dashboard/dashboard/1daef549-eeb1-475a-81b1-af4a599ad6c9/normal?%22",
      "sourceNote": "<div><b>補發延遲補償</b></div><ol><li>延遲補償工具確認符合後，再用 HighRisk Buyer 查詢表排除黑名單或不可補償情境。</li><li>符合才執行補發，並告知買家留意通知與優惠券錢包。</li><li>回覆文字需帶入補發結果或預計可查看的位置。</li></ol>"
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
    },
    {
      "prompt": "客人是哪一種優惠券問題？",
      "options": [
        "哪裡領取／查看優惠券",
        "查詢買家目前可用優惠券",
        "取消訂單後優惠券是否返還"
      ]
    },
    {
      "prompt": "客人是哪一種加價購問題？",
      "options": [
        "確認商品是否有加價購",
        "加價購商品要搭配哪件主商品"
      ]
    },
    {
      "prompt": "商品頁有沒有顯示加價購標籤？",
      "options": [
        "有顯示加價購標籤",
        "沒有顯示加價購標籤"
      ]
    },
    {
      "prompt": "商品卡有沒有顯示滿額贈標籤？",
      "options": [
        "商品卡有顯示滿額贈",
        "商品卡沒有顯示滿額贈"
      ]
    },
    {
      "prompt": "購物車有沒有自動加入滿額贈商品？",
      "options": [
        "購物車有自動加入贈品",
        "購物車沒有自動加入贈品"
      ]
    },
    {
      "prompt": "後台查詢結果顯示優惠券是否可返還／再次使用？",
      "options": [
        "可以返還／可以再次使用",
        "不能返還／不能再次使用"
      ]
    },
    {
      "prompt": "客人詢問哪一種物流問題？",
      "options": [
        "問運費",
        "問什麼時候到貨",
        "退貨步驟是什麼"
      ]
    },
    {
      "prompt": "客人要查哪一種商品時間？",
      "options": [
        "查商品效期",
        "查商品進貨日"
      ]
    },
    {
      "prompt": "後台查到的主要狀態是哪一種？",
      "options": [
        "尚未進入 WMS",
        "WMS 已出貨但延遲",
        "OMS／WMS 顯示 OOS 缺貨"
      ]
    },
    {
      "prompt": "包裹目前是哪一種異常？",
      "options": [
        "包裹延遲未配達",
        "配達門市超過 10 天未取消",
        "貨態已配達但買家未收到",
        "貨態配送中但買家已取件"
      ]
    },
    {
      "prompt": "商品異常屬於哪一種處理情境？",
      "options": [
        "低單 200 元以下且有照片",
        "SCS 貨損有照片",
        "管制區／高單／特殊商品"
      ]
    },
    {
      "prompt": "補償折扣碼屬於哪一類？",
      "options": [
        "返還原折扣碼",
        "返還損失折扣／價差",
        "小額折扣碼"
      ]
    },
    {
      "prompt": "退貨退款主要是哪一種情境？",
      "options": [
        "60 元以下自動退款",
        "61-1380 元快速退款",
        "包裹未送達進蝦皮審核",
        "缺件僅退款進蝦皮審核",
        "其他原因一般退貨"
      ]
    },
    {
      "prompt": "Offline RR 目前判斷結果是什麼？",
      "options": [
        "鑑賞期內優先引導買家自行 AOC",
        "可發起 Agent AOC",
        "不可發起 AOC RR",
        "專員已代發 RR"
      ]
    },
    {
      "prompt": "取消配送中目前是哪一種狀態？",
      "options": [
        "訂單可申請取消配送中",
        "申請處理中",
        "系統同意取消",
        "系統拒絕或買家撤回"
      ]
    },
    {
      "prompt": "目前案件需要哪一種處理？",
      "options": [
        "單純商品資訊不用開單",
        "需開單＋填 KAM 表",
        "廠直問題需轉廠商",
        "平日／假日追蹤話術"
      ]
    },
    {
      "prompt": "轉二線原因是哪一種？",
      "options": [
        "轉詢 SLA 超過 48 小時",
        "已說明 3 次仍重複詢問",
        "買家有情緒／不雅／性騷擾",
        "無法判斷需協助方向"
      ]
    },
    {
      "prompt": "延遲補償查詢結果是哪一種？",
      "options": [
        "物流渠道適用延遲補償",
        "黑名單或不符合補償",
        "符合補發延遲補償"
      ]
    },
    {
      "prompt": "客人問的是哪一種物流／退貨問題？",
      "options": [
        "問運費",
        "問什麼時候到貨",
        "退貨步驟是什麼"
      ]
    },
    {
      "prompt": "客人是要確認商品是否有加價購，還是要反查加價購商品搭配哪件主商品？",
      "options": [
        "確認商品是否有加價購",
        "加價購商品要搭配哪件主商品"
      ]
    },
    {
      "prompt": "商品頁有沒有顯示「加價購／優惠加購」標籤？",
      "options": [
        "有顯示加價購標籤",
        "沒有顯示加價購標籤"
      ]
    }
  ]
};
