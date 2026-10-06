# Halide

- 登場年: 2012年
- 設計者: Jonathan Ragan-Kelley, Andrew Adams
- パラダイム: functional, array, dataflow, declarative
- 系統: domain-specific

## 解決したかった課題

画像処理プログラムは、アルゴリズムのロジックとループ順序・並列化・ベクトル化といった実行スケジュールの詳細が密結合しており、性能チューニングのたびにコード全体を書き換える必要があった。HalideはMITのJonathan Ragan-KellyとAndrew Adamsらによって開発され、画像処理パイプラインの「アルゴリズム」と「スケジュール」を明確に分離することでこの問題を解決した。開発者はまずアルゴリズムを宣言的に記述し、その後スケジュールだけを変更することで、コードを書き直さずに様々なハードウェア向けに性能を最適化できる。C++に組み込まれるDSLとして実装されており、GoogleのPixelシリーズやAdobe Photoshopなど産業界で広く採用されている。

## 特徴

- 画像処理パイプラインの「アルゴリズム」と「スケジュール(実行順序・並列化・ベクトル化などの最適化方針)」を明確に分離する
- アルゴリズムは関数型的な`Func`と`Var`の組み合わせによって宣言的に記述する
- スケジュールだけを変更することで、コードを書き直さずにCPU・GPUなど様々なハードウェア向けに性能を最適化できる
- C++に組み込まれるDSL(内部DSL)として実装されており、既存のC++プロジェクトに統合しやすい
- 自動スケジューリング(オートスケジューラ)機能も備え、最適なスケジュールの探索を支援する
- GoogleのPixelシリーズのカメラ処理やAdobe Photoshopなど、産業界で広く実運用されている

## 影響を受けた言語

- [C++](c_plus_plus.md)


## 影響を与えた言語

- [Taichi](taichi_lang.md)


## 現在の位置づけ

active。Google、Adobeをはじめとする産業界で画像処理・計算写真の分野で広く実用されており、コンパイラ最適化研究の分野でも参照される代表的なDSLの一つとなっている。

## Hello World

Halideはドメイン特化言語であり、テキスト出力そのものよりも画像処理パイプラインの定義がその本質である。以下はC++に組み込まれたHalideの最小限のパイプライン例で、標準のC++機能で「Hello, World!」を出力しつつ、Halideの関数`gradient`を定義・実行している。

```cpp
#include "Halide.h"
#include <cstdio>
using namespace Halide;

int main() {
    printf("Hello, World!\n");

    Func gradient;
    Var x, y;
    gradient(x, y) = x + y;
    Buffer<int32_t> output = gradient.realize({8, 8});

    return 0;
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Halide_%28programming_language%29)
