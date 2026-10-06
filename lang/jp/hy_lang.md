# Hy

- 登場年: 2013年
- 設計者: Paul Tagliamonte
- パラダイム: functional, macro, procedural, object-oriented
- 系統: lisp-scheme

## 解決したかった課題

Pythonには豊富なライブラリとエコシステムがあるが、Lisp系言語のようにコードをデータとして扱うマクロ機能や、簡潔なS式による記述はできなかった。Paul Tagliamonteは、S式で書かれたコードをPythonの抽象構文木(AST)に変換する仕組みを作ることで、PythonのライブラリやフレームワークをそのままHyのコードから呼び出せるLisp方言Hyを開発し、2013年のPyConで発表した。

## 特徴

- S式をPythonのASTに変換することで、Pythonの上で透過的に動作するLispフロントエンドとして機能する
- Lispのコードをデータとして扱う能力を利用したメタプログラミングが可能
- Pythonのライブラリや標準ライブラリをHyのコードからそのままインポート・利用できる
- 動的かつ強い型付けとレキシカルスコープを採用
- MIT系ライセンスで公開されている
- IA-32、x86-64アーキテクチャなど、Pythonが動作する環境で広くクロスプラットフォーム動作する

## 影響を受けた言語

- [Clojure](clojure.md)
- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Python](python.md)(実装基盤として)

## 影響を与えた言語

特になし


## 現在の位置づけ

Hyは、Pythonのエコシステムを活かしながらLisp的なマクロや記法を使いたい開発者向けのニッチな言語として位置づけられている。Pythonコミュニティの中で一定の関心を持つユーザー層に支えられ、開発は現在も継続している。

## Hello World

```
(print "Hello World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Hy_(programming_language))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Hy)
