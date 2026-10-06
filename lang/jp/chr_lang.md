# Constraint Handling Rules

- 登場年: 1991年
- 設計者: Thom Frühwirth
- パラダイム: rule-based, declarative
- 系統: logic-declarative

## 解決したかった課題

1991年、ドイツ・ミュンヘンの欧州計算機産業研究センター(ECRC)のThom Frühwirthは、制約充足系を記述するための、単純でありながら表現力の高い言語を必要としていた。既存のPrologやCLP(制約論理プログラミング)処理系に制約解消アルゴリズムを組み込む際、手続き的な実装は複雑になりやすく、制約解消の規則を宣言的かつ簡潔に書き表せる仕組みが求められていた。

Frühwirthは PARLOGやGuarded Horn Clauses、Concurrent Prologといった並行論理プログラミングの考え方を制約プログラミングに応用し、Constraint Handling Rules (CHR)を設計した。当初は特定の制約解消系を記述するための言語として考案されたが、後にそれ自体が汎用の高水準な並行制約プログラミング言語としても使われるようになった。

## 特徴

- 制約の多重集合(マルチセット)を書き換える規則によってプログラムを記述する
- 単純化規則(simplification)、伝播規則(propagation)、両者を組み合わせた単純化伝播規則(simpagation)の3種類の規則からなる
- 宣言的でルールベースなプログラミングスタイルを持ちながら、チューリング完全性を備える
- Prologを主なホスト言語とし、SICStus PrologやSWI-Prologなどに組み込まれる形で提供されることが多い
- Haskell、Java、C、SQL、JavaScriptなど多様な言語上にも実装されている
- 型システムや文法推論、自然言語処理、スケジューリング、形式検証など幅広い応用がある

## 影響を受けた言語

- [Prolog](prolog.md)
- [Concurrent Prolog](concurrent_prolog.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

CHRは現在もPrologやSWI-Prolog、Haskellなどのホスト言語に組み込まれる形で、nicheな存在として使われ続けている、制約プログラミング分野における代表的な宣言的ルールベース言語である。単純な記法で強力な制約解消系を書けることから、学術研究や特定分野の応用(自然言語処理、スケジューリング、検証など)で利用が続いている。

## Hello World

CHRには標準的な「Hello World」に相当する慣用句はない。文献で最も広く引用される例として、`leq`(以下関係)制約ソルバのプログラムを示す。

```
reflexivity  @ leq(X,X) <=> true.
antisymmetry @ leq(X,Y), leq(Y,X) <=> X = Y.
idempotence  @ leq(X,Y) \ leq(X,Y) <=> true.
transitivity @ leq(X,Y), leq(Y,Z) ==> leq(X,Z).
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Constraint_Handling_Rules)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Constraint_Handling_Rules)
