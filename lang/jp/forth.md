# Forth

- 登場年: 1970年
- 設計者: Charles Moore
- パラダイム: stack-based, procedural
- 系統: origin

## 解決したかった課題

Charles Mooreは天文台の望遠鏡制御システムの開発に携わる中で、限られたメモリと処理能力しか持たない省メモリ環境でも、対話的に試しながら高速に開発できる言語を必要としていた。既存の言語はコンパイル・実行のサイクルが重く、機器を操作しながらの試行錯誤には向いていなかった。

Mooreはスタックを介して値をやり取りする逆ポーランド記法の演算モデルを採用し、単語(ワード)と呼ばれる小さな関数を対話的に定義・組み合わせていく設計とすることで、極めて軽量でありながら即座に結果を試せる開発環境を実現した。この対話性の高さは、実機を操作しながらプログラムを組み立てるという現場のニーズに直結していた。

## 特徴

- スタックを介して値をやり取りする逆ポーランド記法(後置記法)の演算モデル
- 「ワード」と呼ばれる小さな単位を組み合わせてプログラムを構築する連結的(concatenative)スタイル
- 対話的な開発環境(REPL)を前提とし、実機上での試行錯誤がしやすい
- 極めて軽量な処理系で、省メモリな組込み環境に適する
- 天文台の望遠鏡制御からNASAの宇宙探査機まで、実際の制御システムで採用されてきた
- 構文解析がほぼ不要なほど単純な字句規則を持ち、処理系自体を極小に実装できる

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

- [POP-11](pop_11.md)
- [PostScript](postscript.md)
- [Mind](mind.md)
- [RPL](rpl_lang.md)
- [Actor](actor_lang.md)
- [Befunge](befunge.md)
- [FALSE](false_lang.md)
- [REBOL](rebol.md)
- [Joy](joy_lang.md)
- [Factor](factor.md)
- [Ripple](ripple_lang.md)
- [Cat](cat_lang.md)
- [Kitten](kitten_lang.md)
- [Michelson](michelson.md)


## 現在の位置づけ

現在はニッチな用途向けの言語として位置づけられている(status: niche)。組込み機器や宇宙機器のファームウェアなど、極めて省リソースな環境で今も実際に使われ続けている。

処理系の実装が容易であることから、自作OSやブートローダの記述言語として愛好家の間でも根強い人気がある。

## Hello World

```forth
: HELLO ." Hello, world!" ;
HELLO
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Forth)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Forth_%28programming_language%29)
