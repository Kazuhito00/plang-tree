# Cypher

- 登場年: 2011年
- 設計者: Andrés Taylor
- パラダイム: declarative, query, pattern-matching
- 系統: logic-declarative

## 解決したかった課題

グラフデータベースNeo4jでは、ノードと関係(エッジ)として表現される相互接続データを効率的に問い合わせる手段が必要とされていた。従来のSQLはテーブルとその結合を前提とする設計であり、グラフ構造特有の探索処理には不向きだった。そこでAndrés Taylorは、SQLの読みやすさを保ちながら、括弧と矢印によってノードと関係を視覚的に表現できる構文を新たに設計した。この結果、MATCH句を用いてグラフパターンを直感的に記述できるようになった。Cypherは後にopenCypherとして公開され、ISO標準GQL(Graph Query Language)策定の基盤ともなった。

## 特徴

- ASCIIアートのような括弧`()`と矢印`-->`でノードと関係を視覚的に表現するパターンマッチング構文
- MATCH、WHERE、RETURNなどSQLに似たキーワードを用いた宣言的なクエリ構造
- ノードにラベル、関係に型、両者にプロパティ(キー・バリュー)を付与して柔軟にモデリングできる
- CREATE・MERGE・SET・DELETEなどによりグラフの作成・更新・削除を同一言語内で行える
- 可変長パス(`*1..5`など)の指定により、複数ホップにわたる関係の探索を簡潔に記述できる
- openCypherとしてオープン化され、Neo4j以外の複数のグラフデータベース製品でも採用されている

## 影響を受けた言語

- [SQL](sql.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も現役の言語であり(status: active)、Neo4jを中心にグラフデータベース分野で広く使われ続けている。openCypherの仕様はISO標準GQLの策定にも取り入れられ、グラフクエリの標準化における重要な役割を担っている。

## Hello World

```cypher
RETURN "Hello, World!" AS greeting;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Cypher_%28query_language%29)
