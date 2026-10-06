# ReScript

- 登場年: 2020年
- 設計者: Bloomberg/コミュニティ(Hongbo Zhangほか)
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

BuckleScript(OCamlをJavaScriptにコンパイルするプロジェクト)は、OCamlの堅牢な型システムをJavaScript開発に持ち込むことに成功していたが、OCaml由来の構文やツールチェーンはJavaScript開発者にとって馴染みが薄く、既存のJavaScriptエコシステム(npmや既存のコードベース)との親和性にも課題があった。BloombergやコミュニティのHongbo Zhangらは、OCamlの型システムと出力コードの効率性を保ちながら、JavaScript開発者が違和感なく読み書きできる構文を新たに設計し、ReScriptとして独立させた。

## 特徴

- OCamlの型推論・代数的データ型・パターンマッチングを、JavaScript風の構文で提供する
- 出力されるJavaScriptコードは人間が読みやすく、既存のJS資産と直接組み合わせられる
- OCaml/BuckleScriptのコンパイル基盤を継承しており、コンパイル速度が非常に高速
- 型注釈なしにJavaScriptの値やAPIとやり取りできるバインディング機構を持つ
- Reactとの統合(旧ReasonReact系譜)を重視したエコシステムを持つ

## 影響を受けた言語

- [OCaml](ocaml.md)
- [JavaScript](javascript.md)
- [Reason](reason_lang.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

ReScriptは型安全性を重視する一部のJavaScript/Web開発チーム、特にBloomberg社内やReact関連コミュニティで採用されているニッチな言語であり、OCamlの型システムを実務のフロントエンド開発に持ち込む選択肢として位置づけられている。

## Hello World

```
Js.log("Hello, World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ReScript)
