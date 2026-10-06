# PeopleCode

- 登場年: 1990年(推定、正確な初出年は一次資料上で確認できなかった)
- 設計者: PeopleSoft Corporation
- パラダイム: object-oriented, procedural, scripting
- 系統: domain-specific

## 解決したかった課題

PeopleSoftのERP・HRMSアプリケーション(PeopleToolsという基盤の上に構築されている)において、業務ロジックのカスタマイズや自動化を、基盤そのものを変更せずにアプリケーション内部から行えるようにする、業務アプリケーション専用のスクリプト言語が必要とされた。

PeopleCodeは、PeopleSoft Corporation(2005年にOracleに買収)がPeopleToolsの一部として開発し、オブジェクト指向・命令型のスクリプト言語をPeopleToolsランタイムに組み込むことで、この課題に応えている。緩やかな型付けと厳密な型付けの両方の形式をサポートし、Javaとの相互運用性も提供する。

なお、PeopleCodeが最初に登場した正確な年については、Wikipedia記事中に日付の記載が一切なく、一次資料上で確認できなかった。PeopleSoftの最初の製品(version 1)は1989年末にリリースされており、記事によればPeopleTools 8で重要なオブジェクト構文機能が導入されたとされている。

## 特徴

- 緩やかな型付け(loosely-typed)と厳密な型付け(strongly-typed)の両方の形式をサポート
- Javaとの相互運用性を提供する
- ドット記法、クラス、メソッドなどオブジェクト指向的な機能を実装している
- PeopleToolsフレームワークの一部として、実行環境に組み込まれている
- 構文は他の一般的な言語に類似しているとされる

## 影響を受けた言語

特になし(一次資料上で明確な影響元言語は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

現在はレガシー技術として位置づけられている(status: legacy)。既存のPeopleSoft/Oracle導入環境を動かし続け、保守するためには今も欠かせない存在だが、そのエコシステムの外で新たに採用される言語ではない。

Oracleは既存顧客向けにPeopleTools/PeopleCodeのサポートを継続しており、主に既存のPeopleSoft導入環境を保守・拡張する開発者やコンサルタントが扱う言語であり、新規に独立したソフトウェアを構築するために選ばれる言語ではない。

## Hello World

一次資料(Wikipedia記事)上では具体的なコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PeopleCode)
