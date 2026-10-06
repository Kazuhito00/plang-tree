# SenseTalk

- 登場年: 1992年
- 設計者: Douglas Simons
- パラダイム: scripting, object-oriented, event-driven
- 系統: scripting

## 解決したかった課題

SenseTalkは1992年、NeXTSTEP向けのマルチメディア制作アプリケーションHyperSenseのスクリプト言語としてDouglas Simonsによって最初に作られた。HyperCardのHyperTalkから派生したxTalk系言語であり、2002年にEggplant Software社のテスト自動化製品Eggplant V1.0に組み込まれる際に大幅に再設計された。

目的は、プログラマではないテスターや業務担当者でも、英語の文章に近い自然な構文でGUIテスト自動化やマルチメディア制御のスクリプトを書けるようにすることだった。大文字小文字を区別しないキーワード、型を持たない(fluidな)変数、単位付き数値の直接サポート、正規表現を平易な英語風の構文で書ける「パターン言語」など、「人間中心のプログラミング(people-oriented programming)」を志向した設計が特徴である。

## 特徴

- HyperTalkから派生したxTalk系の高水準スクリプト言語
- キーワード・変数名の大文字小文字を区別しない
- 型を持たない(fluidな)変数で、実行中に型が変化できる
- 長さ・質量・時間・体積などの単位を数値に直接付与できる
- 平易な英語風構文で正規表現を記述できる「パターン言語」
- テスト自動化ツールEggplantの中核スクリプト言語として現役で使用されている

## 影響を受けた言語

- [HyperTalk](hypertalk.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

SenseTalkは現在もKeysight Technologies社が保有するテスト自動化ツールEggplantの中核スクリプト言語として活発に開発が続けられており(2025年3月にバージョン2.23をリリース)、GUIテスト自動化の分野でnicheに実用されている。

## Hello World

Wikipedia記事に掲載されている、単位付き数値操作の例を示す(文字列出力の例ではないが、記事に掲載された最も簡潔な例である)。

```
Put 5 yds into length
add 2 ft to length
put length --> displays 17 feet
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SenseTalk)
- Wikipedia(日本語): 該当記事なし
