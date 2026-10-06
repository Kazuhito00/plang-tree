# Kotlin

- 登場年: 2011年
- 設計者: JetBrains
- パラダイム: object-oriented, functional
- 系統: jvm-dotnet

## 解決したかった課題

IDE開発企業JetBrainsは自社製品(IntelliJ IDEA)を長年Javaで開発してきたが、Javaの冗長な文法や、実行時にしばしば発生するnull参照例外(NullPointerException)に日常的に悩まされていた。既存のJVM言語であるScalaは表現力が高い一方でコンパイルが遅く学習コストも高かったため、既存のJavaコードベースと完全に相互運用できながら、より簡潔で安全な文法を持つ実務的な言語が必要とされた。2017年にGoogleがAndroid公式開発言語として採用したことで急速に普及した。

## 特徴

- Javaバイトコードとの完全な相互運用性を持ち、既存のJavaライブラリをそのまま利用可能
- 型システムレベルでnull許容型と非null型を区別する「null安全」機構
- データクラスや拡張関数など、定型コードを削減する簡潔な構文
- コルーチンによる非同期処理の軽量な記述
- Android公式開発言語としての地位を確立し、モバイル開発で急速に普及
- 「when」式やスマートキャストなど、条件分岐やnullチェックの記述を簡潔にする言語機能

## 影響を受けた言語

- [Java](java.md)
- [Scala](scala.md)
- [C#](c_sharp.md)
- [Groovy](groovy.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

- [V](v_lang.md)
- [Carbon](carbon.md)


## 現在の位置づけ

Kotlinは現在Googleの公式Android開発言語としての地位を確立し、Javaを置き換えつつある現役言語である。サーバサイド開発(Ktorなど)やマルチプラットフォーム開発(Kotlin Multiplatform)にも用途を広げ、JVMエコシステムの中心的言語の一つとなっている。JetBrains自身も自社のIDE製品群の開発言語として活用を続けており、企業内での採用事例も年々増加している。

## Hello World

```kotlin
fun main() {
    println("Hello, World!")
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Kotlin)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Kotlin_%28programming_language%29)
