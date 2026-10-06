# Turing

- 登場年: 1982年
- 設計者: Ric Holt, James Cordy
- パラダイム: procedural, object-oriented
- 系統: algol-pascal

## 解決したかった課題

1980年代初頭、大学の初学者向けプログラミング教育では、Pascalなど既存言語の複雑な構文規則が学習の妨げになっていた。トロント大学のRic HoltとJames Cordyは、Pascal、Euclid、SP/kでの経験を踏まえ、読みやすく学びやすい構文を持つ教育用言語Turingを設計した。セミコロンを不要にし、明示的な終端キーワード(end ifなど)を用いることで、初心者が構造を理解しやすいコードを書けるようにした。オンタリオ州の高校を中心に広く採用され、教育用言語として大きな役割を果たした。

## 特徴

- Pascal譲りのブロック構造を持ちながら、セミコロンを省略できる簡潔な文法を採用している
- `end if`、`end for`など明示的な終端キーワードを用い、ブロックの対応関係を視覚的に分かりやすくしている
- モジュールやオブジェクト指向拡張(Object-Oriented Turing)により、教育用途から実務的な開発まで対応できる
- 型安全性を重視した設計で、初心者が犯しやすい誤りをコンパイル時に検出しやすい
- 対話的な実行環境を備え、学習者がすぐに結果を確認しながらプログラミングを学べる

## 影響を受けた言語

- [Pascal](pascal.md)
- [Euclid](euclid.md)
- [SP/k](sp_k.md)


## 影響を与えた言語

- [TXL](txl_lang.md)


## 現在の位置づけ

Turingは主にカナダ、特にオンタリオ州の中学・高校教育で長く使われてきた教育用言語であり、現在も教育目的での利用が中心である。商用・産業用途で広く使われることはなく、教育用途に特化した存在として位置づけられている。

## Hello World

Turingでは`put`文を用いて文字列を出力する。

```turing
put "Hello, world!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Turing)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Turing_%28programming_language%29)
