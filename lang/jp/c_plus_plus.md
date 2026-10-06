# C++

- 登場年: 1985年
- 設計者: Bjarne Stroustrup
- パラダイム: procedural, object-oriented, generic
- 系統: c-family

## 解決したかった課題

1980年代初頭、Bjarne Stroustrupはベル研究所で大規模な分散システムのシミュレーションを行う中で、Cの実行効率とシステムプログラミング能力を保ったまま、Simulaが持つクラスによる抽象化能力を使いたいと考えた。当時のC言語は巨大なソフトウェアを構造的に整理する手段が乏しく、SimulaやSmalltalkのようなオブジェクト指向言語は実行速度でCに劣っていた。この二つの長所を両立させるため、Stroustrupはまず「C with Classes」を作り、これが後にC++として発展した。

## 特徴

- Cとの高いソースレベル互換性を保ちながらクラス・継承・仮想関数によるオブジェクト指向を追加
- テンプレートによる強力なジェネリックプログラミングとコンパイル時計算(テンプレートメタプログラミング)
- 「使わない機能にはコストを払わない」というゼロオーバーヘッド原則
- RAII(リソース確保は初期化)による決定論的なリソース管理
- 複数のパラダイム(手続き型・オブジェクト指向・ジェネリック・一部関数型)を統合したマルチパラダイム言語
- 標準テンプレートライブラリ(STL)によるコンテナ・アルゴリズムの提供
- 演算子オーバーロードや多重継承など、表現力の高い柔軟な言語機能
- ISO標準化委員会による継続的な仕様改訂(C++11/14/17/20/23)でモダンな機能を追加し続けている
- 例外処理やスマートポインタなど、安全性を高める仕組みを段階的に整備

## 影響を受けた言語

- [C](c.md)
- [Simula](simula.md)
- [Ada](ada.md)
- [ALGOL 68](algol_68.md)
- [Smalltalk](smalltalk.md)
- [Mesa](mesa.md)


## 影響を与えた言語

- [Wolfram Language](wolfram_language.md)
- [TADS](tads_lang.md)
- [Charm++](charm_plus_plus.md)
- [PowerBuilder](powerbuilder.md)
- [GNU E](gnu_e.md)
- [Lua](lua.md)
- [Euphoria](euphoria_lang.md)
- [Amiga E](amiga_e.md)
- [Pike](pike.md)
- [PHP](php.md)
- [Java](java.md)
- [UnrealScript](unrealscript.md)
- [SystemC](systemc.md)
- [ActiveBasic](activebasic.md)
- [High Level Assembly](hla_lang.md)
- [C#](c_sharp.md)
- [D](d.md)
- [Ch](ch_lang.md)
- [Cyclone](cyclone_lang.md)
- [SystemVerilog](systemverilog.md)
- [AngelScript](angelscript.md)
- [X10](x10.md)
- [Vala](vala.md)
- [ATS](ats_lang.md)
- [Nim](nim.md)
- [Chapel](chapel.md)
- [Rust](rust.md)
- [Halide](halide.md)
- [Solidity](solidity.md)
- [SYCL](sycl_lang.md)
- [Zig](zig.md)
- [Kuin](kuin_lang.md)
- [Vale](vale_lang.md)
- [Hylo](hylo_lang.md)
- [Carbon](carbon.md)
- [Mojo](mojo.md)


## 現在の位置づけ

C++は現在も産業利用の広いシステムプログラミング言語であり、ゲームエンジン、金融取引システム、組込み機器、OS開発など性能が要求される分野で広く使われている。長年にわたる規格改訂(C++11以降)により近代的な機能を取り込み続けており、活発に進化する現役言語である。一方で言語仕様の複雑さそのものが課題となり、RustやCarbonなど後継を志向する言語が生まれる土壌にもなっている。

## Hello World

```
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/C%2B%2B)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/C%2B%2B)
