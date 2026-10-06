# Emacs Lisp

- 登場年: 1985年
- 設計者: Richard Stallman
- パラダイム: 関数型、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

Richard StallmanがGNU Emacsを開発する際、テキストエディタの挙動をユーザーがその場でカスタマイズ・拡張できる仕組みが不可欠だった。単なる設定ファイルではなく、エディタの内部機能そのものをプログラムとして書き換えられる必要があったため、Lispの持つ動的性と拡張性を活かした専用の拡張言語としてEmacs Lispが設計された。これにより、Emacsは単なるエディタではなく、Lispでほぼ全てを記述・拡張できる「実行環境」として発展した。

この設計はStallmanが以前関わったGosling Emacsなどの拡張性への反省を踏まえたもので、より自由でオープンな拡張言語を用意することがGNUプロジェクトの理念とも合致していた。

## 特徴

- GNU Emacsに深く組み込まれた拡張言語で、エディタの挙動をほぼ全て書き換え可能
- 動的スコープをデフォルトとする(後にレキシカルスコープも選択可能に)
- バッファ・ウィンドウ・テキストプロパティなどエディタ特有のデータ型と密接に統合
- パッケージ(elisp package)による拡張機能の配布・管理の仕組みが発達
- 単純な評価器を持ち、対話的に式を評価しながら開発できる
- 実行中のEmacs自体を止めずにコードを再定義・再評価できる高い対話性
- MELPAなどのパッケージリポジトリを通じた活発な拡張機能エコシステム

## 影響を受けた言語

- [Lisp](lisp.md)
- [Common Lisp](common_lisp.md)
- [Maclisp](maclisp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Emacs LispはGNU Emacsの拡張言語として「active」な現役の地位にあり、数十年にわたって多数のパッケージ開発者コミュニティに支えられている、実用性の高いLisp方言である。org-modeをはじめとする著名な拡張機能の多くがEmacs Lispで書かれており、Emacsの柔軟性そのものを支え続けている。

## Hello World

```
(message "Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Emacs_Lisp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Emacs_Lisp)
