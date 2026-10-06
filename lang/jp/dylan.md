# Dylan

- 登場年: 1992年
- 設計者: Apple ALS研究所
- パラダイム: 関数型、オブジェクト指向
- 系統: Lisp/Scheme系

## 解決したかった課題

1990年代初頭、AppleはNewton等の次世代デバイス向けに、Lispが持つ強力な表現力(動的型付け、マクロ、ガベージコレクション)を活かしつつ、括弧の多いS式構文に馴染みのない一般プログラマにも受け入れられる言語を模索していた。そこで、SchemeやCommon Lispの意味論を土台としながら、ALGOL系のような読みやすい中置記法の構文を持つ動的言語としてDylanが設計された。

当初は括弧を用いたS式構文のプロトタイプ(Prefix Dylan)として始まったが、市場の受容性を考慮して最終的に中置記法(Infix Dylan)が採用された経緯がある。

## 特徴

- Scheme由来のレキシカルスコープと、Common Lisp(CLOS)由来のオブジェクトシステム・マルチメソッドを統合
- S式ではなくAlgol風の中置記法を採用し、可読性を重視
- 静的型付けと動的型付けを併用できる漸進的型付けの先駆的な試み
- モジュールシステムによるコードの分割・管理を重視
- ガベージコレクションと動的型付けによる高い生産性
- インクリメンタルコンパイルにより対話的な開発サイクルを重視
- マルチメソッド(多重ディスパッチ)による柔軟なオブジェクト間の振る舞い定義

## 影響を受けた言語

- [Scheme](scheme.md)
- [Common Lisp](common_lisp.md)


## 影響を与えた言語

- [NewtonScript](newtonscript.md)
- [Lasso](lasso_lang.md)
- [Julia](julia.md)


## 現在の位置づけ

Dylanは「historical」な言語であり、Apple Newton向けに開発されたものの商業的には普及せず、現在は主に言語設計史における実験的な試みとして参照される存在となっている。動的言語に静的型の要素を段階的に取り入れる発想は、後年の漸進的型付け(gradual typing)の議論を先取りしたものとして再評価されることもある。

## Hello World

```
Module: hello

format-out("Hello, World!\n");
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Dylan)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Dylan_%28programming_language%29)
