# Verilog

- 登場年: 1984年
- 設計者: Phil Moorby
- パラダイム: concurrent, declarative
- 系統: hardware-description

## 解決したかった課題

集積回路の複雑化が進む中、設計者は回路図やブレッドボードでの試作だけでは大規模なデジタル回路の動作を事前に検証しきれなくなっていた。実際にチップを製造してから欠陥が見つかれば莫大なコストと時間の損失につながる。

そこでPhil Moorbyは、回路の構造と振る舞いをソフトウェアのように記述し、製造前にシミュレータ上で論理動作を検証できる言語としてVerilogを開発した。C言語に似た構文を採用したことで、既存のソフトウェア技術者にも習得しやすい設計になっている。

## 特徴

- 複数の回路ブロックが同時並行に動作する様子を、モジュール単位の並行プロセスとして記述する
- ゲートレベルから動作レベル(RTL)まで異なる抽象度で回路を記述できる
- C言語に似た制御構文(if、for、caseなど)を採用し、ソフトウェア技術者にも親しみやすい
- シミュレーションによる動作検証と、論理合成による実回路生成の両方に使われる
- IEEE 1364として標準化され、後にSystemVerilogへ拡張された
- 論理合成ツールと組み合わせることで、記述した回路をそのまま実チップやFPGAに実装できる

## 影響を受けた言語

- [C](c.md)
- [Pascal](pascal.md)
- [Ada](ada.md)
- [Fortran](fortran.md)


## 影響を与えた言語

- [SystemC](systemc.md)
- [SystemVerilog](systemverilog.md)
- [MyHDL](myhdl.md)
- [Chisel](chisel.md)


## 現在の位置づけ

Verilogは現在も半導体設計・検証の現場で広く使われる現役の言語であり、VHDLと並んでデジタル回路設計の二大ハードウェア記述言語の一つとしての地位を保っている。特に商用ASIC設計や検証フローでは、拡張版であるSystemVerilogが事実上の標準として定着している。

## Hello World

Verilogにはコンソール出力の概念がないため、シミュレータ上で`$display`を呼び出すだけの簡単なモジュール例を示す。

```verilog
module hello;
  initial begin
    $display("Hello, World!");
  end
endmodule
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Verilog)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Verilog)
