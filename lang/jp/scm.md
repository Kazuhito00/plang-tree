# SCM

- 登場年: 1990年
- 設計者: Aubrey Jaffer
- パラダイム: functional, procedural
- 系統: lisp-scheme

## 解決したかった課題

1990年当時、R4RSやR5RSといったScheme標準に準拠しつつ、C言語で実装することで幅広い環境に移植できる実用的なScheme処理系が求められていた。SCMはScheme-to-Cコンパイラやリンク可能なモジュールなど、実務での使いやすさを重視した設計を取り入れ、多様なプラットフォーム上で動作する堅牢な処理系を目指した。標準準拠と移植性という、しばしば相反しがちな二つの要求を同時に満たそうとした点が特徴的である。設計者のAubrey JafferはSchemeの標準化活動にも深く関わっており、SCMは標準への忠実な実装として長く参照される存在であった。

## 特徴

- R4RS・R5RSなどのScheme標準に忠実に準拠している
- C言語で実装されており、幅広いプラットフォームへの移植性が高い
- Scheme-to-Cコンパイラを備え、生成したコードを他のCプログラムと連携させやすい
- 継続(call/cc)や末尾呼び出し最適化などSchemeの中核的な意味論を正確に実装している
- 軽量でシンプルな処理系でありながら、実務利用に耐える拡張機能も備える

## 影響を受けた言語

- [Scheme](scheme.md)
- [Lisp](lisp.md)


## 影響を与えた言語

- [Guile](guile.md)


## 現在の位置づけ

active(現役で広く使われている)言語として位置づけられる。SCM自体は主要な処理系としての知名度は限られるものの、標準準拠のScheme実装として今なお一部の環境で利用され続けている。

## Hello World

```
(display "Hello, World!")
(newline)
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SCM_%28Scheme_implementation%29)
