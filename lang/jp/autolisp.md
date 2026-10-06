# AutoLISP

- 登場年: 1986年
- 設計者: Autodesk
- パラダイム: scripting, functional, symbolic
- 系統: lisp-scheme

## 解決したかった課題

1980年代半ば、AutoCADの利用者は、繰り返しの多い製図作業を自動化したり、ソフトウェアの機能を自分の用途に合わせて拡張したいというニーズを持っていたが、専門のソフトウェア技術者に低水準言語での開発を依頼するのは現実的ではなかった。Autodeskは、David Betzが開発したLisp系インタプリタ「XLISP」の初期版を土台として、AutoCADに直接組み込めるLisp方言AutoLISPを開発した。これにより、CADの一般利用者でも、図形の作成・編集や図面(DWG)データベースへのアクセスをLispの関数呼び出しとして記述できるようになった。

## 特徴

- David BetzのXLISP初期版をもとにAutodeskが開発し、AutoCAD Release 2.18(1986年1月)で導入された
- 動的スコープ・動的型付けを採用し、ガベージコレクションを備える
- リスト構造は不変(immutable)であり、配列・可変長引数関数・マクロなど一部のLisp標準機能は持たない
- 図形要素の作成・編集やDWGデータベースへのアクセスに特化した専用関数群を持つ
- ダイアログボックスを定義する専用言語DCL(Dialog Control Language)と組み合わせて使われることが多い
- AutoCAD 2000以降は統合開発環境Visual LISPが追加され、デバッグやコンパイルが容易になった

## 影響を受けた言語

- [Lisp](lisp.md)

(XLISPからの直接の派生だが、XLISP自体はデータセット未収録のため上記のみ記載)


## 影響を与えた言語

特になし


## 現在の位置づけ

AutoLISPは、Visual LISP、VBA、.NET/ObjectARXといった後発のカスタマイズ手段が追加された後も、AutoCADの主要な自動化・カスタマイズ言語として現役で使われ続けている。BricsCADやIntelliCADなど互換CADソフトウェアにも同様のLisp方言が採用されており、CAD分野における実務的なLisp方言として現在も「active」な地位を保っている。

## Hello World

```lisp
(defun hello ( )
    (princ "\nHello World!")
    (princ)
)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/AutoLISP)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AutoLISP)
