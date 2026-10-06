# Magik

- 登場年: 1989年
- 設計者: Arthur Chance
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

Magikは、1989年にSmallworld Systems Ltd.のArthur Chanceによって設計・実装された。同社の地理情報システム(GIS)製品Smallworldの中核言語として開発されたもので、多重継承とポリモーフィズムをサポートする動的型付けのオブジェクト指向言語が必要とされていた。1990年に正式に導入された。

## 特徴

- 動的型付けのオブジェクト指向言語で、多重継承とポリモーフィズムをサポートする
- バイトコードにコンパイルされ、専用の仮想機械(VM)上で実行される
- Smalltalkとのアーキテクチャ・VM実行方式の類似点がWikipedia記事内で指摘されているが、設計上の直接的な影響関係として明記されているわけではない(一次資料上、影響関係の詳細は確認できなかった)
- 2012年にJVM上で動作するよう移植された(Oracle社のブログでも確認されている)
- Smallworld社の2000年の買収後は、GE Energyの技術基盤として提供されている

## 影響を受けた言語

- [Smalltalk](smalltalk.md)(※Wikipedia記事では「類似点」として言及されているのみで、設計上の直接的な影響として明記された記述は一次資料上確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

Magikは現在もGE Energyが提供するSmallworld GIS製品の基盤言語として使われ続けている、業務システム分野のニッチな言語である(status: niche)。最新版は5.2で、2012年にはJVM上での動作にも対応した。

## Hello World

```
write("Hello World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Magik_(programming_language))
