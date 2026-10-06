# LFE

- 登場年: 2008年
- 設計者: Robert Virding
- パラダイム: functional, concurrent, symbolic, pattern-matching
- 系統: concurrent-actor

## 解決したかった課題

LFE(Lisp Flavoured Erlang)は、Erlang/BEAM仮想マシン上で堅牢な並行処理とフォールトトレラント性を保ちながら、Lisp流の強力なマクロシステムとホモイコニックな構文でメタプログラミングを行いたいという動機から開発された。Erlangは並行処理と障害耐性に優れていたが、その構文はLisp系言語のようなコードとデータを同一視する柔軟性を持たなかった。Erlang自身の共同開発者でもあるRobert Virdingは、Common LispやSchemeといったLispの伝統をErlang仮想マシン上に持ち込むことで、両者の長所を組み合わせようとした。

## 特徴

- Lisp譲りのS式構文を採用しており、コードとデータが同じ構造で表現されるホモイコニック性を持つ
- Erlangの軽量プロセスモデルとメッセージパッシングによる並行処理をそのまま利用できる
- 強力なマクロシステムを備え、Lispの伝統的なメタプログラミング機能をErlang環境で活用できる
- パターンマッチングをLisp構文の中で行い、Erlang本来の堅牢なエラーハンドリングスタイルを継承している
- 既存のErlang/OTPライブラリやモジュールと相互運用でき、Erlangエコシステムをそのまま活用できる

## 影響を受けた言語

- [Erlang](erlang.md)
- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Maclisp](maclisp.md)
- [Clojure](clojure.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられる。Erlangエコシステムに関心を持つ一部の開発者コミュニティで使われ続けている。

## Hello World

LFEはS式構文を用いてErlangのモジュールを定義する。

```lisp
(defmodule hello
  (export (main 0)))

(defun main ()
  (io:format "Hello, World!~n"))
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/LFE_%28programming_language%29)
