# AmbientTalk

- 登場年: 2006年
- 設計者: Tom Van Cutsem, Stijn Mostinckx, Jessie Dedecker, Wolfgang De Meuter
- パラダイム: object-oriented, concurrent, event-driven
- 系統: concurrent-actor

## 解決したかった課題

モバイル機器同士が、常時接続を前提とせず、不安定でインフラの整っていないアドホックなネットワークを通じて通信するアプリケーションを開発するには、接続が途切れることを前提とした分散オブジェクトモデルが必要だった。しかし、既存の分散オブジェクト指向言語の多くは、安定したネットワーク環境を前提として設計されていた。

ブリュッセル自由大学(Vrije Universiteit Brussel)のSoftware Languages Labに所属するTom Van Cutsem、Stijn Mostinckx、Jessie Dedecker、Wolfgang De Meuterは、アクターモデルとfutureに基づく並行性を核とし、接続の切断を前提とした分散オブジェクト言語AmbientTalkを設計した。

## 特徴

- futureをサポートするアクターモデルに基づく並行性
- イベントループアーキテクチャ
- trait(トレイト)とデリゲーションを取り入れたプロトタイプベースのオブジェクト指向
- Javaで実装され、Androidを含むクロスプラットフォームで動作
- JavaオブジェクトとAmbientTalkオブジェクトを橋渡しする「symbiosis」と呼ばれるシームレスな相互運用機構
- 不安定なモバイル・アドホックネットワーク上での動作を前提とした設計

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [Self](self.md)
- [Scheme](scheme.md)
- [E](e_lang.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

AmbientTalkは現在、歴史的な言語として位置づけられている(status: historical)。安定版は2011年4月のバージョン2.19であり、それ以降大きな開発は確認できず、研究目的での利用も下火になっているとみられる。

Wikipediaの記事には、プロジェクトに近い関係者による編集の可能性や、一次資料への依拠についての注記が付されている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AmbientTalk)
- [Wikipedia(日本語)] (なし)
