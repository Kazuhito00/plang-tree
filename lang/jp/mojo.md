# Mojo

- 登場年: 2023年
- 設計者: Chris Lattner
- パラダイム: procedural, object-oriented, systems
- 系統: c-family

## 解決したかった課題

2020年代前半、PythonはAI・機械学習分野の事実上の標準言語となっていたが、インタプリタ型ゆえの実行速度の遅さと、GPU・TPUなどのアクセラレータ向け最適化の欠如が、研究段階のプロトタイプから本番環境への移行を妨げていた。LLVM・Clang・Swiftの設計者でもあるChris Lattnerは、Modular社を設立し、Pythonとの高い構文互換性を保ちながら、Rust並みのメモリ安全性とC言語並みの実行速度をコンパイルによって実現する言語としてMojoを開発した。

## 特徴

- Pythonの構文・キーワードの多くをそのまま採用し、既存のPython開発者が習得しやすい
- MLIR(Multi-Level Intermediate Representation)というコンパイル基盤を用い、CPU・GPU・TPUなど多様なハードウェアに向けて最適化されたコードを生成する
- 所有権システムなどRust譲りのメモリ安全性の仕組みを取り入れている
- 段階的に静的型付けを導入でき、パフォーマンスが必要な部分だけ型を明示できる
- 2026年8月にMojo 1.0としてオープンソース化された

## 影響を受けた言語

- [Python](python.md)
- [C++](c_plus_plus.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Zig](zig.md)
- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

AI・機械学習分野におけるPythonの実行速度問題を解決する新興言語として活発に開発が続いており、2026年のオープンソース化を機に採用の広がりが期待されている。

## Hello World

```
fn main():
    print("Hello, World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Mojo_%28programming_language%29)
