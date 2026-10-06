# Janus (concurrent constraint programming)

- 登場年: 1990年
- 設計者: Ken Kahn, Vijay A. Saraswat
- パラダイム: logic, concurrent, declarative
- 系統: logic-declarative

## 解決したかった課題

1990年、Ken KahnとVijay A. Saraswatは、論文『Actors as a special case of concurrent constraint (logic) programming』の中で、当時並行計算のモデルとして広く知られていたアクターモデルを、Saraswat自身が提唱していた並行制約プログラミング(concurrent constraint programming)の枠組みの特殊ケースとして統一的に説明できることを示そうとした。

その理論的アイデアを具体化するプログラミング言語として設計されたのがJanusである。バックトラックを持たない並行制約言語として、アクターモデルにおけるメッセージパッシングを、論理変数に対する制約の追加・問い合わせという操作で表現することを目指した。

## 特徴

- バックトラックを行わない並行制約論理プログラミング言語である
- 論理変数を、値を問い合わせる権利(asker)と値に制約を設定する権利(teller)という2つの独立した側面に分割できる
- askerとtellerはそれぞれ別々の引数としてプロセス間で受け渡すことができる
- プロセス間の通信にはbag(袋)状のチャネルを用いたメッセージパッシングを用いる
- アクターモデルとは異なり、複数のメールボックス(バッグ)を同時に保持したり、それらを他のプロセスに渡したりすることができる

## 影響を受けた言語

直接の言語的祖先は一次資料上で確認できなかった。Saraswatが提唱した並行制約プログラミングの理論的枠組みに基づいて設計されている。

## 影響を与えた言語

特になし


## 現在の位置づけ

現存する主要な実装は確認されておらず、historical(歴史的役割を終えた言語)として位置づけられる。

並行制約プログラミングという理論的枠組みをアクターモデルと結びつけて論じた研究の産物であり、実用的な言語としてよりも、並行計算モデルの理論的整理に貢献した点で計算機科学史に記憶されている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Janus_%28concurrent_constraint_programming_language%29)
