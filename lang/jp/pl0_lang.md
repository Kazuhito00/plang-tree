# PL/0

- 登場年: 1976年(書籍の版によって1975年とされる場合もある)
- 設計者: Niklaus Wirth
- パラダイム: procedural, educational
- 系統: algol-pascal

## 解決したかった課題

Niklaus Wirthは、コンパイラ構築を学ぶ学生に、再帰下降パーサやEBNF文法、段階的洗練法(stepwise refinement)といった概念を、実際に手を動かして学べるようにしたいと考えた。しかし実際のPascalのような大きく複雑な言語をそのまま教材にすると、講義の中で全体を実装しきるのは難しい。

そこでWirthは著書『Algorithms + Data Structures = Programs』の中でPL/0を示し、Pascalを極限まで削ぎ落とした言語──整数型のみ、基本的な算術・比較演算子(と奇数判定のodd関数)のみ、if-thenとwhile-doのみの制御構文、パラメータを持たないユーザー定義プロシージャのみ──とすることで、この課題に応えた。

## 特徴

- Pascalを大幅に単純化した、教育用の極小サブセット言語
- データ型は整数のみで、浮動小数点数はサポートしない
- 制御構文はif-thenとwhile-doに限られる
- パラメータを持たないプロシージャ定義をサポートする
- 再帰下降パーサ、EBNF、P-code、T-diagramなど、コンパイラ構築の重要な概念を教える教材として使われてきた
- Wirth自身は第3版の教科書でPL/0をより高度なOberon-0に置き換えた

## 影響を受けた言語

- [Pascal](pascal.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

現在も教育目的で現役で使われている言語である(status: educational)。世界中の大学のコンパイラ構築講義で数十年にわたり採用されてきたが、その後多くの講義がlexやyaccのようなツールを使う方式へと移行していった。

Wirth自身は第3版の教科書で、配列やレコード、パラメータ付きプロシージャを追加したより高度なOberon-0にPL/0を置き換えた。しかしPL/0自体も、コンパイラ構築の入門教材として今も参照・利用され続けている。

## Hello World

Hello World形式の例は確認できなかったが、1から10までの平方を出力するプログラムが記事に示されている:

```
VAR x, squ;

PROCEDURE square;
BEGIN
   squ:= x * x
END;

BEGIN
   x := 1;
   WHILE x <= 10 DO
   BEGIN
      CALL square;
      ! squ;
      x := x + 1
   END
END.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PL/0)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PL/0)
