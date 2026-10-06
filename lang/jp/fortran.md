# Fortran

- 登場年: 1957年
- 設計者: John Backus
- パラダイム: procedural, array
- 系統: origin

## 解決したかった課題

1950年代のIBMでは、科学技術計算プログラムの開発に多くの時間がアセンブリ言語での手作業コーディングに費やされており、生産性の低さが問題視されていた。John Backusが率いるチームは、数式に近い記法でプログラムを書けるようにしつつ、生成される機械語コードが熟練プログラマの手書きアセンブリに劣らない実行効率を持つことを目指した。

「高水準言語は書きやすいが実行が遅い」という当時の常識を覆すため、最適化コンパイラの開発に多大な労力が注がれた。この挑戦が成功したことで、高水準言語による科学技術計算という道が現実的な選択肢になり、以後のプログラミング言語開発の方向性そのものを決定づけた。

## 特徴

- 数式に近い代数的な記法でプログラムを記述できる
- 配列演算や数値計算に強く、科学技術計算・工学シミュレーション向けに最適化されている
- 初の実用的な最適化コンパイラを備え、手書きアセンブリに匹敵する性能を実現した
- GOTO文中心の初期設計から、後の改訂で構造化制御構文やモジュール機能が追加された
- 現在もHPC(高性能計算)分野で数値計算ライブラリの多くがFortranで書かれている
- Fortran 90以降は配列演算構文やモジュールが強化され、現代的な言語機能も取り込んでいる

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

- [ALGOL 58](algol_58.md)
- [DYNAMO](dynamo_lang.md)
- [ALGOL 60](algol_60.md)
- [SIMSCRIPT](simscript.md)
- [PL/I](pl_i.md)
- [BASIC](basic.md)
- [CORAL 66](coral66.md)
- [SPSS](spss_lang.md)
- [CMS-2](cms2_lang.md)
- [PILOT](pilot_lang.md)
- [WATFIV](watfiv_lang.md)
- [B](b_language.md)
- [DIBOL](dibol_lang.md)
- [C](c.md)
- [SAS](sas.md)
- [Mortran](mortran_lang.md)
- [Ratfor](ratfor_lang.md)
- [IDL](idl_lang.md)
- [SISAL](sisal.md)
- [MATLAB](matlab.md)
- [Verilog](verilog.md)
- [Wolfram Language](wolfram_language.md)
- [GNU Octave](octave.md)
- [Scilab](scilab.md)
- [Fortress](fortress.md)
- [Chapel](chapel.md)


## 現在の位置づけ

現在も現役の言語であり(status: active)、初の実用高水準言語として科学技術計算・HPC分野で使われ続けている。

長年蓄積された数値計算資産の多さから、新規のスーパーコンピュータ向けソフトウェアでも採用が続いており、気象予測や物理シミュレーションの中核を担っている。

## Hello World

```fortran
program hello
    print *, 'Hello, World!'
end program hello
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Fortran)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Fortran)
