# PL/I

- 登場年: 1964年
- 設計者: IBM委員会
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

1960年代前半、IBMは科学技術計算向けのFortranと事務処理向けのCOBOLという2つの異なる言語を並行して保守しており、新型メインフレームSystem/360の登場を機に、両方の用途をカバーする単一の万能言語を作れば開発・教育コストを削減できると考えた。PL/Iは数値計算、文字列処理、並行処理、例外処理まで幅広い機能を1つの言語に統合するという野心的な目標を掲げて設計された。

しかし、あらゆる用途に対応しようとした結果、言語仕様そのものが肥大化し、コンパイラの実装が複雑になりすぎるという副作用を招いた。委員会方式での機能追加の積み重ねが、結果として学習コストの高さにもつながった。

## 特徴

- Fortran、ALGOL 60、COBOLの機能を統合した「万能言語」を志向
- 構造体、ポインタ、並行処理、例外処理(ON文)など多様な機能を搭載
- System/360という単一プラットフォーム全体での利用を想定
- 仕様が肥大化し、コンパイラの実装・学習コストが高くなった
- 一部の機能(例外処理、構造化制御)は後続言語の設計に影響を与えた
- デフォルト値による暗黙の型変換が多く、意図しないバグの温床になりやすいとも評された

## 影響を受けた言語

- [Fortran](fortran.md)
- [ALGOL 60](algol_60.md)
- [COBOL](cobol.md)


## 影響を与えた言語

- [XPL](xpl_lang.md)
- [CMS-2](cms2_lang.md)
- [B](b_language.md)
- [PL/C](plc_lang.md)
- [PL/S](pls_lang.md)
- [C](c.md)
- [PL/M](plm_lang.md)
- [SP/k](sp_k.md)
- [SAS](sas.md)
- [Control Language (CL)](ibm_cl.md)
- [Rexx](rexx.md)
- [NetRexx](netrexx_lang.md)


## 現在の位置づけ

現在はレガシー言語として位置づけられている(status: legacy)。一部のメインフレーム環境では今も稼働しているが、新規開発で採用されることはほとんどない。

「機能を詰め込みすぎた言語」の教訓的事例として、言語設計を論じる文脈でしばしば言及される存在である。

## Hello World

```pli
HELLO: PROCEDURE OPTIONS(MAIN);
    PUT LIST('Hello, world!');
END HELLO;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PL/I)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PL/I)
