# ISLISP

- 登場年: 1997年
- 設計者: ISO/IEC JTC1/SC22/WG16(国際標準化委員会)
- パラダイム: functional, procedural, object-oriented
- 系統: lisp-scheme

## 解決したかった課題

Common Lisp、EuLisp、Le Lisp、Schemeなど多様なLisp方言が並立していたことで、方言間の相互運用や教育に支障が出ていた。ISO/IEC JTC1/SC22/WG16の作業部会は、主要なLisp方言に共通する機能だけを抜き出した小さくコアとなる標準Lispを定義することで、この分断を埋めようとし、1997年にISO/IEC 13816としてISLISPを標準化した(2007年に改訂版を発行)。

## 特徴

- 関数と変数を別の名前空間で管理するLisp-2アーキテクチャを採用
- グローバルなレキシカル変数を宣言する`defglobal`演算子を持つ
- `dynamic`演算子により動的変数への明示的な参照が可能
- キーワードが自己評価しない設計
- オブジェクトシステムILOSはCommon Lisp Object System(CLOS)のサブセットとして設計されている
- `defmacro`ではデストラクチャリングをサポートしない

## 影響を受けた言語

- [Common Lisp](common_lisp.md)
- [EuLisp](eulisp.md)
- [Scheme](scheme.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

ISLISPは国際標準規格(ISO/IEC 13816)として制定されているものの、産業界での広範な採用には至っておらず、主に学術・仕様策定の文脈で参照されるニッチな標準にとどまっている。

## Hello World

一次資料上で具体的なHello Worldのコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ISLISP)
- [Wikipedia(日本語)] なし
