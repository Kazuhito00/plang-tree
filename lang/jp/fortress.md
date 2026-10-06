# Fortress

- 登場年: 2006年
- 設計者: Guy L. Steele Jr., Sun Microsystems
- パラダイム: procedural, functional, concurrent, generic
- 系統: numeric-scientific

## 解決したかった課題

Fortressは、DARPAの高生産性コンピューティングシステム(HPCS)計画の一環として、Fortranに代わる次世代の科学技術計算言語を目指して開発された。数式に近い記法でプログラムを書けるようにし、数学者や科学者が慣れ親しんだ表記法をそのままコードに反映させることを狙った。また、並列計算がハードウェアの標準になりつつある時代を見据え、明示的な並列化指示なしに暗黙のうちに並列実行されることを言語の基本方針とした。さらに、型安全性やジェネリクスといった現代的な言語機能も取り込み、高性能と安全性を両立させようとした点が特徴的である。

## 特徴

- Unicode数式記号やギリシャ文字を用いた、数学の教科書に近い記法でプログラムを記述できる
- forループなどの反復構文がデフォルトで並列実行されるよう設計されており、逐次実行の方が例外的な扱いになる
- 静的型付けとジェネリクス、トレイトによる多重ディスパッチなど、オブジェクト指向・関数型双方の要素を統合している
- 単位付き数値(物理単位)をサポートし、科学技術計算特有の誤りを型システムで検出できるようにしている
- コンポーネント間の依存関係やテストをコード内に統合する仕組みを備えていた

## 影響を受けた言語

- [Fortran](fortran.md)
- [Scala](scala.md)
- [Haskell](haskell.md)


## 影響を与えた言語

- [Julia](julia.md)


## 現在の位置づけ

historical(歴史的役割を終えた)言語として位置づけられる。2012年にSun(当時はOracle)によって開発が中止され、実装は完成しないまま終わった。ただし暗黙の並列性や数式記法といったアイデアは、後の科学技術計算言語の設計における議論の参照点となっている。

## Hello World

Fortressでは、プログラムは`component`として定義し、`run`関数がエントリポイントとなる。

```
component HelloWorld
export Executable
run(args: String...): () = do
  println "Hello, World!"
end
end
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Fortress)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Fortress_%28programming_language%29)
