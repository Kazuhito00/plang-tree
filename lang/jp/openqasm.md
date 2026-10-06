# OpenQASM

- 登場年: 2017年
- 設計者: Andrew W. Cross, Lev S. Bishop, John A. Smolin, Jay M. Gambetta
- パラダイム: procedural
- 系統: domain-specific

## 解決したかった課題

量子コンピュータ上で実行する量子回路やアルゴリズムを、特定のハードウェアや実行環境に依存しない形で記述・交換するための共通の中間表現が必要とされていた。IBMの研究者Andrew W. Cross、Lev S. Bishop、John A. Smolin、Jay M. Gambettaは2017年、量子演算の記述に加えて、測定結果に基づく古典的なフィードフォワード制御フローや、タイミング指定・ゲートキャリブレーションの仕組みまで記述できる中間表現言語OpenQASMを発表した。

## 特徴

- 量子演算(ゲート)に加え、測定結果に基づく古典的な条件分岐などのフィードフォワード制御フローを記述できる
- タイミング指定やゲートキャリブレーションの仕組みを備える
- 汎用の古典計算を目的とした言語ではなく、量子回路の記述・交換に特化した中間表現である
- Verilogなどの伝統的なハードウェア記述言語(HDL)と似た性質を持つとWikipedia本文中で比較されている(ただしこれは類似性の指摘であり、直接の系譜としての「影響」を明言したものではない)
- IBMのQiskitフレームワークやIBM Quantum Platformで採用されている
- リファレンス実装はPythonで提供されている

## 影響を受けた言語

特になし(Wikipedia本文ではVerilogとの類似性が指摘されているのみで、明確な系譜としての影響関係は確認できなかった)。

## 影響を与えた言語

特になし


## 現在の位置づけ

現行の量子回路記述言語として、IBMのQiskitフレームワークおよびIBM Quantum Platformで現在も使われ続けている(status: active)。仕様バージョン3.0がGitHub上で管理され、2024年5月にはリファレンス実装のバージョン3.1.0がリリースされた。Apache License 2.0のもとで公開されている。

## Hello World

一次資料上で完全なHello World例は確認できなかった。Wikipedia記事には量子リプルキャリー加算器プログラムの先頭部分として、以下のヘッダーが掲載されている。

```
OPENQASM 3;
include "stdgates.inc";
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/OpenQASM)
