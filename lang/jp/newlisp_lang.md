# newLISP

- 登場年: 1991年
- 設計者: Lutz Mueller
- パラダイム: functional, symbolic, scripting
- 系統: lisp-scheme

## 解決したかった課題

Lutz Muellerは、Common LispやSchemeのような本格的なLisp処理系が持つ複雑さや実行環境の重さを避けつつ、Lispらしい記号処理・関数型のスタイルを手軽なスクリプト言語として使いたいと考え、newLISPを設計した。ネットワーク処理や正規表現、XML処理などをあらかじめ言語に組み込み、単一の軽量な実行ファイルとして配布できることを重視した。

## 特徴

- Common LispやSchemeの主要な考え方を受け継ぎつつ、大幅に簡略化した軽量Lisp方言
- 動的スコープと「One Reference Only(ORO)」という独自のメモリ管理方式を採用する
- 名前空間を実現する「コンテキスト」の仕組みを持つ
- TCP/IP通信、正規表現、XML処理、ベイズ統計、行列演算などを標準で組み込む
- 共有ライブラリ/DLLの関数を直接呼び出せるほか、スタンドアロン実行ファイルを生成できる
- WikipediaのinfoboxはC・Common Lisp・Perl・Schemeを影響元として挙げているが、本文ではPascalとCの影響という異なる記述もあり、一次資料内でも表現に揺れがある

## 影響を受けた言語

- [C](c.md)
- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Perl](perl.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語である(status: niche)。通称「newLISPクラシック」の最終安定版はバージョン10.7.5(2019年5月)だが、後方互換性を保ちながら高速化を図った後継実装「newLISP Neo」も存在し、開発コミュニティの一部で継続されている。

日本語版Wikipediaには専用記事が存在せず、Lisp記事内の方言一覧表でも赤リンク(存在しないページ)として扱われている。

## Hello World

一次資料上で確認できなかった。記事内にはHello Worldではなく、Cライブラリの`printf`をDLL経由で呼び出す例が掲載されている。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/NewLISP)
