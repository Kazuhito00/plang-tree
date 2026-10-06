# Component Pascal

- 登場年: 1997年
- 設計者: Oberon microsystems
- パラダイム: procedural, object-oriented
- 系統: algol-pascal

## 解決したかった課題

Component Pascalは、OberonおよびOberon-2の後継として、ETH Zürich発のスピンオフ企業Oberon microsystemsによって開発された。既存のOberon-2言語の型システムをさらに洗練させ、コンポーネントソフトウェア開発に適した、より表現力豊かで安全な言語を提供することが目的だった。開発環境として提供されたBlackBox Component Builderは、フォームエディタ上でGUI部品と変数・手続きを直接結びつけて開発できる先進的な仕組みを持ち、後年の.NET開発環境の手法を先取りしていた。当初は商用製品として提供されていたが、2004〜2005年にオープンソース化され、現在は少数のボランティアコミュニティによって保守が続けられている。

## 特徴

- Oberon-2の型システムを洗練させ、コンポーネント指向のソフトウェア開発に適した安全性と表現力を両立している
- BlackBox Component Builderという統合開発環境を通じて、フォーム上のGUI部品と変数・手続きを直接結合できる
- 型安全なモジュールシステムを持ち、コンポーネント単位での独立した開発・再利用を促進する
- ガベージコレクションを備え、メモリ安全性を確保しながら簡潔な記述を可能にしている
- 型付き手続き変数や動的束縛など、オブジェクト指向的な機能を簡潔な構文で提供する
- 2004〜2005年にオープンソース化され、以降は小規模なボランティアコミュニティによって保守されている

## 影響を受けた言語

- [Pascal](pascal.md)
- [Oberon](oberon.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

ニッチな言語として位置づけられている。かつて商用製品として提供されていたが、現在はオープンソース化され、少数のボランティアによって保守が続けられている。BlackBox Component Builderが先取りした「フォーム上でGUI部品と変数を直結する」開発手法は、後年の.NET開発環境の先駆けとして評価されることがある。

## Hello World

```
MODULE Hello;
  IMPORT Out;
BEGIN
  Out.String("Hello, world!"); Out.Ln
END Hello.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Component_Pascal)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Component_Pascal)
