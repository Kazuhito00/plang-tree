# LiveCode

- 登場年: 2001年(前身のMetaCardエンジンは1993年に開発され、2003年にRuntime Revolution社が獲得。2010年に「LiveCode」へ改称)
- 設計者: Runtime Revolution Ltd.(現LiveCode Ltd.)
- パラダイム: procedural, object-oriented, event-driven
- 系統: educational-visual

## 解決したかった課題

1990年代末にHyperCardの開発が縮小・終息した後も、そのやさしい英語風スクリプト言語(HyperTalk)の書きやすさを求める開発者は残っていた。しかし、HyperCard自体はMacintosh専用であり、他のOSへ展開することはできなかった。

そこでRuntime Revolution社(後のLiveCode Ltd.)は、2003年に獲得したMetaCardエンジンを土台に、HyperCardに触発されたスクリプト言語を持つ開発環境「Revolution」を2001年から展開し、2010年に「LiveCode」へ改称した。一度書いたコードを再コンパイルせずに複数のプラットフォームへ展開できることを目指し、Wikipediaの記述によれば「主要なすべてのOSで動作する唯一の(xTalk系)環境」を志向している。

## 特徴

- HyperCard/HyperTalkに触発された、いわゆる「xTalk」系のスクリプト言語
- "put ... into ..." のような英語に近い構文を持ち、約2,950の組み込みキーワードを備える
- 連想配列、正規表現、SQLデータベースアクセス、TCP/IP通信ライブラリを標準でサポート
- iOS、Android、macOS、Windows、Linux、HTML5など、単一のコードベースから主要なOSすべてに展開できる
- かつては無料・オープンソースのGPL版(Community Edition)が存在したが、2021年8月(バージョン9.6.4)に提供が終了し、以後はプロプライエタリ版のみが開発継続

## 影響を受けた言語

- [HyperTalk](hypertalk.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

LiveCodeは現在もLiveCode Ltd.によって開発が続けられている、現行のクロスプラットフォーム開発環境である。HyperCard終息後もxTalk系の思想を受け継ぐ数少ない現行環境の一つであり、HyperTalkの「英語に近い読みやすい構文」という設計思想を、モバイル・Web時代に対応させた形で継承している。

## Hello World

```livecode
repeat ten times
  put "Hello world at" && the long time & return after field 1
  wait 1 second
end repeat
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/LiveCode)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/LiveCode)
