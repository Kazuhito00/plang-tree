# Scheme

- 登場年: 1975年
- 設計者: Guy Steele, Gerald Sussman
- パラダイム: 関数型、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

1970年代半ば、MITのGuy SteeleとGerald Sussmanは、当時のLisp方言が持つ動的スコープや肥大化した機能を見直し、より理論的に一貫した小さな言語を作ろうとした。特にアクターモデルの研究過程で、レキシカルスコープと末尾呼び出し最適化(末尾再帰をループと同等に扱う仕組み)を持つ、ミニマルで数学的に美しいLisp方言が必要とされた。この設計思想は後に教育目的の名著「計算機プログラムの構造と解釈(SICP)」の教材言語としても採用された。

## 特徴

- レキシカルスコープを標準として採用した初期のLisp方言
- 末尾呼び出し最適化を仕様として保証し、再帰をループのように使える
- 継続(continuation)を第一級の値として扱えるcall/ccを備える
- 言語仕様(R5RS、R7RSなど)が極めてコンパクトで、教育・研究に適する
- 関数と変数を同じ名前空間に置く「Lisp-1」方式を採用

## 影響を受けた言語

- [Lisp](lisp.md)
- [ALGOL 68](algol_68.md)


## 影響を与えた言語

- [T](t_lang.md)
- [Common Lisp](common_lisp.md)
- [Chez Scheme](chez_scheme.md)
- [Haskell](haskell.md)
- [Sather](sather.md)
- [EuLisp](eulisp.md)
- [SCM](scm.md)
- [SKILL](skill_lang.md)
- [newLISP](newlisp_lang.md)
- [Dylan](dylan.md)
- [Guile](guile.md)
- [Lua](lua.md)
- [R](r.md)
- [K](k.md)
- [Racket](racket.md)
- [JavaScript](javascript.md)
- [LilyPond](lilypond_lang.md)
- [ISLISP](islisp_lang.md)
- [Chicken Scheme](chicken_scheme.md)
- [Joy](joy_lang.md)
- [GOAL](goal_lang.md)
- [Scala](scala.md)
- [Q (kdb+)](q_kdb.md)
- [AmbientTalk](ambienttalk.md)
- [Clojure](clojure.md)
- [LFE](lfe.md)
- [Rust](rust.md)
- [Snap!](snap.md)
- [Qalb](qalb_lang.md)
- [Hy](hy_lang.md)
- [Michelson](michelson.md)


## 現在の位置づけ

Schemeは商業的な主流にはならなかったものの、教育・研究分野で根強い人気を持つ「niche」な言語として位置づけられている。そのミニマルで一貫した設計は、継続やレキシカルスコープなど現代の多くの言語機能の理論的基盤を提供し続けている。

## Hello World

```
(display "Hello, World!")
(newline)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Scheme)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Scheme_%28programming_language%29)
