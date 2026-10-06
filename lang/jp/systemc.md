# SystemC

- 登場年: 1999年
- 設計者: Synopsys, CoWare, Open SystemC Initiative (OSCI)
- パラダイム: object-oriented, concurrent, event-driven, systems
- 系統: hardware-description

## 解決したかった課題

SystemCは、VHDLやVerilogによるRTL(レジスタ転送レベル)記述だけでは、ハードウェアとソフトウェアの協調設計や上位レベルでのアーキテクチャ検討が困難であるという課題に対応するために開発された。従来のハードウェア記述言語は回路の詳細な構造記述には強かったが、システム全体のアーキテクチャを高い抽象度で検討したり、ハードウェアとソフトウェアの境界を柔軟に扱ったりするには不向きだった。そこで複数のEDAベンダーが共同で、C++の標準的なクラスライブラリとしてSystemCを開発し、トランザクションレベルモデリング(TLM)を含む上位レベルのシステム設計を可能にすることを目指した。

## 特徴

- C++のクラスライブラリとして実装されており、通常のC++コンパイラでコンパイル・シミュレーションできる
- モジュール、ポート、シグナルといったハードウェア記述のための概念をC++のクラスとして提供する
- トランザクションレベルモデリング(TLM)をサポートし、詳細な信号レベルより高い抽象度でのシステム設計を可能にする
- イベント駆動シミュレーションのカーネルを備え、並行するハードウェアプロセスの挙動を模擬できる
- ソフトウェアとハードウェアを同一言語(C++)で記述できるため、ハードウェア/ソフトウェア協調設計に適している

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

active(現役で広く使われている)言語として位置づけられる。IEEE規格として標準化されており、半導体設計における上位レベルモデリングやハードウェア/ソフトウェア協調検証の分野で現在も使われ続けている。

## Hello World

SystemCではC++のクラスとしてモジュールを定義し、`sc_main`関数がエントリポイントとなる。

```cpp
#include <systemc.h>

int sc_main(int argc, char* argv[]) {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/SystemC)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SystemC)
