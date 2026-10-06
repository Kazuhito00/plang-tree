# Modula-2

- 登場年: 1978年
- 設計者: Niklaus Wirth
- パラダイム: procedural
- 系統: algol-pascal

## 解決したかった課題

Pascalは教育用言語として優れた明快さを持っていたが、大規模なプログラムを複数の独立した単位に分割して開発したり、OSやデバイスドライバのような低レベルなハードウェア制御を行う機能が欠けていた。

Niklaus WirthはXerox PARCでの客員研究を経て、自身のワークステーションプロジェクト「Lilith」とそのOSを実装するために、Pascalの明快さを保ちながらモジュール分割とシステムプログラミング機能を備えた新しい言語が必要だと考えた。

こうして生まれたのがModula-2であり、単なる教育用言語から実用的なシステム記述言語への進化を目指したものだった。

## 特徴

- モジュール(MODULE)によるインターフェースと実装の分離、名前空間の管理
- 低水準のメモリ操作やアドレス指定が可能なシステムプログラミング機能
- Pascal譲りの強い型付けと構造化された制御構文
- コルーチンによる並行処理のサポート
- コンパイル単位ごとの独立コンパイルを前提とした設計
- 別々にコンパイルされたモジュール間で型の整合性を検査する仕組み

## 影響を受けた言語

- [Pascal](pascal.md)
- [Modula](modula.md)
- [Mesa](mesa.md)
- [ALGOL W](algol_w.md)
- [Euclid](euclid.md)


## 影響を与えた言語

- [Ada](ada.md)
- [Oberon](oberon.md)
- [Modula-3](modula_3.md)
- [JADE](jade_lang.md)
- [High Level Assembly](hla_lang.md)


## 現在の位置づけ

Modula-2は現在historicalな位置づけであり、実務での新規開発にはほぼ使われていない。

しかしモジュール概念を実用的な形で導入した点で、後続の多くの言語のモジュールシステム設計に影響を与えた歴史的意義の大きい言語である。一部の組込み・教育分野では今も処理系が保守されている。

## Hello World

```
MODULE Hello;

FROM InOut IMPORT WriteString, WriteLn;

BEGIN
  WriteString("Hello, world!");
  WriteLn
END Hello.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Modula-2)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Modula-2)
