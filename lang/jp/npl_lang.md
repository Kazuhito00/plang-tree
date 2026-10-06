# NPL

- 登場年: 1977年
- 設計者: Rodney Burstall, John Darlington
- パラダイム: functional, pattern-matching
- 系統: ml-functional

## 解決したかった課題

1970年代、エディンバラ大学のRodney BurstallとJohn Darlingtonは、プログラム変換(program transformation)に関する自分たちの研究を進めるために、シンプルな関数型言語を必要としていた。呼び出しパターンマッチングと代数的データ型を備えた言語としてNPLを設計し、これが後継のHopeへとつながる基盤となった。

## 特徴

- 呼び出しパターンマッチングと代数的データ型を備えた最初期の言語の一つとして知られる
- 定義の右辺に集合と論理構文を許す「集合内包表記(set comprehension)」を持ち、ジェネレータを左から右に評価しながら左側の変数を条件式で参照できる
- プログラム変換研究のための、簡潔でシンプルな関数型言語として設計された
- 直接の後継言語Hopeに、パターンマッチングと代数的データ型という中核概念を引き継いだ(ただし集合内包表記は引き継がれず、後年の関数型言語の「リスト内包表記」として別の形で再登場した)

## 影響を受けた言語

特になし


## 影響を与えた言語

- [Hope](hope.md)


## 現在の位置づけ

NPLには専用のWikipedia記事(スタブ)があるが、出典の乏しさが指摘されており内容は簡潔なものにとどまる。それでも、パターンマッチングと集合内包表記を備えた最初期の言語としてHope、ひいてはその先のML系関数型言語群の設計に道を開いた歴史的言語(status: historical)である。

## Hello World

NPL自体の具体的なHello World例は一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/NPL_(programming_language))
