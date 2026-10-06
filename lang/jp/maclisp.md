# Maclisp

- 登場年: 1966年
- 設計者: Richard Greenblatt, Jon L. White
- パラダイム: functional, procedural, symbolic
- 系統: lisp-scheme

## 解決したかった課題

1966年当時、MITのProject MACにおいて、Lisp 1.5が連想リストの探索に頼っていたために変数アクセスが遅いという問題を解消し、より高速に動作するLisp処理系が求められていた。Maclispは可変長引数を取る関数やマクロ、配列、非局所脱出、高速な数値演算など実用的な機能を備えることで、大規模なAIプログラムの開発に耐える実行速度を実現しようとした。単なる理論的な処理系ではなく、実際にMITの人工知能研究所で使われる実用的なツールとして磨き上げられていった点が特徴的である。長年にわたり複数のマシンアーキテクチャに移植され、初期のLisp実装の中でも特に影響力の大きい存在であった。

## 特徴

- 連想リスト探索に頼らない高速な変数アクセスの仕組みを実現している
- マクロ機構を備え、プログラムを生成するプログラムを柔軟に記述できる
- 配列や可変長引数関数など、当時としては先進的な実用機能を多数持つ
- 非局所脱出(catch/throwに類する制御構造)を備え、複雑な制御フローを扱える
- 高速な数値演算をサポートし、大規模なAIプログラムの実行に耐える性能を持つ

## 影響を受けた言語

- [Lisp](lisp.md)


## 影響を与えた言語

- [Franz Lisp](franz_lisp.md)
- [Common Lisp](common_lisp.md)
- [Emacs Lisp](emacs_lisp.md)
- [PicoLisp](picolisp_lang.md)
- [LFE](lfe.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)として位置づけられる。Maclisp自体は使われなくなったが、初期のLisp実装として後続の多くのLisp方言に影響を与えた歴史的意義を持つ。

## Hello World

```
(PRINT '|Hello, World!|)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Maclisp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Maclisp)
