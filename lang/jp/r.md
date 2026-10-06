# R

- 登場年: 1993年
- 設計者: Ross Ihaka, Robert Gentleman
- パラダイム: functional, array
- 系統: numeric-scientific

## 解決したかった課題

1990年代当時、統計解析の分野ではベル研究所発の商用言語Sが事実上の標準だったが、高額なライセンス費用が学生や研究者にとって障壁になっていた。ニュージーランド・オークランド大学のRoss IhakaとRobert Gentlemanは、Sの文法や機能を踏襲しつつ誰でも無料で使えるオープンソースの統計解析環境を作りたいと考えた。Schemeの処理系設計から着想を得た軽量な実装をベースに、統計解析とグラフ作成に特化した言語として開発された。名前の「R」は二人の名前の頭文字と、Sへのオマージュを兼ねている。

## 特徴

- 統計解析・データ可視化に特化した豊富な組み込み関数群
- CRAN(Comprehensive R Archive Network)という巨大なパッケージエコシステムを持つ
- ベクトル・行列を扱うデータ構造が言語の中心に据えられている
- 遅延評価や第一級関数などSchemeに由来する関数型的な特徴を持つ
- 完全に無料でオープンソースであり、学術研究で広く採用されている

## 影響を受けた言語

- [Scheme](scheme.md)
- [Lisp](lisp.md)


## 影響を与えた言語

- [Julia](julia.md)


## 現在の位置づけ

現在も現役の言語であり(status: active)、統計解析・データ可視化分野で研究者やデータサイエンティストに広く使われるオープンソース言語として定着している。学術論文の再現性のある解析やバイオインフォマティクスの分野で特に強い支持を持つ。

## Hello World

```
cat("Hello, World!\n")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/R言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/R_%28programming_language%29)
