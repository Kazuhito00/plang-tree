# Lustre

- 登場年: 1985年
- 設計者: Paul Caspi, Nicolas Halbwachs, Daniel Pilaud, John Plaice
- パラダイム: dataflow, declarative
- 系統: hardware-description

## 解決したかった課題

1980年代前半、フランス・グルノーブルのVERIMAG研究所(IMAG研究所およびCNRSと連携)では、航空機や発電所の制御ソフトウェアのような反応システムを、手続き的な言語よりも数学的に扱いやすい形で記述する方法が求められていた。Paul CaspiとNicolas Halbwachsを中心とする研究チームは、制御工学における時間関数の考え方を参考に、1984年ごろからデータフローに基づく宣言的な同期言語Lustreの設計を開始した。1985年には初期の設計がRealTime Symposiumで発表され、1987年にはPaul Caspi、Daniel Pilaud、Nicolas Halbwachs、John Plaiceの4名によるPOPLの論文で正式に発表された。

目的は、反応システムの動作を時間的に同期したデータフロー方程式の集まりとして記述し、実行順序に依存しない宣言的な形で厳密に検証・実装できるようにすることだった。

## 特徴

- プログラムは入力と出力を持つ「ノード」として定義され、関数的な構文を持つ
- 真偽値、整数、実数、タプルなどの型をサポート
- `pre`演算子で1サイクル前の値を参照し、`->`演算子で初期値を設定する
- `when`/`current`によるサンプリングと補間(信号の間引きと再構成)が可能
- 実行順序に依存しない、方程式の集合としての宣言的な記述
- 1993年にはEsterel Technologies社の商用製品SCADEの核となる言語として採用され、航空機・ヘリコプター・原子力発電所などの安全性が重視される制御ソフトウェアで実用化されている

## 影響を受けた言語

特になし

(注: EsterelやSIGNALと同時期に開発された「姉妹言語」であるが、一方が他方に直接影響を与えたと明記する一次資料は確認できなかった)


## 影響を与えた言語

特になし


## 現在の位置づけ

Lustreは現在もSCADEという商用ツールの核として、航空宇宙・鉄道・エネルギーなど安全性が重視される制御システムの開発現場でnicheに使われ続けている、同期データフロー言語の代表格である。同時期に開発されたEsterelやSIGNALとともに「同期言語」という言語族を形成しており、形式検証と実装コード生成を両立させる設計思想は現在の高信頼性組込みソフトウェア開発に引き継がれている。

## Hello World

Lustreには文字列を出力する概念がなく、「Hello World」に相当する慣用句は存在しない。文献で最も広く引用される最小限の例として、リセット可能なカウンタノードを示す。

```
node counter(reset : bool) returns (c : int);
let
  c = 0 -> if reset then 0 else (pre c) + 1;
tel
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Lustre_(プログラミング言語))
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lustre_(programming_language))
