# Idris

- 登場年: 2009年
- 設計者: Edwin Brady
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

依存型(値に依存する型)は、AgdaやCoqのような定理証明支援系では研究されていたが、これらは主に数学的証明の記述を目的としており、実用的な汎用プログラミング言語としての使い勝手は重視されていなかった。Edwin Bradyは、依存型がもたらす「コンパイル時に配列の長さやプロトコルの状態などをより精密に検証できる」という利点を、証明支援系ではなく実用的な汎用プログラミング言語のユーザーにも届けたいと考え、Idrisを設計した。

## 特徴

- 依存型により、関数の型に「長さnのベクトル」のような値に依存する制約を表現できる
- Haskell風の構文と型クラスを持ち、Haskellプログラマにとって親しみやすい
- 全域性検査(totality checking)により、関数が必ず停止し全てのケースを処理することを検証できる
- 副作用を型で追跡するeffectsシステムやバックエンド切り替えなど実用面の機能も備える
- 証明支援系ではなく汎用プログラミング言語として依存型を提供することを明確に志向している

## 影響を受けた言語

- [Haskell](haskell.md)
- [Agda](agda.md)
- [Coq](coq.md)
- [F#](f_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Idrisは依存型プログラミングの実用化を探る研究・実験的なニッチ言語として、少数の実践者に使われ続けている。RustやSwiftなど主流言語が部分的に依存型的な機能を取り入れる動きの中で、その先行事例として参照されることがある。

## Hello World

```
module Main

main : IO ()
main = putStrLn "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Idris_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Idris_%28programming_language%29)
