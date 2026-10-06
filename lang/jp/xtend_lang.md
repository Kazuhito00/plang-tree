# Xtend

- 登場年: 2011年
- 設計者: Sven Efftinge, Sebastian Zarnekow
- パラダイム: object-oriented, functional, procedural
- 系統: jvm-dotnet

## 解決したかった課題

Javaは巨大で成熟したエコシステムを持つ一方、ボイラープレートの多さや構文の冗長さがしばしば課題として指摘されていた。typefox社によるEclipse.orgのXtextプロジェクトの一部として、Sven EfftingeとSebastian Zarnekowが設計したXtendは、2011年のEclipse Indigoで最初にリリースされた。

Xtendはコンパイル後にJavaのソースコードを生成する仕組みを採用し、既存のあらゆるJavaライブラリ・ツールチェインとの完全な互換性を維持しつつ、型推論、拡張メソッド、複数行のテンプレート式、演算子オーバーロード、ラムダ式といった機能によって、より簡潔でモダンな構文を提供することを目指した。

## 特徴

- Javaのソースコードへコンパイルされ、既存のJavaライブラリ・ツールと完全互換
- 型推論による簡潔な変数宣言
- 拡張メソッド(Extension Methods)によるライブラリの機能拡張
- 複数行のテンプレート式(文字列補間)をサポート
- 演算子オーバーロードとラムダ式に対応
- オブジェクト指向・手続き型・関数型を組み合わせた静的型付け言語

## 影響を受けた言語

- [Java](java.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Xtendは現在「niche」な位置づけである。Eclipse Xtext/Xtendのエコシステムの中で、ドメイン特化言語(DSL)開発や関連する開発ツールチェインに使われ続けているが、後発のKotlinなど他のJVM言語の台頭によって主流の地位を得ることはなかった。

## Hello World

Wikipediaの記事には、テンプレート式を使った以下のようなメソッド定義例が掲載されている。

```
def sayHello(String name) '''
    Hello «name» !
'''
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Xtend_(programming_language))
- [Wikipedia(日本語)](なし)
