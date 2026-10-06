# COBOL

- 登場年: 1959年
- 設計者: CODASYL委員会、Grace Hopperの構想に強く影響された
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

1950年代末、企業や政府機関では給与計算や在庫管理といった事務処理をコンピュータ化する需要が急速に高まっていたが、各メーカーが独自の言語・機械語を使うため、プログラムの移植性がなく、非技術者には内容を読むことすら難しかった。Grace Hopperはコンパイラの実用化と英語に近い記述によるプログラミングを提唱しており、この構想を受けてCODASYL委員会が標準言語の策定に乗り出した。

COBOLは英語の文章に近い冗長な構文を採用することで、経営者や監査担当者もコードを読んで検証できることを目指し、同時に異なるメーカーの機種間での移植性を確保しようとした。これは軍・政府調達における「特定ベンダーへのロックイン回避」という政治的な要請とも合致していた。

## 特徴

- 英語の文章に近い冗長な構文(MOVE、ADD、PERFORMなど)を採用
- DATA DIVISION、PROCEDURE DIVISIONなど処理を明確に区分する構造
- 事務処理向けの10進数演算や帳票出力の扱いに強い
- メーカーを超えた移植性を標準規格として重視した設計
- 銀行・保険・行政の基幹システムで今も大量の資産が稼働している
- 冗長さゆえに保守性は高いが、記述量が多くなる傾向がある

## 影響を受けた言語

- [FLOW-MATIC](flow_matic.md)


## 影響を与えた言語

- [PL/I](pl_i.md)
- [DIBOL](dibol_lang.md)
- [ABAP](abap.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [Informix-4GL](informix_4gl.md)
- [Rockstar](rockstar_lang.md)


## 現在の位置づけ

現在はレガシー言語として位置づけられている(status: legacy)が、銀行や保険会社の基幹系システムには今なお膨大なCOBOL資産が稼働しており、保守・移行作業の需要が続いている。

技術者の高齢化に伴い、既存資産の維持や他言語への移行プロジェクトが世界各地で継続的に発生している。

## Hello World

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY 'Hello, world!'.
    STOP RUN.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/COBOL)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/COBOL)
