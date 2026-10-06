# Epigram

- 登場年: 2004年
- 設計者: Conor McBride, James McKinna
- パラダイム: functional, declarative, pattern-matching
- 系統: ml-functional

## 解決したかった課題

従来の関数型言語では、型は値とは別次元の静的な検査にすぎず、「長さnのベクトル」のように値そのものに依存する性質を型として直接表現することができなかった。

Conor McBrideとJames McKinnaは、型を第一級の存在として扱い、依存型(dependent types)と依存パターンマッチ(dependent pattern matching)を組み合わせることで、「型として書いた仕様どおりにしか実装できない」プログラムを書けるようにする言語を目指した。

## 特徴

- 型が第一級の存在として扱われ、値に依存した型(依存型)を表現できる
- 依存関数型(`∀x:P ⇒ Q`のように、引数の値に応じて戻り値の型が変化する関数)をサポートする
- 依存パターンマッチにより、型情報を利用した網羅的なケース分析が可能
- リストのように再帰的なデータ型の性質(長さなど)を型の中に埋め込める
- バージョン1は2006年10月にリリースされた

## 影響を受けた言語

特になし(一次資料上で明確な影響元言語は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

Epigramは、依存型と依存パターンマッチを単なる理論的な演習ではなく実用的なプログラミングスタイルとして示した点で重要であり、Wikipedia上でもIdrisとAgdaに影響を与えた言語として位置づけられている。

現在は開発が停止しており(status: historical)、Observational Type Theoryの実装を目指した後継のバージョン2は正式にはリリースされず、GitHub上に未完成の形で存在するのみである。その意義は、後続の依存型言語の設計に与えたアイデア上の影響にある。

## Hello World

```
plus x y <= rec x {
  plus x y <= case x {
    plus zero y => y
    plus (suc x) y => suc (plus x y)
  }
}
```
(自然数の加算を依存パターンマッチで定義する例。Wikipedia記事のASCII表記に基づく)

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Epigram_(programming_language))
- [Wikipedia(日本語)](なし)
