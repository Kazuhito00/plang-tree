# AssemblyScript

- 登場年: 2017年
- 設計者: Daniel Wirtz, Max Graey
- パラダイム: object-oriented, functional, generic, systems
- 系統: c-family

## 解決したかった課題

AssemblyScriptは、WebAssemblyが持つ高速な実行性能を、JavaScript/TypeScriptに慣れた開発者がより手軽に利用できるようにするために生まれた。WebAssemblyにコンパイルするには従来C++やRustのような新しい言語を一から学ぶ必要があり、Web開発者にとって参入障壁が高かった。Daniel WirtzとMax Graeyは、TypeScriptに極めて近い構文をそのまま採用しつつ、厳格な静的型付けのサブセットとしてコンパイル可能にすることで、既存のJavaScript/TypeScript開発者が使い慣れた構文のまま直接WebAssemblyへコンパイルできる言語を作ろうとした。

## 特徴

- 構文はTypeScriptとほぼ同一であり、TypeScriptの型注釈をそのまま利用してコンパイルする
- ガベージコレクションを持つが、性能を重視して手動に近いメモリ管理や低レベルの型(`i32`、`f64`など)も直接扱える
- ジェネリクスやクラス、インターフェースなどオブジェクト指向的な機能をサポートしつつ、WebAssemblyの制約に合わせて言語機能のサブセットに限定している
- TypeScriptのコードをそのまま流用することはできず、AssemblyScript独自の型付けルールに従って書き直す必要がある
- npmエコシステムと統合されており、既存のJavaScript/TypeScriptツールチェーンと親和性が高い

## 影響を受けた言語

- [TypeScript](typescript.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役で広く使われている。WebAssemblyを用いた高性能なWebアプリケーションやプラグインシステムの開発において、TypeScript経験者が導入しやすい選択肢として利用され続けている。

## Hello World

AssemblyScriptではTypeScriptと同様に`console.log`を使って文字列を出力できる。

```typescript
export function main(): void {
  console.log("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AssemblyScript)
