# Ratfor

- 登場年: 1976年
- 設計者: Brian Kernighan
- パラダイム: procedural, macro
- 系統: origin

## 解決したかった課題

1960〜70年代に主流だったFortran 66は、GOTO文と文番号による分岐が中心で、if-else・while・forといった構造化された制御構文を持たず、桁位置(カラム)に厳格な制約のある古い書式のままだった。

ベル研究所のBrian Kernighanは1974年にRatfor(Rational Fortranの略)を考案・実装し、1975年に論文誌Software—Practice & Experienceで発表した(Wikipedia記事のインフォボックス上の「First appeared」は1976年とされている)。RatforはFortran 66用のプリプロセッサ(トランスコンパイラ)であり、if-else・while・for・do・repeat-until・break・nextといった制御構文、波括弧によるブロック化、自由な書式、`<`や`>`のような比較演算子など、Kernighan自身が「C言語からあからさまに借用した」と述べる機能を備えていた。Ratforで書かれたソースコードは標準的なFortran 66のコードに変換されてからコンパイルされた。1976年の著書『Software Tools』(Kernighan, P. J. Plauger共著)では、サンプルプログラム自体がRatforで記述されており、この言語の知名度を大きく高めた。

## 特徴

- if-else・while・for・do・repeat-until・break・nextなど、構造化された制御構文を提供する
- 波括弧によるブロック化と、Fortran特有の桁位置制約を排した自由書式を採用する
- `<`、`>`など、Fortranの`.LT.`・`.GT.`に代わる読みやすい比較演算子を持つ
- プリプロセッサ(トランスコンパイラ)として動作し、Ratforのコードを標準的なFortran 66に変換してからコンパイルする
- 制御構造の多くはC言語から取り入れられた(Kernighan自身の言葉による)
- 1976年の著書『Software Tools』のサンプルコードに採用され、広く読まれた

## 影響を受けた言語

- [Fortran](fortran.md)
- [C](c.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Ratforは今日では歴史的な言語として位置づけられており(status: historical)、実務でゼロから採用されることはほとんどない。

しかし、GOTO文中心の古いFortranから構造化プログラミングへの橋渡しを行ったプリプロセッサとして、また『Software Tools』という書籍を通じてソフトウェア工学の教育に影響を与えた事例として、プログラミング言語史の中でしばしば言及される。

## Hello World

Wikipedia記事には文字列出力を行うHello World形式のサンプルは記載されていないが、Ratforの制御構文の例として次のif-else文が掲載されている。

```
if (a > b) {
  max = a
} else {
  max = b
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Ratfor)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Ratfor)
