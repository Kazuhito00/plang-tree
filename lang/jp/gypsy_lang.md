# Gypsy

- 登場年: 1976年
- 設計者: Allen L. Ambler, Donald I. Good, James C. Browne, Wilhelm F. Burger, Richard M. Cohen, Charles G. Hoch, Robert E. Wells
- パラダイム: procedural, concurrent, systems
- 系統: algol-pascal

## 解決したかった課題

1970年代半ば、テキサス大学オースティン校のCertifiable Minicomputer Projectでは、通信処理を意識したシステムプログラムを対象に、書かれたプログラムの性質を形式的に証明したり、実行時に検証したりできる「検証可能な」言語が求められていた。Allen L. AmblerやDonald I. Goodらは、Pascalに近い文法を採用しつつ、仕様記述機能、並行プロセス、名前付きメールボックスによるプロセス間通信の機構を一つの言語の中に統合し、通常のプログラミングとその形式的検証を同じ言語で行えるようにすることを目指した。

## 特徴

- Pascalに似た文法をベースにしている
- 仕様記述部分と実行可能な実装部分を同じプログラム内に書け、形式的証明または実行時検証のどちらでも正しさを確認できる
- 並行プロセスとプロセス間のメッセージパッシング(名前付きメールボックス)をサポートし、通信処理向けシステムプログラミングを意識している
- 手続き・関数・プロセスなどの単位ごとに分割コンパイル可能で、それぞれにアクセス権のリストを持たせられる

## 影響を受けた言語

- [Pascal](pascal.md)


## 影響を与えた言語

- [Euclid](euclid.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)であり、現在実務で使われることはない。Certifiable Minicomputer Projectの中で初期のコンパイラや検証支援ツールが作られたが、形式検証を前提としたPascal系言語という性格から、Euclidの設計における直接の影響元の一つとして参照される。

## Hello World

初期のコンパイラは実装されたが、公開されている実際のGypsyのHello World相当のサンプルコードは確認できなかった。

## 外部リンク

該当するWikipedia記事は日本語・英語ともに見つからなかった。
