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

## 参考にしたページ

[expressの開発にTypeScriptを利用する](https://qiita.com/zaburo/items/69726cc42ef774990279)

[Windows上のでnode.jsから外部アプリケーションを実行する](http://mztm.jp/2019/04/26/windows%E4%B8%8A%E3%81%AE%E3%81%A7node-js%E3%81%8B%E3%82%89%E5%A4%96%E9%83%A8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B/)

[【Node.js】【Express】req.bodyが取得できない](https://qiita.com/papipupesatou/items/222751cd2457462bbd11)

[curl/PowerShellでHTTPアクセスいろいろ](https://qiita.com/zaki-lknr/items/8950f6acea20961a8afc)