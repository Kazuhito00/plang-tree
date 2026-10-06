# Franz Lisp

- 登場年: 1978年
- 設計者: Richard Fateman, John Foderaro, Keith Sklower, Kevin Layer
- パラダイム: functional, symbolic
- 系統: lisp-scheme

## 解決したかった課題

1978年末、カリフォルニア大学バークレー校(UC Berkeley)が初のVAX 11/780を導入した際、その計算機上で本格的な数式処理システム(MACSYMAなど)を動かせるLisp処理系が存在しなかった。

Richard Fatemanと学生たち(John Foderaro、Keith Sklower、Kevin Layerら)は、既存のMaclispをベースにしつつ、VAX上で実用的な性能を発揮し、Fortranとの相互運用性も持つ新たなLisp処理系を実装することで、この課題に取り組んだ。

## 特徴

- 作曲家フランツ・リストにかけた名前を持つ、Maclispをベースにした処理系
- FortranのFortran配列と互換性のある配列を持ち、Fortranコードとの連携が可能だった
- バイナリレベルで他言語と相互運用できる外部関数インタフェース(FFI)を備える
- UC BerkeleyのBSD Unixディストリビューションに同梱される形で広く配布された
- 1970年代から80年代にかけて、最も広く配布・利用されたLisp処理系の1つとされる

## 影響を受けた言語

- [Maclisp](maclisp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Franz Lispは、BSD Unixの人気に乗る形で、1970年代から80年代にかけて最も広く配布・利用されたLisp処理系の1つとなった。

しかし開発者らが設立したFranz Inc.はほどなくCommon Lisp仕様に基づくAllegro Common Lispの開発に軸足を移し、Common Lisp標準の普及とともにFranz Lisp自体の必要性は大きく低下した。現在は完全に歴史的な言語という位置づけである(status: historical)。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事内にコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Franz_Lisp)
- [Wikipedia(日本語)](なし)
