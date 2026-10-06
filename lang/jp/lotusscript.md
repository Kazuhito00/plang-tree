# LotusScript

- 登場年: 1996年(Lotus Notes R4での搭載。一次資料であるWikipedia記事自体には明確な年の記載はなく、二次資料により補完)
- 設計者: Lotus Development Corporation(個人名は一次資料上で確認できなかった)
- パラダイム: procedural, object-oriented, event-driven
- 系統: basic-family

## 解決したかった課題

1990年代前半、Lotus Notesはグループウェアとして企業に広く導入されていたが、それまでの自動化手段は「Lotus Macro」と呼ばれる簡易な仕組みに限られ、業務要件に合わせた柔軟なアプリケーション開発には力不足だった。

当時Windows開発者の間で広く普及していたMicrosoft Visual Basic(VBA)に文法・構造が近いスクリプト言語を採用すれば、既存の開発者が習得しやすくなると考えられた。Lotus Development Corporationは、Notes/Domino環境向けのオブジェクト指向スクリプト言語LotusScriptを開発し、Lotus Notes R4(日本語版R4Jは1996年3月出荷)から搭載した。

## 特徴

- 文法・構造がMicrosoft Visual Basic for Applications(VBA)に近く、VB経験者が習得しやすい
- BASIC言語に近い平易な文法をベースに、オブジェクト指向の概念(ユーザ定義型・クラス)を組み込む
- Lotus Notes、Lotus Word Pro、Lotus 1-2-3など製品固有のオブジェクトクラスを豊富に持つ
- OLEオートメーションに対応し、Microsoft Office文書などの外部アプリケーションを操作できる
- ボタンクリックなどのイベントに対応する手続きを記述するイベント駆動的な使い方が中心

## 影響を受けた言語

- [Visual Basic(Classic)](visual_basic.md)
- [BASIC](basic.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

LotusScriptは現在「legacy」な言語であり、新規開発での採用はほとんどない。Lotus NotesはIBM Dominoを経て2018年に資産がHCL Technologiesへ移管されたが、LotusScript自体は既存のNotes/Dominoアプリケーションの保守目的で、企業の情報システム部門などにおいて現在も一部使用され続けている。

## Hello World

```
Sub Click(Source As Button)
    Messagebox("Hello World!")
End Sub
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/LotusScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/LotusScript)
