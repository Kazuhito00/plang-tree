# FP

- 登場年: 1977年
- 設計者: John Backus
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

FORTRANの主要設計者であるJohn Backusは、変数への代入と逐次実行を基本とする従来の「フォン・ノイマン型」プログラミングでは、プログラムの数学的な性質を証明したり、小さなプログラムを組み合わせて大きなプログラムを構築したりすることが難しいと考えた。

Backusは、名前付き変数への代入を一切避け、少数の基本関数と、それらを組み合わせる「関数形式(functional forms)」だけでプログラム全体を組み立てられる、関数レベル(function-level)のプログラミングモデルを確立することでこの課題に取り組んだ。

## 特徴

- 1977年のACMチューリング賞受賞講演「Can Programming Be Liberated from the von Neumann Style?」で発表された
- すべての関数は「1つの対象を1つの対象へ写す」という単一の型に統一されている
- 変数への代入や名前付けを行わず、関数の合成・構成・条件分岐などの「関数形式」でプログラムを組み立てる
- APL(Kenneth E. Iverson)から強い影響を受けている
- FL、Haskell、Joyなど後の言語に影響を与えたとされる

## 影響を受けた言語

- [APL](apl.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

FPはJohn Backusのチューリング賞受賞講演で発表された、関数レベルプログラミングを提示する研究用言語であり、Wikipedia英語版によれば「学術研究以外ではほとんど使われなかった」("used little beyond academia")とされる。

現在は完全に歴史的な言語という位置づけだが(status: historical)、その考え方はFL、Haskell、Joyなど後の関数型言語の研究に影響を与えたとされ、プログラミング言語史における重要な理論的到達点として位置づけられている。

## Hello World

一次資料上で確認できなかった(英語版Wikipedia記事は数学的記法による説明が中心で、具体的なコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/FP_(programming_language))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/FP_(プログラミング言語))
