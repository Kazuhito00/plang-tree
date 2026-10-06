# SystemVerilog

- 登場年: 2002年
- 設計者: Co-Design Automation, Accellera
- パラダイム: procedural, object-oriented, concurrent, event-driven
- 系統: hardware-description

## 解決したかった課題

SystemVerilogは、大規模化・複雑化するチップ設計や機能検証において、従来のVerilogでは表現力が不足しているという課題に対応するために開発された。特に検証工程では、C++やJavaのようなオブジェクト指向機能を備えた高度な検証言語が求められていた。SystemVerilogは、Co-Design AutomationのSuperlogという言語を土台に、Accellera(業界標準化団体)が主導する形で拡張を進め、ハードウェアの設計記述と機能検証を単一の言語でカバーできるようにすることを目指した。これにより設計者と検証エンジニアが同じ言語基盤の上で協業できる環境を実現しようとした。

## 特徴

- Verilogの構文とセマンティクスを拡張し、より強力な型システム(構造体、共用体、インタフェース)を追加している
- オブジェクト指向プログラミング機能(クラス、継承、多態性)を備え、高度な検証環境(UVMなど)の構築を可能にする
- アサーション記述言語(SVA)を統合しており、設計の性質を形式的に記述・検証できる
- ランダム化制約に基づくテストベンチ生成をサポートし、機能検証の自動化を強力に推進する
- 設計記述(RTL)と検証コードを同じファイル・同じ言語仕様の中で扱える統一性を持つ

## 影響を受けた言語

- [Verilog](verilog.md)
- [VHDL](vhdl.md)
- [C++](c_plus_plus.md)
- [Java](java.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

active(現役で広く使われている)言語として位置づけられる。IEEE規格として標準化されており、半導体業界における設計・機能検証の標準言語として現在も広く使われている。

## Hello World

SystemVerilogでは`initial`ブロック内で`$display`システムタスクを使って出力する。

```systemverilog
module hello;
  initial begin
    $display("Hello, World!");
  end
endmodule
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/SystemVerilog)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SystemVerilog)
