# Erlang

- 登場年: 1986年
- 設計者: Joe Armstrongほか(Ericsson)
- パラダイム: functional, concurrent
- 系統: concurrent-actor

## 解決したかった課題

1980年代のEricssonは電話交換機のソフトウェアを開発しており、これらは数百万人の通話を同時に処理しながら、1つのプロセスがクラッシュしても他に影響を与えず、システム全体を止めずに何年も稼働し続けなければならないという極めて厳しい要求を抱えていた。当時の手続き型言語では、大量の並行処理と障害からの自己修復を両立する設計が難しく、Joe Armstrongらは論理型言語Prologを土台に、軽量プロセス同士がメッセージだけをやり取りする「アクターモデル」を採用した新しい言語を開発した。その結果、「let it crash(失敗したら諦めて再起動する)」という哲学に基づく高可用性システムの構築が可能になった。

## 特徴

- 軽量プロセス(アクター)がメモリを共有せず、メッセージパッシングのみで通信する並行モデル
- スーパーバイザーツリーによる自己修復機構(OTP)を備え、障害発生時に該当部分だけを自動再起動できる
- 変数は一度束縛すると変更できない不変データが基本
- ホットコードスワッピングにより、システムを停止せずに稼働中のコードを更新できる
- BEAMと呼ばれる独自の仮想機械上で動作し、通信業界での稼働実績から高可用性の代名詞となった

## 影響を受けた言語

- [Prolog](prolog.md)
- [Lisp](lisp.md)
- [Smalltalk](smalltalk.md)
- [PLEX](plex_lang.md)


## 影響を与えた言語

- [Oz](oz.md)
- [F#](f_sharp.md)
- [Fantom](fantom_lang.md)
- [LFE](lfe.md)
- [Rust](rust.md)
- [Dart](dart.md)
- [Opa](opa_lang.md)
- [Elixir](elixir.md)
- [Inko](inko_lang.md)
- [Gleam](gleam.md)


## 現在の位置づけ

Erlangは今も通信インフラやメッセージングシステム(WhatsAppなど)の裏側で稼働し続けており、耐障害性と高並行性を実証した言語として高く評価されている。直接の採用例はニッチだが、その設計思想はElixirをはじめとするBEAM系言語群に受け継がれ、現在も活発に発展している。

## Hello World

```
-module(hello).
-export([main/0]).

main() ->
    io:format("Hello, World!~n").
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Erlang)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Erlang_%28programming_language%29)
