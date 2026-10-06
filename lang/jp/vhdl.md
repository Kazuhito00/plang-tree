# VHDL

- 登場年: 1983年
- 設計者: 米国防総省(VHSICプログラム)
- パラダイム: concurrent, declarative
- 系統: hardware-description

## 解決したかった課題

1980年代初頭、米国防総省はVHSIC(超高速集積回路)プログラムの一環として多数の民間企業に集積回路を発注していたが、各社が独自の設計文書や記法を用いるため、仕様の解釈にずれが生じたり、設計資産を長期にわたって保守・再利用したりすることが困難だった。

そこで国防総省は、発注元と製造元の間で回路仕様を曖昧さなく共有し、将来にわたって仕様を検証・再利用できる標準記述言語としてVHDL(VHSIC Hardware Description Language)を策定した。設計にあたっては、既に軍需・防衛システム向け標準言語として採用されていたAdaの構文が下敷きにされ、長期保守を前提とした厳格な仕様が求められた。

## 特徴

- Ada譲りの厳格な構文と強い型付けにより、大規模な回路仕様を明確に記述できる
- 回路の並行動作をプロセス単位でモデル化し、複数の信号の同時変化を扱える
- ゲートレベルから抽象的な動作レベルまで、複数の抽象度で回路を記述可能
- シミュレーションによる検証と、論理合成による実装の両方に対応
- IEEE 1076として標準化され、防衛・航空宇宙分野を中心に長期利用されている
- パッケージやライブラリによるモジュール化で、大規模な設計資産の再利用がしやすい

## 影響を受けた言語

- [Ada](ada.md)
- [Pascal](pascal.md)


## 影響を与えた言語

- [SystemC](systemc.md)
- [SystemVerilog](systemverilog.md)
- [MyHDL](myhdl.md)
- [Chisel](chisel.md)


## 現在の位置づけ

VHDLは現在も半導体設計・検証の現場で広く使われる現役の言語であり、Verilogと並んでデジタル回路設計の二大ハードウェア記述言語の一つとして、特に防衛・航空宇宙分野で高い信頼を得ている。ヨーロッパを中心に、大学教育や公的機関のプロジェクトでも標準的に採用され続けている。

## Hello World

VHDLにもコンソール出力の概念はないため、シミュレータ上で`report`文を実行するだけの簡単なエンティティ例を示す。

```vhdl
entity hello is
end entity hello;

architecture behavior of hello is
begin
  process
  begin
    report "Hello, World!";
    wait;
  end process;
end architecture behavior;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/VHDL)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/VHDL)
