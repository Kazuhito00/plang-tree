# PEARL

- 登場年: 1977年
- 設計者: ドイツ規格協会(DIN)標準化委員会
- パラダイム: procedural, concurrent
- 系統: algol-pascal

## 解決したかった課題

プロセス制御やリアルタイム制御のソフトウェアを、アセンブリ言語や汎用言語の上に手作業でマルチタスキング機構を組み込んで書くのは煩雑で誤りやすかった。ドイツの産業界には、リアルタイム性とマルチタスキングを言語レベルで直接サポートする、学びやすい高水準言語が求められていた。

PEARL(Process and Experiment Automation Realtime Language)は1977年以降、ドイツ規格協会(DIN)によって標準化が進められ、マルチタスキングとリアルタイムプログラミングを言語自体に組み込むとともに、固定小数点・浮動小数点数、文字列、ビット値、構造体、多次元配列、型付き/型無しポインタと型キャストなどをサポートすることで、この課題に応えた。

## 特徴

- 「Process and Experiment Automation Realtime Language」の頭字語
- マルチタスキングとリアルタイムプログラミングを言語レベルで直接サポート
- 固定小数点・浮動小数点数値、文字・文字列データ、ビット値に対応
- 構造体や多次元配列、型付き/型無しポインタ、型キャストをサポート
- 現行版PEARL-90は1998年にDIN 66253-2として標準化された
- オープンソース実装OpenPEARLによって現在も利用が続けられている

## 影響を受けた言語

特になし(一次資料上で明確な影響元言語は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

現在はニッチな用途に限られる言語である(status: niche)。現行の標準化版PEARL-90は1998年にDIN 66253-2として規格化され、オープンソースのOpenPEARLプロジェクトによって処理系が保守され続けている。

主にドイツの産業・プロセス制御分野で、長期の保守が求められるプラント制御システムなどに使われており、広く教えられたり採用されたりする汎用言語ではなく、限定的な文脈で使われ続けている言語である。

## Hello World

```
MODULE (HELLOWORLD);
   SYSTEM;
       TERMINAL:DIS<->SDVLS(2);

   PROBLEM;
       SPC TERMINAL DATION INOUT ALPHIC DIM(,) TFU MAX FORWARD CONTROL (ALL);

   MAIN:TASK;
      OPEN TERMINAL;
      PUT 'Hello World!' TO TERMINAL;
      CLOSE TERMINAL;
   END;

MODEND;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PEARL_(programming_language))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PEARL_(プログラミング言語))
