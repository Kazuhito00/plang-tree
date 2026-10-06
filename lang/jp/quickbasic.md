# QuickBASIC

- 登場年: 1985年
- 設計者: Microsoft
- パラダイム: procedural
- 系統: basic-family

## 解決したかった課題

GW-BASICは行番号とGOTO文に強く依存しており、プログラムが大きくなるほど処理の流れを追いにくくなる「スパゲッティコード」問題を抱えていた。また、インタプリタのみで実行速度も限られていた。Microsoftは、SUB/FUNCTIONによる構造化プログラミングを可能にし、行番号がなくてもプログラムを書けるようにするとともに、インタプリタに加えてコンパイラも提供することで、開発のしやすさと実行速度の両方を高めたQuickBASICを開発した。

## 特徴

- SUB/FUNCTIONによる名前付きサブルーチンで、行番号に頼らない構造化プログラミングが可能
- ユーザー定義型(TYPE)により、複数のデータをまとめて扱える
- インタプリタによる対話的な開発とコンパイラによる高速な実行ファイル生成の両方をサポート
- 統合開発環境(IDE)を備え、エディタ上でデバッグしながら開発できる
- 改良されたグラフィックス・ディスクI/O命令によりGW-BASICより表現力が高い

## 影響を受けた言語

- [GW-BASIC](gwbasic.md)


## 影響を与えた言語

- [Visual Basic(Classic)](visual_basic.md)
- [QBasic](qbasic.md)
- [Liberty BASIC](liberty_basic.md)
- [VBA](vba.md)
- [FreeBASIC](freebasic.md)


## 現在の位置づけ

現在は歴史的な言語(status: historical)として位置づけられている。QBasicやVisual Basicという二つの異なる方向性(教育用の軽量版と商用のビジュアル開発環境)を生み出した、BASIC系譜における重要な分岐点として記憶されている。

## Hello World

```basic
PRINT "Hello, world!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/QuickBASIC)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/QuickBASIC)
