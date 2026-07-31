# SOP 操作小抄

將 Google 試算表中的題目、判斷流程、變數、答案範本與動作整理成可搜尋、逐步操作的網頁工具。

## 使用網址

<https://lunalinly.github.io/-/>

## 視覺化編輯室

網站右上角按 **✦ 開啟編輯室**，不必修改程式碼。編輯室分為：

- **題目**：名稱、搜尋關鍵字、說明及啟用狀態
- **判斷流程**：一條完整路徑，可新增 0～6 層問題與選項
- **變數欄位**：分支需要填入的內容、必填、日期、自動計算及常用參數
- **答案範本**：使用 `{{變數代碼}}` 產生最終答案
- **操作提醒**：查表、填表、建立工單或 Jira 等操作

按 **儲存這筆** 會立即保存為瀏覽器草稿；按 **同步到 GitHub** 則會更新 `data.js`、建立 GitHub commit 並觸發 Pages 重新發布。

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