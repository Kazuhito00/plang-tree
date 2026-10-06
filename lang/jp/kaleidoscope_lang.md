# Kaleidoscope

- 登場年: 1990年
- 設計者: Gus Lopez, Bjorn Freeman-Benson, Alan Borning
- パラダイム: declarative, object-oriented
- 系統: logic-declarative

## 解決したかった課題

オブジェクト指向プログラムでは、複数の変数の間に成立させたい関係(不変条件)を保つために、値が変化するたびにそれを手動で反映させるコードを書かなければならず、ボイラープレートが増えがちであるという課題があった。

Gus Lopez、Bjorn Freeman-Benson、Alan Borningは、制約(constraint)の概念を手続き型・オブジェクト指向言語に直接埋め込み、`always`・`once`・`assert...during`といったキーワードによって「この関係は常に成立させておく」という宣言を書けるようにしたKaleidoscopeを設計した。これにより、状態を保つための手続き的コードを減らすことを狙った。

## 特徴

- 制約(constraint)をオブジェクト指向の手続き型言語に直接埋め込んだ、制約命令型プログラミング言語である
- `always`・`once`・`assert...during`といったキーワードで関係的な不変条件を宣言できる
- Kaleidoscope'90はSmalltalk風の構文を持つ
- Kaleidoscope'91・Kaleidoscope'93ではAlgol風の構文へ変化した
- 版を重ねるごとに宣言的な要素と手続き的な要素の統合の仕方が変化していった

## 影響を受けた言語

- [Smalltalk](smalltalk.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Kaleidoscopeは現在、実装・開発のいずれも行われておらず、historical(歴史的役割を終えた言語)として位置づけられる。Wikipedia上の記事もスタブ(内容が少ない未整備な記事)として扱われている。

制約(constraint)をオブジェクト指向言語に統合する初期の試みとして、制約プログラミングの歴史における実験的な一言語として記憶されている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Kaleidoscope_%28programming_language%29)
