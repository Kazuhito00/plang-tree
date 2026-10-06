# Elixir

- 登場年: 2012年
- 設計者: José Valim
- パラダイム: functional, concurrent
- 系統: concurrent-actor

## 解決したかった課題

Ruby on Railsのコアチームで働いていたJosé Valimは、Rubyの並行処理性能の限界(グローバルインタプリタロックなどによるマルチコア活用の難しさ)に不満を持っていた。一方でErlang VM(BEAM)は電話交換機で実証された高い並行性と耐障害性を持っていたが、その構文はRubyのような動的言語のプログラマには馴染みにくく、マクロによるメタプログラミングやモダンな開発ツールも不足していた。そこでValimは、BEAMの堅牢な並行処理基盤の上に、Rubyライクな読みやすい構文と強力なマクロシステムを備えた新しい言語としてElixirを設計した。

## 特徴

- Erlang VM(BEAM)上で動作し、Erlangの軽量プロセスとOTPのライブラリ資産をそのまま利用できる
- Rubyに影響を受けたパイプ演算子(`|>`)などの読みやすい構文を持つ
- 強力なマクロシステムにより、DSL(ドメイン固有言語)を容易に構築できる
- 不変データとパターンマッチングを基本とする関数型プログラミングスタイル
- Mix・Hexなど整備されたビルドツールとパッケージ管理により開発体験が向上している
- Webフレームワーク Phoenix により高並行なリアルタイムWebアプリケーション開発に広く使われる

## 影響を受けた言語

- [Erlang](erlang.md)
- [Ruby](ruby.md)
- [Clojure](clojure.md)


## 影響を与えた言語

- [Gleam](gleam.md)


## 現在の位置づけ

Elixirは、耐障害性と高並行性を求められるWebサービスやリアルタイム通信システムで採用が広がっており、Erlangの信頼性をより書きやすい形で現代に伝える言語として活発に開発が続けられている。

## Hello World

```
IO.puts("Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Elixir_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Elixir_%28programming_language%29)
