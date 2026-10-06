# ClojureScript

- 登場年: 2011年
- 設計者: Rich Hickey, David Nolen
- パラダイム: functional, concurrent, scripting
- 系統: lisp-scheme

## 解決したかった課題

ClojureScriptは、JVM上で動くClojureが持つ永続データ構造や関数型・並行処理の設計思想を、ブラウザなどJavaScriptが動作する環境でもそのまま活用したいという動機から生まれた。当時のフロントエンド開発では、サーバー側とクライアント側で全く異なる言語・パラダイムを使わざるを得ず、コードの共有や設計思想の一貫性を保つことが難しかった。Rich HickeyとDavid Nolenは、ClojureのコードをJavaScriptにコンパイルする処理系を作ることで、サーバーとクライアントの両方で同じ言語・同じ考え方を使い、フロントエンドとバックエンドの実装の分断を解消しようとした。

## 特徴

- Clojureの構文とセマンティクスをほぼそのまま踏襲し、永続データ構造やイミュータビリティを言語の基盤とする
- Google Closure Compilerを介してJavaScriptにコンパイルされ、高度な最適化やデッドコード除去の恩恵を受けられる
- ClojureとClojureScriptの間でコードを共有できる仕組み(reader conditionalsなど)があり、同一コードベースからサーバー・クライアント双方を構築できる
- ClojureのマクロシステムをコンパイルタイムのClojure環境で実行し、JavaScriptにはない強力なメタプログラミングが可能
- Reactをラップしたreagentやre-frameなど、関数型UIフレームワークのエコシステムを持つ

## 影響を受けた言語

- [Clojure](clojure.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役で広く使われている。Clojureコミュニティの中でフロントエンド開発の選択肢として定着しており、reagentやre-frameといったフレームワークとともに実用的なWebアプリケーション開発に使われ続けている。

## Hello World

Clojure譲りの`println`関数を使い、ブラウザのコンソールなどに文字列を出力する。

```clojure
(println "Hello, World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ClojureScript)
