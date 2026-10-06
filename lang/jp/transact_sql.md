# Transact-SQL(T-SQL)

- 登場年: 1984年
- 設計者: Sybase/Microsoft
- パラダイム: procedural, declarative
- 系統: logic-declarative

## 解決したかった課題

標準SQLは集合演算による宣言的な問い合わせを行う言語であり、変数宣言や条件分岐、ループといった手続き的な処理を表現する仕組みを持たなかった。

Sybaseは自社データベース製品において、複数のSQL文を組み合わせた業務ロジックをクライアントとサーバ間の通信なしにサーバ側でまとめて実行したいという要求に応えるため、SQLに手続き型の制御構造を加えたTransact-SQLを開発した。後にSybaseの技術を基にSQL Serverを開発したMicrosoftにも引き継がれ、同社の看板データベース製品の中核言語となった。

## 特徴

- 標準SQLに変数宣言、if/while文、例外処理(TRY/CATCH)などの手続き型構文を追加している
- ストアドプロシージャ・トリガー・ユーザー定義関数としてサーバ側にロジックを格納できる
- カーソルによる行単位の反復処理をサポートする
- SQL Serverに深く統合されており、システム関数やメタデータ操作も豊富に提供する
- Sybase由来の共通基盤を持ちつつ、Microsoft移行後は独自の拡張を重ねてきた
- ウィンドウ関数や再帰CTEなど、標準SQLの拡張機能も積極的に取り込んでいる

## 影響を受けた言語

- [SQL](sql.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Transact-SQLは現在もMicrosoft SQL Server(およびAzure SQL)の中核言語として活発に使われており、企業システムのストアドプロシージャ開発において広く現役利用されている。クラウド化が進む中でも、既存資産の移植先として引き続き重要な役割を担っている。

## Hello World

```sql
DECLARE @message NVARCHAR(50) = 'Hello, World!';
PRINT @message;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Transact-SQL)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Transact-SQL)
