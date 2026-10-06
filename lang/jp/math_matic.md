# MATH-MATIC

- 登場年: 1957年
- 設計者: Charles Katz, Grace Hopper
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

MATH-MATICは、Remington Rand社でGrace Hopperの指導のもとCharles Katzを中心とするチームによって開発され、1957年に登場した。事務処理向けのFLOW-MATICの姉妹言語として、UNIVAC計算機上で浮動小数点演算や数学的・代数的な式の評価を行うための、初期の高水準コンパイラ言語として設計された。

## 特徴

- UNIVAC計算機上で動作する、数式評価・浮動小数点演算に特化したコンパイラ言語
- FLOW-MATICと同時期・同系列に開発された姉妹言語である
- 手続き型(命令の逐次実行、ループ、条件分岐)の言語
- 現在では歴史的資料としてのみ参照される、初期の高水準言語の一つ

## 影響を受けた言語

- [FLOW-MATIC](flow_matic.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

MATH-MATICは現在使われていない歴史的言語である(status: historical)。1950年代の初期高水準言語の一つとして、プログラミング言語史の中で位置づけられている。

## Hello World

Hello World相当の例は確認できなかった。Wikipedia記事に掲載されている実際のコード例(数値計算処理)は以下の通り。

```
(2)  TYPE-IN ALPHA .
(2A) READ A B C SERVO 4 STORAGE A IF SENTINEL JUMP TO SENTENCE 8 .
(3)  READ D F SERVO 5 .
(4)  VARY Y 1 (0.1) 3 SENTENCE 5 THRU 6 .
(5)  X1 = (7*103*Y*A*SIN ALPHA)3 / (B POW D+C POW E) .
(6)  WRITE AND EDIT A Y D E X1 SERVO 6 .
(7)  JUMP TO SENTENCE 2A .
(8)  CLOSE-INPUT AND REWIND SENTENCE 3 .
(9)  CLOSE-OUTPUT SENTENCE 6 .
(10) READ F G H N SERVO 4 STORAGE A IF SENTINEL JUMP TO SENTENCE 20 .
(11) EXECUTE SENTENCE 3 .
(12) X2 = (3 ROOT (E-G)+LOG (D+N)) / (F2.6*EXP H) .
(13) WRITE EDIT F D F X2 SERVO 6 .
(16) JUMP TO SENTENCE 10 .
(20) STOP .
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/MATH-MATIC)
