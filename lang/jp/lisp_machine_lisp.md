# Lisp Machine Lisp

- 登場年: 1976年
- 設計者: David A. Moon, Richard Stallman, Daniel Weinreb
- パラダイム: procedural, object-oriented, symbolic
- 系統: lisp-scheme

## 解決したかった課題

1970年代半ば、MITで開発が進んでいたLispマシン(Lisp専用のハードウェア)には、そのシステムプログラミング全体を記述できる、実用的で高機能なLisp方言が必要とされていた。David A. Moon、Richard Stallman、Daniel Weinrebらは、MaclispやInterlispといった既存のLisp方言を土台に、Flavorsと呼ばれるオブジェクトシステムによるオブジェクト指向プログラミングへの対応や、レキシカルクロージャを扱える特殊構文の導入など、当時のLisp方言の中でも先進的な機能を統合したLisp Machine Lispを開発した。

## 特徴

- Flavorsと呼ばれるオブジェクトシステムにより、オブジェクト指向プログラミングをサポートする
- 動的スコープを基本としつつ、特殊な構文でレキシカルクロージャも扱える
- 整数は既定で8進数(octal)として読み書きされる、当時特有の慣習を持つ
- 浮動小数点数の除算は小数を返すが、整数同士の除算は有理数(分数)を返す
- MIT、Symbolics、Lisp Machines Inc.(LMI)、Texas Instrumentsなど複数の組織がLispマシン向けに開発・保守した

## 影響を受けた言語

- [Lisp](lisp.md)
- [Maclisp](maclisp.md)
- [Interlisp](interlisp.md)


## 影響を与えた言語

- [Common Lisp](common_lisp.md)


## 現在の位置づけ

Lisp Machine Lispは、Symbolics社が自社のLispマシン向けに手を加えた方言に「ZetaLisp」という名称を与えたほか、LMI(Lisp Machines Inc.)・Texas Instruments各社版、およびRichard Stallmanらが保守を続けたMIT AI Lab版という複数の派生を生んだ。

Wikipedia英語版は「Common Lispの設計に最も大きな影響を与えたLisp方言」と位置づけており、1984年に標準化されたCommon Lispへ、CLOSの前身となったオブジェクトシステムの考え方や多数の言語機能を引き渡す形で、その役割を終えた歴史的な言語である。

## Hello World

一次資料上でLisp Machine Lispのhello World相当のサンプルコードは確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lisp_Machine_Lisp)

(日本語版Wikipediaには専用記事が見当たらなかった)
