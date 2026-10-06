# XSLT

- 登場年: 1998年
- 設計者: World Wide Web Consortium (W3C), James Clark
- パラダイム: declarative, functional, pattern-matching
- 系統: domain-specific

## 解決したかった課題

XML文書が普及し始めると、そのXML文書を別のXML形式やHTML、あるいはプレーンテキストといった任意の形式へと変換したいというニーズが急速に高まった。W3Cとその中心的な設計者であるJames Clarkは、SGML文書のスタイル変換を担っていたDSSSL(Document Style Semantics and Specification Language)の考え方をXMLの世界に持ち込み、テンプレートとパターンマッチングに基づく宣言的な変換記述の仕組みを作ろうとした。これにより、プログラムを手続き的に書かなくても、入力側の構造パターンと出力側のテンプレートを対応づけるだけで文書変換を記述できるようにすることを目指した。

## 特徴

- XML自体で記述される変換規則(スタイルシート)によって、入力XML文書を別の形式へ宣言的に変換する
- テンプレートとパターンマッチングに基づき、特定の構造を持つノードにマッチしたときの変換規則を記述するスタイルを取る
- 変換規則の適用順序を明示的に書かなくても、木構造を再帰的にたどりながら適切なテンプレートが自動的に適用される
- 変数や関数、条件分岐を備え、関数型言語的な考え方(副作用のない式評価)に基づいて変換ロジックを組み立てられる
- ノード選択の仕組みをXPathという独立した仕様に切り出し、両者が組み合わさって動作する設計になっている

## 影響を受けた言語

- [SNOBOL](snobol.md)
- [AWK](awk.md)


## 影響を与えた言語

- [XPath](xpath.md)
- [XQuery](xquery.md)


## 現在の位置づけ

active(現役で広く使われている言語)であり、XML文書の変換処理において現在も標準的に使われ続けている。Webの主流技術としての存在感はXML自体の利用の縮小とともにやや薄れつつあるが、企業システムやドキュメント処理の分野では今も現役である。

## Hello World

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:text>Hello, World!</xsl:text>
  </xsl:template>
</xsl:stylesheet>
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/XSL_Transformations)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/XSLT)
