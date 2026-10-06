# AngelScript

- 登場年: 2003年
- 設計者: Andreas Jönsson
- パラダイム: object-oriented, procedural, scripting
- 系統: c-family

## 解決したかった課題

ゲームエンジンにスクリプト機能を組み込む際、C++で書かれたエンジン本体とシームレスに連携でき、かつC++に慣れた開発者がすぐに書き始められる、軽量で組み込みやすいスクリプト言語が求められていた。

AngelCodeのAndreas Jönssonは、クラス構文をC++に近づけつつ、静的型付けとガーベジコレクション付きのハンドル(C++のポインタに似た仕組み)を導入することで、この課題に応えるAngelScriptを設計した。

## 特徴

- 静的型付けのオブジェクト指向コンパイル型スクリプト言語
- C++のクラス構文に近い文法を意図的に採用
- インタフェースによる単一・多重継承のサポート
- 演算子オーバーロード
- すべてのメソッドが仮想関数として扱われる
- C/C++の関数と直接連携できる組み込み向け設計
- zlibライセンスのオープンソースソフトウェア

## 影響を受けた言語

- [C++](c_plus_plus.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

AngelScriptは現在も活発に開発が続く言語である(status: active)。*Amnesia: The Dark Descent*、*Overgrowth*、*SuperTuxKart*、*It Takes Two*などのゲームで採用されており、Hazelight Studiosが保守するプラグインを通じてUnreal Engineにも統合されている。

学術用途(ウルム大学)やロボットの行動ルール記述にも使われている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AngelScript)
- [Wikipedia(日本語)] (なし)
