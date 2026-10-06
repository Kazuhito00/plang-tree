# DIBOL

- 登場年: 1970年
- 設計者: Digital Equipment Corporation
- パラダイム: procedural
- 系統: domain-specific

## 解決したかった課題

1970年前後、中小企業向けの経理や在庫管理といった業務処理(MIS: Management Information Systems)ソフトウェアを、DECのミニコン上で効率よく開発したいという要求があった。COBOLはこの種のデータ処理に十分な表現力を持っていたが、記述量が多く、当時のDECの小型機で扱うには重かった。

DIBOL(Digital's Business Oriented Language)は、COBOLのデータ部・手続き部という構造を保ちながら、FORTRANやBASICに近い簡潔な文法と、金額計算を正確に行うためのBCD(二進化十進)演算を組み合わせることで、DECのハードウェアに適した軽量な業務処理言語を目指した。

## 特徴

- 汎用の手続き型・命令型言語で、業務処理(MIS)向けに設計された
- COBOLと同様にデータ部と手続き部を分離するプログラム構造を持つ
- 構文はFORTRANやBASICに近く、COBOLより簡潔に記述できる
- BCD(二進化十進)演算により、金額計算での誤差を避けられる
- 数値ラベルではなく英数字ラベルを使用できる
- DIBOL-8、DIBOL-11、DIBOL-32など、対象ハードウェアに応じた複数のバージョンが存在した

## 影響を受けた言語

- [Fortran](fortran.md)
- [BASIC](basic.md)
- [COBOL](cobol.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

DIBOLはDECのミニコン(PDPシリーズなど)上で長年使われた業務処理向け言語であり、DIBOL-8、DIBOL-11、DIBOL-32といった版を重ねながら発展した。設計者として特定の個人名はWikipedia上では確認できず、Digital Equipment Corporationという企業名義でクレジットされている。

1993年、DECとDISC社の合意によりDIBOLは後継言語DBLに実質的に置き換えられ、開発は終了した。現在は完全に歴史的な言語という位置づけであり(status: historical)、DEC系ミニコン時代のCOBOL類似の業務処理言語として記憶されている。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事内にコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/DIBOL)
- [Wikipedia(日本語)](なし)
