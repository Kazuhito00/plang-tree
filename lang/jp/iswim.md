# ISWIM

- 登場年: 1966年
- 設計者: Peter Landin
- パラダイム: functional, procedural
- 系統: ml-functional

## 解決したかった課題

1966年、Peter Landinは論文「The Next 700 Programming Languages」の中で、プログラムの見た目をもっと数学の記法に近づけたいと考えた。ALGOL 60のセミコロンやbegin/endブロックといった構文上の飾りを取り除き、インデントの深さで意味範囲を決める「オフサイドルール」を導入することで、命令型の骨格を保ちながらLispのようなラムダ計算に基づく関数型の中核を組み合わせた言語群の設計指針を示そうとした。

ISWIMは単一の実装を持つ具体的な言語というより、こうした設計思想を体現する「言語族」の青写真として提案された点が特徴的である。

## 特徴

- ALGOL 60由来の命令型の骨格と、Lisp由来のラムダ計算に基づく関数型の中核を組み合わせている
- セミコロンやbegin/endを廃し、インデントで意味範囲を決める「オフサイドルール」を採用
- 特定の実装を持つ言語ではなく、後続言語群のための設計上の枠組み・提案として発表された
- 数学記法に近い見た目を目指した点が後続の関数型言語に強い影響を与えた

## 影響を受けた言語

- [ALGOL 60](algol_60.md)
- [Lisp](lisp.md)


## 影響を与えた言語

- [SASL](sasl_lang.md)
- [ML](ml_lang.md)
- [Lucid](lucid_lang.md)
- [Standard ML](standard_ml.md)
- [Miranda](miranda.md)
- [Clean](clean.md)
- [Haskell](haskell.md)


## 現在の位置づけ

ISWIM自体が完成した処理系として広く使われることはなかったが、「the next 700 programming languages」という論文タイトルの通り、後続の関数型言語の設計思想を方向づけた理論的な礎として、現在も参照される歴史的言語(status: historical)である。

Wikipedia infoboxにはPAL、SASL、Miranda、ML、Haskell、Clean、Lucidへの影響が明記されており(このうちPAL・SASLは本データセットに未収録)、関数型プログラミング言語史における最重要の理論的支柱の一つとされている。

## Hello World

ISWIMは特定の実装を持つ言語ではなく、設計上の枠組み・提案として発表されたため、実行可能なHello World例は存在しない。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ISWIM)
