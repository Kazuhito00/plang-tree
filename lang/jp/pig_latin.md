# Pig Latin

- 登場年: 2006年
- 設計者: Yahoo Research
- パラダイム: dataflow, procedural
- 系統: domain-specific

## 解決したかった課題

Hadoop上で、その場限りの用途(アドホックなデータ分析)のためにMapReduceジョブを書くには、Javaで直接MapReduceプログラムを記述する必要があり、データ変換のパイプラインを素早く組み立てたり試行錯誤したりするには冗長すぎるという課題があった。

Yahoo Researchは、MapReduceの複雑さをSQLに似た記法で抽象化しつつ、SQLとは異なり明示的に手続き的・データフロー的な言語Pig Latinを設計し、パイプラインの各段階を細かく制御できるようにした。

## 特徴

- MapReduceの処理をSQLに似た、しかし手続き的な記法で記述できる
- 有向非巡回グラフ(DAG)としてパイプラインを柔軟に表現できる
- 遅延評価
- 入れ子になったリレーショナルデータモデル
- Java、Python、JavaScript、Ruby、Groovyによるユーザ定義関数
- MapReduce、Apache Tez、Apache Sparkのいずれの上でも実行できる

## 影響を受けた言語

直接の言語的祖先はWikipedia上では明記されていなかった(SQLとは対照的な、手続き的なデータフロー言語として設計された)。

## 影響を与えた言語

特になし


## 現在の位置づけ

Pig Latinは、Apache Pigのクエリ言語として現在も活発に開発が続いている(status: active)。最新バージョンは2025年9月リリースの0.18.0で、Apache License 2.0のもとで提供されている。

なお、英語版Wikipediaの該当記事は「Apache Pig」というプラットフォーム全体の記事であり、Pig Latin言語単体を主題とする専用記事ではない点に注意が必要である。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Apache_Pig)
- [Wikipedia(日本語)] (なし)
