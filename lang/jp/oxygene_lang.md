# Oxygene

- 登場年: 2005年
- 設計者: RemObjects Software
- パラダイム: procedural, object-oriented, functional
- 系統: jvm-dotnet

## 解決したかった課題

RemObjects Softwareは、Delphi系のObject Pascal構文に親しんだ開発者が、.NETの共通言語基盤(CLI)やJava仮想マシンといった新しい実行環境の機能──ジェネリクスやタスク並列ライブラリなど──を、クラシックなDelphiコードとの完全な後方互換性に縛られることなく存分に活用できる言語を提供したいと考えた。

そのため、既存のDelphiをそのまま移植するのではなく、2005年に「Chrome」という名称で、.NETやJVM上でネイティブに感じられるよう設計されたObject Pascal系言語をゼロから再構築し、後にOxygeneと改称した。

## 特徴

- Delphi系のObject Pascal構文をベースにしている
- 命令型・オブジェクト指向・関数型・構造化プログラミングを組み合わせてサポートする
- Common Language Infrastructure(.NET)、Java、Cocoa、CPUネイティブ、WebAssemblyという複数のターゲットに対応する
- Windows、Linux、macOS、Androidなど複数OS上で動作する
- C#やEiffelなど他言語の影響を受けたジェネリクスなどの現代的機能を備える
- 現在はRemObjectsの「Elements」ツールチェーンの一部として提供されている

## 影響を受けた言語

- [Object Pascal(Delphi)](object_pascal.md)
- [C#](c_sharp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

現在はニッチながら現役の商用製品として維持されている(status: niche)。RemObjectsの「Elements」ツールチェーンの一部として、同じランタイム群を対象とする姉妹言語群とともに販売されている。

主にDelphi出身でPascal系の構文を好みつつ.NETやJVM、Cocoa、WebAssemblyをターゲットにしたい開発者という、比較的小規模なコミュニティに使われており、汎用のメインストリーム言語というよりは専門的なニッチ製品としての位置づけが続いている。

## Hello World

一次資料(Wikipedia記事)上では具体的なコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Oxygene_(programming_language))
