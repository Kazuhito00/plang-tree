# Modelica

- 登場年: 1997年(設計は1996年9月に開始、バージョン1.0は1997年9月にリリース)
- 設計者: Hilding Elmqvist
- パラダイム: declarative, object-oriented
- 系統: domain-specific

## 解決したかった課題

Modelicaは、Hilding Elmqvistが自身の博士論文、および先行するモデリング言語Allan、Dymola、NMF ObjectMath、Omola、SIDOPS+、Smileでの経験を踏まえて1996年9月に設計を開始し、1997年9月にバージョン1.0が公開された。機械・電気・電子・油圧・熱・制御など複数の工学分野にまたがる複雑なシステムを、コンポーネント指向でモデリングできる、オブジェクト指向・宣言型のマルチドメインモデリング言語として開発された。

## 特徴

- 機械・電気・電子・油圧・熱・制御などの複数分野を統一的に扱えるマルチドメイン物理モデリング言語
- オブジェクト指向・宣言型の言語で、方程式に基づいてシステムの振る舞いを記述する
- 非営利団体Modelica Association(MAP)によって仕様と標準ライブラリが維持されている
- ベンダー中立であり、特定のツールに依存せずにモデルを共有・開発できる
- ファイル拡張子は`.mo`

## 影響を受けた言語

特になし(WikipediaのInfoboxには「Influenced by」の項目自体が存在しない。本文中では先行するモデリング言語Allan、Dymola、NMF ObjectMath、Omola、SIDOPS+、Smileでの経験が設計の土台になったと説明されているが、いずれもデータセット未収録)

## 影響を与えた言語

特になし


## 現在の位置づけ

Modelicaは、非営利団体Modelica Associationにより開発が続けられている、マルチドメインの物理システムモデリング言語として現役である(status: active)。言語仕様の最新の安定版は3.6(2023年3月9日)。

## Hello World

Hello World相当の例は確認できなかった。記事に掲載されている実際のコード例(一次系の微分方程式モデル)は以下の通り。

```modelica
model FirstOrder
  parameter Real c=1 "Time constant";
  Real x (start=10) "An unknown";
equation
  der(x) = -c*x "A first order differential equation";
end FirstOrder;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Modelica)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Modelica)
