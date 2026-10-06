# AutoIt

- 登場年: 1999年
- 設計者: Jonathan Bennett
- パラダイム: scripting, procedural
- 系統: scripting

## 解決したかった課題

Windows上でのGUIアプリケーション操作やシステム管理作業を、専門的なプログラミングスキルなしに自動化したいという要求があった。AutoItは、BASICに似た平易な構文を採用することでプログラミング初心者でも扱えるようにしつつ、ウィンドウのタイトルやコントロールを直接指定して操作できる仕組みを備え、繰り返し行う作業やソフトウェアテストの自動化を誰もが手軽に行えるスクリプト言語として設計された。

## 特徴

- ウィンドウやボタン、テキストボックスなどのGUI要素をタイトルやクラス名で指定し、クリックや文字入力を自動化できる
- BASIC風の平易な構文で手続き型のプログラムを記述でき、変数宣言や型の扱いも簡素になっている
- スクリプトを単体の実行可能ファイル(.exe)にコンパイルして配布できる
- COMオブジェクトやWindows APIの呼び出しに対応しており、Officeマクロの代替や高度なシステム操作にも利用できる
- キー操作のシミュレーション(SendKeys相当の機能)を標準でサポートしている

## 影響を受けた言語

- [BASIC](basic.md)


## 影響を与えた言語

- [AutoHotkey](autohotkey.md)


## 現在の位置づけ

現役で広く使われている。Windows環境の業務自動化やソフトウェアテストの分野で、専門知識のない担当者でも使えるツールとして根強い需要がある。

## Hello World

`MsgBox`関数はメッセージボックスを表示するAutoItの基本的な出力手段である。

```autoit
MsgBox(0, "Greeting", "Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/AutoIt)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AutoIt)
