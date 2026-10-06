# Progress ABL (OpenEdge)

- 登場年: 1984年
- 設計者: Progress Software Corporation
- パラダイム: procedural, object-oriented, query
- 系統: domain-specific

## 解決したかった課題

1980年代初頭、企業向け業務アプリケーションはメインフレーム向けのCOBOLやUNIXミニコン向けのCなど専門知識を要する言語で開発されており、開発コストと期間が大きな課題だった。Progress社はアーキテクチャに依存しない4GLとデータベースを統合したプラットフォームを提供することで、コンピュータ科学の専門家でない業務担当者でも迅速にビジネスアプリケーションを構築できるようにすることを目指した。IBM PCなど安価なハードウェアの普及に伴い、多様な環境で動く統一開発基盤への需要にも応えた。後にOpenEdge ABLとしてオブジェクト指向機能も取り込み、現在も企業システムで現役利用されている。

## 特徴

- データベースエンジンと言語処理系が一体化しており、SQLを意識せずにデータアクセスを記述できる
- 4GL(第4世代言語)として、手続き型の記述に加えデータ操作に特化した高水準構文を備える
- OpenEdge ABLへの進化に伴いオブジェクト指向のクラス構文が追加され、大規模業務システムの保守性が向上した
- アーキテクチャニュートラルな中間コードにより、異なるOS環境間での可搬性を確保している
- 画面フォームやレポート出力を効率的に生成するための宣言的な要素を備える

## 影響を受けた言語

- [COBOL](cobol.md)
- [C](c.md)
- [SQL](sql.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

active(現役)であり、金融・製造・行政など企業の基幹業務システムで現在も広く利用され続けている。OpenEdgeプラットフォームとしてProgress Software社により継続的に保守・拡張が行われている。

## Hello World

```
MESSAGE "Hello, world" VIEW-AS ALERT-BOX.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/OpenEdge_Advanced_Business_Language)
