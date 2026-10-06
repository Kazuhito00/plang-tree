# Drools

- 登場年: 2001年
- 設計者: Bob McWhirter, Mark Proctor
- パラダイム: logic, declarative, object-oriented
- 系統: logic-declarative

## 解決したかった課題

2000年代初頭、Javaエンタープライズアプリケーションではビジネスルールをアプリケーションコードから分離し、非エンジニアでも把握・保守できる形で管理したいという需要が高まっていた。Droolsは、Rete法を拡張した推論エンジンを用い、POJO(Plain Old Java Object)を事実として扱うことでJavaアプリケーションに自然に組み込めるビジネスルール管理システム(BRMS)として開発された。後にJBoss(Red Hat)、さらにApache Software Foundationへと開発母体が移り、KIEプラットフォームの中核コンポーネントとして現在も広く使われている。

## 特徴

- Rete法を拡張したReteOOアルゴリズムを推論エンジンの中核に用い、効率的なパターンマッチングを実現している
- POJO(Plain Old Java Object)をそのまま「事実」として扱い、Javaアプリケーションのドメインモデルにそのまま組み込める
- DRL(Drools Rule Language)と呼ばれる独自のルール記述言語を持ち、ビジネスルールを宣言的に記述できる
- JBoss(Red Hat)を経てApache Software Foundationへ移管された、オープンソースのビジネスルール管理システム(BRMS)である
- KIE(Knowledge Is Everything)プラットフォームの中核コンポーネントとして、ルールエンジン以外にワークフロー・イベント処理などとも統合されている
- 非エンジニアでも理解しやすい形でビジネスルールを記述・保守できることを目的とした設計思想を持つ

## 影響を受けた言語

- [Java](java.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

活発に開発・利用され続けているactiveな言語(システム)であり、KIEプラットフォームの中核コンポーネントとしてJavaエンタープライズ分野で広く採用されている。オープンソースコミュニティおよびRed Hatによる継続的な開発体制のもと、現在も現役のビジネスルールエンジンとして使われ続けている。

## Hello World

```
rule "Hello World"
    when
    then
        System.out.println("Hello, World!");
end
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Drools)
