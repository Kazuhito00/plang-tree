# FOCAL

- 登場年: 1968年
- 設計者: Richard Merrill
- パラダイム: procedural, scripting
- 系統: basic-family

## 解決したかった課題

DECのPDP-8のような小型で対話的な計算機では、専門知識がなくてもその場で数式を入力し即座に答えを得られる、JOSSのような対話型言語が有用だった。しかしJOSS自体はJohnniac機に特化しており、DECの小型機で同様に手軽に使える対話型言語は存在しなかった。

Richard Merrillは、限られたメモリしか持たないPDP-8上でも動作する、JOSSに似た対話的な計算用言語を実装することでこの課題に応えた。

## 特徴

- 「FOrmulating On-line Calculations in Algebraic Language」(あるいは「FOrmula CALculator」)の略で、JOSSをもとにした対話型インタプリタ言語
- PDP-8のような小型機でも動作するようメモリ効率を重視した設計
- キーワードは先頭1文字だけで一意に識別できるため、1文字コマンドで実行できる
- 行番号による「グループ」単位でプログラムを構成する
- 組み込みの数学関数を持ち、直接実行モードと間接実行モードの両方を備える
- PDP-5、PDP-8、PDP-11、PDP-12など複数のDEC系機種向けに実装された

## 影響を受けた言語

- [JOSS](joss.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

FOCALは、DECが他社へのライセンス供与を拒んだこともあり、GE・Honeywell・HPなど複数メーカーの機種で使えたBASICとの競争に敗れ、DECの製品ラインがVAX-11へ移行する中でほぼ姿を消した。

現在は完全に歴史的な言語という位置づけだが(status: historical)、興味深い後日談として、1980年代のソビエト連邦でPDP-11互換機(Electronika BKシリーズなど)上で独自の復活を見せたことが知られている。

## Hello World

```
01.10 TYPE "HI THERE, GOOD LOOKING.  HOW MUCH MONEY DO YOU WANT TO BORROW?",!
```
(`TYPE`はBASICの`PRINT`に相当する出力命令。`!`は改行を表す)

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/FOCAL_(programming_language))
- [Wikipedia(日本語)](なし)
