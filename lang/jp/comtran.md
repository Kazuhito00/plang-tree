# COMTRAN

- 登場年: 1957年
- 設計者: Bob Bemer
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

1950年代後半、FORTRANが科学技術計算分野で高水準言語として成功を収める一方、商用(事務)データ処理の分野にも同様の高水準言語が必要だと考えられていた。IBMのBob Bemerは、「商用翻訳言語(COMmercial TRANslator)」を意味するCOMTRANを、いわば「事務処理版FORTRAN」として1957年に設計した。

先行するFLOW-MATICの影響を受けながら、PICTURE句(この要素を持つ最初の言語とされる)、意味を持たない改行を許す段落(パラグラフ)構造、名前付き段落へのGO TOによる分岐、ファイル操作用のAT END句、具象定数HIGH-VALUE、オペレーティングシステムとの連携用RETURN-CODEなど、多くの独自要素を導入した。

## 特徴

- PICTURE句による数値・文字列の書式定義(最初にこの機能を持った言語とされる)
- 意味を持たない改行を許容する段落(パラグラフ)構造
- 名前付き段落とGO TOによる分岐
- ファイル終端処理のためのAT END句
- 具象定数HIGH-VALUEやRETURN-CODEなど独自の言語要素

## 影響を受けた言語

- [FLOW-MATIC](flow_matic.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

COMTRAN自体は1960年代にCOBOLが標準化されると使われなくなり、現在では実際に稼働しているシステムは存在しない歴史的言語である。しかし、PICTURE句や段落構造、段落命名規則など、その設計要素の多くがCOBOLに直接組み込まれたことから、事務処理言語の系譜を語る上で欠かせない先駆的言語として位置づけられている。

## Hello World

Wikipedia記事内には具体的なコード例の記載がなく、一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/COMTRAN)
- [Wikipedia(日本語)](null)
