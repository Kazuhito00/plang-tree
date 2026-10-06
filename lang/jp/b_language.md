# B

- 登場年: 1969年
- 設計者: Ken Thompson
- パラダイム: procedural
- 系統: c-family

## 解決したかった課題

ベル研究所で初期のUnixが開発されていたPDP-7は、メモリが極めて乏しいミニコンピュータであり、当時のBCPLの処理系をそのまま動かすには重すぎた。Ken ThompsonはBCPLの設計思想を踏襲しつつ、インタプリタ方式で動作しメモリ消費の少ない軽量版言語としてBを作った。

型を持たないワード単位の単純なモデルはBCPLから引き継がれ、Unix初期のツール群やカーネルの一部の記述に使われた。しかしメモリのワード単位アドレッシングに強く依存する設計は、後にバイト単位アドレッシングを持つPDP-11への移行時に限界を露呈することになる。

## 特徴

- BCPL同様、型を持たずすべての値をワードとして扱う
- インタプリタとして実装され、省メモリなPDP-7上でも動作した
- Unix最初期の開発言語として、多くのユーティリティの記述に使われた
- PDP-11のバイト単位アドレッシングには不向きで、この制約が後継言語Cの誕生を促した
- 文法・演算子の多くはBCPLから引き継がれ、Cにもそのまま受け継がれた
- 変数宣言に型指定がなく、暗黙的に整数(ワード)として扱われる点が後のCとの大きな違いだった

## 影響を受けた言語

- [BCPL](bcpl.md)
- [Fortran](fortran.md)
- [PL/I](pl_i.md)


## 影響を与えた言語

- [C](c.md)


## 現在の位置づけ

現在は歴史的言語として位置づけられている(status: historical)が、BCPLを単純化しUnix初期の開発を支えた実績により、C言語の直接の前身として計算機科学史に名を残している。

実用で使われることはないが、C言語の設計思想を理解する上での重要な参照点として今も言及され続けている。

## Hello World

Dennis Ritchieが1972年に書いた「A Tutorial Introduction to the Language B」に登場する、記録に残る最初期の「Hello, world」プログラムである。文字列型を持たないため、複数文字をパックした定数を外部変数に格納し、`putchar`で1語ずつ取り出して出力している。

```
main( ) {
    extrn a, b, c;

    putchar(a); putchar(b); putchar(c); putchar('!*n');
}

a 'hell';
b 'o, w';
c 'orld';
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/B言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/B_%28programming_language%29)
