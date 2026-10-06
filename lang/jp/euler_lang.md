# Euler

- 登場年: 1965年
- 設計者: Niklaus Wirth, Helmut Weber
- パラダイム: procedural
- 系統: algol-pascal

## 解決したかった課題

ALGOL 60は当時の標準的な手続き型言語だったが、型付けが厳格であり、手続きが呼び出しごとに異なる型の値を返すといった柔軟な処理や、参照・ラベル・記号・リストなど多様な種類の値を1つの構造の中で自由に扱うことが難しかった。

Niklaus WirthとHelmut Weberは、ALGOL 60をより単純かつ柔軟に拡張し、動的型付けとリスト構造を取り込んだ言語を作ることでこの課題に応えようとした。

## 特徴

- ALGOL 60の拡張・一般化として設計された(「ALGOL 60よりも単純で、しかもより柔軟に」を目標とした)
- 変数を特定の型に固定しない動的型付けを採用
- Reference、Label、Symbol、List(配列)、Procedure、Undefinedといった多様なデータ型を持つ
- 手続きは呼び出しごとに異なる型の値を返すことができる
- リストの要素に異なる型の値を混在させることができ、木構造のようなデータを表現できる
- Burroughs B5500などの機種上で稼働した

## 影響を受けた言語

- [ALGOL 60](algol_60.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

EulerはWirthがPascalを手がける以前、Helmut Weberとの共同研究としてALGOL 60を拡張する形で設計した言語である。「ALGOL 60より単純かつ柔軟」を目指した設計思想は、後のWirthの言語設計にも通じるものがある。

現在は完全に歴史的な言語であり(status: historical)、Wikipedia上でも実運用に関する情報は限られている。1965年のBurroughs B5500上での実装のほか、2000年から2001年頃にIconを用いた再実装が行われたことが外部リンクとして紹介されている程度である。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事内にコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Euler_(programming_language))
- [Wikipedia(日本語)](なし)
