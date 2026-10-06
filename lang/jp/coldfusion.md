# ColdFusion (CFML)

- 登場年: 1995年
- 設計者: Jeremy Allaire, Joseph J. Allaire
- パラダイム: procedural, object-oriented, scripting
- 系統: scripting

## 解決したかった課題

1990年代半ば、Web開発においてデータベースアクセスや条件分岐などのサーバーサイド処理を書くには、低水準のCGIプログラミングに頼るしかなく、手間がかかった。ColdFusionは、Jeremy AllaireとJoseph J. Allaireによって、HTMLファイルにデータベースコマンドや条件演算子、高度な書式設定機能などを直接埋め込めるようにすることを目的として設計された。

タグベースの構文(CFML)を採用したことで、HTMLの延長線上にあるような感覚でサーバーサイドの動的処理を記述できるようにした点が大きな特徴である。JavaScriptに似たCFScript構文や、オブジェクト指向プログラミングのためのColdFusion Components(CFC)も後に追加された。

## 特徴

- タグベース構文(CFML)とCFScript構文(JavaScript風)の両方を使用可能
- データベース操作、ファイル管理、セキュリティ処理などの組み込みタグを多数用意
- ColdFusion Components(CFC)によるオブジェクト指向プログラミング
- カスタムタグによる拡張が可能
- 100近い豊富な関数ライブラリ
- JVM、.NET Framework、Google App Engine上で動作可能

## 影響を受けた言語

特になし(一次資料上、明確な先行言語からの直接的な影響は確認できなかった)。

## 影響を与えた言語

特になし


## 現在の位置づけ

開発元はAllaire Corporation(1995年)からMacromedia(2001年)、Adobe Systems(2005年)へと移り変わったが、商用製品として継続的に開発が続けられている。オープンソースのCFML実装であるLuceeも2015年に登場し、既存資産の保守も含めて今なお現役で使われ続けている言語である。

## Hello World

Wikipedia記事内には具体的なコード例の記載がなく、一次資料上で確認できなかった。CFMLでは`<cfoutput>Hello, World!</cfoutput>`のようなタグ構文で出力するのが一般的とされるが、この記法自体は本調査の一次資料では確認できていない。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ColdFusion_Markup_Language)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/ColdFusion)
