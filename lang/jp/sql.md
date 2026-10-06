# SQL

- 登場年: 1974年
- 設計者: Donald Chamberlin, Raymond Boyce
- パラダイム: declarative, query
- 系統: logic-declarative

## 解決したかった課題

1970年、IBMの研究者E.F.Coddは、データをテーブルの集合として扱う「リレーショナルモデル」という画期的な理論を発表したが、それを実際に操作するための言語は数学的な関係代数・関係論理そのままで、専門知識のない業務担当者には扱いにくかった。同じくIBMのDonald ChamberlinとRaymond Boyceは、このリレーショナルモデルを、英語の文に近い「SELECT」「FROM」「WHERE」といった構文で誰でも問い合わせできるようにしたいと考えた。当初SEQUEL(Structured English QUEry Language)と呼ばれたこの言語は、後にSQLと改称され、リレーショナルデータベース管理システム(RDBMS)の標準問い合わせ言語として定着した。

## 特徴

- 「何が欲しいか」を宣言するだけで「どう取得するか」はDBMSに任せる宣言型言語
- SELECT・INSERT・UPDATE・DELETEなど英語に近い構文でデータ操作を記述する
- リレーショナルモデルに基づき、テーブル(関係)の集合演算として問い合わせを表現する
- ISO/ANSI標準化されており、ほぼ全てのRDBMS製品で共通に使われる
- 各ベンダーが手続き型拡張(PL/SQL、Transact-SQLなど)を独自に追加している

## 影響を受けた言語

- [Datalog](datalog.md)


## 影響を与えた言語

- [SAS](sas.md)
- [ABAP](abap.md)
- [Transact-SQL(T-SQL)](transact_sql.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [Informix-4GL](informix_4gl.md)
- [PL/SQL](plsql.md)
- [PowerBuilder](powerbuilder.md)
- [PowerShell](powershell.md)
- [XQuery](xquery.md)
- [.QL(CodeQL)](ql_codeql.md)
- [SPARQL](sparql.md)
- [Gremlin](gremlin_lang.md)
- [Cypher](cypher_lang.md)
- [KQL (Kusto Query Language)](kusto_lang.md)


## 現在の位置づけ

現在も現役の言語であり(status: active)、リレーショナルデータベース問い合わせの事実上唯一の標準言語として、ほぼ全ての業務システム・Webサービスの背後で使われ続けている。

## Hello World

SQLには「画面に出力する」という概念が薄いため、代表的な最小の問い合わせを示す。

```sql
SELECT 'Hello, World!';
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/SQL)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SQL)
