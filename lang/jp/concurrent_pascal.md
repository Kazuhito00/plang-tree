# Concurrent Pascal

- 登場年: 1975年
- 設計者: Per Brinch Hansen
- パラダイム: procedural, concurrent, systems
- 系統: algol-pascal

## 解決したかった課題

1970年代前半、共有メモリ型コンピュータ上でOSやリアルタイム監視プログラムのような並行処理プログラムを安全に記述する高水準言語が存在しなかった。Per Brinch HansenはPascalをベースに、モニタ(monitor)という同期・排他制御の概念を導入し、プロセス間通信を構造化された形で記述できるようにした。DEC PDP-11向けの実装を通じて、安全な並行プログラミングの理論と実践の基礎を築いた。

## 特徴

- Pascalの手続き的な構文をベースに、並行プロセスの生成と管理を言語仕様に組み込んでいる
- モニタと呼ばれる構造を導入し、共有資源へのアクセスを排他制御と条件同期によって安全に管理する
- プロセス間通信をポインタや任意のメモリ操作によらず、構造化された形式で記述できる
- OSのカーネルやリアルタイム監視プログラムを高水準言語で安全に書けることを実証した
- 型安全性を重視し、危険な低レベル操作を排除することでシステムプログラミングの信頼性を高めた

## 影響を受けた言語

- [ALGOL 60](algol_60.md)
- [Simula](simula.md)
- [Pascal](pascal.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的役割を終えた)言語であり、現在実際に使用されることはない。しかしモニタによる同期機構という発想は、その後の並行プログラミング言語やOS理論に大きな影響を残したとされる。

## Hello World

Concurrent PascalはPascal系の構文をベースにしている。以下はおおよそのイメージを示すコード例である。

```pascal
program HelloWorld;
begin
  writeln('Hello, world')
end.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Concurrent_Pascal)
