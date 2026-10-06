# Self

- 登場年: 1987年
- 設計者: David Ungar, Randall Smith
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

Smalltalkはオブジェクト指向を徹底したが、それでも「クラス」というテンプレートからインスタンスを生成する固定的な抽象化階層を前提としていた。David UngarとRandall Smithは、クラスすら不要な、より根源的で均一なオブジェクトモデルを模索した。既存のオブジェクトを複製(clone)し、必要に応じて差分だけを書き換えていく「プロトタイプ」という考え方によって、クラス階層の設計に頭を悩ませることなく、より直接的で対話的にシステムを組み立てられるようにしたかった。

## 特徴

- クラスを持たず、オブジェクトの複製(プロトタイプ)によってオブジェクトを生成する、プロトタイプベースOOPの元祖
- スロット(slot)というシンプルな仕組みでデータとメソッドの両方を統一的に表現
- 高性能な実行のため、実行時に頻繁にインライン化・最適化を行う先進的なJITコンパイル技術を開発し、後のJavaScript V8等の高速化技術にも影響
- Smalltalk同様、ライブなオブジェクト環境で対話的に開発できる思想を継承
- 学術的な影響力は大きかったが、商用処理系としては普及しなかった

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [APL](apl.md)


## 影響を与えた言語

- [NewtonScript](newtonscript.md)
- [Strongtalk](strongtalk.md)
- [Obliq](obliq_lang.md)
- [JavaScript](javascript.md)
- [Squeak](squeak.md)
- [REBOL](rebol.md)
- [ドリトル](dolittle.md)
- [Io](io.md)
- [Factor](factor.md)
- [Newspeak](newspeak_lang.md)
- [AmbientTalk](ambienttalk.md)


## 現在の位置づけ

商用としては普及せず、現在は歴史的(historical)な研究用言語として位置づけられている。しかしそのプロトタイプベースの考え方とJIT技術は、後にJavaScriptという形で世界中の開発者が日常的に触れる技術として結実しており、影響力は極めて大きい。

## Hello World

```
'Hello, world!' printLine.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Self)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Self_%28programming_language%29)
