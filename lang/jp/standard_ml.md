# Standard ML

- 登場年: 1983年
- 設計者: Robin Milnerほか
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

1970年代、エディンバラ大学のRobin Milnerらは定理証明支援系LCF(Logic for Computable Functions)のために、証明戦略を記述するメタ言語MLを開発していた。MLは当初LCFに従属する道具に過ぎなかったが、その型推論アルゴリズム(Hindley-Milner型推論)や代数的データ型、パターンマッチングは汎用プログラミング言語としても極めて強力であることが分かってきた。そこで1980年代前半、MLをLCFから切り離し、型注釈なしに安全な静的型付けが得られる独立した汎用関数型言語として標準化する動きが起こり、Standard MLとして仕様が策定された。

## 特徴

- Hindley-Milner型推論により、型注釈をほとんど書かなくても静的に型安全性を保証する
- 代数的データ型とパターンマッチングにより、木構造やコンパイラの中間表現などを簡潔に表現できる
- モジュールシステム(ストラクチャ・シグネチャ・ファンクタ)によって大規模プログラムを構造化できる
- 参照セルや例外といった副作用も持つ「不純」な関数型言語であり、純粋関数型言語とは一線を画す
- 形式的な操作的意味論が仕様書自体に含まれており、言語仕様そのものが数学的に厳密

## 影響を受けた言語

- [Pascal](pascal.md)
- [Hope](hope.md)
- [ISWIM](iswim.md)
- [ML](ml_lang.md)

## 影響を与えた言語

- [Miranda](miranda.md)
- [Coq](coq.md)
- [Haskell](haskell.md)
- [EuLisp](eulisp.md)
- [Python](python.md)
- [Pict](pict_lang.md)
- [OCaml](ocaml.md)
- [Alice ML](alice_ml.md)
- [Scala](scala.md)
- [Orc](orc_lang.md)
- [ATS](ats_lang.md)
- [ParaSail](parasail_lang.md)
- [F*](fstar_lang.md)
- [Elm](elm.md)
- [Koka](koka.md)
- [Lean](lean.md)
- [Futhark](futhark.md)
- [Unison](unison.md)
- [Michelson](michelson.md)
- [Bosque](bosque.md)


## 現在の位置づけ

Standard ML自体は現在ではニッチな存在だが、その型推論・モジュールシステム・代数的データ型は後続のML系言語や多くの現代言語の型システムに受け継がれている。プログラミング言語理論の教育・研究において今も参照される基礎的言語である。

## Hello World

```
print "Hello, World!\n";
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Standard_ML)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Standard_ML)
