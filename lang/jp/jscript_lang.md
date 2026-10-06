# JScript

- 登場年: 1996年
- 設計者: Microsoft
- パラダイム: scripting, object-oriented, functional, procedural
- 系統: scripting

## 解決したかった課題

1996年、MicrosoftはInternet Explorer 3.0に、ECMAScript(JavaScript)相当のスクリプティング機能を組み込みたいと考えていた。しかし「JavaScript」という名称はNetscapeが商標を持っていたため、これを直接使用することを避ける必要があった。

そこでMicrosoftは独自にECMAScriptの実装であるJScriptを開発した。ブラウザ上で動作するだけでなく、OLEオートメーションを利用する任意のアプリケーションに組み込めるActive Scriptingエンジンとして提供された点も特徴である。

## 特徴

- Microsoft独自のECMAScript(JavaScript相当)実装である
- プロトタイプベースのオブジェクト指向、関数型、手続き型を組み合わせたマルチパラダイム言語である
- OLEオートメーションを利用するアプリケーションに組み込めるActive Scriptingエンジンとして実装されている
- .NET Framework向けの実装であるJScript .NETも存在する
- Internet Explorerのバージョンに合わせてECMAScript標準の各エディションに追従して進化した

## 影響を受けた言語

- [JavaScript](javascript.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

JScriptの最終版はJScript 9.0(2011年3月)であり、Microsoftはその後の開発をModern EdgeやMDNドキュメントに準拠したECMAScript実装へと移行させた。これによりJScript自体はlegacy(過去の主力技術)という位置づけになっている。

2020年にはセキュリティ上の懸念(国家主導の攻撃者に悪用された事例があったとされる)から、Internet ExplorerでJScriptを無効化できる設定が追加された。なおWindows 11 24H2では、後方互換性維持のためのJScript 9 Legacyというコンポーネントが提供されている。

## Hello World

```
WScript.Echo("Hello, World!");
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/JScript)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/JScript)
