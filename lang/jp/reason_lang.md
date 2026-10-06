# Reason

- 登場年: 2016年
- 設計者: Jordan Walke(Facebook)
- パラダイム: functional, object-oriented
- 系統: ml-functional

## 解決したかった課題

Facebookでは2010年代半ば、社内の一部プロジェクトでOCamlが採用されていた。OCamlは強力な静的型システムと高い実行性能を持つ一方、パターンマッチや関数適用の書き方などの構文がJavaScriptやC系言語に慣れたエンジニアには馴染みにくく、社内での採用拡大の障壁になっていた。

Jordan Walkeは、OCamlコンパイラが持つ型システムと性能をそのまま維持しながら、波括弧・セミコロンを用いたJavaScript/C系言語に近い見た目の構文で書けるようにする「代替構文レイヤー」としてReason(ReasonML)を設計し、2016年5月16日に公開した。Reasonの意味論はOCamlと完全に同一であり、あくまで表層構文だけを置き換えるツールチェインという位置づけである。

同じ2016年、Bloomberg社が発表したOCaml→JavaScriptコンパイラBuckleScriptと統合されたことで、Reason構文で書いたコードをネイティブバイナリだけでなくJavaScriptにもコンパイルできるようになり、OCamlの型安全性を保ったままJavaScriptエコシステム(npmやReactなど)に入り込めることを目指した。

## 特徴

- OCamlに対する「代替構文」であり、意味論・型システムはOCamlと完全に共通
- 波括弧・セミコロン・中置演算子などJavaScript/C系言語に近い外見の構文
- 関数型・オブジェクト指向・命令型を併せ持つマルチパラダイム言語
- 当初BuckleScriptと統合しJavaScriptへコンパイル可能だったが、現在はMelangeコンパイラを介してJavaScriptコンパイルを継続
- OCamlネイティブコンパイラによるネイティブコード生成も可能
- JavaScript開発者向けに調整されたわかりやすいエラーメッセージを提供

## 影響を受けた言語

- [OCaml](ocaml.md)
- [JavaScript](javascript.md)

## 影響を与えた言語

- [ReScript](rescript.md)


## 現在の位置づけ

2020年にBuckleScriptチームがReasonの構文から分岐し、JavaScript開発に特化する形でReScriptへ改名・独立した。Wikipedia英語版は「ReScriptはReasonとは別の言語になった」と記しており、以後ReScriptは独自の構文で発展している。Reason自身はAntónio Monteiroが作成したMelangeコンパイラ(2023年に安定版リリース)を介してJavaScriptコンパイルを継続し、コミュニティによるReasonReact等の保守も続いている。

現在はニッチな言語(status: niche)として一部のOCaml/関数型コミュニティで使われており、OCamlの型システムをJavaScript開発者にも扱いやすい構文で提供する選択肢という位置づけを保っている。

## Hello World

一次資料(英語版Wikipedia)にHello Worldの例は見当たらなかったため、同記事に掲載されている実例(列挙型とパターンマッチを使った関数)を示す。

```
type schoolPerson = Teacher | Director | Student(string);

let greeting = person =>
  switch (person) {
  | Teacher => "Hey Professor!"
  | Director => "Hello Director."
  | Student("Richard") => "Still here Ricky?"
  | Student(anyOtherName) => "Hey, " ++ anyOtherName ++ "."
  };
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Reason_%28programming_language%29)
