# POP-2

- 登場年: 1970年
- 設計者: Robin Popplestone, Rod Burstall, Steve Hardy, Robert Rae, Allan Ramsay
- パラダイム: procedural, functional, symbolic, stack-based
- 系統: lisp-scheme

## 解決したかった課題

1960年代末、エディンバラ大学の人工知能研究では、Lispの記号処理能力を活かしつつ、Lisp特有の深い括弧のネストに頼らない、より読みやすく対話的な言語が求められていた。Robin Popplestoneは自身が開発した前身言語POP-1(当初の名称はCOWSEL)を発展させ、Rod Burstall、Steve Hardy、Robert Rae、Allan Ramsayらと共に、Lispの記号処理とALGOL 60の構造化された考え方を取り入れた新しい言語POP-2を設計した。

スタックを介して値をやり取りする独自の評価モデル(例: `3 -> a`という逆代入記法)を採用し、インクリメンタルコンパイラによって関数を対話的に定義しながら開発を進められるようにした。これにより、AI研究者は試行錯誤を繰り返しながらプログラムを組み上げていくことができた。

## 特徴

- スタックを介した値の受け渡しと、`->`による逆代入記法という独特の構文
- Lisp由来の記号処理能力とALGOL由来の構造化された制御構文を併せ持つ
- インクリメンタルコンパイラにより、対話的に関数を定義しながら開発できる
- 関数を第一級の値として扱い、部分適用によるクロージャ生成が可能
- 配列やレコードの読み書きを1つの手続きにまとめる「双子(doublet)関数」という独自機構

## 影響を受けた言語

- [Lisp](lisp.md)
- [ALGOL 60](algol_60.md)


## 影響を与えた言語

- [ML](ml_lang.md)
- [POP-11](pop_11.md)
- [Rapira](rapira_lang.md)


## 現在の位置づけ

POP-2は後継言語POP-11に発展的に置き換えられ、単独で使われることは既にない歴史的(historical)言語である。しかしPOP-11やPoplog環境へと続くAI向け言語の系譜の直接の起点として位置づけられ、プログラミング言語史の中で参照され続けている。

## Hello World

POP-2自体の具体的なHello World例は一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/POP-2)
