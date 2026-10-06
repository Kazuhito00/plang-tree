# VBA

- 登場年: 1993年
- 設計者: Microsoft
- パラダイム: object-oriented, procedural, event-driven
- 系統: jvm-dotnet

## 解決したかった課題

VBA(Visual Basic for Applications)は、当時Microsoft Office製品ごとにバラバラで非互換だったマクロ言語(Excel向けの独自マクロやWordBasicなど)を統一するために作られた。アプリケーションが変わるたびに異なるマクロ言語を覚え直さなければならない状況は、開発者にとっても利用者にとっても非効率であった。Microsoftは、Visual Basicをベースにした共通のマクロ言語をOffice製品全体に組み込むことで、一度習得すればExcel、Word、Access、PowerPointなど複数のアプリケーションで同じ言語を使えるようにした。同時に、プロのプログラマーでなくても業務ユーザーが定型作業を自動化できるという、非エンジニアにも開かれた自動化言語であることも重視された。

## 特徴

- Visual Basicをベースにしたオブジェクト指向・手続き型の構文を持ち、Office製品のオブジェクトモデル(セル、シート、ドキュメントなど)を直接操作できる
- IDE(Visual Basic Editor)がOfficeアプリケーションに統合されており、コードの記述・実行・デバッグをアプリケーション内で完結できる
- イベント駆動の仕組みを持ち、ボタンのクリックやシートの変更といったイベントに応じてコードを実行できる
- マクロの記録機能によって、ユーザーの操作をそのままVBAコードとして自動生成できる
- COM(Component Object Model)を通じて他のアプリケーションやActiveXコントロールとも連携できる

## 影響を受けた言語

- [Visual Basic(Classic)](visual_basic.md)
- [QuickBASIC](quickbasic.md)
- [BASIC](basic.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役で広く使われている。Excelを中心としたOffice製品の業務自動化・マクロ記述の現場では今なお圧倒的に利用されており、非エンジニアの業務ユーザーにも広く浸透している。

## Hello World

VBAではメッセージボックスを表示することで文字列を出力するのが一般的である。

```vb
Sub HelloWorld()
    MsgBox "Hello, World!"
End Sub
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Visual_Basic_for_Applications)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Visual_Basic_for_Applications)
