# nodejs webapiからローカルバッチを実行する

## サーバー側でやること
ライブラリを入れてサーバーを起動する

```PowerShell
# ライブラリインストール
npm ci

# expressサーバー起動
npx ts-node index.ts
```

## クライアント側でやること
`path`パラメーターをつけてPOSTする

```PowerShell
# powershellの場合
Invoke-WebRequest -Method Post -Body @{path="aiueo"} http://localhost:3000/execbat
```