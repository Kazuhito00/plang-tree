# Pascal

- 登場年: 1970年
- 設計者: Niklaus Wirth
- パラダイム: procedural
- 系統: algol-pascal

## 解決したかった課題

1960年代後半、ALGOL 60は学術的には高く評価されながらも、仕様の曖昧さや実装の複雑さから教育目的にはやや扱いにくい言語だった。

Niklaus Wirthは、ALGOL 60の国際委員会での標準化議論(いわゆるALGOL Xの策定)に関わる中で、より簡潔で厳格な文法を持ち、構造化プログラミングの考え方を学生に直接教えられる言語の必要性を強く感じていた。

当時のプログラミング教育は事務処理向けのCOBOLか、大掛かりなFortranに偏りがちで、アルゴリズムの本質を教えるための「小さく明快な言語」が求められていた。Pascalはこの教育的要請に応えるために設計された。

## 特徴

- 強い静的型付けとレコード型・列挙型による構造化されたデータ定義
- begin/endによるブロック構造とif/while/for/caseなど構造化プログラミングの制御構文
- 手続き(procedure)と関数(function)を明確に区別する構文
- 教育用途を意識したシンプルで読みやすい文法
- ポインタ型を持ちつつも型安全性を重視した設計
- 単一のコンパイル単位を前提としたシンプルなプログラム構造

## 影響を受けた言語

- [ALGOL 60](algol_60.md)
- [Simula](simula.md)
- [ALGOL 68](algol_68.md)
- [ALGOL W](algol_w.md)


## 影響を与えた言語

- [SUE](sue_lang.md)
- [Concurrent Pascal](concurrent_pascal.md)
- [Alphard](alphard.md)
- [Modula](modula.md)
- [COMAL](comal.md)
- [Mesa](mesa.md)
- [Gypsy](gypsy_lang.md)
- [LIS](lis_lang.md)
- [PL/0](pl0_lang.md)
- [Euclid](euclid.md)
- [UCSD Pascal](ucsd_pascal.md)
- [Modula-2](modula_2.md)
- [Ada](ada.md)
- [Karel](karel.md)
- [Turing](turing_lang.md)
- [Standard ML](standard_ml.md)
- [VHDL](vhdl.md)
- [SISAL](sisal.md)
- [Turbo Pascal](turbo_pascal.md)
- [Verilog](verilog.md)
- [KRL (KUKA Robot Language)](krl_lang.md)
- [Oberon](oberon.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Visual Prolog](visual_prolog.md)
- [Emerald](emerald_lang.md)
- [Clarion](clarion_lang.md)
- [HyperTalk](hypertalk.md)
- [Modula-3](modula_3.md)
- [Wolfram Language](wolfram_language.md)
- [TADS](tads_lang.md)
- [Aldor](aldor_lang.md)
- [PL/SQL](plsql.md)
- [Euphoria](euphoria_lang.md)
- [Structured Text](structured_text.md)
- [Limbo](limbo.md)
- [C/AL](cal_lang.md)
- [OCaml](ocaml.md)
- [Component Pascal](component_pascal.md)
- [MuPAD](mupad_lang.md)
- [High Level Assembly](hla_lang.md)
- [JAL](jal_lang.md)
- [Zonnon](zonnon.md)
- [Go](go.md)
- [ParaSail](parasail_lang.md)
- [Odin](odin.md)
- [Microsoft Power Fx](power_fx.md)


## 現在の位置づけ

現在Pascalは主流の実務開発言語としての地位を失い、legacyな存在となっている。

しかし1980年代には教育用言語という枠を超えてTurbo PascalなどによりPC向けアプリケーション開発でも広く使われ、構造化プログラミングの普及に大きく貢献した言語として歴史的な評価は高い。今日でも一部の教育現場やレガシーシステムの保守で命脈を保っている。

## Hello World

```
program HelloWorld;
begin
  writeln('Hello, World!');
end.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Pascal)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Pascal_%28programming_language%29)
