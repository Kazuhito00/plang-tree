# Speakeasy

- 登場年: 1964年
- 設計者: Stanley Cohen
- パラダイム: procedural, array
- 系統: numeric-scientific

## 解決したかった課題

1960年代前半、アルゴンヌ国立研究所の物理部門では、専門のプログラマーの手を借りずに物理学者自身がその場で数値計算を対話的に実行できる環境が求められていた。理論物理学者のStanley Cohenは、この社内向けの要求に応えるため、1964年にSpeakeasyを開発した。

Speakeasyは、後に商用化のためSpeakeasy Computing Corporationが設立され、Windows、macOS、Linux、Solaris、HP-UXなど複数のプラットフォームに向けて提供されるようになった。

## 特徴

- APLに直接影響を受けた対話的な数値計算環境で、行列・ベクトル(最大15次元の配列)・集合・時系列データを扱える
- 動的型付けと演算子オーバーロードに対応
- 「Named storage」と呼ばれる、オブジェクトを動的に管理するワークエリア機構を中核に持つ(1960年代初頭に起源を持つ)
- 時系列データにおける欠損値表現(N.A.、N.C.、N.D.、N.B.、N.Eなど)をサポート
- プログラム・サブルーチン・関数といった手続き構造や、IF-THEN-ELSE・FOR-NEXTによる制御構造を備える
- 「Linkules」(LINKable modULES)という機構により関数を動的に拡張できる

## 影響を受けた言語

- [APL](apl.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Speakeasyは商用のトライアルウェアとして提供されていたが、最新版(IV Iota)が2006年にリリースされた後は更新が確認できず、公式サイトもWayback Machine経由でしか閲覧できない状態にあり、事実上開発は終了している。現在では数値解析ソフトウェアの歴史の中で「ディスコンティニュード」と分類される、historicalな存在である。

## Hello World

一次資料上でHello World形式のコード例は確認できなかった。参考として、Wikipedia記事には次のような対話的なコマンド例が示されている。

```
:_ a=1; b=2; c=3; d=4
:_ sin(grid(-pi,pi,pi/32))
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Speakeasy_(computational_environment))
