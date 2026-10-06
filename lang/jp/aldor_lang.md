# Aldor

- 登場年: 1990年
- 設計者: Richard Jenks, Barry Trager, Stephen Watt, James Davenport, Robert Sutor, Scott Morrison
- パラダイム: functional, object-oriented, procedural
- 系統: numeric-scientific

## 解決したかった課題

計算機代数システムAxiomを拡張するには、記号計算に特有の要求、すなわち型そのものを第一級の値として扱えるような高度な型システムを持つ言語が必要だった。既存の汎用プログラミング言語では、こうした要求を自然な形で表現することができなかった。

開発チームは、前身であるA#言語の後継として、型を第一級の値として扱え、依存型もサポートする強い型付けの言語Aldorを設計した。

## 特徴

- 命令型・関数型・オブジェクト指向の要素を組み合わせた多重パラダイム言語
- 型を第一級の値として扱える高度な型システム
- 依存型(dependent typing)のサポート
- 構文はPascalに強く影響を受けており、Pythonのようなインデントによる区切りも選択可能
- Haskellのアイデアも取り入れている
- 機械語へコンパイルされつつ、対話的インタフェースも提供する
- Apache License 2.0のもとでフリー/オープンソースソフトウェアとして配布

## 影響を受けた言語

- [Pascal](pascal.md)
- [Haskell](haskell.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Aldorは現在、計算機代数など特定分野で使われるニッチな言語として位置づけられている(status: niche)。安定版は1.0.3、プレビュー版は1.1.0が提供されている。

計算機代数システムAxiomの拡張言語としての役割が中心であり、汎用言語としての採用は限定的である。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Aldor)
- [Wikipedia(日本語)] (なし)
