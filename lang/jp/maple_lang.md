# Maple

- 登場年: 1982年
- 設計者: Keith Geddes, Gaston Gonnet
- パラダイム: procedural, functional, object-oriented, symbolic
- 系統: numeric-scientific

## 解決したかった課題

Mapleは、カナダのウォータールー大学のKeith GeddesとGaston Gonnetを中心とした研究者らによって開発された数式処理システム(コンピュータ代数システム)である。同大学の研究者らは、Lisp言語で書かれた既存の数式処理システムMacsymaを動かすために十分な性能を持つ(高価な)計算機を購入しようとしたが、代わりに、より低コストな計算機上でも動作する独自の数式処理システムを開発することを選んだ。これがMaple(1982年、Maple 1.0)の開発経緯である。1988年にはGeddesとGonnetによりWaterloo Maple Software(現Maplesoft)が設立され、以後は同社が商業開発を継続している。

## 特徴

- 記号計算(数式処理)、数値解析、データ処理、統計処理、可視化まで幅広い計算能力
- 微分方程式の解法やグラフ描画機能に優れていると評価されている
- 厳密解(closed-form solution)を求めることを得意とする
- 手続き型・関数型・オブジェクト指向をサポートするPascalに類似した組み込み言語
- C、Java、Maple言語自身で実装されており、複数言語へのコード生成が可能
- Windows/macOS/Linuxに対応するプロプライエタリ商用ソフトウェア

## 影響を受けた言語

特になし(Lisp言語ベースのMacsymaが開発の直接的な引き合い・比較対象として明記されているが、「代替として開発された」という経緯であり、設計上の直接的な影響元としての記述は一次資料上確認できなかった。また、Macsyma自体もデータセット未収録)


## 影響を与えた言語

- [MuPAD](mupad_lang.md)


## 現在の位置づけ

Mathematicaと並ぶ主流の数式処理システムの一つとして現役である(status: active)。最新版は2025.2(2025年11月リリース)。開発企業はWaterloo Maple Inc.(Maplesoft)。

## Hello World

日本語版・英語版Wikipediaのいずれにも、文字列出力の「Hello, World!」に相当する例は確認できなかった。記事に掲載されている実際のコード例(関数定義)は以下の通り。

```maple
myfac := n -> product(i, i = 1..n);
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Maple)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Maple_(software))
