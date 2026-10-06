# Futhark

- 登場年: 2014年
- 設計者: Troels Henriksen, Cosmin Oancea, Martin Elsman
- パラダイム: functional, array
- 系統: numeric-scientific

## 解決したかった課題

コペンハーゲン大学DIKUのTroels Henriksen、Cosmin Oancea、Martin Elsmanらは、GPUなど大規模並列ハードウェア向けのプログラムを、CUDAやOpenCLを直接書くことなく高性能に記述する方法を模索した。Futharkは関数型のデータ並列プログラミングスタイルを採用し、コンパイラが高度な融合最適化を行うことで、手書きの並列コードに匹敵する性能の実現を目指す。単体の汎用言語としてではなく、既存アプリケーションに組み込む計算カーネルを生成するためのツールとして設計されている。

## 特徴

- 関数型のデータ並列プログラミングスタイルを採用し、配列演算を宣言的に記述できる
- コンパイラによる高度な融合(fusion)最適化により、中間配列の生成を抑えて高性能なGPUコードを生成する
- CUDAやOpenCLといったGPUカーネルへのコンパイルをターゲットとし、CやPythonなど他言語から呼び出して利用する
- 汎用プログラミング言語ではなく、計算カーネルの生成に特化したドメイン特化言語(DSL)として設計されている
- 静的型付けと強い型安全性により、並列プログラムの正しさをコンパイル時に検証できる

## 影響を受けた言語

- [APL](apl.md)
- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在はニッチな用途向けの言語として位置づけられている。GPU向け高性能計算カーネルを生成する研究・実用ツールとして、科学計算分野の一部で活用され続けている。

## Hello World

```futhark
def main = "Hello, world!"
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Futhark_%28programming_language%29)
