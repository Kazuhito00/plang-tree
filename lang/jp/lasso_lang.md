# Lasso

- 登場年: 1995年
- 設計者: Vince Bonfanti, Kyle Jessup
- パラダイム: procedural, object-oriented, concurrent
- 系統: scripting

## 解決したかった課題

1990年代半ば、Macintosh環境の開発者たちは、FileMaker Proのデータベースを使ってWebサイトのバックエンドを構築したいと考えていたが、そのためにはFileMakerのデータとWebページとを結び付ける手段が必要だった。

Lassoは1995年、Blue World Communications社によって「FileMaker用のWebデータソース接続ツール」として登場し、後にFileMaker 4.0やClaris Home PageにCDMLとして組み込まれた。その後、単なる接続ツールから、すべての値をオブジェクトとして扱う本格的な汎用オブジェクト指向Web開発言語へと発展していった。

## 特徴

- すべての値がオブジェクトとして扱われるオブジェクト指向言語(多重ディスパッチを含む)
- 動的型付けと自動メモリ管理
- 動的実行・JITコンパイル・事前コンパイルという3種類の実行方式
- 完全なUnicode対応とUTF-8への透過的な変換
- SQLに似た自然言語的な構文を持つ「クエリ式(Query Expressions)」
- Wikipediaのインフォボックスでは、Dylan、Smalltalk、Scalaからの影響が挙げられている

## 影響を受けた言語

- [Dylan](dylan.md)
- [Smalltalk](smalltalk.md)
- [Scala](scala.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Lassoは2005年前後のLasso 8/9でオブジェクト指向言語として大幅に再設計されたが、最新の安定版(9.3.1)は2015年10月のリリースで止まっており、開発元LassoSoftのマーケティング資源も限られていたことから、現在では実質的にlegacy化した言語となっている。

## Hello World

```lasso
<?lasso 'Hello World!' ?>
```

Lassoでは角括弧`[]`が予約構文であるため、次のような短縮記法でも同じ結果になる。

```lasso
['Hello world!']
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lasso_(programming_language))
- [Wikipedia(日本語)] 該当ページなし
