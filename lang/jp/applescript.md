# AppleScript

- 登場年: 1993年
- 設計者: Apple
- パラダイム: scripting
- 系統: scripting

## 解決したかった課題

1990年代初頭のMacintoshには複数のアプリケーションを連携させる「アプリケーション間通信」の仕組みが導入されつつあったが、それを活用するには専門的なプログラミング知識が必要だった。Appleは、プログラマではない一般ユーザーやパワーユーザーでも、日常業務でよく行う「このファイルをこのアプリで開いて、あの処理をしてから保存する」といった複数アプリをまたぐ自動化作業を、英語の文章に近い自然な記述で組み立てられるようにしたいと考えた。そこで動詞や前置詞を多用した自然言語風の構文を持つスクリプト言語AppleScriptが開発された。

## 特徴

- 英語の文章に近い、自然言語的な構文(例: "tell application ... to ...")を持つ
- Mac上の複数アプリケーションを横断して操作・連携させることに特化
- Apple Event(アプリケーション間通信の仕組み)を土台にしている
- スクリプトエディタというGUIツールで記録・編集・実行ができる
- macOSの自動化フレームワーク(Automator等)とも統合されている

## 影響を受けた言語

- [HyperTalk](hypertalk.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在もmacOSに標準搭載され、Mac上でのアプリ自動化用途に使われ続けている「niche」な言語である。近年はより汎用的なJavaScript for Automation (JXA) と併用される場面も増えているが、macOS自動化の代表的存在としての地位は保っている。

## Hello World

```applescript
display dialog "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/AppleScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AppleScript)
