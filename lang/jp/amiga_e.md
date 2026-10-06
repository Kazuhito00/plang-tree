# Amiga E

- 登場年: 1993年
- 設計者: Wouter van Oortmerssen
- パラダイム: procedural, object-oriented, functional
- 系統: algol-pascal

## 解決したかった課題

Amiga上でシステムレベルのアプリケーションを開発する際、C言語は使えたものの、コンパイルが遅く、型システムの柔軟性や可読性にも課題があった。開発者たちは、スクリプト言語のように高速にコンパイルできながら、なおネイティブコードとして効率よく動作する言語を求めていた。

Wouter van Oortmerssenは、Ada・C++・Lispからアイデアを取り入れつつ、モジュールシステムや例外処理、手続き型・オブジェクト指向・関数型を組み合わせた多重パラダイム対応を備えた言語Amiga Eを設計した。

## 特徴

- 非常に高速なコンパイル速度で、スクリプト言語的な使い方も可能
- 読みやすい構文と柔軟な型システム
- 強力なモジュールシステムと例外処理
- 手続き型・オブジェクト指向・関数型を組み合わせた多重パラダイム対応
- Motorola 68000系のAmigaOS上で動作
- 1999年にコンパイラのソースコードがGPLでフリーウェア化された

## 影響を受けた言語

- [Ada](ada.md)
- [C++](c_plus_plus.md)
- [Lisp](lisp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Amiga Eは現在、歴史的な言語として位置づけられている(status: historical)。オリジナルのコンパイラの開発自体は終了しているが、安定して成熟した実装として、CreativE・PowerD・YAEC・ECX・REなど複数の派生実装が生まれ、一部は開発が続けられている(PortablE、E-VOなど)。

Amiga向けの人気グラフィックソフトウェアPhotogenicsの中核部分がAmiga Eで書かれていたことでも知られる。

## Hello World

```e
PROC main()
    WriteF('Hello, World!')
ENDPROC
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Amiga_E)
- [Wikipedia(日本語)] (なし)
