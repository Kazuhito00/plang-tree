# Visual J++

- 登場年: 1996年
- 設計者: Microsoft
- パラダイム: object-oriented, procedural
- 系統: jvm-dotnet

## 解決したかった課題

1990年代半ば、Javaは「一度書けばどこでも動く」を掲げ急速に普及していたが、MicrosoftはWindowsネイティブの資産(Win32 API、COM/ActiveXコンポーネント)に直接アクセスできる開発言語を提供し、Windows専用アプリケーション開発者を自社の開発環境に取り込みたいと考えた。1996年10月に登場したVisual J++はJavaの文法・構文をそのまま採用しつつ、J/Direct(Win32 APIへの直接アクセス機構)やWindows Foundation Classes(WFC)というGUIライブラリなど、Windows専用の拡張を大量に追加した言語だった。

その一方で、Remote Method Invocation (RMI) やJava Native Interface (JNI) など標準Javaの重要な機能を意図的に欠いており、Sun Microsystemsが定める「100% Pure Java」互換性要件に違反していた。MicrosoftのJava仮想マシン(MSJVM)がSunの互換性テストに合格しなかったことから、Sunは1997年にMicrosoftを提訴し、長期の法廷闘争に発展した。

## 特徴

- Javaと同一の文法・構文をベースにしている
- J/Direct機構によりWin32 APIを直接呼び出せる
- Windows Foundation Classes (WFC) というWindows専用GUIライブラリを搭載
- ActiveXコンポーネントの呼び出しやコールバック・デリゲートによるイベント処理に対応
- RMIやJNIなど標準Javaの一部機能を意図的にサポートしない、Sun非互換の設計
- 1999年のバージョン6.0が最終リリース、2004年に販売終了

## 影響を受けた言語

- [Java](java.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Visual J++は現在「historical」な言語である。Sunとの訴訟は2001年に和解に至り、和解条件によりMicrosoftは2007年末までに自社Java仮想マシン(MSJVM)の配布を終了せざるを得なくなった。これによりVisual J++は実質的に終焉を迎え、後継として投入されたVisual J#も広く普及することなく短命に終わった。

この訴訟・撤退の経験は、MicrosoftがJavaへの依存から離れ、自社の.NETプラットフォームおよびC#言語の開発に本格的に注力する一因になったとされている。

## Hello World

一次資料(Wikipedia記事)には、Windows FormsによるボタンGUIの作成、ActiveXコンポーネント(Internet Explorer)の呼び出し、Win32 API(MessageBoxやレジストリ操作)の呼び出しといったコード例が掲載されているが、単純な「Hello, World」形式のコード例は一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Visual_J%2B%2B)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Microsoft_Visual_J%2B%2B)
