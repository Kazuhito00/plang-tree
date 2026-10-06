# GOAL

- 登場年: 2001年
- 設計者: Andy Gavin
- パラダイム: functional, object-oriented, systems, macro
- 系統: lisp-scheme

## 解決したかった課題

Naughty Dogは、PlayStation 2という限られたハードウェア資源の上で「Jak and Daxter」シリーズのような高度なゲームプレイを実現する必要があった。既存のCやC++を使った開発では、コンパイル・リンクのサイクルが長く、実行中のゲームにコードを差し込んで即座に結果を確認する、といった高速な反復開発が難しかった。

Andy Gavinは、前作『Crash Bandicoot』のために自作したLisp系言語GOOL(Game Oriented Object Lisp)の経験を踏まえ、Lisp・Scheme的な構文を持ちながらインタプリタではなくPlayStation 2の機械語へ直接コンパイルされ、実行中のゲームにコードを動的に再コンパイル・挿入できる新しい言語GOAL(Game Oriented Assembly Lisp)を2001年12月3日に開発した。

## 特徴

- LispやSchemeに似た構文を持つが、インタプリタ方式ではなくPlayStation 2の機械語へ直接コンパイルされる
- インラインアセンブリ言語の記述をサポートし、低レベルな最適化が可能
- 実行中のゲームにコードを動的に再コンパイル・挿入できる、C++の「エディット・アンド・コンティニュー」に類似した機能を持つ
- Andy Gavinの前作『Crash Bandicoot』のためのGOOL(Game Oriented Object Lisp)を発展させたもの
- 「Jak and Daxter」シリーズ本編(一部スピンオフを除く)全てで使用され、PlayStation 3の『The Last of Us』でもスクリプト用途に使われた
- Sony傘下でのスタジオ間コード共有の重視により開発は終了したが、2020年開始のコミュニティプロジェクト「OpenGOAL」によってWindows/macOS/Linuxへ移植されている

## 影響を受けた言語

- [Lisp](lisp.md)
- [Scheme](scheme.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

legacy(実務での主な使用は終了した言語)として位置づけられる。Naughty Dog社内での開発自体はSony傘下でのスタジオ間の事情により終了しているが、2020年開始のOpenGOALプロジェクトによって「Jak and Daxter」三部作を現代のプラットフォームで完全にプレイできる状態まで復元されており、コミュニティベースで存続している。

## Hello World

一次資料上で確認できなかった(Wikipedia記事にHello World相当のコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp)
