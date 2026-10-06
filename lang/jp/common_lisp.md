# Common Lisp

- 登場年: 1984年
- 設計者: 委員会(Guy Steele中心)
- パラダイム: 関数型、オブジェクト指向、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

1970年代から80年代にかけて、Lispは MacLisp、InterLisp、Zetalisp、Franz Lispなど多数の非互換な方言に分裂しており、プログラムの移植性やツールの共有が大きな問題となっていた。産業界でLispをAI開発や大規模ソフトウェア開発に本格採用するには、これら乱立した方言を統一し、規格化された標準仕様が不可欠だった。Guy Steeleを中心とする委員会は、既存の実装群の良い部分を統合しつつ、オブジェクト指向機能まで含む包括的な標準を策定した。この統一作業は数年に及び、最終的にANSI標準として結実した。

背景にはDARPAなどの資金提供を受けたAI研究プロジェクトが林立し、それぞれ異なる処理系上で開発が進められていたという事情もあり、共通基盤の欠如が研究成果の再利用や共同開発の障害になっていた。

## 特徴

- 複数のLisp方言の機能を統合した、非常に大規模で網羅的な言語仕様
- CLOS(Common Lisp Object System)という強力かつ柔軟なオブジェクト指向システムを内蔵
- 条件システムによる高度なエラーハンドリング・リスタート機構
- 動的スコープと静的スコープの両方を変数ごとに選択可能
- ANSI標準として規格化され、複数の商用・オープンソース処理系が存在
- パッケージシステムによる名前空間の分離と大規模プログラムの管理を考慮した設計
- CLtL(Common Lisp the Language)という詳細な言語リファレンスにより仕様が明文化された

## 影響を受けた言語

- [Lisp](lisp.md)
- [Scheme](scheme.md)
- [Maclisp](maclisp.md)
- [Interlisp](interlisp.md)
- [Lisp Machine Lisp](lisp_machine_lisp.md)


## 影響を与えた言語

- [Maxima](maxima_lang.md)
- [Objective-C](objective_c.md)
- [Emacs Lisp](emacs_lisp.md)
- [Sather](sather.md)
- [EuLisp](eulisp.md)
- [SKILL](skill_lang.md)
- [newLISP](newlisp_lang.md)
- [Dylan](dylan.md)
- [ISLISP](islisp_lang.md)
- [Qi](qi_lang.md)
- [Clojure](clojure.md)
- [LFE](lfe.md)
- [Shen](shen_lang.md)
- [Hy](hy_lang.md)


## 現在の位置づけ

Common Lispは現在「niche」な位置づけだが、複数のLisp方言を統合した産業向け標準としての完成度は高く、CLOSに代表される強力なオブジェクトシステムを持つ言語として、今なお一定のユーザー層に使われ続けている。SBCLをはじめとする高性能な処理系が今も開発され続けており、金融システムやAI研究など特定分野で根強く採用されている。

## Hello World

```
(format t "Hello, World!~%")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Common_Lisp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Common_Lisp)
