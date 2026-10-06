# Interlisp

- 登場年: 1968年
- 設計者: Warren Teitelman, Danny Bobrow, Alice Hartley, Ronald Kaplan
- パラダイム: functional, procedural, object-oriented, declarative
- 系統: lisp-scheme

## 解決したかった課題

1960年代後半、AI研究者が試行錯誤しながら効率よくプログラムを書けるようにするため、Lisp処理系にデバッガやエラー自動修正機能、操作履歴管理などを統合した対話的な開発環境が求められていた。InterlispはBBN LISPを土台に、Xerox PARCでさらに洗練させる形で、単なる言語仕様にとどまらず研究者の生産性を高める統合プログラミング環境そのものを提供することを目指した。特にDWIM(Do What I Mean)と呼ばれるエラー自動修正機能は、タイプミスや些細な誤りを処理系が自動的に推測して修正するという先進的な発想であった。AI研究における試行錯誤のサイクルを高速化することが最大の狙いであった。

## 特徴

- DWIM(Do What I Mean)機能により、些細なタイプミスや誤りを処理系が自動的に修正しようとする
- 強力な対話的デバッガを備え、実行中のプログラムを中断して調査・修正できる
- 操作履歴の管理機能を持ち、過去の操作を後から参照・再実行できる
- Lispの伝統に基づくシンボリック処理とリスト操作を中核とする
- ファイル管理やパッケージ機構など、統合開発環境的な機能を多数備える

## 影響を受けた言語

- [Lisp](lisp.md)


## 影響を与えた言語

- [Common Lisp](common_lisp.md)
- [PicoLisp](picolisp_lang.md)
- [EuLisp](eulisp.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)として位置づけられる。Interlisp自体は使われなくなったが、対話的デバッグ環境やエラー自動修正という発想は、現代の統合開発環境(IDE)の先駆けとして評価されている。

## Hello World

```
(PRINT (QUOTE (Hello, World!)))
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Interlisp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Interlisp)
