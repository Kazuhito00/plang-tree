# Nemerle

- 登場年: 2003年
- 設計者: Kamil Skalski, Michał Moskal, Leszek Pacholski, Paweł Olszta
- パラダイム: functional, object-oriented, procedural, macro, generic
- 系統: jvm-dotnet

## 解決したかった課題

2000年代初頭、.NET/Monoプラットフォーム上ではC#のようなオブジェクト指向言語が主流だったが、ML系やLisp系の関数型言語が持つ強力な型推論やパターンマッチング、マクロによるメタプログラミングの表現力は取り込まれていなかった。

ポーランド・ヴロツワフ大学のKamil Skalski、Michał Moskal、Leszek Pacholski、Paweł Olsztaらは、C#に似た親しみやすい構文の上に関数型・オブジェクト指向・命令型を自由に組み合わせられる.NET向け言語Nemerleを設計した。プログラムのトップレベルはオブジェクト指向の構造を持ちながら、メソッド本体には関数型のスタイルを用いるといった柔軟な書き分けができる。

## 特徴

- C#によく似た構文構造を持ち、既存の.NET開発者にも親しみやすい
- 強力なマクロによるメタプログラミング機能を持つ
- トップレベルはオブジェクト指向、メソッド本体は関数型といった柔軟なスタイルの併用が可能
- Lispの影響を受けたパターンマッチングやジェネリクスをサポートする
- .NET FrameworkおよびMono上で動作する静的型付け言語である

## 影響を受けた言語

- [C#](c_sharp.md)
- [Lisp](lisp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Nemerleは現在「historical」な言語であり、目立った新規開発はほとんど行われていない。2012年に主要開発者がJetBrainsに雇用され、言語実装フレームワークNitraの開発に軸を移したこともあり、Nemerle自体の開発速度は大きく低下した。

現在はロシアのソフトウェア開発コミュニティによって独立に保守が続けられているが、実用言語としての勢いはすでに失われている。名称はアーシュラ・K・ル・グウィンの小説『ゲド戦記』の登場人物、大魔法師ネマール(Nemmerle)にちなむ。

## Hello World

```
using System.Console;

module Program
{
    Main() : void
    {
        WriteLine("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Nemerle)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Nemerle)
