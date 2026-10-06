# Emerald

- 登場年: 1986年
- 設計者: Andrew P. Black, Norman C. Hutchinson, Eric Jul, Henry M. Levy
- パラダイム: object-oriented, concurrent
- 系統: concurrent-actor

## 解決したかった課題

1980年代、分散システム上でオブジェクトを移動・配置しながら性能を保つプログラミング言語が不足していた。ワシントン大学の研究者らは、Pascal・Simula・Smalltalkの流れを汲みつつ、オブジェクトの移動性(mobility)と位置透過性を第一級の概念として組み込むことを目指した。情報隠蔽を保ちながら分散プログラミングを簡潔に書けることも重視された。小さく実用的な言語として設計され、後のJavaや分散OS研究にも影響を与えた。

## 特徴

- オブジェクトがネットワーク上のノード間を移動できる「モビリティ」を第一級の概念として言語仕様に組み込んでいる
- オブジェクトがどのノードに存在するかをプログラマが意識しなくてもよい位置透過性を提供する
- Simula・Smalltalkに連なるオブジェクト指向の抽象化とPascal譲りの静的な型付けを組み合わせている
- プロセス間通信やオブジェクトの分散配置を、複雑な通信プロトコルを直接書かずに記述できる
- 小規模な言語コアに絞り、分散プログラミングの実験や研究用途に適した実用性を重視している

## 影響を受けた言語

- [Pascal](pascal.md)
- [Simula](simula.md)
- [Smalltalk](smalltalk.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的役割を終えた)言語として位置づけられており、現在実運用で使われることはない。しかし分散オブジェクトの移動性という着想は、後のJavaや分散オペレーティングシステムの研究に間接的な影響を与えたとされている。

## Hello World

Emeraldはオブジェクト定義とメッセージ送信を中心とした構文を持つ。以下は概念的なHello World例である。

```
const main <- process
process boot()
  System.print("Hello, world")
end boot
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Emerald_%28programming_language%29)
