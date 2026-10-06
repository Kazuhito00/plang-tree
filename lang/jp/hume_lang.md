# Hume

- 登場年: 2000年
- 設計者: Kevin Hammond, Greg Michaelson
- パラダイム: functional, concurrent, dataflow, pattern-matching
- 系統: ml-functional

## 解決したかった課題

組み込みシステムのプログラミングでは、高い抽象度を持つ言語を使いたい一方で、実行時間やメモリ使用量を厳密に見積もれることも求められる。St Andrews大学とHeriot-Watt大学のKevin HammondとGreg Michaelsonは、Haskell系の関数型プログラミングの考え方と有限状態オートマトンの考え方を組み合わせ、コンパイラがヒープ・スタックのコスト境界を保証できる言語Humeを設計した。

## 特徴

- 宣言(declaration)・協調(coordination)・式(expression)の三層構造を持つ言語アーキテクチャ
- オートマトンを用いて通信するプログラムを「ボックス」の集まりとして構造化する
- パターンマッチングとデータフロープログラミングによる協調記述
- 資源管理のための組み込みスケジューラを搭載
- コンパイラによりヒープ・スタックの使用量境界を計算可能
- 非同期メッセージパッシングによる並行性モデル

## 影響を受けた言語

- [Haskell](haskell.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Humeは2008年4月リリースのバージョン0.8を最後に、活発な開発が行われていない研究用言語である。組み込みシステム向けの資源使用量を厳密に予測できる関数型言語という着想は先進的だったが、実用的な広範な採用には至らず、現在はニッチな研究対象として位置づけられている。

## Hello World

一次資料上で具体的なHello Worldのコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Hume_(programming_language))
- [Wikipedia(日本語)] なし
