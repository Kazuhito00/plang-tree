# Rust

- 登場年: 2010年
- 設計者: Graydon Hoare
- パラダイム: systems, functional, generic
- 系統: c-family

## 解決したかった課題

C/C++で書かれたソフトウェアは長年、バッファオーバーフローやダングリングポインタ、データ競合といったメモリ安全性のバグに悩まされ続け、これらは深刻なセキュリティ脆弱性の主要な原因となってきた。ガベージコレクションを使えば安全性は高まるが実行時オーバーヘッドが生じてしまう。Graydon Hoareは、Mozillaでの勤務を経て、関数型言語(OCaml、Haskell)の型システムのアイデアを取り入れ、コンパイル時の所有権(ownership)チェックによって実行時コストなしにメモリ安全性を保証する言語としてRustを設計した。

## 特徴

- 所有権・借用・ライフタイムという独自の概念によるコンパイル時メモリ安全性保証
- ガベージコレクションを持たないが、メモリリークやダングリングポインタを防止
- 代数的データ型やパターンマッチングなど関数型言語由来の機能
- トレイトによるジェネリックプログラミングとゼロコスト抽象化
- 「fearless concurrency(恐れず並行処理ができる)」を掲げるスレッド安全性
- Result型やOption型によるエラー処理・null安全性の明示的な扱い
- Cargoという統合されたパッケージマネージャ・ビルドツールを標準提供
- 借用チェッカーがコンパイル時にデータ競合を検出し、実行時のスレッド安全性を保証
- マクロシステムによるコード生成とボイラープレートの削減
- unsafeブロックにより、必要な箇所だけ意図的に安全性チェックを外すことも可能

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [OCaml](ocaml.md)
- [Haskell](haskell.md)
- [Erlang](erlang.md)
- [Scheme](scheme.md)
- [Cyclone](cyclone_lang.md)

## 影響を与えた言語

- [Whiley](whiley.md)
- [Swift](swift.md)
- [Zig](zig.md)
- [Gleam](gleam.md)
- [Ballerina](ballerina.md)
- [Austral](austral_lang.md)
- [V](v_lang.md)
- [Move](move_lang.md)
- [Roc](roc.md)
- [Verona](verona_lang.md)
- [Vale](vale_lang.md)
- [Hylo](hylo_lang.md)
- [WGSL](wgsl.md)
- [Cairo](cairo_lang.md)
- [Carbon](carbon.md)
- [Mojo](mojo.md)
- [MoonBit](moonbit.md)
- [Mog](mog_lang.md)


## 現在の位置づけ

Rustは所有権システムによるメモリ安全性の保証を武器に、OSカーネル、ブラウザエンジン、組込みシステムなど性能とセキュリティが要求される分野で急速に採用が広がっている、現在最も勢いのあるシステムプログラミング言語の一つである。Linuxカーネルへの部分的な採用や各種クラウド基盤での利用拡大からも、その存在感の大きさがうかがえる。

## Hello World

```
fn main() {
    println!("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Rust_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Rust_%28programming_language%29)
