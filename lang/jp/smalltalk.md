# Smalltalk

- 登場年: 1972年
- 設計者: Alan Kayほか(Xerox PARC)
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

1970年代初頭、Xerox PARCのAlan Kayらは「Dynabook」という、子供でも使える個人用コンピュータの構想を抱いていた。既存のバッチ処理的な計算機観ではなく、あらゆるものが「オブジェクト」であり、オブジェクト同士がメッセージを送り合うことで動作する、生物の細胞のような柔軟なシステムを作りたかった。Simulaのクラス概念とLispの記号処理・対話的環境からヒントを得つつ、それを妥協なく純粋な形で実装し、GUIを備えたパーソナルコンピューティング環境そのものとして実現することが目標だった。

## 特徴

- 「すべてがオブジェクトであり、すべての操作はメッセージ送信である」という徹底した純粋オブジェクト指向モデル
- クラス、インスタンス、継承といった現代OOPの基本語彙を確立した最初期の言語
- ライブコーディング環境(image・ブラウザ・デバッガ一体型IDE)を備え、実行中にシステム自体を編集できる
- 現在広く使われるGUI要素(オーバーラップウィンドウ、メニュー、マウス操作)を最初期に実用化
- 動的型付けと軽量な構文により、対話的な試行錯誤によるプログラミングを可能にした

## 影響を受けた言語

- [Simula](simula.md)
- [Lisp](lisp.md)
- [Logo](logo.md)
- [Planner](planner.md)


## 影響を与えた言語

- [Objective-C](objective_c.md)
- [C++](c_plus_plus.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Erlang](erlang.md)
- [Emerald](emerald_lang.md)
- [Self](self.md)
- [Wolfram Language](wolfram_language.md)
- [Actor](actor_lang.md)
- [Magik](magik.md)
- [Kaleidoscope](kaleidoscope_lang.md)
- [Strongtalk](strongtalk.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [Lasso](lasso_lang.md)
- [Squeak](squeak.md)
- [Etoys](etoys.md)
- [SuperCollider](supercollider.md)
- [Object REXX](object_rexx.md)
- [Logtalk](logtalk_lang.md)
- [Raku](raku.md)
- [Io](io.md)
- [Groovy](groovy.md)
- [Scratch](scratch.md)
- [Orc](orc_lang.md)
- [Newspeak](newspeak_lang.md)
- [AmbientTalk](ambienttalk.md)
- [Pharo](pharo.md)
- [Go](go.md)
- [Dart](dart.md)
- [Ceylon](ceylon.md)
- [Snap!](snap.md)


## 現在の位置づけ

商用の主流言語としての採用は限定的(niche)だが、オブジェクト指向プログラミングとGUIという2つの巨大な潮流の源流として、計算機科学史上の位置づけは揺るがない。Pharoなど末裔の処理系が現在も研究・教育目的で使われ続けている。

## Hello World

```
Transcript showCr: 'Hello, world!'.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Smalltalk)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Smalltalk)
