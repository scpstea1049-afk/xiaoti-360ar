# 品德教育 360AR 互動測驗｜我的超人爸爸媽媽（注音版）

禮．孝悌篇 — 360° 居家場景 + AR 實境，八大關卡闖關，題目附直式注音。

## 功能

- 輸入姓名、座號後進入「品德主題」選單，點選「孝悌」開始闖關
- 360° 環景居家場景（Three.js），拖曳或滑動環顧
- 8 大關卡、共 17 題（是非題、品德核心選擇題、情境實踐題）
- 直式注音，可用右上角按鈕開關
- 題目語音朗讀（Web Speech API）、答題音效（Tone.js）
- 全數通關獲得「孝悌小超人」勳章

## 檔案結構

```
.
├── index.html      # 頁面結構
├── css/style.css   # 樣式（含直式注音）
├── js/app.js       # 關卡資料、3D 場景、注音、互動邏輯
├── .nojekyll
└── README.md
```

## 部署到 GitHub Pages

1. 在 GitHub 建立新的 repository（例如 `xiaoti-360ar`）
2. 把本資料夾所有檔案上傳到 repository 根目錄（含 `.nojekyll`）
3. 到 **Settings → Pages**，**Source** 選 `Deploy from a branch`，Branch 選 `main`、資料夾 `/ (root)`，按 Save
4. 約 1～2 分鐘後，網址為 `https://<你的帳號>.github.io/<repository 名稱>/`

> GitHub Pages 是 HTTPS，AR 相機模式（需要相機權限）可正常使用。

## 修改題目

關卡與題目都在 `js/app.js` 最上方的 `STATIONS_DATA`。

## 注意

- 需要連網載入 Tailwind CSS、Three.js、Tone.js、pinyin-pro 與 Google Fonts
- 注音由 pinyin-pro 判斷讀音後轉換，個別字可能與教科書不同
- 學生姓名與座號只存在瀏覽器頁面中，重新整理即清除，不會上傳
