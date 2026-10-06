# Chapel

- 登場年: 2009年
- 設計者: David Callahan, Hans Zima, Brad Chamberlain
- パラダイム: object-oriented, concurrent, array, procedural
- 系統: numeric-scientific

## 解決したかった課題

Chapelは、HPC(高性能計算)分野において、FortranやC/C++にMPIを組み合わせた並列プログラミングが複雑で生産性が低いという課題に対応するために開発された。従来の手法では、アルゴリズムそのものの記述と、データ分散や並列化といった実装上の詳細が密接に絡み合い、コードの見通しが悪くなりがちだった。Chapelはこの二つを分離することを目指し、アルゴリズムを簡潔に表現しながら、必要に応じて並列実行の詳細を制御できる設計を採用した。また、Fortran/C系のHPC技術者と、JavaやPythonに慣れた新しい世代の開発者の双方にとって書きやすい言語にすることを狙った点も特徴である。

## 特徴

- グローバルビュー並列性という考え方を採用し、分散メモリシステム全体を単一のアドレス空間であるかのように記述できる
- 配列に対する豊富な組み込みサポートを持ち、多次元配列やその分散方法を宣言的に指定できる
- タスク並列性とデータ並列性の両方を第一級の言語機能として提供する
- オブジェクト指向とジェネリクスを備え、現代的な言語機能と高性能計算の要求を両立させている
- PGAS(分割グローバルアドレス空間)モデルに基づき、ノード間のデータ配置を明示的にも暗黙的にも扱える

## 影響を受けた言語

- [C](c.md)
- [C++](c_plus_plus.md)
- [Java](java.md)
- [Ada](ada.md)
- [Fortran](fortran.md)
- [C#](c_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

active(現役で広く使われている)言語として位置づけられる。Cray(現HPE)を中心にオープンソースで開発が継続されており、スーパーコンピュータ上での科学技術計算やデータ並列処理の分野で使われている。

## Hello World

Chapelでは`writeln`で標準出力への書き込みを行う。

```chapel
writeln("Hello, World!");
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Chapel)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Chapel_%28programming_language%29)
