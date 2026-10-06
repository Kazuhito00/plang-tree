# Google Apps Script

- 登場年: 2009年
- 設計者: Google(Mike Harm)
- パラダイム: scripting, object-oriented, event-driven
- 系統: scripting

## 解決したかった課題

Google Apps Scriptは、Googleスプレッドシートの開発者であったMike Harmが個人的なサイドプロジェクトとして着手したことに始まる。Google Workspace(旧Google Apps)内の各サービス(スプレッドシート、ドキュメント、Gmail、カレンダー等)を自動化し、組織向けのカスタムツールを容易に作成できるようにすることが目的だった。JavaScriptという既存の広く知られた言語をベースにすることで、専用の開発環境やコンパイラを用意せずブラウザだけで開発を始められるようにし、プログラミング初心者でも扱いやすい自動化・拡張ツールを提供することを狙った。

## 特徴

- JavaScript(当初はJS1.6相当、2020年からはV8ランタイムでモダンなECMAScriptに対応)をベースとする
- ブラウザ上のクラウドホスト型IDE(デバッガ付き)で開発可能、専用の開発環境構築が不要
- Google Workspace各サービス(Sheets, Docs, Gmail, Calendar等)の自動化・連携が可能
- サードパーティアプリとの統合や、Docs/Sheets/Slides向けアドオン開発が可能
- スプレッドシート編集時などのトリガーによるイベント駆動的な実行

## 影響を受けた言語

- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Googleにより現在も開発・保守が続く現役の製品である(status: active)。2020年3月にRhinoからV8 JavaScriptランタイムへ移行し、モジュール機能を除く最新のECMAScript(ES6以降)をサポートするようになった。

## Hello World

Wikipedia本文および公式ドキュメント(developers.google.com/apps-script)のいずれにも、Hello World相当の最小コード例は見当たらず、一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Google_Apps_Script)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Google_Apps_Script)
