# Lisp

- 登場年: 1958年
- 設計者: John McCarthy
- パラダイム: 関数型、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

1950年代後半、人工知能研究では数値計算だけでなく、記号(シンボル)のリストを操作しながら定理証明や自然言語処理を行う必要があった。当時の主流言語であるFortranは数値計算には強かったが、可変長のリスト構造や再帰的な記号操作を表現するのには向いていなかった。John McCarthyは数学のラムダ計算に基づく再帰関数の理論を、実際に動く処理系として実装することで、記号処理とプログラムそのものをデータとして扱える言語を作ろうとした。この結果生まれたLispは、Fortranに次いで2番目に古い高水準言語となった。

## 特徴

- S式と呼ばれる括弧によるリスト構造で、プログラムとデータを同じ形式(コードもデータ)で表現する
- 再帰関数呼び出しとラムダ式を言語の中核に据えた最初期の言語
- ガベージコレクションを実装した最初期の言語の一つ
- マクロによりプログラム自体を生成・変換する強力なメタプログラミングが可能
- 以後の多数の方言(Scheme、Common Lispなど)を生み出す共通基盤となった

## 影響を受けた言語

- [IPL](ipl.md)


## 影響を与えた言語

- [Maclisp](maclisp.md)
- [ISWIM](iswim.md)
- [Logo](logo.md)
- [Interlisp](interlisp.md)
- [Planner](planner.md)
- [POP-2](pop_2.md)
- [MDL](mdl_lang.md)
- [Smalltalk](smalltalk.md)
- [Alphard](alphard.md)
- [Scheme](scheme.md)
- [CLU](clu.md)
- [OPS5](ops5.md)
- [Flavors](flavors_lang.md)
- [Nial](nial.md)
- [PostScript](postscript.md)
- [Common Lisp](common_lisp.md)
- [Emacs Lisp](emacs_lisp.md)
- [Chez Scheme](chez_scheme.md)
- [CLIPS](clips_lang.md)
- [Erlang](erlang.md)
- [AutoLISP](autolisp.md)
- [RPL](rpl_lang.md)
- [Perl](perl.md)
- [Tcl](tcl.md)
- [Wolfram Language](wolfram_language.md)
- [Haskell](haskell.md)
- [SCM](scm.md)
- [SKILL](skill_lang.md)
- [Python](python.md)
- [Oz](oz.md)
- [Guile](guile.md)
- [R](r.md)
- [Amiga E](amiga_e.md)
- [Ruby](ruby.md)
- [Squeak](squeak.md)
- [REBOL](rebol.md)
- [Curl](curl_lang.md)
- [Chicken Scheme](chicken_scheme.md)
- [GOAL](goal_lang.md)
- [Io](io.md)
- [Factor](factor.md)
- [Nemerle](nemerle_lang.md)
- [Little b](little_b.md)
- [Clojure](clojure.md)
- [Nim](nim.md)
- [Pure](pure_lang.md)
- [Red](red.md)
- [Ceylon](ceylon.md)
- [Julia](julia.md)
- [Fennel](fennel.md)
- [Clarity](clarity_lang.md)


## 現在の位置づけ

Lispそのものは現在「歴史的(historical)」な存在であり実用で直接使われることは少ないが、S式・再帰・ガベージコレクション・メタプログラミングといったアイデアは後続の無数の言語に受け継がれ、プログラミング言語史における最も影響力の大きい設計の一つとされている。

## Hello World

```
(print "Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Lisp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lisp_%28programming_language%29)
