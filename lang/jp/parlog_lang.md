# PARLOG

- 登場年: 1983年
- 設計者: Keith Clark, Steve Gregory
- パラダイム: logic, concurrent
- 系統: logic-declarative

## 解決したかった課題

並行論理プログラミングの先駆けとなったConcurrent Prologは強力な発想を示した一方、その意味論や実装は複雑になりやすいという課題があった。ロンドンのImperial College LondonのKeith ClarkとSteve Gregoryは、Concurrent Prologや、それに先立つRelational Languageの設計を踏まえつつ、より整理された意味論を持つ並行論理プログラミング言語として、1983年にPARLOG(PARallel LOGic)を発表した。

目的は、論理変数を介して通信する軽量プロセスのネットワークとしてプログラムを記述するというConcurrent Prologの考え方を継承しながら、モード宣言や入出力単一化演算子を用いてより効率的な実行を可能にすることだった。

## 特徴

- ガード付きホーン節 `Head <- Guard : Body` を基本とし、`:` がコミット演算子として働く
- コミット後はバックトラックを行わない
- 並列AND(`,`)と逐次AND(`&`)という2種類の結合子で、並行実行と逐次実行を書き分けられる
- 入力単一化(`<=`)と出力単一化(`=`)を明示的に区別するモード宣言により、プロセス間の同期を制御
- ストリーム通信により、1対1に限らない多様なプロセス間通信パターンを表現できる
- 1986年の改訂でカーネルPARLOGと呼ばれるより単純な中間形式への変換が導入され、実行効率が改善された

## 影響を受けた言語

- [Prolog](prolog.md)
- [Concurrent Prolog](concurrent_prolog.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

PARLOGは現在実務で使われることはないが、並行論理プログラミングの理論と実装に大きな足跡を残した歴史的な言語である。KL1やStrand、PCNなど後続の並行論理プログラミング言語の設計にも影響を与えたとされ、論理プログラミングと並行計算の関係を探る研究の重要な参照点となっている。

## Hello World

一次資料上で確認できるHello World例は見つからなかった。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PARLOG)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Parlog)
