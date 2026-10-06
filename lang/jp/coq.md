# Coq

- 登場年: 1989年
- 設計者: Thierry Coquandほか(INRIA)
- パラダイム: functional, logic
- 系統: ml-functional

## 解決したかった課題

数学の定理やソフトウェアの正しさは、人間によるレビューだけでは見落としや誤りを完全には排除できない。フランスの国立研究所INRIAのThierry Coquandらは、依存型理論(Calculus of Constructions)に基づき、数学的命題とその証明をコンピュータが機械的に検証できる形式的な言語・処理系としてCoqを開発した。これにより、複雑な数学的証明やソフトウェアの仕様を、曖昧さなく検証可能な形で記述することが可能になった。

## 特徴

- 依存型理論(Calculus of Inductive Constructions)に基づく厳密な型システムを持つ
- 証明を対話的に構築するための「タクティク」という証明支援コマンド群を備える
- 検証済みの証明項をCoqカーネルが独立に再検証する、信頼性の高いアーキテクチャを持つ
- OCamlで実装されており、ML系言語のエコシステムと深く結びついている
- 検証済みのコードをOCamlやHaskellなど実行可能な言語へ抽出する機能を持つ

## 影響を受けた言語

- [Standard ML](standard_ml.md)


## 影響を与えた言語

- [Idris](idris.md)
- [Agda](agda.md)
- [F*](fstar_lang.md)
- [Lean](lean.md)
- [Dhall](dhall.md)
- [Scilla](scilla.md)


## 現在の位置づけ

Coqは数学の定理証明やソフトウェアの形式的検証において現役で使われ続けており、CompCertのような検証済みコンパイラの開発などで実績を持つ、定理証明支援系の代表格である。

## Hello World

```
Require Import Coq.Strings.String.
Open Scope string_scope.

Compute "Hello, World!".
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Coq)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Rocq)
