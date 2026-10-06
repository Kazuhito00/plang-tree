# DAX (Data Analysis Expressions)

- 登場年: 2009年
- 設計者: Microsoft(SQL Server Analysis Servicesチーム)
- パラダイム: declarative, query
- 系統: domain-specific

## 解決したかった課題

Excelの数式はセル単位の表計算には強いが、複数テーブルにまたがるリレーショナルなデータモデルに対して集計や前年同月比のような比較計算を表現するのは難しかった。SQLやMDXはこうした集計を得意とするものの、その書き方はExcelユーザーが慣れている数式的な記法とはかなり異なっていた。

Microsoftは、セルフサービス型ビジネスインテリジェンスの取り組み「Project Gemini」の中で、Excelの数式に近い書き心地を保ちながら、リレーショナル(テーブル)形式のデータモデル上で動的な集計を行える言語を必要としていた。

## 特徴

- Excelの数式でおなじみの関数名を多く引き継ぎつつ、リレーショナルデータ向けの関数や動的集計機能を追加している
- 「計算列(Calculated Column)」「メジャー(Measure)」「計算テーブル(Calculated Table)」といった単位で計算を定義できる
- PowerPivot、Power BI Desktop、SQL Server Analysis Services(Tabularモード)のネイティブな数式/クエリ言語として動作する
- 元はMDX(多次元式言語)の考え方とExcelの数式機能を組み合わせる形で発展した
- 2026年時点で340前後の関数、計算テーブル、自動日付テーブル、変数などをサポートする

## 影響を受けた言語

特になし(MDXから発展したとされるが、MDXは本データセットには未収録)

## 影響を与えた言語

特になし


## 現在の位置づけ

DAXは2009年、Project Geminiの一環として登場し、現在ではMicrosoft PowerPivot、Power BI Desktop、SQL Server Analysis Servicesのネイティブな数式/クエリ言語として広く使われている。

2016年のPower BI拡大やSQL Server 2016のリリースを経て機能が拡充され、現在も活発に開発が続いている(status: active)。Wikipedia上では個人名の設計者は明記されておらず、Microsoft社のSQL Server Analysis Servicesチームによる開発としてクレジットされている。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事内に具体的なDAX数式の例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Data_Analysis_Expressions)
- [Wikipedia(日本語)](なし、日本語版「DAX」は曖昧さ回避ページ)
