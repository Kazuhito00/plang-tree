# Chisel

- 登場年: 2012年
- 設計者: Jonathan Bachrach, Huy Vo, Brian Richards, Yunsup Lee, Krste Asanović
- パラダイム: functional, object-oriented, declarative, generic
- 系統: hardware-description

## 解決したかった課題

Chiselは、VerilogやVHDLでは再利用可能なハードウェアジェネレータを書く際の抽象化能力が乏しいという課題に対応するために、カリフォルニア大学バークレー校で開発された。特にRISC-Vベースのプロセッサ「Rocket Chip」のような複雑な設計を効率的に生成したいというニーズが背景にあった。従来のハードウェア記述言語は、パラメータ化されたモジュールの生成や高階的な設計の抽象化が難しく、大規模なプロセッサ設計では冗長なコードが増えがちだった。ChiselはScalaの言語機能を土台にし、そのオブジェクト指向・関数型プログラミングの柔軟さを活用することで、パラメータ化されたハードウェア記述を実現しようとした。

## 特徴

- Scalaの埋め込みドメイン特化言語(eDSL)として実装されており、Scalaのライブラリをそのままインポートして使う
- 関数型・オブジェクト指向双方の抽象化機能を活用し、パラメータ化されたハードウェアジェネレータを簡潔に記述できる
- 型による静的なチェックがScalaのコンパイル時に働き、多くのハードウェア設計上の誤りを早期に検出できる
- 高階関数やコレクション操作を用いて、繰り返しの多い回路構造を簡潔に生成できる
- 最終的にVerilogコードを生成するため、既存のEDAツールチェーンとシームレスに統合できる

## 影響を受けた言語

- [Scala](scala.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられる。RISC-Vプロセッサの研究開発やオープンソースハードウェア設計の分野で活発に使われ続けている。

## Hello World

ChiselはScala上のライブラリであるため、Scalaのコードとしてハードウェアモジュールを記述する。単純な出力にはScalaの標準機能を用いる。

```scala
object Hello extends App {
  println("Hello, World!")
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Chisel_%28programming_language%29)
