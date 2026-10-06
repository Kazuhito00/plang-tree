# Io

- 登場年: 2002年
- 設計者: Steve Dekorte
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

Selfはプロトタイプベースオブジェクト指向という画期的な概念を実証したが、その処理系は高性能なJITコンパイルのために複雑で大きなものになっていた。Steve Dekorteは、Selfが切り開いたプロトタイプベースの考え方をできる限り単純化し、組み込み用途にも耐えるごく小さな処理系として作り直したいと考えた。すべてをメッセージ送信として統一的に扱う、Smalltalk以上に徹底した純粋さを、軽量な実装で実現することが目標だった。

## 特徴

- クラスを持たず、オブジェクトの複製によってオブジェクトを生成する、純粋なプロトタイプベース言語
- 構文・セマンティクスともに極めて小さく、言語仕様全体を短時間で把握できるミニマルな設計
- コルーチンをベースにした独自の並行性(アクター的な)モデルを持つ
- すべての制御構造すらメッセージ送信として実装される一貫性
- 商用・産業利用としては広まらず、言語設計を学ぶための教材的な存在として知られる

## 影響を受けた言語

- [Self](self.md)
- [Smalltalk](smalltalk.md)
- [Lua](lua.md)
- [Lisp](lisp.md)
- [Python](python.md)
- [NewtonScript](newtonscript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在はhistorical(歴史的)な言語として位置づけられ、活発な実用利用はほとんど見られない。しかしそのミニマルで一貫したプロトタイプベース設計は、言語処理系の設計や教育の題材として今も参照されている。

## Hello World

```
"Hello, world!" println
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Io_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Io_%28programming_language%29)
