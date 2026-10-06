# Gremlin

- 登場年: 2009年
- 設計者: Marko A. Rodriguez
- パラダイム: declarative, functional, query
- 系統: logic-declarative

## 解決したかった課題

グラフデータベースやグラフ処理エンジンが乱立する中、製品ごとに異なるクエリ言語を学ばなければならないという課題があった。Apache TinkerPopプロジェクトは、OLTP型のグラフデータベースとOLAP型のグラフ処理系の双方で動作する、統一的なグラフトラバーサル言語を必要としていた。Marko A. Rodriguezは、命令型と宣言型の両方のスタイルでグラフを走査できる言語としてGremlinを設計した。これによりJava、Python、Groovyなど複数のホスト言語から、共通のトラバーサル概念でグラフを操作できるようになった。

## 特徴

- ノードとエッジをステップ(`.out()`、`.in()`、`.has()`など)の連鎖として走査するトラバーサル指向の構文
- 命令型(手続き的に一歩ずつ辿る)と宣言型(パターンを示す)の両方のスタイルを併用できる
- Java仮想マシン上で動作し、Java・Groovy・Python・.NETなど複数言語からホストされる
- Apache TinkerPopの標準として、多数のグラフデータベース・グラフ処理系(OLTP/OLAP問わず)に対応する
- グラフ全体を並列分散処理するOLAP的な走査と、単一クエリに応じるOLTP的な走査の両方をサポートする

## 影響を受けた言語

- [XPath](xpath.md)
- [SPARQL](sparql.md)
- [SQL](sql.md)
- [Java](java.md)
- [Ripple](ripple_lang.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

ニッチな言語として位置づけられており(status: niche)、Apache TinkerPopエコシステムを採用する一部のグラフデータベース(JanusGraphなど)で使われ続けている。グラフクエリの分野ではCypherやGQLに押され気味だが、複数のグラフエンジンにまたがる汎用性を評価する利用者に支持されている。

## Hello World

Gremlinコンソールでは、`inject`ステップで値をそのままトラバーサルの結果として返すことができる。

```groovy
g.inject('Hello, World!')
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/グレムリン_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Gremlin_%28query_language%29)
