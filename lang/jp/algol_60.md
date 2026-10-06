# ALGOL 60

- 登場年: 1960年
- 設計者: 国際委員会(Backus, Naur ほか)
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

1950年代後半、Fortranはアメリカで実用化されていたが、機種依存の側面が強く、学術論文でアルゴリズムを厳密に記述・出版するための共通言語としては不十分だった。ヨーロッパとアメリカの研究者からなる国際委員会は、数学的に厳密で機種に依存せず、科学計算アルゴリズムを国際的に共有・出版できる言語の策定を目指した。

この取り組みの成果としてBNF記法による形式的な文法定義が初めて採用され、言語仕様そのものを曖昧さなく記述する手法が確立された。ブロック構造や再帰、動的な型検査など、当時としては先進的な概念が盛り込まれ、以後数十年にわたる言語設計の教科書的な参照元となった。

## 特徴

- BNF記法により文法が形式的・厳密に定義された初の言語
- begin-endによるブロック構造と字句スコープを導入
- 再帰呼び出しをサポートした初期の言語のひとつ
- 学術的な出版物での「アルゴリズム記述言語」として広く使われた
- 実装より仕様策定が先行し、商用利用よりも学術・理論面での影響が大きかった
- call by nameという独特の引数渡し方式を持ち、後の言語設計論争の火種にもなった

## 影響を受けた言語

- [Fortran](fortran.md)
- [ALGOL 58](algol_58.md)


## 影響を与えた言語

- [DYNAMO](dynamo_lang.md)
- [CPL](cpl.md)
- [PL/I](pl_i.md)
- [BASIC](basic.md)
- [CORAL 66](coral66.md)
- [Euler](euler_lang.md)
- [ALGOL W](algol_w.md)
- [ISWIM](iswim.md)
- [PL360](pl360_lang.md)
- [Simula](simula.md)
- [ALGOL 68](algol_68.md)
- [SETL](setl.md)
- [SAIL](sail_lang.md)
- [Pascal](pascal.md)
- [BLISS](bliss.md)
- [POP-2](pop_2.md)
- [Concurrent Pascal](concurrent_pascal.md)
- [CLU](clu.md)
- [Icon](icon.md)
- [Napier88](napier88.md)


## 現在の位置づけ

現在は歴史的言語として位置づけられている(status: historical)が、構造化プログラミングの祖として、以後のほとんどの手続き型言語の文法設計に影響を与え続けている。

現存する処理系はほとんどないものの、計算機科学の教育課程では言語設計の歴史を学ぶ題材として今も取り上げられる。

## Hello World

ALGOL 60の言語仕様そのものには標準的な入出力手続きが定義されていないため、実行には処理系が独自に提供する入出力手続き(ここではBurroughs系実装などで見られる`outstring`)が必要になる。

```algol60
begin
    outstring(1, "Hello, world!")
end
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ALGOL_60)
