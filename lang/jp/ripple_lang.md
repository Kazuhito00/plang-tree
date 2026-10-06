# Ripple

- 登場年: 2007年
- 設計者: Joshua Shinavier
- パラダイム: functional, stack-based, concatenative, query
- 系統: logic-declarative

## 解決したかった課題

2000年代半ば、セマンティックWeb上のRDF(Resource Description Framework)データは急速に増加していたが、SPARQLのような宣言的クエリ言語だけでは、グラフ上をリンクをたどりながら経路的にデータを変換・合成していくスクリプト的な操作を簡潔に書くことが難しかった。

Joshua Shinavierは、XPathのような経路式(path expression)の考え方と、Forth・Factorに代表されるポストフィックス型・スタックベースの連結型(concatenative)関数型言語のスタイルを組み合わせることで、この課題を解決しようとした。Rippleのプログラムはスタック上の値をパイプライン的に処理していく形で書かれ、さらにプログラム自体がRDFグラフとして表現されるため、Web上のデータとしてプログラムを公開・共有し、Linked Dataに対して直接問い合わせることができる。

実装はJavaで行われ、対話的なコマンドラインインタプリタと、RDFストア(Sesame/RDF4J)と連携するクエリAPIが提供された。

## 特徴

- スタックベース・連結型(concatenative)の関数型言語で、後置記法(postfix)の式を記述する
- プログラムがそのままRDFグラフとして表現され、Linked Dataとして埋め込み・公開できる
- XPathに似た経路式でRDFグラフをたどるトラバーサル操作をサポート
- 正規表現的な量化子(`?` `*` `+` `{n,m}`)でパスの繰り返しを指定できる
- control・data・graph・logic・math・stack・stream・stringなど豊富な組み込みライブラリを持つ
- LinkedDataSailを通じてApache TinkerPop/Gremlinのグラフ処理系と連携できる

## 影響を受けた言語

- [XPath](xpath.md)
- [Forth](forth.md)
- [Factor](factor.md)


## 影響を与えた言語

- [Gremlin](gremlin_lang.md)


## 現在の位置づけ

現在は歴史的言語(status: historical)として位置づけられ、目立った開発活動は見られない。もっとも、Apache TinkerPopのグラフトラバーサル言語Gremlinの設計に直接的な影響を与えたことで知られており、RDFとプログラムを融合させるという独自のアイデアは、後続のグラフクエリ言語の設計思想に痕跡を残している。

## Hello World

公式ドキュメント・Wikiには「Hello, World!」形式の例は見当たらなかったが、確認できる構文規則(文字列リテラルと `.` による式の評価、`#` から始まるコメント)から類推できる最小の例を示す。

```
# 文字列リテラルを1つだけ評価すると、その値がそのまま結果として返る
"Hello, World!".
```

## 外部リンク

(該当するWikipedia記事は日本語・英語ともに見つからなかった)
