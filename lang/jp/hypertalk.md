# HyperTalk

- 登場年: 1987年
- 設計者: Dan Winkler
- パラダイム: procedural, event-driven
- 系統: educational-visual

## 解決したかった課題

1980年代半ば、Bill Atkinsonは「HyperCard」というハイパーメディア構築ツールを開発していた。HyperCardは「カード」と呼ばれる画面を積み重ねた「スタック」を作り、ボタンやテキストフィールドを配置してカード同士をリンクさせる、プログラミング経験のないユーザーでも扱えるソフトウェアを目指していた。

しかし、ボタンを押したときの挙動やフィールドの内容を細かく制御するには、何らかのプログラミング的な仕組みがどうしても必要だった。そこでApple社のDan Winklerは、Pascalの手続き型的な構造を土台にしながら、"put 5 * 4 into theResult" のような英語の文章に近い構文と、"mouseUp" のようなメッセージに反応するイベント駆動の仕組みを組み合わせたスクリプト言語HyperTalkを設計し、1987年にHyperCardとともに世に送り出した。

## 特徴

- "put ... into ..." や "answer ..." のような、英語の文章に近い自然言語的構文を持つ
- 数値と文字列を自動的に相互変換する弱い型付けで、初心者でも扱いやすい
- mouseUp、openStack といったメッセージ(イベント)に応答するハンドラを書くイベント駆動型の設計
- テキストを「単語」「行」などの単位で navigable に扱う「チャンキング」と呼ばれる仕組みを持つ
- XCMD/XFCNと呼ばれる外部拡張機構により、C言語などで書いた機能を追加できる
- スクリプトはカードやボタン、フィールドなど、HyperCardの画面部品に直接アタッチして書く

## 影響を受けた言語

- [Pascal](pascal.md)


## 影響を与えた言語

- [SenseTalk](sensetalk_lang.md)
- [AppleScript](applescript.md)
- [LiveCode](livecode_lang.md)


## 現在の位置づけ

HyperTalkはHyperCardとともに1990年代のMacintoshで広く使われたが、1990年代末にHyperCard自体の開発が縮小・終息したことに伴い、現在では新規開発にはほとんど使われない歴史的な言語となっている。LiveCodeやOpenXTalkといった「xTalk」系の後継環境に思想が受け継がれてはいるものの、主流からは退いている。

一方で、その設計思想は現在も影響を残している。Appleは自然言語風の構文を持つAppleScriptを開発する際に、HyperTalkを直接のモデルとした。

## Hello World

```hypertalk
on OpenStack
  show message box
  put "Hello World!" into message box
end OpenStack
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/HyperTalk)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/HyperTalk)
