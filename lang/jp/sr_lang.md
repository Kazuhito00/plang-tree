# SR

- 登場年: 1981年(一次資料上、正確な初出年は確認できなかった。Andrewsによる論文"Synchronizing Resources"(ACM TOPLAS, 1981年)を起源とする二次資料の記述に基づく推定)
- 設計者: Gregory R. Andrews, Ronald A. Olsson
- パラダイム: concurrent, procedural
- 系統: concurrent-actor

## 解決したかった課題

1970年代末から1980年代にかけて、並行プログラミングの世界にはリモート手続き呼び出し、ランデブー、メッセージパッシング、マルチキャスト、セマフォ、共有メモリといった多様な同期・通信の仕組みが個別に提案されていたが、それらを単一の一貫した言語機構で統一的に扱える言語は乏しかった。

アリゾナ大学のGregory R. AndrewsとRonald A. Olssonは、プロセスとそれらが共有する変数を「リソース(resource)」という単位でカプセル化し、個別にコンパイル可能にすることで、これら多様な並行処理の仕組みを一つの言語(SR: Synchronizing Resources)の中で統一的に扱えるようにした。

## 特徴

- プロセスと共有変数を「リソース」としてカプセル化し、個別コンパイルを可能にする設計
- ローカル/リモート手続き呼び出し、ランデブー、メッセージパッシングを同一言語内で統一的に記述できる
- 動的なプロセス生成をサポート
- マルチキャスト、セマフォ、共有メモリといった古典的な並行処理機構も統合的に提供
- バージョン2.2はApollo、DECstation、HP 9000、Sun-3/4、SGI IRISなど多数のUNIX系プラットフォームに移植された

## 影響を受けた言語

特になし(英語版Wikipediaの記事はスタブであり、直接の影響元となる言語は一次資料上で確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

SRは大学における並行プログラミングの教育・研究で広く使われ、Andrews自身の教科書『The SR Programming Language: Concurrency in Practice』や、Stephen J. Hartleyの『Operating Systems Programming: The SR Programming Language』を通じて、オペレーティングシステム教育の題材としても利用された。

現在では新規のソフトウェア開発に使われることはなく、英語版Wikipediaの記事もスタブ扱いとなっているなど、並行プログラミング言語研究における歴史的な参照点として位置づけられている言語である。

## Hello World

一次資料上でHello World相当のサンプルコードは確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SR_(programming_language))
