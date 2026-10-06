# Visual Basic(Classic)

- 登場年: 1991年
- 設計者: Alan Cooper, Microsoft
- パラダイム: object-oriented, procedural, event-driven
- 系統: scripting

## 解決したかった課題

1980年代末のWindowsアプリケーション開発は、C言語とWindows APIを直接叩いてウィンドウやボタンを手作りする必要があり、専門知識のないプログラマには極めて敷居が高かった。Alan Cooperはフォームを画面上に部品として配置するだけでGUIを組み立てられるツール「Tripod」を開発しており、MicrosoftはこれとBASIC言語のインタプリタを組み合わせることで、誰でもドラッグ&ドロップでWindowsアプリを作れる環境を実現しようとした。こうして生まれたVisual Basicは、BASICの手軽さとフォームデザイナによる高速開発(RAD)を融合させた言語となった。

## 特徴

- フォーム上にボタンやテキストボックスを視覚的に配置してGUIを組み立てるRAD環境
- イベント駆動プログラミングを前面に押し出し、ボタンクリック等に対応する手続きを直接記述できる
- BASIC由来の平易な構文で、初心者でも短期間で実用アプリを開発できた
- COM/ActiveXコンポーネントを利用した拡張性を持つ
- 大規模開発には向かない緩やかな型システムと、構造化のしにくさという弱点も抱えていた

## 影響を受けた言語

- [BASIC](basic.md)
- [QuickBASIC](quickbasic.md)
- [QBasic](qbasic.md)


## 影響を与えた言語

- [VBA](vba.md)
- [VBScript](vbscript.md)
- [LotusScript](lotusscript.md)
- [Xojo](xojo.md)
- [ActiveBasic](activebasic.md)
- [VB.NET](vb_net.md)
- [TTSneo](ttsneo.md)
- [易语言 (E Language)](yi_yu_yan.md)
- [プロデル](prodel.md)
- [Small Basic](small_basic.md)
- [Rockstar](rockstar_lang.md)


## 現在の位置づけ

Microsoftは2008年にサポートを終了し、.NET系のVB.NETへの移行を促した。現在は新規開発には使われない「legacy」な言語だが、1990年代のWindowsアプリ開発を支えた歴史的意義は大きく、今も古い業務システムの保守対象として残っている。

## Hello World

```vb
Private Sub Form_Load()
    MsgBox "Hello, World!"
End Sub
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Visual_Basic)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Visual_Basic)
