# Squeak

- 登場年: 1996年
- 設計者: Alan Kay, Dan Ingalls, Ted Kaehler, John Maloney, Scott Wallace
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

Smalltalk-80は商用ベンダーの処理系に閉じており、誰もが自由に改変・移植できるオープンな実装が存在しなかった。かつてSmalltalkを生み出したAppleの研究者たちは、あらゆるプラットフォームに移植可能で、システム自身をSmalltalkのコードで書き換えられる完全に自己記述的な処理系を、教育・研究向けに無償で提供したいと考えた。子供たちが自らのアイデアをコンピュータ上で自由に表現できる学習環境を作るという、Alan Kayの一貫した教育的ビジョンもその根底にある。

## 特徴

- Smalltalk-80の仕様に忠実でありながら、処理系そのものがSmalltalkで記述された自己記述的なシステムである
- どんなプラットフォームにも移植可能なように設計され、仮想マシン自体もSmalltalkで書かれている
- Morphicと呼ばれるライブなグラフィカルオブジェクトフレームワークを備え、画面上のあらゆる要素を直接操作できる
- Etoysというビジュアルプログラミング環境を内包し、子供向けの教育ツールとしても発展した
- オープンソースとして公開され、誰でも自由に改変・再配布できる

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [Self](self.md)
- [Lisp](lisp.md)
- [Logo](logo.md)
- [Simula](simula.md)


## 影響を与えた言語

- [Etoys](etoys.md)
- [ことだま on Squeak](kotodama_lang.md)
- [Pharo](pharo.md)


## 現在の位置づけ

特定分野で使われるニッチな言語として位置づけられており、教育用途や自己記述的システムの研究において今も利用され続けている。後継のPharoへと多くの利用者が移行した一方、Squeak自体も独自のコミュニティを維持している。

## Hello World

```smalltalk
Transcript showCr: 'Hello, World!'.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Squeak)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Squeak_%28programming_language%29)
