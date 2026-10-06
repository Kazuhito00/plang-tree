# Euclid

- 登場年: 1977年
- 設計者: Butler Lampson, James G. Mitchell, Jim Horning, Ralph L. London, Gerald J. Popek
- パラダイム: procedural, functional
- 系統: algol-pascal

## 解決したかった課題

1970年代、DARPA(米国防高等研究計画局)とカナダ国防省は、書かれたプログラムが本当に仕様通りに正しく動作することを数学的に証明できる「検証可能なプログラム」を書くための言語を必要としていた。当時のPascalのような言語は表現力に優れる一方で、ポインタのエイリアシングや副作用の混在など、形式的な検証を難しくするあいまいな機能を多く抱えていた。そこでLampsonらは、Pascalを土台にしながらも検証を妨げる機能を意図的に取り除き、安全性と検証可能性を最優先したシステムプログラミング言語を設計しようとした。軍事・防衛システムのような高い信頼性が要求される場面での利用が念頭に置かれていた。

## 特徴

- Pascalに似た文法を持ちながら、形式的検証を妨げるあいまいな機能(自由なポインタ操作やエイリアシングなど)を意図的に排除している
- 手続きの事前条件・事後条件を記述でき、プログラムの正しさを機械的に検証しやすい設計になっている
- モジュール機構を取り入れ、大規模なシステムプログラムを整理して記述できるようにしている
- CLUの抽象データ型やMesaのモジュール概念など、複数の先行言語の優れた点を取り込んでいる
- 実用性よりも検証可能性を重視した研究色の強い言語であり、商用利用は広がらなかった

## 影響を受けた言語

- [Pascal](pascal.md)
- [Mesa](mesa.md)
- [CLU](clu.md)
- [BCPL](bcpl.md)
- [Modula](modula.md)
- [Alphard](alphard.md)
- [Gypsy](gypsy_lang.md)
- [LIS](lis_lang.md)
- [SUE](sue_lang.md)


## 影響を与えた言語

- [Modula-2](modula_2.md)
- [Turing](turing_lang.md)
- [Modula-3](modula_3.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)であり、現在実務で使われることはない。形式的検証を前提としたプログラミング言語設計の初期の試みとして、プログラミング言語研究史の中で参照される存在である。

## Hello World

```
module Hello =
begin
    procedure main =
    begin
        write("Hello, World!")
    end
end.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Euclid_%28programming_language%29)
