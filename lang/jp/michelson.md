# Michelson

- 登場年: 2018年
- 設計者: Arthur Breitman, Kathleen Breitman
- パラダイム: functional, procedural
- 系統: domain-specific

## 解決したかった課題

2016年のThe DAO事件に代表されるように、スマートコントラクトのバグは取り返しのつかない金銭的損失につながる恐れがあった。Tezosは、こうしたリスクを減らすため形式検証になじみやすいスマートコントラクト言語を必要としていた。Michelsonは、Forth・Scheme・ML・Catといった複数の言語系統からアイデアを取り入れ、スタックベースで副作用を持たない純粋関数型かつ静的型付けの言語として設計された。型付けされたプログラムは実行前に検証されるため、スタック形状の不整合などによる実行時エラーが原理的に発生しない。

## 特徴

- スタックベースの計算モデルを採用し、命令はスタック上の値を操作することでプログラムを構成する
- 静的型付けであり、プログラムのスタック形状が実行前に検証されるため型に起因する実行時エラーが起こらない
- 副作用を持たない純粋関数型的な設計思想を持ち、形式検証との相性が良い
- Forth由来のスタック操作、Scheme・ML由来の型と関数の考え方、Cat由来の合成的な設計を取り入れている
- Tezosのスマートコントラクトの実行言語として、コンパイル先や検証対象の低レベル言語に位置づけられる

## 影響を受けた言語

- [Forth](forth.md)
- [Scheme](scheme.md)
- [Standard ML](standard_ml.md)
- [Cat](cat_lang.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

MichelsonはTezosブロックチェーンのスマートコントラクト実行言語として現役で稼働を続けている。形式検証になじみやすい設計から、より高水準な言語(LigoやSmartPyなど)のコンパイル先としても使われている。

## Hello World

```
parameter unit;
storage string;
code { CDR ; PUSH string "Hello, world!" ; NIL operation ; PAIR }
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
