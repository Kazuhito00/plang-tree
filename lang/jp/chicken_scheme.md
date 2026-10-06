# Chicken Scheme

- 登場年: 2000年
- 設計者: Felix Winkelmann
- パラダイム: functional, procedural
- 系統: lisp-scheme

## 解決したかった課題

Schemeは処理系ごとの実装差異が大きく移植性が低い上に、既存のC言語資産と連携するのが難しいという課題を抱えていた。Chicken Schemeは、SchemeプログラムをポータブルなC言語のソースコードへコンパイルするというアプローチによってこの問題を解決しようとした。これにより、Cコンパイラが動く環境であればどこでも動作し、既存のCライブラリとも容易にリンクできる、実用性の高いScheme処理系を提供することを目指した。

## 特徴

- SchemeのコードをいったんポータブルなC言語コードに変換してからコンパイルする、Scheme-to-Cという方式を採用している
- 手続き呼び出しをCPS(継続渡しスタイル)で管理し、末尾呼び出しの最適化や第一級継続を実現している
- C言語との相互運用性が高く、既存のCライブラリを容易に呼び出せる
- eggと呼ばれるパッケージシステムを備え、拡張ライブラリを追加導入できる
- R7RSなどのScheme標準に準拠しつつ、独自の拡張も提供している

## 影響を受けた言語

- [Scheme](scheme.md)
- [Lisp](lisp.md)
- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役で使われている言語であり、移植性の高さと実用性を評価する開発者コミュニティによって継続的に利用・開発されている。組み込みスクリプト言語やツール開発の場面で選ばれることがある。

## Hello World

```scheme
(display "Hello, World!")
(newline)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Chicken_%28Scheme%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/CHICKEN_%28Scheme_implementation%29)
