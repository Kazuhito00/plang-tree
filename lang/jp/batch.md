# Windows Batch(コマンドプロンプト)

- 登場年: 1981年
- 設計者: Microsoft(Tim Patersonほか)
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1981年に登場したMS-DOSでは、利用者がコマンドインタプリタCOMMAND.COMに一連のコマンドを毎回手入力する必要があった。定型的な操作(ファイルのコピーやバックアップなど)をそのたびに手作業で行うのは非効率であり、CP/Mから続くコマンド行操作の延長として、一連のコマンドをファイルにまとめて自動実行できる仕組みが求められた。こうして生まれたバッチファイル(.bat)は、IF・GOTO・FORといった最小限の制御構文を備え、Windows NT系ではCOMMAND.COMの後継であるcmd.exeがこれを引き継いでいる。

## 特徴

- 拡張子.batのテキストファイルに、COMMAND.COM/cmd.exeが解釈するコマンドを1行ずつ記述する
- GOTO文とラベルによる分岐、IF文による条件分岐など最小限の制御構造を持つ
- 環境変数(%VAR%)やパラメータ(%1, %2…)を使った簡易的なパラメータ渡しができる
- Windows NT系ではcmd.exeが解釈系となり、レジストリ操作やネットワーク設定などシステム管理タスクに使われる
- PowerShellという強力な後継が登場した後も、後方互換性のため現在も動作し続けている

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

- [PowerShell](powershell.md)


## 現在の位置づけ

より高機能な[PowerShell](powershell.md)が登場した現在では新規開発での採用は少なくなっているが、レガシーな自動化スクリプトや古いシステムの保守で今も広く使われ続けている、Windows環境における最も基本的なスクリプト言語である。

## Hello World

```batch
@echo off
echo Hello, World!
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/バッチファイル)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Batch_file)
