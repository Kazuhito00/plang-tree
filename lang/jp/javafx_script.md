# JavaFX Script

- 登場年: 2007年
- 設計者: Chris Oliver
- パラダイム: declarative, scripting
- 系統: jvm-dotnet

## 解決したかった課題

Chris Oliverは、Javaプラットフォーム上でリッチなデスクトップ・モバイルUIを宣言的に記述できる言語が存在しないという課題に着目し、F3(Form Follows Function)という名称の言語を個人的に開発していた。

SunによるSeeBeyond Technology社の買収(2005年)を経てSunの社員となったOliverの下で、F3はJavaFXの一部としてJavaFX Scriptと改名され、2007年のJavaOneでオープンソース化された。データバインディングやアニメーションを宣言的な構文で記述できることを武器に、Swingに代わる次世代のJava向けUI記述言語となることを目指した。

## 特徴

- コンパイル方式で静的型付けを行う、宣言的なスクリプティング言語である
- 自動データバインディングやミューテーショントリガー、宣言的なアニメーション記述をサポートする
- リテインドモードのベクターグラフィックス、動画再生、標準のSwingコンポーネントの利用が可能である
- 式(expression)を中心とした構文を採用している
- Java Runtime Environment上で動作し、Java向けAPI群と統合されている

## 影響を受けた言語

一次資料上で明確な影響元は確認できなかった(Javaプラットフォーム上で独自に設計された言語である)。

## 影響を与えた言語

特になし


## 現在の位置づけ

2008年12月にJavaFX 1.0が商用リリースされたが、Oracleは2010年9月にJavaFX Scriptの開発中止を発表し、以後はJavaFXのAPIをJavaなど他のJVM言語から直接利用する方針に転換した。有志によるオープンソース化・復活プロジェクトも2012年に始まったが、2015年8月に活動を終了している。

現在はhistorical(歴史的役割を終えた言語)として位置づけられ、実際に使われることはない。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/JavaFX_Script)
