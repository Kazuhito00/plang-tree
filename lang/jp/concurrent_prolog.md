# Concurrent Prolog

- 登場年: 1983年
- 設計者: Ehud Shapiro
- パラダイム: logic, concurrent
- 系統: logic-declarative

## 解決したかった課題

1980年代前半、論理型言語であるPrologは逐次的なバックトラック探索を前提としており、当時登場しつつあった並列計算機のハードウェアを活かせないという課題があった。イスラエルのWeizmann科学研究所のEhud Shapiroは、1983年の論文「A Subset of Concurrent Prolog and Its Interpreter」で、並行実行そのものを言語の基盤に据えた新しいPrologの方言、Concurrent Prologを提案した。

既存の言語の多くが逐次実行モデルに並行処理機能を後付けするのに対し、Concurrent Prologは最初から「論理変数を介して通信する軽量プロセスのネットワーク」としてプログラムを記述することを前提に設計された点が革新的だった。この成果は、日本の第五世代コンピュータプロジェクト(FGCS)にShapiroが客員研究者として参加したこととも関わりが深いとされる。

## 特徴

- ガード付きホーン節(`Head :- Guard | Body`)を基本構文とし、ガード部が成立した節に処理をコミットする
- コミット後はバックトラックを行わない「コミッティッドチョイス」方式を採用
- 変数への読み出し専用注釈(`?`)により、データの流れの方向を制御し同期を実現
- ストリーム(論理変数を含むリスト)を用いたプロセス間通信
- 通常のPrologと異なり、並行実行がプログラムモデルの基盤そのものとなっている

## 影響を受けた言語

- [Prolog](prolog.md)


## 影響を与えた言語

- [PARLOG](parlog_lang.md)
- [Guarded Horn Clauses](ghc_lang.md)
- [Constraint Handling Rules](chr_lang.md)


## 現在の位置づけ

Concurrent Prologは現役の実用言語としては使われていないが、並行論理プログラミングという分野を切り開いた歴史的な存在として位置づけられている。PARLOGやGuarded Horn Clauses (GHC)、ICOTのKL1、Strandなど、後続の並行論理プログラミング言語の多くがこの言語の設計思想(ガード付きホーン節とコミッティッドチョイス)を引き継いでいる。

## Hello World

ガード付きホーン節という基本構文は文献上確認できるが、テキストを出力する慣用的な「Hello World」プログラムの一次資料は確認できなかった。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Concurrent_Prolog)
