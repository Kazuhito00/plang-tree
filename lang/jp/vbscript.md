# VBScript

- 登場年: 1996年
- 設計者: Microsoft
- パラダイム: scripting, procedural
- 系統: scripting

## 解決したかった課題

1990年代半ば、Netscapeの JavaScript がWebページに動的な挙動を持ち込み始めると、Microsoftも自社のInternet Explorerに同様のスクリプト機能を搭載する必要に迫られた。しかしMicrosoftには既にVisual Basicで開発を行う膨大な社内・社外の開発者コミュニティが存在しており、新しい構文を一から覚えさせるよりも、慣れ親しんだBASIC系の文法をそのままブラウザ上で使わせる方が合理的だった。こうしてVisual Basicの言語資産を軽量なインタプリタ言語として再構築し、WebページやWindowsの管理タスクを自動化する目的でVBScriptが作られた。

## 特徴

- Visual Basicに似たBASIC系の平易な構文を持つ
- Internet Explorer上でHTMLページに組み込みクライアントサイド処理を記述できた
- Windows Script Host (WSH) を通じてOS管理タスクの自動化スクリプトとしても利用された
- 型の緩やかなバリアント型変数を中心に据えたシンプルなデータモデル
- ActiveXオブジェクトとの連携が容易で、Officeマクロ的な用途にも展開された
- 悪用されやすいOS操作機能を持つため、後にセキュリティ上のリスクとして問題視された

## 影響を受けた言語

- [Visual Basic(Classic)](visual_basic.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Internet Explorerの終息とセキュリティ上の懸念(マルウェアの媒介としての悪用)により、Microsoft自身が非推奨とし新規開発では使われなくなった「legacy」な言語である。一部の古いWindows業務システムや自動化スクリプトに遺産として残るのみとなっている。

## Hello World

```
MsgBox "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/VBScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/VBScript)
