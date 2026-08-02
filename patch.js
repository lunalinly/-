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

  flows("詢問加價購").forEach(flow => {
    (flow.answerParts || []).forEach(part => {
      if (part.branch === "加價購標籤有顯示") part.branch = "有顯示加價購標籤";
      if (part.branch === "加價購標籤沒有顯示") part.branch = "沒有顯示加價購標籤";
      if (part.branch === "反查加價購主商品") part.branch = "加價購商品要搭配哪件主商品";
    });
  });

  const addonShown = template("Q008", "有顯示加價購標籤");
  if (addonShown) {
    addonShown.text = "確認結果：\n▪ 商品頁有顯示「加價購」標籤。\n▪ 此商品可以搭配其他商品進行優惠加購，價格通常會較優惠。\n\n下一步：\n1. 將商品加入購物車。\n2. 查看實際可加購商品與優惠價格。\n3. 活動內容、可搭配商品及價格皆以結帳頁面顯示為主。";
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
})();
