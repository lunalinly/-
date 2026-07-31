# SOP 操作小抄

將 Google 試算表中的題目、判斷流程、變數、答案範本與動作整理成可搜尋、逐步操作的網頁工具。

## 使用網址

<https://lunalinly.github.io/-/>

## 視覺化編輯室

網站右上角按 **✦ 開啟編輯室**，不必修改程式碼。編輯室只分成兩個完整工作區：

- **題目管理**：新增／編輯中文題目、搜尋關鍵字、說明及啟用狀態，並可查看或新增這題的分支
- **分支管理**：同一頁完成不限層數的判斷路徑、變數欄位、自動計算、答案範本與操作提醒
- 中文分支名稱可以在多條路徑重複使用
- 自動計算可選擇任一來源欄位及增減天數
- 答案範本可點選中文欄位按鈕插入，例如 `【訂單編號】`

按 **儲存題目** 或 **儲存整個分支** 會立即保存為瀏覽器草稿；按 **同步到 GitHub** 則會更新 `data.js`、建立 GitHub commit 並觸發 Pages 重新發布。

## GitHub 同步 Token

使用 GitHub Fine-grained personal access token：

1. Resource owner 選擇 `lunalinly`。
2. Repository access 選擇 **Only select repositories**，只勾選本 Repository。
3. Repository permissions 只需設定 **Contents: Read and write**。
4. 將 Token 貼到編輯室的同步視窗。

Token 只會放在該瀏覽器分頁的 `sessionStorage`，關閉分頁後消失；不會寫進 Repository 或備份檔。

## GitHub Pages

網站透過 `.github/workflows/deploy.yml` 發布。每次 `main` 的資料更新會先檢查 JavaScript 語法，再自動部署。

## 資料來源

初始內容匯入自「寫做筆記讀做大抄 - SOP產生器副本」。網站不會修改原試算表。

> Repository 與 GitHub Pages 目前是公開的，請勿加入客戶個資、登入密碼或公司機密。