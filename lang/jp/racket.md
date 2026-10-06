# Racket

- 登場年: 1995年
- 設計者: PLT(Matthias Felleisenら)
- パラダイム: 関数型、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

1990年代、プログラミング言語研究者や教育者は、Schemeをベースにしつつ、単に一つの言語を使うだけでなく、目的に応じて新しい言語(ドメイン特化言語、DSL)そのものを容易に作れる基盤を求めていた。PLTグループ(Matthias Felleisenら)は、プログラミング教育のための段階的な教材言語群と、言語自体を設計・実装する「言語指向プログラミング」の研究基盤という二つの目的を同時に満たす、拡張性の高いScheme系システムを開発した。当初はPLT Schemeという名前だったが、単なるScheme実装を超えた独自のエコシステムへと発展したためRacketへと改称された。

その背景には、単一の言語仕様に固執せず、用途に応じて構文や意味論を自由に設計できる基盤こそが、教育・研究の両面で最も有用であるという思想があった。

## 特徴

- `#lang`宣言により、1つの処理系内で複数の言語(方言)を切り替えて使える
- 強力なマクロシステム(構文変換)により、新しい言語機能や専用DSLを容易に作成可能
- 教育用の段階的言語群(How to Design Programs用)を内包
- 契約(contracts)による実行時の型チェックに近い保証機構
- 豊富な標準ライブラリとDrRacketという統合開発環境を提供
- 型付き方言のTyped Racketなど、静的型付けへの拡張も提供
- パッケージマネージャとドキュメントシステムを含む一貫したエコシステムを整備

## 影響を受けた言語

- [Scheme](scheme.md)
- [Eiffel](eiffel.md)


## 影響を与えた言語

- [Clojure](clojure.md)


## 現在の位置づけ

Racketは「niche」な言語ながら、プログラミング言語教育や「言語を作るための言語」という独自の役割において高く評価されており、DSL設計や言語研究の分野で活発に使われ続けている。教育カリキュラムHow to Design Programsの教材言語としても広く採用されている。

## Hello World

```
#lang racket
(displayln "Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Racket)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Racket_%28programming_language%29)
