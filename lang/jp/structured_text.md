# Structured Text

- 登場年: 1993年
- 設計者: 国際電気標準会議(IEC) TC65/SC65B/WG7
- パラダイム: procedural, declarative
- 系統: domain-specific

## 解決したかった課題

PLC(プログラマブルロジックコントローラ)のプログラミングは、長らくメーカーごとに独自の言語や表記法が使われており、可搬性・保守性・教育コストの面で課題があった。国際電気標準会議(IEC)はこの状況を解消するため、複数の標準的なPLC言語を規定する規格IEC 61131-3を1993年に発行し、その一つとしてPascalに似た構文を持つ高水準のテキスト言語Structured Text(ST)を定めた。

STの目的は、ラダー図(LD)やファンクションブロック図(FBD)などの他のIEC 61131-3言語では書きづらい、複雑な数式処理やアルゴリズムをより簡潔に記述できるようにすることだった。

## 特徴

- IEC 61131-3が定める5言語(SFC、LD、FBD、IL、ST)の一つ
- Pascalを基にした、ブロック構造を持つ高水準テキスト言語
- IF-THEN-ELSE、CASE、WHILE-DO、REPEAT-UNTILなどの構造化制御文を持つ
- SQRT()やSIN()などの数学関数を組み込みで利用できる
- CASE文はフォールスルーしない仕様になっている
- CONFIGURATION、PROGRAM、FUNCTION_BLOCKといった単位でプログラムを構造化できる

## 影響を受けた言語

- [Pascal](pascal.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Structured TextはIEC 61131-3が定める5つの言語の一つとして、産業制御分野で現在も広く使われている。数式処理や状態遷移、条件分岐の記述に向いているため、ラダー図などのグラフィカル言語と組み合わせて使われることも多い。IEC 61131-3自体は改版が続けられており(最新の第4版は2025年発行)、STは今も現役の産業制御言語として位置づけられている。

## Hello World

PLC言語であるため、標準入出力へのHello World的な出力は一般的ではない。一次資料(Wikipedia記事)には次のような状態遷移の例が示されている。

```
(* simple state machine *)
CASE StateMachine OF
   1: ClosingValve();
      StateMachine := 2;
   2: OpeningValve();
ELSE
    BadCase();
END_CASE;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Structured_text)
