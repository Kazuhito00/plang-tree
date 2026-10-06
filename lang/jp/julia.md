# Julia

- 登場年: 2012年
- 設計者: Jeff Bezanson, Stefan Karpinski, Viral Shah, Alan Edelman
- パラダイム: functional, procedural, array
- 系統: numeric-scientific

## 解決したかった課題

科学技術計算の現場では長らく「2言語問題」が悩みの種だった。Pythonのような書きやすい言語でプロトタイプを作り、実行速度が必要な部分だけC/Fortranで書き直すという二段構えの開発が常態化していたのである。MITの研究者らは、この妥協をなくし、動的型付けの書きやすさを保ったままJIT(実行時)コンパイルによりCに迫る実行速度を出せる言語を作りたいと考えた。既存の科学計算言語(MATLABなど)の使いやすさと、静的型付き言語並みの性能を両立させることを目指して設計された。

## 特徴

- LLVMベースのJITコンパイルにより動的言語でありながら高速に実行できる
- 多重ディスパッチ(multiple dispatch)を中心とした型システムを持つ
- 数式に近い記法で行列・配列演算を簡潔に書ける
- 既存のC・Fortranコードを容易に呼び出せる相互運用性
- 科学技術計算・機械学習・数値シミュレーション向けの豊富なパッケージ群

## 影響を受けた言語

- [Python](python.md)
- [MATLAB](matlab.md)
- [Lisp](lisp.md)
- [Dylan](dylan.md)
- [R](r.md)
- [Lua](lua.md)
- [Perl](perl.md)
- [Ruby](ruby.md)
- [Fortress](fortress.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も現役の言語であり(status: active)、速度と書きやすさの両立を狙った新興言語として、数値シミュレーションや機械学習分野で採用が広がっている。「2言語問題」の解決を掲げる立場から、研究コミュニティを中心に着実に利用者を増やしている。

## Hello World

```
println("Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Julia_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Julia_%28programming_language%29)
