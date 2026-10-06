# Ballerina

- 登場年: 2017年
- 設計者: Sanjiva Weerawarana, James Clark, WSO2
- パラダイム: concurrent, procedural, object-oriented
- 系統: concurrent-actor

## 解決したかった課題

Ballerinaは、従来のEAI(企業アプリケーション統合)やESB(エンタープライズサービスバス)のような設定ファイル中心の統合ツールに代わり、サービス連携やAPI呼び出し、並行処理をコードとして自然に記述したいという動機から開発された。従来のツールはGUIやXML設定によるビジュアルな統合を志向していたが、それが複雑化・大規模化すると保守性が低下するという課題があった。そこでBallerinaは、ネットワーク通信やデータ交換といった統合処理の要素をファーストクラスの言語機能として組み込み、クラウドネイティブな分散システムの開発をプログラミング言語のレベルから支援することを目指した。

## 特徴

- サービス、リソース、ワーカーといった統合処理向けの概念を言語の第一級要素として持ち、API連携をコードで自然に記述できる
- JSON、XML、テーブル形式のデータ構造をネイティブにサポートし、異種データ形式間の変換を容易にしている
- 逐次処理と並行処理を明示的に区別する構文を持ち、ネットワーク呼び出しなど非同期処理を安全に扱える
- グラフィカルな図として可視化できる「シーケンス図ビュー」をサポートし、コードと図を相互変換できる設計思想を持つ
- 型安全性とヌル安全性を備え、Go言語のようなエラーハンドリングのスタイルを採用している

## 影響を受けた言語

- [Java](java.md)
- [JavaScript](javascript.md)
- [Go](go.md)
- [Rust](rust.md)
- [C#](c_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

active(現役で広く使われている)言語として位置づけられる。WSO2が主導する形でオープンソース開発が続けられ、クラウドネイティブなAPI統合やマイクロサービス開発の分野で採用が進んでいる。

## Hello World

Ballerinaでは`io`モジュールをインポートし、`main`関数から出力を行う。

```ballerina
import ballerina/io;

public function main() {
    io:println("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Ballerina)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Ballerina_%28programming_language%29)
