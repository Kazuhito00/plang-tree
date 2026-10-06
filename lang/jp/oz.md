# Oz

- 登場年: 1991年
- 設計者: Gert Smolka
- パラダイム: logic, functional, concurrent, object-oriented
- 系統: logic-declarative

## 解決したかった課題

1990年前後、プログラミング言語の世界には論理型・関数型・オブジェクト指向・並行処理といった多様なパラダイムがそれぞれ独立した言語群として存在しており、それらを統一的に理解する枠組みは十分ではなかった。Smolkaは、これら複数のパラダイムを一つの言語の中で矛盾なく統合し、単一の計算モデル(制約プログラミングに基づく並行計算モデル)の上に位置づけたいと考えた。さらにOzは研究のみならず教育目的も強く意識しており、様々な計算モデルの本質的な違いと共通点を、一つの処理系を通じて体系的に学べるようにすることを目指していた。

## 特徴

- 論理プログラミング、関数型プログラミング、オブジェクト指向、並行制約プログラミングを単一の言語基盤の上に統合している
- 単一代入変数と論理変数を用いた制約プログラミングのモデルを核として、その上に他のパラダイムを構築している
- 軽量スレッドとデータフロー変数による自然な並行処理の記述を可能にしている
- 教育用の教材・書籍(『Concepts, Techniques, and Models of Computer Programming』)と結びついて開発が進められた
- Mozart Programming Systemという処理系を通じて、分散プログラミングの機能も統合的に提供している

## 影響を受けた言語

- [Prolog](prolog.md)
- [Lisp](lisp.md)
- [Erlang](erlang.md)


## 影響を与えた言語

- [Alice ML](alice_ml.md)
- [Orc](orc_lang.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)であり、現在実務で広く使われることはない。しかし多様なパラダイムを統一的な計算モデルの上で扱うという設計思想は、プログラミング言語教育や研究の分野で今も参照され続けている。

## Hello World

```
{Browse "Hello, World!"}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Oz_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Oz_%28programming_language%29)
