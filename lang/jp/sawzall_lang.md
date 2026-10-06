# Sawzall

- 登場年: 2003年
- 設計者: Rob Pike, Sean Dorward, Robert Griesemer, Sean Quinlan
- パラダイム: procedural, query
- 系統: domain-specific

## 解決したかった課題

2000年代初頭、Googleは検索ログなど莫大な量のログレコードを解析する必要に迫られていたが、こうした解析処理をMapReduceのフレームワーク上でC++やJavaによって直接記述すると、定型的なコードが多く冗長になりがちだった。Rob Pike、Sean Dorward、Robert Griesemer、Sean Quinlanらは、1件のログレコードを入力として受け取り、集計テーブルへの出力(emit)のみを行うという制約を課した手続き型のドメイン固有言語Sawzallを設計し、MapReduceのMapフェーズで実行されるスクリプトを簡潔に書けるようにした。

目的は、静的型付けでx86にコンパイルされる軽量な言語によって、ログ解析スクリプトの記述をC++やJavaで書くよりも大幅に速く、簡潔にすることだった。

## 特徴

- 1件のログレコードを入力として受け取る手続き型のドメイン固有言語
- 出力はテーブルへのemit(集計)のみに限定される設計
- 静的型付けでx86ネイティブコードにコンパイル
- リスト・マップ・構造体をサポート(ポインタ・参照は持たない)
- sum, maximum(n), sample(n), quantile(n), top(n), uniqueなど多様な集計テーブル型を提供
- MapReduceのMapフェーズのスクリプトとして実行される

## 影響を受けた言語

特になし(一次資料上、既存の特定言語からの明確な影響関係は確認できなかった。MapReduceという計算モデル上の実用上の必要性から設計された)

## 影響を与えた言語

特になし


## 現在の位置づけ

szlランタイムは2010年8月にApache License 2.0でオープンソース化されたが、MapReduce用の集計テーブル(テーブルアグリゲータ)部分は公開されなかった。Google社内では、Sawzallはその後Go言語をベースとしたLingo(logs in Go)にほとんどの用途で置き換えられており、現在は歴史的な言語として位置づけられる。

## Hello World

Sawzallには文字列を出力するだけの慣用句はなく、文献で最も広く引用される最小限の例として、ログの件数・合計・二乗和を集計テーブルへ出力する例を示す。

```
count: table sum of int;
total: table sum of float;
sum_of_squares: table sum of float;
x: float = input;
emit count <- 1;
emit total <- x;
emit sum_of_squares <- x * x;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Sawzall_(programming_language))
- Wikipedia(日本語): 該当記事なし(「Sawzall」は関係データベースの記事へのリダイレクトのみ)
