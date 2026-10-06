# Modula-3

- 登場年: 1988年
- 設計者: DEC/Olivetti(Luca Cardelliほか)
- パラダイム: procedural, object-oriented
- 系統: algol-pascal

## 解決したかった課題

1980年代後半、ソフトウェア開発の現場ではガベージコレクションによる自動メモリ管理、例外処理、オブジェクト指向といった新しい概念が次第に重要視されるようになっていた。

DECのシステム研究センターとOlivettiの研究者たちは、Modula-2をベースにしつつ、これらの当時最新の概念を安全性を損なわない形で言語に統合したいと考えた。

単に機能を追加するのではなく、既存のModula-2の設計哲学である「シンプルさ」と「安全性」を保ったまま近代化することが目標とされた。

## 特徴

- 言語組み込みのガベージコレクションによる自動メモリ管理
- 例外処理機構による構造化されたエラーハンドリング
- オブジェクト指向のクラスとメソッドのサポート
- スレッドとモニタによる並行処理機能
- Modula-2譲りのモジュールシステムと厳格な型安全性
- ポインタ操作の安全性を保証するトレース型・非トレース型の区別

## 影響を受けた言語

- [Modula-2](modula_2.md)
- [Oberon](oberon.md)
- [Pascal](pascal.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Mesa](mesa.md)
- [Euclid](euclid.md)


## 影響を与えた言語

- [Python](python.md)
- [Obliq](obliq_lang.md)
- [OCaml](ocaml.md)
- [C#](c_sharp.md)
- [Nim](nim.md)


## 現在の位置づけ

Modula-3は現在historicalな言語であり、実用上の普及は限定的なまま終わった研究用言語という評価が定着している。

それでもガベージコレクションと例外処理を安全に統合した設計は先進的であり、Pythonなど後発の言語の設計に間接的な影響を残した点で評価されている。現在では新規開発に使われることはほとんどない。

## Hello World

```
MODULE Main;

IMPORT IO;

BEGIN
  IO.Put("Hello, world!\n");
END Main.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Modula-3)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Modula-3)
