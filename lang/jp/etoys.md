# Etoys

- 登場年: 1996年
- 設計者: Alan Kay, Dan Ingalls, Scott Wallace, Ted Kaehler, John Maloney, Andreas Raab
- パラダイム: object-oriented, visual, event-driven
- 系統: educational-visual

## 解決したかった課題

Etoysは、Alan KayらがXerox PARCでの研究とSeymour Papertの構築主義的教育理論をもとに、子供でも直感的にプログラミングの概念を学べる環境を作るために開発した。既存のLogoやSmalltalkは表現力に優れていたが、抽象度が高く子供が扱うには難しいという課題があった。Smalltalk実装であるSqueak上に構築し、タイル状のスクリプトでオブジェクトを操作できるビジュアルなオブジェクト指向環境として設計された。One Laptop per Childプロジェクトへの採用を通じて世界の教育現場に広まり、後のScratchにも影響を与えた。

## 特徴

- Smalltalk実装であるSqueak上に構築されたビジュアルなオブジェクト指向環境であり、あらゆる要素がオブジェクトとして扱われる
- テキストの代わりにタイル状のスクリプトを組み合わせることでオブジェクトの振る舞いを記述する
- タートルグラフィックスを継承した図形描画やアニメーション、シミュレーション作成が直感的に行える
- イベント駆動型の仕組みにより、マウス操作やセンサー入力に応じてオブジェクトが反応するプログラムを作成できる
- One Laptop per Child(OLPC)プロジェクトに標準搭載され、世界各国の初等教育現場に配布された

## 影響を受けた言語

- [Logo](logo.md)
- [Smalltalk](smalltalk.md)
- [Squeak](squeak.md)
- [StarLogo](starlogo.md)


## 影響を与えた言語

- [Scratch](scratch.md)


## 現在の位置づけ

Etoysは教育用途に特化した位置づけであり、実務でのソフトウェア開発に使われることはない。かつてのOLPCプロジェクトほどの普及はないものの、Squeak/Etoysコミュニティによって開発が継続されており、プログラミング教育や構築主義的学習の教材として利用され続けている。

## Hello World

Etoysはタイル状のスクリプトを組み合わせて記述するビジュアル言語のため、テキストコードの代わりに用いるタイルの構成を擬似コードとして示す。

```
[クリックされたとき] スクリプトの先頭に
[「Hello, World!」と言う] タイルをつなげる
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Etoys)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Etoys_%28programming_language%29)
