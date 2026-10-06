# Ch

- 登場年: 2001年
- 設計者: Harry H. Cheng
- パラダイム: scripting, procedural, object-oriented
- 系統: c-family

## 解決したかった課題

数学・数値計算・プログラミングを学ぶ初学者にとって、C/C++はコンパイルの手順が必要でハードルが高い言語だった。また、既存のC/C++コードやライブラリを対話的に素早く試したいエンジニアにとっても、コンパイルなしで実行できる環境が求められていた。

Harry H. Chengは、C言語のスーパーセットでありC++のクラスも扱えるインタプリタ言語Chを開発し、この課題に応えた。

## 特徴

- C90に準拠し、複素数・可変長配列・IEEE 754浮動小数点演算などC99の主要機能も取り込んだCのスーパーセット
- C++のクラスも扱える(「C with C++ classes」)
- 既存のC/C++ライブラリの関数を呼び出せる、またC/C++アプリケーションに組み込むこともできる
- シェルと統合開発環境(IDE)を兼ねた対話的な実行環境
- 数値計算やグラフ描画の機能を標準で備える
- C-STEM Studioという教育プラットフォームに統合され、Arduino・LEGO Mindstormsなどのロボティクスプログラミングをサポート

## 影響を受けた言語

- [C](c.md)
- [C++](c_plus_plus.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Chの最新安定版(8.0.0)は2017年11月にリリースされており、更新の頻度は落ちているが、学生向けや非商用のRaspberry Pi向けには無料版も提供されている(status: niche)。

C-STEM StudioなどのSTEM教育・ロボティクス教育の文脈で、現在も利用され続けている言語である。

## Hello World

一次資料上で確認できなかった。ただしCのスーパーセットであるため、通常のCのHello Worldに準じたコードがそのまま動作すると考えられる。

```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Ch_%28computer_programming%29)
