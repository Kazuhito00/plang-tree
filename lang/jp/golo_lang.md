# Golo

- 登場年: 2012年
- 設計者: INSA LyonのDynaMidグループ(CITI研究所、個人設計者名は一次資料上で確認できなかった)
- パラダイム: scripting, procedural
- 系統: jvm-dotnet

## 解決したかった課題

Java 7で導入された`invokedynamic`(JSR 292)命令は、動的言語をJVM上で効率よく実行するための新しい基盤技術であったが、その具体的な活用方法や設計指針を実際に示す言語はまだ少なかった。

フランスのINSAリヨン(国立応用科学院リヨン校)のCITI研究所DynaMidグループは、`invokedynamic`を用いてJVM上の言語ランタイムをどのように構築できるかを示す研究・教育目的のショーケースとして、動的型付けの軽量言語Goloを2012年に開発した。

## 特徴

- `invokedynamic`(JSR 292)を活用したJVM言語ランタイムの実証実験として設計された
- 動的型付け・弱い型付けを採用し、シンプルな文法を特徴とする
- Javaや他のJVM言語との高い相互運用性を持ち、数値型はjava.langのボクシングクラス、コレクションリテラルはjava.utilのクラスを利用する
- 事前(AOT)バイトコードコンパイル方式を採用しつつ、JVMの最適化を活用する
- 2015年6月にEclipse Foundationの公式プロジェクトとなり、JAX Awards 2014にもノミネートされた
- 2022年9月に開発が終了(terminated)し、現在はメンテナンスされていない

## 影響を受けた言語

特になし(一次資料上で明確な影響関係の記載は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的な言語)として位置づけられる。Eclipse Foundationの公式プロジェクトとして一定の認知を得たが、2022年9月に開発が終了(terminated)しており、現在は`invokedynamic`活用の実証実験として計算機科学史の中で言及される存在である。

## Hello World

一次資料上で確認できなかった(Wikipedia記事にコード例は掲載されていない)。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Golo_(programming_language))
