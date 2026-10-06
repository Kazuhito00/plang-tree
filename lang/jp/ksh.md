# ksh(Korn Shell)

- 登場年: 1983年
- 設計者: David Korn
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1980年代初頭、Unix上の標準シェルであったBourne Shellは、コマンドライン編集やコマンド履歴、ジョブ制御といった対話的な機能に乏しかった。一方でCシェル(csh)はヒストリ機能などの対話性を備えていたものの、Bourne Shellとスクリプトの互換性が無く、Unixのシェル環境は互換性の異なる二つの系統に分かれてしまっていた。

AT&T ベル研究所のDavid Kornは、Bourne Shellのソースコードをベースに、フルのBourne Shell互換性を保ちながら、vi/emacs風のコマンドライン編集モード、コマンド履歴、ジョブ制御、配列や算術評価といったより強力なスクリプト機能を統合した新しいシェルを設計した。

## 特徴

- Bourne Shellとの高いスクリプト互換性を保ちつつ、対話操作を大幅に強化
- viモード・emacsモードでのコマンドライン編集機能を持つ
- ジョブ制御、コマンド履歴、エイリアス機能を備える
- 配列変数、算術評価、関数定義など、Bourne Shellにはない拡張構文を持つ
- 補完機能を持ち、後のBashやZshの補完機能の手本となった
- AIXなど商用UNIXシステムの標準シェルとして採用されてきた

## 影響を受けた言語

- [sh(Bourne Shell)](sh.md)
- [csh(C Shell)](csh.md)


## 影響を与えた言語

- [Bash](bash.md)
- [Zsh](zsh.md)


## 現在の位置づけ

KornShellは今もIBM AIXの既定シェルとして使われ続けており、オープンソース実装のmksh(MirBSD Korn Shell)はAndroidの既定シェルとして採用されている。ksh93u+mやksh2020といった有志・ベンダーによる派生版も継続的に更新されている。

自身の現役利用にとどまらず、そのコマンドライン編集や補完機能はBashやZshといった後発シェルに直接的な影響を与えており、古典的なBourne Shellと現代の対話型シェルをつなぐ重要な存在として位置づけられている。

## Hello World

```ksh
echo "Hello, World!"
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/KornShell)
