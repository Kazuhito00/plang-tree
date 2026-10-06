# Bash

- 登場年: 1989年
- 設計者: Brian Fox(GNU)
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1980年代当時、標準的なUnixシェルであったBourne ShellはAT&Tのプロプライエタリなソフトウェアであり、自由に改変・再配布することができなかった。GNUプロジェクトは「完全にフリーなUnix互換OS」を掲げており、その一部としてBourne Shell互換の自由なシェルが必要とされた。

Brian Foxはsh互換の構文を保ちながら、Cシェルのヒストリ機能やKornシェルの補完機能などを取り込んだ拡張版シェルとしてBashを開発した。名称の「Bourne-Again SHell」はBourne Shellの精神的な後継であることを示している。

## 特徴

- Bourne Shell(sh)とのコマンド互換性を保ちつつ、コマンドライン編集やヒストリ機能を追加
- タブ補完・ジョブコントロールなど対話的な使い勝手を大幅に強化
- 配列変数や算術評価など、sh標準にはないスクリプト向けの拡張機能を持つ
- 関数定義やローカル変数など、大規模なスクリプト記述を支える機能を備える
- GNUプロジェクトの一部としてGPLで配布され、自由に利用・改変できる
- GNU/Linuxディストリビューションの既定シェルとして標準搭載されてきた

## 影響を受けた言語

- [sh(Bourne Shell)](sh.md)
- [csh(C Shell)](csh.md)
- [ksh(Korn Shell)](ksh.md)


## 影響を与えた言語

- [fish](fish.md)


## 現在の位置づけ

Bashは今も大半のLinuxディストリビューションで既定シェルとして採用されており、システム管理やCI/CDスクリプトの記述言語として広く現役で使われている。

GNUプロジェクトが目指した自由なBourne Shell互換環境という当初の目的を超え、事実上の業界標準シェルの一つとして、サーバ運用や自動化の現場で欠かせない存在となっている。

## Hello World

```bash
echo "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Bash)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29)
