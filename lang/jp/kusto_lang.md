# KQL (Kusto Query Language)

- 登場年: 2019年
- 設計者: Microsoft
- パラダイム: declarative, query, dataflow
- 系統: logic-declarative

## 解決したかった課題

Microsoftは自社のクラウドサービスから生み出される大量のログやテレメトリデータを、低遅延かつ高いスケーラビリティで分析する必要に迫られていた。従来のリレーショナルデータベース向けSQLは、時系列データやテキスト検索を多用する分析ワークロードには最適化されていなかった。そこでAzure Data Explorer(開発コード名Kusto)向けに、パイプ演算子でデータをテーブルから段階的に絞り込んでいく新しいクエリ言語が設計された。SQLに似た概念を保ちながらも、読みやすさと分析効率を重視した構文になっている。

## 特徴

- `|`(パイプ)演算子でデータをテーブルから段階的に絞り込み・変換していくデータフロー的な構文
- `where`、`summarize`、`project`、`extend`などの演算子を連鎖させて分析処理を記述する
- 大量の時系列ログ・テレメトリデータの検索や集計に最適化されている
- 全文検索演算子(`has`、`contains`など)により非構造化テキストの検索が容易
- Azure Monitor、Application Insights、Microsoft Sentinelなど複数のMicrosoft製品で共通のクエリ言語として使われる

## 影響を受けた言語

- [SQL](sql.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も現役の言語であり(status: active)、Azure Data ExplorerをはじめAzure MonitorやMicrosoft Sentinelなど、Microsoftのクラウド監視・セキュリティ製品群で標準的に使われ続けている。

## Hello World

```kql
print "Hello, World!"
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
