# Fantom

- 登場年: 2005年
- 設計者: Brian Frank, Andy Frank
- パラダイム: object-oriented, functional, concurrent
- 系統: jvm-dotnet

## 解決したかった課題

Brian FrankとAndy Frankは、JVM、.NET共通言語ランタイム(CLR)、JavaScriptといった異なる実行環境上で、同じコードと同じ標準ライブラリAPIをそのまま動かせる言語を求めていた。プラットフォームごとにAPIが分断されることを避け、一貫したポータブルな開発環境を提供することが目的だった。2005年に「Fan」という名称で発表され、2009年に検索エンジン最適化(SEO)上の理由から「Fantom」へ改名された。

## 特徴

- JVM、.NET共通言語ランタイム(CLR)、JavaScript処理系の3つの実行環境に対応する
- クロージャによる関数型プログラミングと、アクターモデルによる並行処理を標準でサポート
- 静的型付けと動的型付けを1つの言語内で併用できる
- 整数型を64bitに統一するなど、プラットフォーム間の差異を減らす設計を採用
- リフレクションやメタプログラミングの機能を備える
- 「pod」と呼ばれるバージョン管理されたモジュール単位でコード・ドキュメント・リソースを配布する

## 影響を受けた言語

- [C#](c_sharp.md)
- [Java](java.md)
- [Scala](scala.md)
- [Ruby](ruby.md)
- [Erlang](erlang.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Fantomは商業的な主流にはなっていないが、Academic Free License 3.0のオープンソースソフトウェアとして現在も開発が継続されている「niche」な言語である。JVM・.NET・JavaScriptという複数ランタイムをまたぐ設計思想は独自性が高く、クロスプラットフォーム開発における一つの実験的な選択肢として位置づけられている。

## Hello World

```
class Hello {
  static Void main() { echo("Hello, World!") }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Fantom_(プログラミング言語))
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Fantom_(programming_language))
