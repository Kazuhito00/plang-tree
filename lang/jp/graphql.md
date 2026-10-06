# GraphQL

- 登場年: 2015年
- 設計者: Lee Byron, Nick Schrock, Dan Schafer
- パラダイム: declarative, query
- 系統: logic-declarative

## 解決したかった課題

Facebookのモバイルアプリでは、REST APIから必要以上のデータを取得してしまう「オーバーフェッチ」や、逆に複数回のリクエストが必要になる「アンダーフェッチ」といった非効率が問題になっていた。クライアントごとに異なるデータ要求に対応するため、エンドポイントの数が増え続け、その管理コストも増大していた。Lee Byron、Nick Schrock、Dan Schaferらは、クライアントが必要なデータ構造を宣言的に指定して取得できるクエリ言語としてGraphQLを開発した。2012年に社内で開発が始まり、2015年にオープンソースとして公開されると、REST APIに代わるAPI設計の標準として急速に採用が広がった。

## 特徴

- クライアントが必要なフィールドだけを指定して取得できるため、オーバーフェッチ・アンダーフェッチを防げる
- 単一のエンドポイントに対してクエリを送るスキーマ駆動型のAPI設計
- 型システムによってスキーマを厳密に定義し、クエリの妥当性をサーバー側で検証できる
- Query(取得)・Mutation(更新)・Subscription(購読)の3種類の操作を統一的に扱う
- 複数のリソースを1回のリクエストでネストして取得できるため、通信回数を削減できる

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も現役の言語であり(status: active)、REST APIに代わる選択肢としてWeb・モバイルアプリケーション開発で広く採用されている。GitHub、Shopifyをはじめ多数の企業がGraphQL APIを公開しており、エコシステムは拡大を続けている。

## Hello World

スキーマ側で`hello`フィールドが文字列"Hello, World!"を返すよう定義されているものとして、クライアントは次のクエリでそれを取得する。

```graphql
query {
  hello
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/GraphQL)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/GraphQL)
