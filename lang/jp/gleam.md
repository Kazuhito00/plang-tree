# Gleam

- 登場年: 2016年
- 設計者: Louis Pilfold
- パラダイム: functional, concurrent
- 系統: concurrent-actor

## 解決したかった課題

Erlang VM(BEAM)はアクターモデルによる高い並行性と耐障害性を提供してきたが、Erlang自体もElixirも動的型付けであり、大規模なコードベースでは型に起因する不具合を実行前に検出できないという課題があった。Louis Pilfordは、Rustのような静的型付けとわかりやすいコンパイルエラーメッセージをBEAM上で実現したいと考え、堅牢な型推論を備えた関数型言語Gleamを開発し、BEAMの並行処理基盤の恩恵を受けながら型安全性を確保できるようにした。

## 特徴

- BEAM(Erlang VM)上で動作し、Erlang/Elixirの並行処理基盤やライブラリ資産をそのまま活用できる
- Hindley-Milner系の静的型推論を備え、コンパイル時に多くの誤りを検出する
- Rustを思わせる、わかりやすく親切なコンパイルエラーメッセージを重視して設計されている
- 不変データとパターンマッチングを基本とする関数型プログラミングスタイル
- JavaScriptへのコンパイルにも対応し、フロントエンドを含む複数のターゲットで利用できる

## 影響を受けた言語

- [Erlang](erlang.md)
- [Rust](rust.md)
- [OCaml](ocaml.md)
- [Elm](elm.md)
- [Elixir](elixir.md)
- [Go](go.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Gleamは、BEAMエコシステムに静的型付けをもたらす新興言語として近年注目を集めており、ErlangやElixirの資産を活かしつつ型安全性を求める開発者コミュニティで徐々に採用が広がっている。

## Hello World

```
import gleam/io

pub fn main() {
  io.println("Hello, world!")
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Gleam_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Gleam_%28programming_language%29)
