# csh(C Shell)

- 登場年: 1978年
- 設計者: Bill Joy
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1970年代後半、カリフォルニア大学バークレー校でBSD Unixの開発を主導していたBill Joyは、当時のシェルの対話操作性の乏しさ(コマンド履歴の再利用ができない等)に不便を感じていた。

またC言語に親しんだプログラマにとって、Bourne Shellの構文はCとは異なる書き方を要求し学習コストがあった。そこでJoyは、式や制御構文をC言語に近い形にし、さらにヒストリ機能やエイリアス機能を備えた対話志向のシェルとしてcshを設計した。

## 特徴

- if/while/foreachなどC言語に似た構文で制御構造を記述できる
- コマンド履歴を呼び出して再実行するヒストリ機能を早期に導入
- エイリアス機能によりよく使うコマンドを短縮して呼び出せる
- ジョブコントロールなど対話的なプロセス管理機能を持つ
- BSD Unixに標準搭載され、対話的な使いやすさで人気を博した
- 一方でスクリプト言語としては仕様の不備や落とし穴が多く、スクリプト記述には不向きとされた

## 影響を受けた言語

- [C](c.md)


## 影響を与えた言語

- [ksh(Korn Shell)](ksh.md)
- [Hamilton C shell](hamilton_cshell.md)
- [Bash](bash.md)
- [Zsh](zsh.md)


## 現在の位置づけ

cshはスクリプト言語としての設計上の欠陥が指摘され、システム管理用途では徐々にBourne系シェルに取って代わられた。

対話用シェルとしての系譜はtcshに引き継がれたものの、現在では新規のスクリプト開発においてほとんど使われないlegacyな存在となっている。

## Hello World

```csh
echo "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/C_Shell)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/C_shell)
