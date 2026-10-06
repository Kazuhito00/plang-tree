# MyHDL

- 登場年: 2003年
- 設計者: Jan Decaluwe
- パラダイム: procedural, concurrent, generic
- 系統: hardware-description

## 解決したかった課題

Verilog/VHDLの冗長な文法や学習コストの高さが、ハードウェア設計への参入障壁となっていた。MyHDLは、Pythonの簡潔さと豊富なエコシステムをハードウェア記述に持ち込むことで、この課題を解決しようとした。アルゴリズムの設計とハードウェアの実装を同じ言語・同じ環境の中で行き来できるようにすることで、シミュレーションから実装までの開発サイクルを効率化することを目指した。

## 特徴

- Pythonの構文とライブラリをそのまま使い、ジェネレータ関数によってハードウェアの並行動作をモデル化する
- 記述したPythonコードからVerilogやVHDLのコードへ変換(コンバート)できる
- Pythonの豊富なテスト・検証ツール(単体テストフレームワークなど)をそのままハードウェア検証に応用できる
- 高水準の抽象化でアルゴリズムを記述し、そこから段階的にハードウェア実装へと詳細化できる
- オープンソースのライブラリとして提供され、FPGA開発などの実務や教育の現場で利用されている

## 影響を受けた言語

- [Python](python.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語として位置づけられている。FPGA開発やディジタル回路設計の教育、プロトタイピングの場面で根強く利用され続けている。

## Hello World

ハードウェア記述言語であるMyHDLでは、典型的な「Hello World」としてシミュレーション時にメッセージを出力する例が用いられる。

```python
from myhdl import block, instance, delay

@block
def hello_world():
    @instance
    def say_hello():
        print("Hello, World!")
        yield delay(10)
    return say_hello

inst = hello_world()
inst.run_sim()
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/MyHDL)
