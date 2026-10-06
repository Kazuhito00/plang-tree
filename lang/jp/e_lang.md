# E

- 登場年: 1997年
- 設計者: Mark S. Miller, Dan Bornstein, Douglas Crockford, Chip Morningstar
- パラダイム: object-oriented, concurrent, event-driven
- 系統: concurrent-actor

## 解決したかった課題

1990年代、Electric Communities社は複数の利用者が同じ仮想空間で相互作用するオンラインサービスのような分散システムを、互いに信頼し合っていないコード同士が混在してもセキュリティを保てる形で構築したいと考えていた。当時の分散オブジェクト技術は、あるオブジェクトへの参照を持つこと自体が唯一の権限になるという「オブジェクト能力(object-capability)」の原則を徹底しておらず、セキュリティ上の欠陥を監査しづらいという課題があった。

Mark S. Miller、Dan Bornstein、Douglas Crockford、Chip Morningstarらは、自分たちが開発していた並行言語JouleやJavaへのセキュリティ拡張であるOriginal-Eでの経験を踏まえ、オブジェクト能力モデルを徹底しつつ、イベントループとプロミス(非同期の「eventual send」)による通信でデッドロックが原理的に起こらないメッセージングモデルを持つEを設計した。

## 特徴

- すべての値がオブジェクトであり、オブジェクトへのメッセージ送信によって計算が進む
- 同期的な即時呼び出し(immediate call)と、プロミスを介した非同期の遅延送信(eventual send)を区別する
- 「vat」と呼ばれる単一スレッド・単一イベントキューの実行単位により、デッドロックが原理的に発生しない設計
- オブジェクト能力モデルに基づくセキュリティ設計で、参照を持つことそのものが権限になる
- セキュリティ上の欠陥を人間が監査しやすいよう、構文自体がシンプルに設計されている

## 影響を受けた言語

- [Java](java.md)


## 影響を与えた言語

- [AmbientTalk](ambienttalk.md)
- [Pony](pony.md)


## 現在の位置づけ

Eは現在、実運用で広く使われる言語というより、オブジェクト能力に基づくセキュリティモデルの研究・参照実装としての位置づけが強い。erights.orgを中心にE-on-JavaやE-on-CLといった実装が小規模に保守されている。

その設計思想は後続言語に受け継がれており、特にアクターモデルと能力ベースの安全性を組み合わせたPonyは、Eのプログラミングモデルからの着想を明示的に示している。

## Hello World

```
println("Hello, world!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/E_%28programming_language%29)
