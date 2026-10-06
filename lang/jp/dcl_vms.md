# DCL (DIGITAL Command Language)

- 登場年: 1975年
- 設計者: Digital Equipment Corporation
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1970年代、DEC(Digital Equipment Corporation)はIAS、RSTS/E、RSX-11、RT-11など複数のオペレーティングシステムを並行して開発・提供していたが、それぞれのOSは独自のコマンド言語(RSX-11のMCRや、より古いCCLなど)を持っていた。利用者はOSを乗り換えるたびに異なる操作体系を覚え直す必要があり、DEC社内のドキュメント整備やサポートの観点でも非効率だった。

DCLは、これら複数のOSに共通して載せられる単一のコマンド言語として設計された。「$」で始まるコマンド(verb)、「/」で始まる修飾子(qualifier)、IF-THEN-ELSEによる条件分岐、システム状態を取得するための字句関数(lexical function)など、体系化された文法を持つことで、DEC系OS全体の操作性を統一することを目指した。

## 特徴

- コマンド(verb)は「$」で始まり、大文字小文字を区別しない
- オプションは「/」で始まる修飾子(qualifier)で指定する(例: `/OUTPUT=file.txt`)
- 文字列・整数・ビット配列・配列・ブール値などのデータ型を扱えるが、浮動小数点数は扱えない
- IF-THEN-ELSEによる条件分岐は持つが、伝統的なループ構文がなく、IFとGOTOラベルで繰り返しを表現する
- システム情報を取得する字句関数(F$個の関数群)によりスクリプト内で動的な判定ができる
- IAS、RSTS/E、RSX-11、RT-11、OpenVMS、VAXELN、MICAなど複数のDEC系OSに実装された

## 影響を受けた言語

特になし(RSX-11のMCRやCCLなど先行するDEC独自のコマンド言語から影響を受けたとされるが、これらは本データセットには未収録)

## 影響を与えた言語

特になし


## 現在の位置づけ

DCLはOpenVMSの標準コマンド言語として今も現役であり、DEC/Compaq/HPの後を継いでOpenVMSの開発を続けるVSI(VMS Software Inc.)によって保守が続けられている。PC-DCLやOpen DCLといった移植版により、WindowsやLinux/Unix上でもDCLスクリプトを動かすことができる。

とはいえOpenVMS自体の稼働環境が減少していることから、現在は縮小しつつあるレガシー技術という位置づけである(status: legacy)。一方で、修飾子構文や字句関数による体系立った設計は当時としては独特であり、プログラミング言語史の観点でも取り上げられることがある。

## Hello World

```
$ TYPE SYS$INPUT:
This is an example of using the TYPE verb
in the DCL language.
$ EXIT
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/DIGITAL_Command_Language)
- [Wikipedia(日本語)](なし)
