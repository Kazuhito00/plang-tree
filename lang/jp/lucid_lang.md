# Lucid

- 登場年: 1976年
- 設計者: Edward A. Ashcroft, William W. Wadge
- パラダイム: dataflow, declarative, functional
- 系統: ml-functional

## 解決したかった課題

当時主流だったフォン・ノイマン型の逐次実行モデルでは、可変変数と副作用を前提とするためプログラムの検証や並列化が難しいという課題があった。Ashcroft と Wadge は、変数を無限のデータストリームとして扱い、宣言的な等式でプログラムを記述するデータフロー型言語Lucidを考案し、非フォン・ノイマン型の計算モデルを実験的に探求した。要求駆動(demand-driven)の評価方式を採用し、必要な値だけを計算することで、明示的な代入なしに時間や状態変化を表現できるようにした。後にSISAL、Lustre、Pure Dataなどのデータフロー言語の設計に影響を与えた。

## 特徴

- 変数を時間軸上の無限ストリームとして扱い、各変数は逐次的な値の列を表す
- 代入や副作用を持たず、宣言的な等式(where/is節)によってプログラムの構造を記述する
- `fby`(followed by)、`first`、`next`などのストリーム演算子により、値の時間的な依存関係を表現する
- 要求駆動(demand-driven)の評価戦略を採用し、実際に必要とされた値だけを遅延的に計算する
- 見た目は伝統的な関数型言語に近いが、内部的にはデータフローグラフとして実行される

## 影響を受けた言語

- [ISWIM](iswim.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Lucidは実用のアプリケーション開発で広く使われる言語ではなく、ニッチな存在にとどまっている。しかし、変数を無限ストリームとして扱う発想はSISALやLustreなど後発のデータフロー・同期言語の理論的基盤となり、研究上の意義は大きい。現在も計算モデルの研究対象として言及されることがある。

## Hello World

pLucid(Lucidの代表的な実装)では、`writes`関数を用いて文字列を直接出力できる。

```
writes("Hello, world!\n")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Lucid_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lucid_%28programming_language%29)
