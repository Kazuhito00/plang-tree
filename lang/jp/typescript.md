# TypeScript

- 登場年: 2012年
- 設計者: Anders Hejlsberg
- パラダイム: object-oriented, functional
- 系統: scripting

## 解決したかった課題

2010年代前半、JavaScriptで書かれるアプリケーションは急速に大規模化していたが、動的型付けゆえに型の不整合による実行時エラーが多発し、大人数での開発やIDEによる補完・リファクタリング支援が難しいという課題があった。C#の設計者でもあるAnders Hejlsbergは、Microsoft社内での大規模Webアプリ開発の経験から、JavaScriptの実行環境やライブラリ資産を損なわずに、コンパイル時に型エラーを検出できる仕組みが必要だと考えた。

## 特徴

- JavaScriptのスーパーセットであり、既存のJSコードがほぼそのまま動作する
- 段階的に型を導入できる漸進的型付け(gradual typing)
- インターフェースやジェネリクスなどC#譲りの型システム機能
- コンパイル(トランスパイル)により最終的に通常のJavaScriptを出力
- 主要なフロントエンドフレームワーク(Angular, React等)で標準的に採用

## 影響を受けた言語

- [JavaScript](javascript.md)
- [C#](c_sharp.md)
- [Java](java.md)
- [F#](f_sharp.md)


## 影響を与えた言語

- [AssemblyScript](assemblyscript.md)
- [Bosque](bosque.md)
- [Luau](luau_lang.md)
- [ArkTS](arkts.md)
- [Mog](mog_lang.md)


## 現在の位置づけ

現在は「active」として、フロントエンド開発における事実上の標準言語となっている。大規模化するWebアプリケーション開発の型安全性という課題に対する解として広く受け入れられ、今なお採用が拡大している。

## Hello World

```
console.log("Hello, World!");
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/TypeScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/TypeScript)
