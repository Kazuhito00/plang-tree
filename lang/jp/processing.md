# Processing

- 登場年: 2001年
- 設計者: Casey Reas, Ben Fry
- パラダイム: object-oriented, visual
- 系統: jvm-dotnet

## 解決したかった課題

MITメディアラボ出身のCasey ReasとBen Fryは、デザイナーやビジュアルアーティストがコンピュータグラフィックスを使った表現を試作する際、Javaの本格的なクラス定義やGUI準備のための定型コードが大きな障壁になっていることに着目した。プログラミングの専門教育を受けていない表現者でも、数行のコードを書くだけですぐに画面に図形やアニメーションを描き、試行錯誤できる環境が必要とされていた。ProcessingはJavaをそのまま使うのではなく、その上に簡素化された文法とスケッチ指向の開発環境を被せることでこの課題に応えた。

## 特徴

- setup()/draw()という最小限の関数だけで描画ループを開始できる簡潔な構文
- Java言語の大部分をそのまま利用できるが定型コードを大幅に省略
- 「スケッチ」と呼ばれる小さなプログラム単位で試作を繰り返す開発スタイル
- 2D/3Dグラフィックス、画像、音声などクリエイティブ用途のAPIを標準搭載
- プログラミング教育とメディアアート制作の橋渡し役として広く採用
- 専用の統合開発環境(Processing IDE)でコードの記述から実行までを一体化

## 影響を受けた言語

- [Java](java.md)
- [PostScript](postscript.md)
- [Logo](logo.md)
- [BASIC](basic.md)


## 影響を与えた言語

- [Kojo](kojo_lang.md)


## 現在の位置づけ

Processingは現在もクリエイティブコーディングの教育・アート制作分野における定番の言語・開発環境として現役で使われ続けている。プログラミング初学者やデザイナーがビジュアル表現を通じてコードに触れる入口として、世界中の美術・デザイン教育機関で採用されており、コミュニティによる開発も継続している。

## Hello World

```
void setup() {
  println("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Processing)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Processing_%28programming_language%29)
