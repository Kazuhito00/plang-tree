# COMAL

- 登場年: 1975年
- 設計者: Børge R. Christensen, Benedict Løfstedt
- パラダイム: procedural
- 系統: basic-family

## 解決したかった課題

1970年代、教育現場で広く使われていたBASICは対話的で学びやすい一方、GOTO文中心の非構造的なコードになりやすく、いわゆる「スパゲティコード」を生みやすいという問題があった。デンマークの数学教師Børge Christensenは、BASICの手軽さとPascalの構造化プログラミングの利点を組み合わせた言語としてCOMALを設計した。IF...THEN...ENDIFやPROC...ENDPROCといったブロック構造を導入し、行番号やGOTOに頼らない読みやすいコードを書けるようにした。8ビットパソコン時代の教育用言語として北欧や英国の学校で普及した。

## 特徴

- `IF...THEN...ENDIF`、`WHILE...ENDWHILE`、`PROC...ENDPROC`などPascal譲りのブロック構造を備える
- 行番号やGOTO文に頼らずに、構造化プログラミングのスタイルで読みやすいコードを書ける
- BASICと同様に対話的な実行環境を持ち、初学者でもすぐに結果を確認しながら学べる
- ローカル変数を持つ手続き(PROC)や関数(FUNC)を定義でき、モジュール化されたプログラムを書ける
- 8ビットパソコン(BBC Micro、Commodoreなど)に移植され、教育現場での普及が進んだ

## 影響を受けた言語

- [BASIC](basic.md)
- [Pascal](pascal.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

COMALは現在も教育用言語として位置づけられており、構造化プログラミングの基礎を教えるための題材として一部の教育現場や愛好家コミュニティで使われ続けている。商用・産業用途で新規に採用されることはほぼないが、BASICから構造化プログラミングへの橋渡し役を果たした教育用言語として歴史的に評価されている。

## Hello World

COMALでは`PRINT`文を用いて文字列を出力する。

```comal
PRINT "Hello, world!"
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/COMAL)
