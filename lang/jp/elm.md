# Elm

- 登場年: 2012年
- 設計者: Evan Czaplicki
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

2010年代初頭、Webフロントエンド開発はJavaScriptの動的型付けに起因する実行時エラー(nullやundefinedの参照、型の不一致など)に悩まされていた。ハーバード大学の学生だったEvan Czaplickiは、卒業研究として、静的型付きの純粋関数型言語であればこうした実行時エラーの多くをコンパイル時に排除できるはずだと考え、Webブラウザ向けにコンパイルされる新言語Elmを設計した。

## 特徴

- 「実行時例外が発生しない」ことを言語設計の中心目標として掲げている
- 親切で分かりやすいコンパイルエラーメッセージを重視した設計になっている
- The Elm Architecture(TEA)と呼ばれる単方向データフローのUI設計パターンを標準として提供する
- 純粋関数型であり、JavaScriptとの相互運用は明示的なポート機構を介してのみ行う
- 破壊的変更を避けるための厳格なセマンティックバージョニングをエコシステム全体で強制する

## 影響を受けた言語

- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)
- [OCaml](ocaml.md)
- [F#](f_sharp.md)


## 影響を与えた言語

- [Gleam](gleam.md)
- [Roc](roc.md)
- [Gren](gren_lang.md)


## 現在の位置づけ

Elmは一部のWebフロントエンド開発者コミュニティで根強い支持を持つニッチな言語であり、TypeScriptなど他の選択肢が主流となる中でも「実行時エラーのないWeb開発」という理念の実証例として位置づけられている。

## Hello World

```
import Html exposing (text)

main =
    text "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Elm_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Elm_%28programming_language%29)
