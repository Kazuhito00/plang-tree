# Flavors

- 登場年: 1980年(注: Wikipedia上に明確な初出年の記載はなく、確認できる最古の一次資料はMIT AIラボの1980年の技術報告書)
- 設計者: Howard Cannon
- パラダイム: object-oriented, symbolic
- 系統: lisp-scheme

## 解決したかった課題

MIT AIラボのLispマシン上では、基盤となるLisp Machine Lisp自体にオブジェクト指向の仕組みがなく、複数の独立した振る舞いの断片を組み合わせて1つのオブジェクトの型を柔軟に作り上げることができなかった。

Howard Cannonは、独立した複数の「フレーバー」を合成することでオブジェクトの振る舞いを組み立てられる、階層構造に縛られないオブジェクト指向の仕組みをLisp上に持ち込むことでこの課題に取り組んだ。

## 特徴

- Lispマシンおよびそのプログラミング言語Lisp Machine Lisp向けの初期のオブジェクト指向拡張
- 世界初にmixin(混入)を導入した言語として知られる
- メッセージパッシング型のオブジェクトモデルを採用
- `:before`/`:after`の「デーモン」によるデフォルトのメソッド合成をサポート
- SymbolicsのLispマシンで採用され、後に「New Flavors」へと発展した(メッセージ送信をジェネリック関数呼び出しに置き換えた)
- Common Lisp Object System(CLOS)の設計に大きな影響を与えた

## 影響を受けた言語

- [Lisp](lisp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Flavorsは、Lisp初期のオブジェクト指向拡張として、mixinという概念を初めて導入した言語として知られる。SymbolicsのLispマシンで使われ、後継の「New Flavors」を経て、Common Lisp Object System(CLOS)の設計に大きな影響を与えた。

Wikipedia上には正確な初出年の記載がなく、確認できる最も古い一次資料はMIT AIラボの1980年の技術報告書、およびDaniel WeinrebとDavid Moonによる1980年11月のA.I. Memo No. 602「Flavors: Message Passing in the Lisp Machine」である。現在は歴史的な言語という位置づけであり(status: historical)、Common Lisp向けの実装が今も存在する。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事内にコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Flavors_(programming_language))
- [Wikipedia(日本語)](なし)
