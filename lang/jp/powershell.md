# PowerShell

- 登場年: 2006年
- 設計者: Jeffrey Snover
- パラダイム: scripting, object-oriented
- 系統: jvm-dotnet

## 解決したかった課題

Windows管理者は長らく、Unix系OSのシェル(bashなど)に比べて貧弱なコマンドプロンプトやバッチファイルで大規模なシステム管理を強いられてきた。Unixのシェルパイプラインはコマンド間を単なる文字列(テキスト)でやり取りするため、出力を解析するための脆いテキスト処理が必要だった。設計者Jeffrey Snoverは、.NET基盤上に構築されたオブジェクトそのものをパイプで受け渡せる管理シェルを作ることで、この文字列解析の煩雑さを根本からなくそうとした。

## 特徴

- コマンド間のパイプラインで文字列ではなく.NETオブジェクトをそのまま受け渡す設計
- 「動詞-名詞」形式の一貫したコマンド命名規則(コマンドレット)
- .NETフレームワークの全クラスライブラリに直接アクセス可能
- リモートの複数マシンを一括管理できるリモーティング機能
- Windows管理タスクの自動化スクリプトとして標準搭載
- 統一的な構文でファイルシステムやレジストリなど異なるデータストアを操作できる「プロバイダ」機構

## 影響を受けた言語

- [C#](c_sharp.md)
- [Python](python.md)
- [Perl](perl.md)
- [SQL](sql.md)
- [Tcl](tcl.md)
- [Windows Batch(コマンドプロンプト)](batch.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

PowerShellは現在Windows標準の管理シェル・自動化ツールとして広く現役で使われており、後にオープンソース化・クロスプラットフォーム化されたPowerShell Coreとしてmacos/Linux上でも動作する。クラウドインフラ(Azure)の管理自動化にも欠かせないツールとなっており、DevOps分野でも重要な位置を占めている。

## Hello World

```powershell
Write-Host "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PowerShell)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PowerShell)
