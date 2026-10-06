# LiveScript

- 登場年: 2011年
- 設計者: Jeremy Ashkenas, Satoshi Murakami, George Zahariev
- パラダイム: functional, object-oriented
- 系統: scripting

## 解決したかった課題

CoffeeScriptの読みやすい構文を好む開発者の中には、さらに関数型言語らしい表現力、たとえば関数合成のためのパイプ演算子や、演算子を通常の関数のように扱える仕組みを求める声があった。

LiveScriptは、Wikipediaの記述によれば「CoffeeScriptの間接的な後継」であり、CoffeeScriptの設計者本人であるJeremy Ashkenasも開発に関わった言語として、2011年に登場した。最終的にJavaScriptへコンパイルされる点はCoffeeScriptと同じだが、HaskellやF#といった関数型言語からの影響を強く受けている。

## 特徴

- 最終的にJavaScriptへコンパイルされる、関数型・オブジェクト指向の多重パラダイム言語
- ケバブケース(kebab-case)の識別子がコンパイル時にキャメルケースへ変換される「名前マングリング」
- 関数合成のためのパイプ演算子(`|>`)
- 演算子を括弧で囲むことで通常の関数として呼び出せる(例: `(+) 1 2`)
- 名称は、JavaScriptが1995年に一時的に名乗っていた旧名「LiveScript」にも由来する

## 影響を受けた言語

- [CoffeeScript](coffeescript.md)
- [JavaScript](javascript.md)
- [Haskell](haskell.md)
- [F#](f_sharp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

LiveScriptは現在、最新の安定版(1.6.1)が2020年7月のリリースで止まっており、活発なメインストリームの開発言語とは言えないが、一定の小規模なコミュニティの中でニッチに使われ続けている。

## Hello World

```livescript
hello = ->
  console.log 'hello, world!'
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/LiveScript_(programming_language))
- [Wikipedia(日本語)] 該当ページなし
