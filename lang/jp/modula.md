# Modula

- 登場年: 1975年
- 設計者: Niklaus Wirth
- パラダイム: procedural, concurrent
- 系統: algol-pascal

## 解決したかった課題

Pascalを設計したWirthは、実際に大規模なプログラムを組んでいく中で、Pascal自身に大きなプログラムを整理・管理するための仕組みが欠けていることに気づいた。関連する型・変数・手続きをひとまとめにして外部から隠蔽する手段がなく、プログラムが大きくなるほど見通しが悪くなってしまう。そこでWirthは、関連する宣言を一つの単位としてまとめられる「モジュール」機構をPascalに導入したいと考えた。さらに、複数の処理を安全に並行実行できる「マルチプログラミング」の考え方も言語レベルで扱えるようにし、当時台頭しつつあった並行処理やリアルタイム制御のニーズに応えようとした。

## 特徴

- Pascalの文法を基礎としつつ、宣言をひとまとめにして外部から隠蔽できるモジュール機構を新たに導入した
- プロセス・信号(signal)といった言語組み込みの機能により、並行処理(マルチプログラミング)を直接記述できる
- モジュール単位でのコンパイルや情報隠蔽を意識した、大規模プログラム向けの構造化の考え方を持ち込んだ
- Pascalの単純さと堅実さを保ちながら、システムプログラミングに必要な低水準の機能にも配慮している
- 実験的な色合いが強く、後継のModula-2でより洗練された形に整理されることになった

## 影響を受けた言語

- [Pascal](pascal.md)


## 影響を与えた言語

- [Euclid](euclid.md)
- [Modula-2](modula_2.md)
- [Zonnon](zonnon.md)
- [ParaSail](parasail_lang.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)であり、単体で使われることは現在ない。しかしモジュール機構と並行処理という着想は後継のModula-2に直接引き継がれ、以後の構造化プログラミング言語の設計に大きな足跡を残した。

## Hello World

```
MODULE Hello;
    FROM InOut IMPORT WriteString, WriteLn;
BEGIN
    WriteString("Hello, World!");
    WriteLn
END Hello.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Modula)
