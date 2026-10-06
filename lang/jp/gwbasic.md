# GW-BASIC

- 登場年: 1983年
- 設計者: Microsoft
- パラダイム: procedural
- 系統: basic-family

## 解決したかった課題

初期のIBM PCには、ROMに焼き込まれたCassette BASICやディスク版のBASICA(IBM製)が搭載されていたが、これらはIBM製ハードウェアのROMに依存しており、他社製のPC/AT互換機ではそのまま動かせなかった。MicrosoftはROMに依存しない、ディスクだけで完結する独立したBASIC処理系としてGW-BASICを開発し、既存のBASICAプログラムとの高い互換性を保ちながら、PC-DOS/MS-DOS環境全般で広く配布できるようにした。

## 特徴

- 行番号とGOTO/GOSUB文を中心とした古典的なBASICの文法を踏襲
- ROMに依存しない、フロッピーディスクだけで動作する独立したインタプリタ
- IBM Cassette BASIC/BASICAとの高い互換性を持ち、既存プログラム資産をそのまま実行できた
- グラフィックス命令やサウンド命令など、当時のPCハードウェアを直接制御する命令を多数備える
- 多くのPC/AT互換機メーカーにバンドルされ、1980年代のパソコン利用者の入門言語として広く普及した

## 影響を受けた言語

- [BASIC](basic.md)


## 影響を与えた言語

- [QuickBASIC](quickbasic.md)
- [QBasic](qbasic.md)


## 現在の位置づけ

現在は歴史的な言語(status: historical)として位置づけられており、実務で使われる場面はほぼない。しかし1980年代のパソコン普及期に果たした役割は大きく、後継のQuickBASIC・QBasic・Visual Basicへと連なる系譜の出発点として、プログラミング教育史における重要な位置を占めている。

## Hello World

```basic
10 PRINT "HELLO, WORLD!"
20 END
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/GW-BASIC)
