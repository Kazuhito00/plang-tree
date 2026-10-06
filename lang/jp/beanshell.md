# BeanShell

- 登場年: 1999年
- 設計者: Patrick Niemeyer
- パラダイム: scripting, object-oriented
- 系統: jvm-dotnet

## 解決したかった課題

Javaはコンパイルと実行のサイクルを経なければコードを試すことができず、テストやデバッグの際に少しだけコードを書いて動かしてみる、といった軽量な使い方には向いていなかった。Patrick NiemeyerはJavaのソースコードをほぼそのまま解釈実行できる小さく組み込み可能なインタプリタBeanShellを設計し、この問題を解決しようとした。

さらにBeanShellは、緩い型付け、コマンド的な記法、メソッドクロージャなど、PerlやJavaScriptのような動的スクリプト言語の便利な機能をJava構文の上に追加している。

## 特徴

- Javaコンパイラ向けに書かれたコードがほぼそのままBeanShellで解釈実行でき、その逆もほぼ成立する高い互換性
- 動的型付けと緩い型付け(loose types)を許容する拡張
- メソッドクロージャやスクリプト的なコマンド構文など、PerlやJavaScriptから influence を受けた機能
- Javaプラットフォーム上でのテスト・デバッグツールとして広く利用された
- JSR 274としてJava Community Processで標準化が試みられたが、現在は「Dormant(休止中)」状態
- 2012年からApache Software Foundationの管理下でApache License 2.0で公開

## 影響を受けた言語

- [Java](java.md)
- [JavaScript](javascript.md)
- [Perl](perl.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

BeanShellは現在もApache Software Foundationのもとで公開されているが、Java 9で標準のREPLであるJShellが導入されたことにより、その存在意義は大きく縮小している(status: legacy)。

かつてはJVM上での手軽なテスト・デバッグツールとして広く使われたが、現在では新規プロジェクトでの採用は限定的である。

## Hello World

一次資料上で確認できなかった。ただしBeanShellはJavaのソースコードをほぼそのまま解釈実行できるため、通常のJavaのHello Worldに準じたコードがそのまま動作すると考えられる。

```java
print("Hello, World!");
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/BeanShell)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/BeanShell)
