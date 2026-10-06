# PBASIC

- 登場年: 1992年
- 設計者: Parallax, Inc.(個人名は一次資料上で確認できなかった)
- パラダイム: procedural
- 系統: basic-family

## 解決したかった課題

1990年代初頭、マイクロコントローラや組み込みプロセッサの世界はアセンブリ言語での開発が主流であり、ホビイストや教育目的の利用者にとっては敷居が高かった。Parallax, Inc.は、BASIC言語の平易な構文をそのまま組み込み開発に持ち込み、HIGH・LOW・PULSOUT・DEBUGといったハードウェア制御用の専用コマンドを追加することで、マイコンプログラミングを手軽にする言語PBASICを開発した。

PBASICのプログラムはトークン化・Huffman圧縮された形でEEPROMに書き込まれ、これを「BASIC Stamp」(初期モデルはPIC・SXチップを採用)という製品名のモジュールとして1992年に発売した。以降BS1からBS2PXまで複数のバージョンが展開された。

## 特徴

- BASIC言語由来の平易な構文(DO LOOP、FOR NEXT、IF/ENDIFなど)を持つ
- HIGH、LOW、PULSOUT、DEBUG、FREQOUTなどハードウェア制御専用の命令を備える
- プログラムはHuffman圧縮された可変長トークンとしてEEPROMに格納される
- Windows向けのStamp Editor統合開発環境でプログラミング・デバッグが行える
- BASIC Stamp(BS1〜BS2PXなど)という専用ハードウェアモジュール上で動作する

## 影響を受けた言語

- [BASIC](basic.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

PBASICは現在「legacy」な言語であり、Parallax社自身もPropellerチップ向けのSpinなど新しい言語・プラットフォームに軸を移している。しかし既存のBASIC Stamp製品を用いた教育現場やホビー用途、産業機器の保守目的では、現在も一定の利用が続いている。

## Hello World

```
' {$STAMP BS2}
' {$PBASIC 2.5}

DEBUG "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PBASIC)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PBASIC)
