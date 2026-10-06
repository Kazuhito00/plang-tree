# Opa

- 登場年: 2011年
- 設計者: MLstate
- パラダイム: functional, concurrent, event-driven
- 系統: scripting

## 解決したかった課題

Web開発では、クライアント側(JavaScript)、サーバー側、データベースをそれぞれ別の言語や技術で記述する必要があり、その境界を横断したバグや設計の不整合が生じやすいという課題があった。フランスのMLstate社は、単一の言語でクライアント・サーバー・データベース・分散実行を統合的に記述できるOpaを開発した。関数型言語をコアとしつつ静的型推論を持ち、クライアント側コードはJavaScriptへ、サーバー側コードはNode.jsへコンパイルされる仕組みを備えた。

## 特徴

- 関数型言語をコアとしつつ、静的型推論を持つマルチパラダイム言語
- クライアント側コードをJavaScriptへ、サーバー側コードをNode.jsへ自動的にコンパイルする
- Webサーバー・データベース・分散実行エンジンを言語自体に統合している
- Erlangのプロセスに相当する「セッション」機構により、命令的な状態をメッセージパッシングでカプセル化する
- AGPLv3およびMITライセンスのもとで公開された

## 影響を受けた言語

- [OCaml](ocaml.md)
- [Erlang](erlang.md)
- [JavaScript](javascript.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

2010年にOWASPカンファレンスで発表され、2011年6月にソースコードがGitHub上で公開された。最終安定版は2014年3月のバージョン1.1.1で、それ以降の活発な開発は確認できず、現在は歴史的な言語として位置づけられている(status: historical)。

## Hello World

```
jlog("Hello, World")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Opa_(programming_language))
