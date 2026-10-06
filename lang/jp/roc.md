# Roc

- 登場年: 2019年
- 設計者: Richard Feldman
- パラダイム: functional, pattern-matching
- 系統: ml-functional

## 解決したかった課題

Roc(旧称ではないが「Rock solid」に由来する)は、Elmが持つ親しみやすい構文や親切なコンパイラエラー、堅牢な型推論の良さを、ブラウザ用途に限定されない汎用プログラミングの領域に広げようとして作られた言語である。ElmはWebフロントエンド向けに特化して非常に高い実用性を発揮していたが、その設計思想を活かした汎用言語は存在しなかった。Richard Feldmanは、Elmライクな読みやすさと安全性を保ちながら、サーバーサイドやコマンドラインツール、スクリプティングなど広い用途で使える高速な言語を作ることを目指した。関数型言語でありながら、ネイティブコードやWebAssemblyへ効率よくコンパイルできる実行性能も重視されている。

## 特徴

- Elm譲りの読みやすい構文と、コンパイラが問題箇所を具体的に指摘してくれる親切なエラーメッセージを備える
- 純粋関数型でありながら、性能を重視したコンパイル戦略(参照カウントによるメモリ管理など)を採用している
- タグ付き共用体とパターンマッチングを多用したデータモデリングができる
- プラットフォーム(platform)とアプリケーション(application)を分離する独自のモジュールシステムを持ち、プラットフォーム側でホスト言語(RustやZigなど)との連携を担わせられる
- LLVMベースのバックエンドを利用してネイティブコードやWebAssemblyへコンパイルできる

## 影響を受けた言語

- [Elm](elm.md)
- [Haskell](haskell.md)
- [Rust](rust.md)
- [F#](f_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語という位置づけである。まだ1.0未満の開発段階にあるが、Elmの設計思想を汎用領域へ広げる試みとして関数型言語コミュニティから注目を集めている。

## Hello World

Rocのプログラムは`app`宣言とプラットフォームの指定から始まり、`main`が標準出力への書き込みを行う。

```roc
app "hello"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/download/0.7.0/bkGby8jb0tmZYsy2hg1E_B2QrCgcSTFdUpJcQwEYQoE.tar.br" }
    imports [pf.Stdout]
    provides [main] to pf

main =
    Stdout.line "Hello, World!"
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
