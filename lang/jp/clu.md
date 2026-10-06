# CLU

- 登場年: 1975年
- 設計者: Barbara Liskov, Russell Atkinson, Toby Bloom, Eliot Moss, Robert Scheifler, Alan Snyder
- パラダイム: object-oriented, procedural, generic
- 系統: algol-pascal

## 解決したかった課題

1970年代半ば、大規模なソフトウェアシステムが複雑化する中で、当時の言語には「データ抽象化」という理論を実用的な機能として提供するものがなかった。CLUの開発チームはMITにおいて、データの内部表現とそれを操作する手続きを一体化する「クラスタ」という仕組みを考案し、抽象データ型・イテレータ・例外処理・パラメトリックな型(ジェネリクス)を一つの言語体系に統合することを目指した。継承機構こそ持たなかったものの、モジュール性とカプセル化を徹底することで、大規模プログラムの保守性と信頼性を高めようとした。この設計は後年のオブジェクト指向言語やジェネリクスの理論的土台を築くことになった。

## 特徴

- 「クラスタ」によってデータ表現と操作手続きを一体化し、抽象データ型を実現する
- イテレータという概念を言語機能として導入し、コレクションの走査を簡潔に記述できる
- 例外処理機構を備え、エラー発生時の制御フローを構造化して扱える
- パラメトリックポリモーフィズム(ジェネリクス)を早期に取り入れている
- クラス継承は持たず、抽象化とカプセル化を通じたモジュール性を重視する設計になっている

## 影響を受けた言語

- [ALGOL 60](algol_60.md)
- [Lisp](lisp.md)
- [Simula](simula.md)
- [Alphard](alphard.md)


## 影響を与えた言語

- [Euclid](euclid.md)
- [Argus](argus.md)
- [Sather](sather.md)
- [Python](python.md)
- [Lua](lua.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [Swift](swift.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)として位置づけられる。CLU自体が実務で使われることはなくなったが、抽象データ型・イテレータ・例外処理という概念は現代の主要言語に深く根付いている。

## Hello World

```
start_up = proc ()
    po: stream := stream$primary_output()
    stream$putl(po, "Hello, World!")
end start_up
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/CLU)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/CLU_%28programming_language%29)
