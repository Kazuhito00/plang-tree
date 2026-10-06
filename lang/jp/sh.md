# sh(Bourne Shell)

- 登場年: 1977年
- 設計者: Stephen Bourne
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1970年代のUnix第7版に搭載されていた旧来のシェル(Thompson shell)は、変数やループ・条件分岐といった制御構造がごく貧弱で、まとまったスクリプトを書くには機能不足だった。

ベル研究所のStephen Bourneは、ALGOL 68のブロック構造や式の考え方を参考にしながら、対話的なコマンド入力とシステム管理用のスクリプト記述の両方に耐える、より堅牢な言語としてBourne Shellを設計した。この設計はUnix系OS全体の標準シェルとして採用され、以後のシェル言語の共通の土台となった。

## 特徴

- コマンドの実行とパイプ・リダイレクトによるプロセス連携を基本操作とする
- if/while/for/caseなどALGOL系に近い制御構造を備える
- シェル変数・環境変数・関数定義をサポートし、簡易なスクリプト言語として機能する
- サブシェルやコマンド置換など、プロセスを組み合わせて処理を組み立てる仕組みが充実している
- POSIX標準の`sh`として規格化され、多くのUnix系システムで最小共通基盤になっている
- 対話的シェルとスクリプト言語という二つの役割を一つの言語で兼ねる

## 影響を受けた言語

- [ALGOL 68](algol_68.md)


## 影響を与えた言語

- [ksh(Korn Shell)](ksh.md)
- [Bash](bash.md)
- [rc](rc_shell.md)
- [Zsh](zsh.md)


## 現在の位置づけ

sh(Bourne Shell)は今なおPOSIX準拠シェルスクリプトの基礎仕様として現役であり、`/bin/sh`として多くのUnix系システムに存在し続けている。

Bash・Zshをはじめとする後継シェルの構文的な祖形であり、シェルスクリプトという分野そのものの出発点として位置づけられる。移植性の高い最小共通言語としての役割は、現在も自動化スクリプトの記述で重視され続けている。

## Hello World

```sh
echo "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Bourne_Shell)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Bourne_shell)
