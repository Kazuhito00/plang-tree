# CoffeeScript

- 登場年: 2009年
- 設計者: Jeremy Ashkenas
- パラダイム: scripting, functional
- 系統: scripting

## 解決したかった課題

2000年代後半、JavaScriptはブラウザの標準言語として広く使われていたが、セミコロンや波括弧、`var`宣言の癖、`this`の挙動など、冗長で書き手を混乱させやすい構文上の弱点が度々指摘されていた。Jeremy Ashkenasは、Rubyのような簡潔で読みやすい構文で書いたコードを最終的に通常のJavaScriptへ変換(トランスパイル)することで、既存のブラウザやライブラリをそのまま使いながら開発体験だけを改善しようと考えた。

## 特徴

- インデントベースでセミコロンや波括弧を省略できる簡潔な構文
- 内包表記やdestructuringなどRuby・Python由来の表現力の高い記法
- 出力される素直なJavaScriptコードとの相互運用性の高さ
- クラス構文など、当時のJavaScriptにまだ無かった機能を先取りして提供
- Ruby on RailsのアセットパイプラインなどWebフレームワークへの統合による普及

## 影響を受けた言語

- [JavaScript](javascript.md)
- [Ruby](ruby.md)
- [Python](python.md)
- [Haskell](haskell.md)
- [Perl](perl.md)


## 影響を与えた言語

- [MoonScript](moonscript.md)
- [LiveScript](livescript_lang.md)


## 現在の位置づけ

現在は「legacy」であり、ES6以降のJavaScript自体がクラス構文やアロー関数などCoffeeScriptが先取りしていた機能を取り込んだこと、またTypeScriptの台頭により、新規採用は大きく減少した。しかしJS開発体験の改善という課題に先駆けて挑んだ歴史的意義は大きい。

## Hello World

```
console.log "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/CoffeeScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/CoffeeScript)
