# SKILL

- 登場年: 1990年
- 設計者: Cadence Design Systems
- パラダイム: scripting, functional, symbolic
- 系統: lisp-scheme

## 解決したかった課題

半導体(集積回路)設計用のEDA(電子設計自動化)ツールは、設計対象や設計フローの多様性に対応するため、ユーザー自身がツールを自動化・拡張できる仕組みを必要としていた。SKILLの起源はカリフォルニア大学バークレー校で開発されたFranz Lispにあり、当初は「IL(Interface Language)」と呼ばれ、その関数ライブラリは「SCIL」と称されていた。後にわかりやすい英単語である"SKILL"へと改称され、1990年にT. J. BarnesによるIEEE論文で発表された。Cadence Design Systemsの設計ツール(特にVirtuoso)の標準スクリプト言語・パラメタライズドセル(PCell)記述言語として定着した。

## 特徴

- Franz Lispを起源とするLisp方言で、S式によるLisp的記法と、C言語に似たインフィックス記法(SKILL++)の両方を選択できる
- すべての変数が動的スコープを持ち、動的型付けを採用する
- printf/fprintfのようなUnix風の出力関数群を備える
- ICレイアウトのパラメタライズドセル(PCell)生成や、Virtuoso GUIのカスタマイズ・操作の自動化に使われる
- 拡張子.il(lisp-2セマンティクス)と.ils(lisp-1セマンティクス)の2種類のファイル形式がある
- 高階関数やマクロ、S式といったLispの伝統的な機能を備え、SchemeやCommon Lisp(CLOS含む)の影響を受けているとされる

## 影響を受けた言語

- [Lisp](lisp.md)
- [Scheme](scheme.md)
- [Common Lisp](common_lisp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

SKILLは商業的な主流言語ではないが、半導体設計(EDA)業界では今も現役の「niche」な言語として、Cadenceの主要ツール群(Virtuoso、Allegro、APD、Concept HDLなど)で使われ続けている。Pillやskillupといったオープンソースの再実装も存在し、この分野特有のニッチな地位を保っている。

## Hello World

一次資料(Wikipedia)には確定的なコード例の記載がなかった。技術ブログ等の二次資料では、次のような出力例が広く紹介されている(確度は一次資料未確認である点に留意)。

```
printf("Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/SKILL_(プログラミング言語))
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SKILL)
