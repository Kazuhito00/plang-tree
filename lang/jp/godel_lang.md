# Gödel

- 登場年: 1992年
- 設計者: John Lloyd, Patricia Hill
- パラダイム: logic, declarative
- 系統: logic-declarative

## 解決したかった課題

Prologをはじめとする従来の論理プログラミング言語は、動的型付けや弱い型検査を採用していたため、大規模なプログラムの信頼性を検証したり、保守したりすることが難しいという課題を抱えていた。

John LloydとPatricia Hillは、多層ソート論理(many-sorted logic)に基づく強い型付けと、パラメトリック多相性、モジュールシステムといった機能を備え、より厳密で信頼性の高い論理プログラミングを行える言語を目指し、論理学者クルト・ゲーデルの名を冠したGödelを1992年に設計した(最終安定版1.5は1995年8月)。

## 特徴

- 多層ソート論理(many-sorted logic)に基づく強い型付けと、パラメトリック多相性を持つ
- モジュールシステムをサポートし、大規模プログラムの構造化が可能
- 任意精度の整数・有理数・浮動小数点数を扱える
- 有限整数領域に対する制約解消(finite domain constraint solving)や有限集合処理をサポートする
- 並行論理プログラミング言語のコミット演算を一般化した「枝刈り演算子(pruning operator)」と、柔軟な計算規則を持つ
- 論理学者クルト・ゲーデルにちなんで命名された
- ライセンスは非商用の研究・教育目的の利用に限定されている

## 影響を受けた言語

特になし(一次資料上で明確な影響関係の記載は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的な言語)として位置づけられる。1995年の最終安定版以降、実質的に開発が停止しており、ライセンスも非商用の研究・教育目的に限定されているため、現在は論理プログラミング言語の型システム研究の歴史の中で言及される存在である。

## Hello World

一次資料上で「Hello World」に相当する例は確認できなかったが、Wikipedia記事には最大公約数(GCD)を求める次のようなサンプルコードが掲載されている。

```
MODULE      GCD.
IMPORT      Integers.

PREDICATE   Gcd : Integer * Integer * Integer.
Gcd(i,j,d) <-
           CommonDivisor(i,j,d) &
           ~ SOME [e] (CommonDivisor(i,j,e) & e > d).

PREDICATE   CommonDivisor : Integer * Integer * Integer.
CommonDivisor(i,j,d) <-
           IF (i = 0 \/ j = 0)
           THEN
             d = Max(Abs(i),Abs(j))
           ELSE
             1 =< d =< Min(Abs(i),Abs(j)) &
             i Mod d = 0 &
             j Mod d = 0.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/G%C3%B6del_(programming_language))
