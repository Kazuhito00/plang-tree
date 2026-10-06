# Solidity

- 登場年: 2014年
- 設計者: Gavin Woodほか(Ethereum)
- パラダイム: object-oriented, procedural
- 系統: c-family

## 解決したかった課題

2013年に構想されたEthereumは、単なる暗号通貨にとどまらず、ブロックチェーン上で資産や契約条件を自動的に実行する「スマートコントラクト」を動かす汎用プラットフォームを目指していた。しかしブロックチェーン上のプログラムは、一度デプロイされると改ざんが極めて困難であり、ネットワーク上の無数のノードで決定論的に同じ結果を再現できなければならないという、従来のソフトウェア開発にはない厳しい制約があった。Gavin Woodらは、既存の開発者に馴染みやすいC++・JavaScript・Python風の構文を採用しつつ、Ethereum Virtual Machine(EVM)上で契約(コントラクト)を安全かつ確定的に記述・実行できる言語としてSolidityを設計した。

## 特徴

- 「contract」という単位でコード(関数)と状態(ストレージ)をまとめて記述する、契約指向の構文を持つ
- EVMバイトコードにコンパイルされ、ブロックチェーン上の全ノードで同一の実行結果を再現する
- 資金操作を伴うため、整数オーバーフローやリエントランシー(再入)攻撃などセキュリティ上の脆弱性が特に重視される
- ガス(Gas)と呼ばれる計算コストの概念があり、無限ループなど過剰な計算を経済的に抑制する仕組みを持つ
- 一度デプロイされたコントラクトは基本的に変更・削除ができず、事前の入念な検証が求められる

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [JavaScript](javascript.md)
- [Python](python.md)


## 影響を与えた言語

- [Vyper](vyper.md)


## 現在の位置づけ

現在もEthereumおよび互換ブロックチェーン上でのスマートコントラクト開発における事実上の標準言語であり(status: active)、DeFi(分散型金融)やNFTなどブロックチェーンアプリケーションの大部分がSolidityで書かれている。

## Hello World

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    function greet() public pure returns (string memory) {
        return "Hello, World!";
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Solidity)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Solidity)
