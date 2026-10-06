# MAD

- 登場年: 1959年
- 設計者: Bernard Galler, Bruce Arden, Robert M. Graham
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

1950年代末、IBM 704などの初期の科学技術計算ではFORTRANやCOBOLは存在したものの、より簡潔で使いやすいプログラミング手段が求められていた。ミシガン大学のBernard Galler、Bruce Arden、Robert M. Grahamは、ALGOL 58(IAL)の考え方を出発点にしつつも大きく異なる独自設計により、MAD(Michigan Algorithm Decoder)を開発した。高速なコンパイルと分かりやすい構文により、1960年代を通じて多くの大学でプログラミング教育に用いられた。MADはCTSS、Multics、Michigan Terminal Systemの開発にも使われ、初期のELIZAチャットボットもMAD-SLIPで書かれた。

## 特徴

- ALGOL 58を出発点にしながらも独自の文法・意味論を持つ、ミシガン大学独自開発の言語である
- `PRINT COMMENT`文により、フォーマット指定なしに文字列をそのまま出力できる
- 1回のパスで高速にコンパイルできる設計で、当時の大学の実習環境に適した実行効率を実現した
- `WHENEVER`文などエラー処理・分岐に関する独自の制御構造を備える
- CTSS、Multics、Michigan Terminal Systemなど当時の主要なオペレーティングシステムの開発に利用された
- MAD-SLIPという方言は初期の人工知能研究(ELIZAなど)でも使われた

## 影響を受けた言語

- [ALGOL 58](algol_58.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

MADは1960年代の大学教育とシステム開発で重要な役割を果たしたが、その後のFORTRANやC言語などの普及により実用的な役割を終え、現在では歴史的な言語として位置づけられている。初期のOS開発や人工知能研究における使用例は、コンピュータ科学史の観点から今も参照される。

## Hello World

MADでは`PRINT COMMENT`文を用いることで、フォーマット指定なしに任意の文字列をそのまま出力できる。

```
PRINT COMMENT $HELLO WORLD$
END OF PROGRAM
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/MAD_%28programming_language%29)
