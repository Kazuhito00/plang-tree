# Taichi

- 登場年: 2019年
- 設計者: Yuanming Hu
- パラダイム: array, procedural, concurrent
- 系統: domain-specific

## 解決したかった課題

Pythonは書きやすい反面、物理シミュレーションや疎な(スパースな)データ構造を扱う計算では実行速度が大きな課題となっていた。MIT出身のYuanming HuらはPythonに埋め込みつつJITコンパイルによりGPU/CPUで高速実行できる言語としてTaichiを開発した。特に疎なボクセルグリッドなど空間的に疎なデータ構造の扱いや、微分可能プログラミングによる物理ベース機械学習への応用を意識して設計されている。計算内容とスケジューリングを分離するHalide的なアプローチを参考にしつつ、Pythonのシンプルな文法を維持している。

## 特徴

- Pythonに埋め込まれたDSLとして実装されており、`@ti.kernel`や`@ti.func`のデコレータを付けた関数がJITコンパイルされGPU/CPUで実行される
- 疎なデータ構造(sparse data structures)を第一級の機能として提供し、疎なボクセルグリッドなどをメモリ効率よく扱える
- 計算ロジックとメモリレイアウト・スケジューリングを分離するHalideに似た設計思想を持ち、同じアルゴリズムを異なるデータ構造やバックエンドに適用しやすい
- 自動微分をサポートし、物理シミュレーションと機械学習を組み合わせた微分可能プログラミングに対応する
- CUDA、Vulkan、Metal、CPUなど複数のバックエンドを単一のコードから切り替えて実行できる
- Pythonの平易な文法をそのまま維持しているため、既存のPythonエコシステム(NumPyなど)と併用しやすい

## 影響を受けた言語

- [Python](python.md)
- [Halide](halide.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役の言語であり、物理シミュレーション、コンピュータグラフィックス、機械学習の研究・開発の現場で活発に利用が続いている。オープンソースコミュニティによる開発も継続している。

## Hello World

Taichiは`@ti.kernel`デコレータを付けた関数の中で`print`関数を呼び出すことで、GPU/CPU上で実行されるカーネルからメッセージを出力できる。

```python
import taichi as ti
ti.init(arch=ti.cpu)

@ti.kernel
def hello():
    print("Hello, world!")

hello()
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
