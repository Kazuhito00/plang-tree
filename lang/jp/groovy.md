# Groovy

- 登場年: 2003年
- 設計者: James Strachanほか
- パラダイム: object-oriented, scripting
- 系統: smalltalk-oop

## 解決したかった課題

2000年代前半、JVM上ではJavaが企業システムの標準言語として定着していたが、その静的で冗長な構文はスクリプト的な軽快さに欠けていた。James Strachanらは、Javaの膨大なライブラリ資産とJVMという実行基盤をそのまま活かしながら、Rubyのような動的型付けと簡潔な構文を持ち込み、日々の開発における生産性を高めたいと考えた。既存のJavaコードとシームレスに連携できることを保ったまま、より書きやすい言語を目指したのが出発点である。

## 特徴

- Javaと高い互換性を持ち、既存のJavaクラスライブラリをそのまま呼び出せる
- 動的型付けとオプションの静的型付けを併用できる柔軟な型システム
- クロージャやビルダー構文など、Rubyやスクリプト言語から取り入れた簡潔な表現力
- Groovy自身のコードでDSL(ドメイン固有言語)を書きやすい設計
- ビルドツールGradleの標準スクリプト言語として広く実務に浸透

## 影響を受けた言語

- [Java](java.md)
- [Ruby](ruby.md)
- [Python](python.md)
- [Smalltalk](smalltalk.md)
- [Perl](perl.md)


## 影響を与えた言語

- [Kotlin](kotlin.md)


## 現在の位置づけ

現在はniche(特定分野向け)な言語と位置づけられ、汎用スクリプト言語としての採用は限定的である。一方でGradleのビルドスクリプト言語としては今も広く使われ続けており、JVMエコシステムの一角を占めている。

## Hello World

```
println "Hello, world!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Groovy)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Apache_Groovy)
