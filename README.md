# SOP 操作小抄

將 Google 試算表中的題目、判斷流程、變數、答案範本與動作整理成可搜尋、逐步操作的網頁工具。

## 使用網址

啟用 GitHub Pages 後：<https://lunalinly.github.io/-/>

## 修改內容

主要資料集中在 [`data.js`](./data.js)。在 GitHub 開啟檔案後按鉛筆圖示修改並提交，GitHub 會保留每次修改紀錄，網站也會自動重新發布。

資料結構：

- `questions`：題目名稱、關鍵字、說明
- `flows`：每一條完整判斷路徑，可包含 0～6 層
- `variables`：各題目／分支需要填入的欄位
- `templates`：最後產生的答案，使用 `{{變數代碼}}` 代入
- `actions`：需要查表、填表、建立工單或 Jira 等操作提醒

## GitHub Pages 初次啟用

1. 開啟 Repository 的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
3. 到 **Actions** 查看 `Deploy SOP helper to GitHub Pages`；如第一次執行失敗，按 **Re-run all jobs**。

之後每次修改 `main` 分支都會自動發布。

## 資料來源

初始內容匯入自「寫做筆記讀做大抄 - SOP產生器副本」。網頁不會修改原試算表。