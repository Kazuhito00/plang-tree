# TXL

- 登場年: 1985年
- 設計者: Charles Halpern-Hamu, James Cordy
- パラダイム: functional, rule-based, pattern-matching
- 系統: domain-specific

## 解決したかった課題

1980年代、ソフトウェアの解析・変換・リエンジニアリングを行うには、対象言語の文法解析と、木構造に対する変換規則の記述とを組み合わせて扱えるツールが必要だったが、そうした専用の言語基盤は乏しかった。

トロント大学のCharles Halpern-HamuとJames Cordyは、1985年にTXL(当初は「Turing eXtender Language」の略)を設計した。名称が示すように、同じくCordyが共同設計者であったTuring言語を拡張する発想から出発し、文脈自由文法によるパーサーと、パターン/置換のペアによる木構造の変換規則という2つの要素を組み合わせることで、新しい言語やその方言を素早く試作し、ソースコードの変換を行えるようにすることを目指した。

## 特徴

- 文脈自由文法による構文解析部と、パターン/置換規則による変換部の2要素からなる
- 高水準では関数型プログラミング、低水準では項書き換え(term rewriting)という2階層の設計
- プログラマが解釈順序・適用順序・バックトラックを明示的に制御できる
- 「サンプルのような」パターン指定スタイルにより、内部の木構造をプログラマから隠せる
- ソフトウェア解析・リエンジニアリング・設計復元・言語プロトタイピングに利用される

## 影響を受けた言語

- [Turing](turing_lang.md)(名称の由来である「Turing eXtender Language」が示す通り、共同設計者James CordyによるTuring言語を拡張する発想から出発した)

## 影響を与えた言語

特になし


## 現在の位置づけ

TXLは現在もwww.txl.caで公式サイトが保守されており、ソフトウェア解析・リエンジニアリング(設計復元など)や、新しいプログラミング言語・方言の迅速なプロトタイピングに使われている。「Turing eXtender Language」という元の略称の意味は既に実質的な意味を持たなくなっているが、パターンマッチングと項書き換えを組み合わせた設計は、ソース変換専用言語というニッチな分野で今も使われ続けている。

## Hello World

一次資料(Wikipedia記事)には、Hello Worldではなく次のような階乗計算プログラムの例が示されている。

```
%Syntax specification
define program
    [number]
end define

%Transformation rules
function main
    replace [program]
        p [number]
    by
        p [fact][fact0]
end function

function fact
    replace [number]
       n [number]
    construct nMinusOne [number]
       n [- 1]
    where
       n [> 1]
    construct factMinusOne [number]
       nMinusOne [fact]
    by
       n [* factMinusOne]
end function

function fact0
  replace [number]
       0
  by
       1
end function
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/TXL_(programming_language))
