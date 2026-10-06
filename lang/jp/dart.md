# Dart

- 登場年: 2011年
- 設計者: Google(Lars Bakほか)
- パラダイム: object-oriented
- 系統: scripting

## 解決したかった課題

2010年代初頭、Googleは社内の大規模Webアプリケーション開発において、JavaScriptの動的型付けや構造化の弱さがコードベースの保守性を損なっていると考えていた。仮想マシン開発の経験を持つLars Bakらは、クラスベースのオブジェクト指向と型システムを備え、かつIDEによる高度なツール支援を受けられる言語を作り、当初は独自VMをブラウザに搭載することも視野に、JavaScriptに代わる選択肢を提示しようとした。

## 特徴

- クラスベースのオブジェクト指向と、段階的に導入できる型システム
- JavaScriptへのトランスパイルとネイティブコンパイルの両方をサポート
- Just-In-TimeとAhead-of-Timeコンパイルを開発時と本番でそれぞれ使い分ける仕組み
- 当初はWeb向けだったが、後にモバイル・デスクトップ向けにも展開
- FlutterフレームワークのUI記述言語として再び大きな注目を集めた

## 影響を受けた言語

- [JavaScript](javascript.md)
- [Java](java.md)
- [C#](c_sharp.md)
- [Smalltalk](smalltalk.md)
- [Ruby](ruby.md)
- [Erlang](erlang.md)
- [Strongtalk](strongtalk.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

当初目指したブラウザでの直接採用は実現しなかったが、現在は「active」であり、GoogleのFlutterフレームワークの中核言語としてモバイル・デスクトップアプリ開発で再び脚光を浴びている。Web向け言語としての出自から、クロスプラットフォームUI開発言語へと役割を変えて生き残った例である。

## Hello World

```
void main() {
  print('Hello, World!');
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Dart)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Dart_%28programming_language%29)
