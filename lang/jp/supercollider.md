# SuperCollider

- 登場年: 1996年
- 設計者: James McCartney
- パラダイム: object-oriented, functional
- 系統: domain-specific

## 解決したかった課題

SuperColliderは、James McCartneyによって開発された、リアルタイムの音声合成とアルゴリズミック・コンポジション(アルゴリズム作曲)のためのプログラミング言語である。研究者や芸術家が、他の言語よりも少ない工数でリアルタイムの音響合成・作曲アルゴリズムを実装できるようにすることを目的として開発された。具体的な開発の経緯についての詳細な記述は、日本語版・英語版Wikipediaのいずれにも確認できなかった。

## 特徴

- 音響合成を担う「サーバ」(scsynth)と、作曲・制御を担う「言語」(sclang)がクライアント/サーバ形式で分離
- Open Sound Control(OSC)プロトコルによる通信
- ライブコーディング(演奏中にコードを書き換えて音を生成)に対応
- Smalltalkのオブジェクト指向構造とC系の文法を組み合わせた設計
- C/C++プラグインAPIによる音響アルゴリズムの拡張が可能
- クロスプラットフォーム対応、2002年からGPLライセンスのフリー/オープンソースソフトウェア

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [C](c.md)

(注記: MUSIC-N系譜(MUSIC、Csound等)との関連が実務上語られることがあるが、日本語版・英語版Wikipediaの本文・インフォボックスのいずれにも明記されておらず、一次資料上で確認できなかったため、ここには含めていない。)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も開発が継続中の現役言語である(status: active)。最新版は3.14.1(2025年11月時点)。ライブコーディングのコミュニティを中心に、実験音楽・サウンドアートの分野で広く使われている。

## Hello World

通常の意味での文字列出力の「Hello, World!」に相当する例は確認できなかったが、英語版Wikipediaには、音を鳴らす最小サンプルとして以下が掲載されている。

```supercollider
{ SinOsc.ar(800, 0, 0.1) + PinkNoise.ar(0.01) }.play;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/SuperCollider)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SuperCollider)
