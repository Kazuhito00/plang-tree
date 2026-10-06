# OCaml

- 登場年: 1996年
- 設計者: Xavier Leroyほか(INRIA)
- パラダイム: functional, object-oriented
- 系統: ml-functional

## 解決したかった課題

1980年代のML系言語(Caml、Standard MLなど)は強力な型システムを持つ一方、実行速度は一般にインタプリタ的で、産業利用には不向きとされていた。フランスの国立研究所INRIAでXavier Leroyらは、MLの型安全性とパターンマッチングの表現力を保ちながら、実用的な速度で動くネイティブコードコンパイラを実装したいと考えた。さらに大規模ソフトウェア開発のためにオブジェクト指向のクラス機構も統合し、1996年にObjective Caml(後のOCaml)として公開した。

## 特徴

- Hindley-Milner型推論を継承し、ほぼ型注釈なしに安全な静的型付けを実現する
- ネイティブコードコンパイラにより、動的型付け言語はもとよりCに迫る実行速度を出せる
- クラス・継承・多相性を備えたオブジェクト指向機能を関数型の核に統合している
- 強力なモジュールシステム(ファンクタ)により大規模プログラムを構造化できる
- コンパイラや静的解析ツールの実装言語として広く採用されている

## 影響を受けた言語

- [Standard ML](standard_ml.md)
- [Modula-3](modula_3.md)
- [C](c.md)
- [Pascal](pascal.md)
- [Caml](caml_lang.md)

## 影響を与えた言語

- [Scala](scala.md)
- [Haxe](haxe.md)
- [F#](f_sharp.md)
- [ATS](ats_lang.md)
- [Rust](rust.md)
- [F*](fstar_lang.md)
- [Opa](opa_lang.md)
- [Elm](elm.md)
- [Hack](hack_lang.md)
- [Gleam](gleam.md)
- [Flix](flix_lang.md)
- [Reason](reason_lang.md)
- [Grain](grain_lang.md)
- [Scilla](scilla.md)
- [Move](move_lang.md)
- [ReScript](rescript.md)


## 現在の位置づけ

OCamlは静的解析ツールや金融システム、Rust・ReScriptなど後続言語処理系の実装言語として現役で使われている。学術的な型理論の実装基盤と産業的な実用言語の両方の立場で支持され続けているML系関数型言語である。

## Hello World

```
print_endline "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/OCaml)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/OCaml)
