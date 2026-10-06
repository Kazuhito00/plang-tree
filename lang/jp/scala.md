# Scala

- 登場年: 2003年
- 設計者: Martin Odersky
- パラダイム: object-oriented, functional
- 系統: jvm-dotnet

## 解決したかった課題

Martin Oderskyはもともとjavac(Java公式コンパイラ)の開発にも関わった研究者で、オブジェクト指向と関数型プログラミングという、当時ほとんど別々の陣営として扱われていた二つのパラダイムに、根本的な矛盾はないと考えていた。既存のJava言語はオブジェクト指向に偏り、Haskellのような純粋関数型言語は実務での採用が進んでいなかったため、両者をJVM上で一つの統一された言語として融合し、学術的な厳密さと産業利用の実用性を両立させる試みとしてScalaが設計された。

## 特徴

- オブジェクト指向と関数型プログラミングを対等に統合したマルチパラダイム設計
- 高度な型推論を備えた静的型システムとcase class・パターンマッチング
- JVM上で動作しJavaライブラリと相互運用可能
- 不変データ構造と副作用を抑えた設計を推奨する関数型的な思想
- ビッグデータ処理基盤Apache Sparkの実装言語として採用され普及が進んだ
- 演算子オーバーロードや暗黙変換(implicit)による柔軟なDSL(ドメイン特化言語)構築能力

## 影響を受けた言語

- [Java](java.md)
- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)
- [OCaml](ocaml.md)
- [Scheme](scheme.md)
- [Pizza](pizza.md)


## 影響を与えた言語

- [Lasso](lasso_lang.md)
- [F#](f_sharp.md)
- [Fantom](fantom_lang.md)
- [Fortress](fortress.md)
- [Kojo](kojo_lang.md)
- [Red](red.md)
- [Kotlin](kotlin.md)
- [Ceylon](ceylon.md)
- [Chisel](chisel.md)
- [Hack](hack_lang.md)
- [Flix](flix_lang.md)


## 現在の位置づけ

Scalaは現在も活発に開発が続く現役言語であり、特にビッグデータ処理基盤Apache Sparkの実装言語としての地位から、データエンジニアリング分野で根強く使われている。関数型プログラミングをJVMの世界に本格的に持ち込んだ先駆けとして、後続のJVM言語設計にも思想的な影響を与え続けている。近年は言語仕様の簡素化を進めたScala 3への移行が進行中である。

## Hello World

```scala
object Main extends App {
  println("Hello, World!")
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Scala)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Scala_%28programming_language%29)
