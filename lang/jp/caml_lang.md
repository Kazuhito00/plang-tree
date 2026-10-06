# Caml

- 登場年: 1985年
- 設計者: Gérard Huet, Guy Cousineau, Ascánder Suárez, Pierre Weis, Michel Mauny
- パラダイム: functional, procedural
- 系統: ml-functional

## 解決したかった課題

1970年代に定理証明支援系LCFのメタ言語として生まれたML言語は、型推論やパターンマッチングといった特徴が一般的なプログラミングにも有用であることが分かってきた。フランスのINRIAとENSパリの研究者たちは、このMLファミリーの考え方を引き継ぎつつ、独自の実装・方言を作ろうとした。これがCamlである。

最初の実装は1987年にAscánder SuárezによってLispで書かれた。

## 特徴

- MLファミリーの方言であり、静的型付け・型推論・厳格な評価順序・自動メモリ管理(ガベージコレクション)を備える
- パターンマッチング、高階関数、カリー化を得意とする
- 最初の実装はLispで書かれていたが、Xavier LeroyによってC言語で書き直され、より効率的な「Caml Light」となった
- さらに「Caml Special Light」への書き直しで強力なモジュールシステムが追加された
- 最終的にオブジェクト指向機能が加わり、「Objective Caml」、後に「OCaml」へと改名・発展した
- 安定版としてのCaml自体は0.75(2002年1月)が最後のリリースとなっている

## 影響を受けた言語

- [ML](ml_lang.md)

## 影響を与えた言語

- [OCaml](ocaml.md)


## 現在の位置づけ

Caml自体は2002年の0.75を最後に更新が止まっており、現在は歴史的な言語として位置づけられている(status: historical)。

しかし、その主要な後継言語であるOCamlは現在も定理証明・形式検証・学術研究などの分野で活発に使われており、Camlはその直接の起源として計算機科学史に重要な位置を占めている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Caml)
