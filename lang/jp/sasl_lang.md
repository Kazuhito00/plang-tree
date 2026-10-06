# SASL

- 登場年: 1972年
- 設計者: David Turner
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

1972年、セント・アンドルーズ大学のDavid Turnerは、Peter Landinが考案した関数型言語の理論的枠組みであるISWIMの適用的(値渡し)部分集合をもとに、SASL(St Andrews Static Language、後にSt Andrews Standard Languageとも呼ばれる)を設計した。当初は型を持たない厳密な(strict)評価の言語だったが、Turnerは1976年にこれを再設計・再実装し、非厳密(遅延)評価を行う言語へと変更した。

目的は、純粋関数型プログラミングの考え方を、実際に動く処理系として実験・検証できる、簡潔で数学的な言語を提供することだった。バロウズ社はSASLを用いてコンパイラやオペレーティングシステムを記述したと言われている。

## 特徴

- ISWIMの適用的部分集合を基盤とした純粋関数型言語
- 1976年の再設計で非厳密(遅延)評価を採用
- 型を持たない(untyped)システム
- 後継のKRC・Mirandaに直接連なる設計上の起点となった

## 影響を受けた言語

- [ISWIM](iswim.md)

## 影響を与えた言語

- [Miranda](miranda.md)


## 現在の位置づけ

SASL自体は現在使われていない歴史的な言語だが、Turnerはこの遅延評価版SASLを土台として、その後KRC(Kent Recursive Calculator)、そして商用言語Miranda(1985年)を開発し、Mirandaはさらに後のHaskellの設計に直接影響を与えた。純粋関数型・遅延評価という現代の関数型言語の重要な系譜の出発点の一つとして位置づけられる。

## Hello World

一次資料上でSASL固有のHello World例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SASL_(programming_language))
- Wikipedia(日本語): 該当記事なし(「SASL」は認証プロトコル等の曖昧さ回避ページのみ)
