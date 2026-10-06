# Informix-4GL

- 登場年: 1986年
- 設計者: Chris Maloney, Roy Harrington, Informix Corporation
- パラダイム: procedural, query, declarative
- 系統: domain-specific

## 解決したかった課題

業務用のデータベースアプリケーションを効率的に開発するには、手続き型のロジック記述、SQLによるデータベース操作、そして画面フォームやレポートの生成という複数の要素を一つの言語でまとめて扱えることが望ましかった。Informix社はChris MaloneyとRoy Harringtonのもとで1985年に開発を開始し、C・COBOL・SQL、そして自社の前身言語であるISQL(Informix SQL)の影響を受けた第4世代言語(4GL)、Informix-4GLを1986年2月15日にリリースした。

## 特徴

- 手続き型ロジックと埋め込みSQLを一体化した記述が可能
- Form Painter・Screen Code Generatorによる画面UI・レポート開発支援機能を搭載
- ネイティブコンパイルを行うCコンパイラモデルと、インタプリタ型のpコードを用いるRDSモデルの2種類のコンパイル方式を提供
- 自然言語に近い読みやすい文法で、学習しやすいことを重視
- Unix/Linux環境での強力なクロスプラットフォームサポート

## 影響を受けた言語

- [C](c.md)
- [COBOL](cobol.md)
- [SQL](sql.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Informix-4GLは、IBMが2017年にInformix資産をHCL Technologiesに譲渡した後も、既存の業務システムを保守する目的で使われ続けているレガシー言語である。新規開発でのシェアはほぼなく、既存資産の保守が中心となっている。

## Hello World

一次資料上で具体的なHello Worldのコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Informix-4GL)
- [Wikipedia(日本語)] なし
