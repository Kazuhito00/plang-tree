# Clojure

- 登場年: 2007年
- 設計者: Rich Hickey
- パラダイム: 関数型、並行処理
- 系統: Lisp/Scheme系

## 解決したかった課題

2000年代、マルチコアCPUの普及によりマルチスレッドプログラミングの需要が高まる一方、多くの言語では可変状態の共有によるデータ競合やロックの複雑さがバグの温床となっていた。Rich Hickeyは、既存のJavaエコシステム(ライブラリ、JVM)を活用しながら、不変(immutable)データ構造を基本とすることで並行処理を安全に扱える、モダンなLisp方言を作ろうと考えた。伝統的なLispの表現力と、JVMという実用的な実行基盤を組み合わせる試みであり、既存の巨大なJavaライブラリ資産をそのまま活かせる点も重視された。

Hickeyは以前にもLisp方言のJVM移植を試みていたが、既存の言語をそのまま移植するのではなく、不変性と関数型スタイルを前提とした新しい言語として一から設計し直すことで、根本的な問題解決を図った。

## 特徴

- すべてのデータ構造がデフォルトで不変(persistent data structures)
- Java仮想マシン(JVM)上で動作し、Javaライブラリと相互運用可能
- Software Transactional Memory(STM)やatomなど、安全な状態管理の仕組みを複数提供
- S式ベースの構文とマクロによるメタプログラミングを継承
- ClojureScriptなど他ランタイムへの展開も存在
- シーケンス抽象化により多様なデータ構造を統一的なインターフェースで扱える
- core.asyncによる非同期・チャネルベースの並行処理サポート

## 影響を受けた言語

- [Lisp](lisp.md)
- [Java](java.md)
- [Common Lisp](common_lisp.md)
- [C#](c_sharp.md)
- [Scheme](scheme.md)
- [Racket](racket.md)


## 影響を与えた言語

- [LFE](lfe.md)
- [ClojureScript](clojurescript.md)
- [Elixir](elixir.md)
- [Hy](hy_lang.md)
- [Fennel](fennel.md)


## 現在の位置づけ

Clojureは「active」な言語として、特に並行処理や不変データを重視するバックエンド開発の分野で一定の支持を得ている。不変性を核とするモダンなLispとして、JVMエコシステムの中で独自の地位を築いており、ClojureScriptによるフロントエンド開発にも応用が広がっている。

## Hello World

```
(println "Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Clojure)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Clojure)
