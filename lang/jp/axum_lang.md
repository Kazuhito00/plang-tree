# Axum

- 登場年: 2009年
- 設計者: Microsoft
- パラダイム: concurrent, object-oriented
- 系統: concurrent-actor

## 解決したかった課題

2000年代後半、マルチコアCPUの普及に伴い並行・並列処理の重要性が増す一方、C#などの既存の.NET言語では共有メモリとロックに依存する従来のスレッドモデルのままでは、データ競合やデッドロックを避けた安全な並行コードを書くことが難しいという課題があった。

Microsoftは、アクターモデルに基づき、並行に実行される部分をプログラムの他の部分から明確に分離できる専用言語Axumを実験的に開発した。Axumは.NET Common Language Runtime上で動作するC言語風構文のオブジェクト指向言語で、共有メモリの代わりにメッセージパッシングを用いる設計になっている。

## 特徴

- アクターモデルに基づき、「エージェント(Agent)」と呼ばれる隔離された実行単位が並行に動作する
- エージェント間の通信は「チャネル(Channel)」を介したメッセージパッシングで行われ、プロトコル定義によって型付けされる
- .NET Common Language Runtime上に構築され、C言語風の構文を採用
- 並行処理に不向きな逐次的な部分も同じ言語内で十分に記述できるよう、一般的な言語機能も備えていた
- Windows(XP、Vista、Server 2003/2008、Windows 7)上でx86、x86-64、Itaniumアーキテクチャに対応

## 影響を受けた言語

特になし(一次資料上で具体的な影響元言語は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

AxumはMicrosoftによって2009年からCommunity Technology Previewとして公開されていたが、正式な製品化は見送られ、2011年頃にプロジェクトは中止された(status: historical)。プレビュー版もMicrosoftのサーバーから削除されている。

英語版Wikipediaによれば、Axumのアイデアの一部は.NET 4.5のTPL Dataflowに活かされたとされる。実用言語としては消滅したが、.NET上での言語レベルのアクターモデル実験として言及されることがある。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Axum_%28programming_language%29)
