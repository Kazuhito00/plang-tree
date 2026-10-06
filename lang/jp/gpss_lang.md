# GPSS

- 登場年: 1961年
- 設計者: Geoffrey Gordon
- パラダイム: event-driven, procedural
- 系統: domain-specific

## 解決したかった課題

1960年前後、IBMのGeoffrey Gordonは、待ち行列システム(窓口の混雑や機械の稼働率など)を分析するために離散事象シミュレーションを行いたいと考えていたが、当時の汎用プログラミング言語でシミュレーションモデルを記述するのは煩雑であった。

Gordonは、アナログ計算機で使われていたブロック図表現からヒントを得て、GENERATE(発生)、SEIZE(占有)、ADVANCE(時間経過)、RELEASE(解放)、TERMINATE(消滅)といったブロック型の命令を組み合わせるだけでシミュレーションモデルを記述できる言語を考案した。これがGPSS(General Purpose Simulation System)であり、1961年9月27日に最初のリリースが行われた。

## 特徴

- GENERATE、SEIZE、ADVANCE、RELEASE、TERMINATEなどのブロック型命令を組み合わせて離散事象シミュレーションを記述する
- 「トランザクション」と呼ばれる仮想的な実体がブロックを通過することでシステムの挙動をモデル化する
- 待ち行列システムに関する統計情報(待ち時間、利用率など)を自動的に収集する
- 1961年9月27日にIBMから最初のリリースが行われ、GPSS II、III、GPSS/360、GPSS Vと版を重ねた
- IBMによる公式サポートは1980年代のGPSS/VAC・GPSS/PCが最後
- 2001年のGPSS World(Pascal的なスクリプト機能を追加)や2009年のJGPSS(Java実装の教育用ツール)など、サードパーティによる実装が現在も使われている

## 影響を受けた言語

特になし(アナログ計算機のブロック図表現からの着想が指摘されているが、データセット内に対応する言語なし)

## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的な言語)として位置づけられる。IBMによる公式サポートは1980年代で終了しているが、GPSS WorldやJGPSSなどのサードパーティ実装によって、現在も教育・研究用途の離散事象シミュレーションで使われ続けている。

## Hello World

Wikipedia記事には「Hello World」に相当する例はないが、理容室の待ち行列をモデル化する次のようなサンプルコードが掲載されている。

```
GENERATE   15,5
SEIZE      Barber
ADVANCE    10,2
RELEASE    Barber
TERMINATE  1
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/GPSS)
