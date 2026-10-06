# PureScript

- 登場年: 2013年
- 設計者: Phil Freeman
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

Elmは「実行時エラーのないWeb開発」という理念のもとで意図的に言語機能を絞り込んでいたため、型クラスや高階多相などHaskellが持つ高度な型システムの表現力を求める開発者には物足りなかった。Phil Freemanは、Haskellの型システムをできる限りそのままJavaScriptのターゲット環境に持ち込みつつ、効率的で読みやすいJavaScriptコードを生成できる言語としてPureScriptを開発した。

## 特徴

- Haskell譲りの型クラス、高階多相、代数的データ型を備えた強力な型システムを持つ
- Haskellと異なりデフォルトで正格評価(先行評価)を採用し、JavaScriptの実行モデルとの親和性を高めている
- 生成されるJavaScriptコードは可読性を意識しており、既存のJavaScript資産と組み合わせやすい
- 行多相型(row types)によるレコード型など、独自の型システム拡張を持つ
- Halogenなど専用のUIフレームワークを中心としたフロントエンド開発エコシステムを持つ

## 影響を受けた言語

- [Haskell](haskell.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

PureScriptは静的型付けを重視する一部のWeb開発者コミュニティで使われ続けているニッチな言語であり、Haskellの型システムの表現力をJavaScriptの世界に持ち込む選択肢の一つとして位置づけられている。

## Hello World

```
module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = log "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PureScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PureScript)
