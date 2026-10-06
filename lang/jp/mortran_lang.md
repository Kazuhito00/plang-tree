# Mortran

- 登場年: 1976年(注: これは記事が挙げる唯一の参考文献の発表年に基づく近似値であり、Wikipedia本文には明確な初出年の記載はない)
- 設計者: A. James Cook(推定。記事本文に設計者名の明記はなく、唯一の参考文献の著者名からの推定)
- パラダイム: procedural, macro
- 系統: numeric-scientific

## 解決したかった課題

Mortran("More Fortran")は、科学計算(特に物理計算)向けにFortranを拡張したマクロプロセッサ型言語である。Mortranのソースコードは(ANSI標準Fortran 66で書かれた)マクロプロセッサによって通常のFortranコードに変換されてからコンパイルされる。セミコロンを文の区切りとして使えるようにしたり、ブロック構造を角括弧で表現できるようにしたりすることで、Fortranで書かれる大規模な科学計算・物理計算コードの可読性と柔軟性を高めることを目的としていた。

なお、英語版Wikipedia記事には設計者名や正確な初出年の明記はない。記事本文中で名前が確認できる唯一の人物は、記事が参考文献として挙げる論文(Cook, A. James, "Experience with extensible, portable Fortran extensions", ACM SIGPLAN Notices 11(9), 1976)の著者A. James Cookであり、本データセットの登場年(1976年)はこの論文の発表年に基づく近似値である。また、記事の外部リンクはCERNではなくSLAC(スタンフォード線形加速器センター)関連の物理計算(EGS: Electron Gamma Shower シミュレーションコードなど)やKEKとの関連を示している。

## 特徴

- Fortranのマクロプロセッサとして実装され、Mortranのコードは通常のFortranに変換されてからコンパイルされる
- セミコロンによる文の終端や、角括弧によるブロック構造など、可読性を高める構文糖衣を提供する
- マクロプロセッサ自体はANSI標準Fortran 66で書かれている
- Charles ZahnによるSKOL言語(1970年代半ば)はMortranのマクロを用いて実装された
- SLACやKEKなど、素粒子物理学の計算機関連文書に関連文献が残っている

## 影響を受けた言語

- [Fortran](fortran.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Mortranは現在では使われていない歴史的な言語である(status: historical)。素粒子物理学分野の計算コード(EGSなど)に関連して言及されるのみで、現役の利用は確認できない。

## Hello World

Hello World相当の例は確認できなかった。記事に掲載されている実際のコード例は以下の通り。

```
I=1,200; J=I;
    UNTIL M(J).EQ.0 <
        J=M(J);
    >
    IF I.NE.J <
        OUTPUT I,M(J+1); (' Chain',I4,' ends with ',A4);
    >
>
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Mortran)
