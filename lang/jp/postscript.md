# PostScript

- 登場年: 1982年
- 設計者: John Warnockほか(Adobe)
- パラダイム: stack-based, declarative
- 系統: domain-specific

## 解決したかった課題

1980年代初頭、レーザープリンタや組版機はメーカーごと機種ごとに独自の制御コードを持ち、同じ文書を別の出力機器で正確に印刷することが困難だった。Xerox PARCでページ記述の研究に携わっていたJohn Warnockらは、この問題を解決するため、ページ上の文字・図形・画像の配置を機種に依存しない形で記述できる言語を構想した。

Xeroxがこの技術の商業化に消極的だったため、Warnockらは独立してAdobeを設立し、PostScriptとして製品化した。Forth譲りのスタックベースの実行モデルにより、プリンタ内蔵の処理系が直接プログラムとして解釈・実行できる点が特徴だった。

## 特徴

- スタックベースの後置記法(逆ポーランド記法)でコマンドを記述する
- ページ全体を「プログラム」として記述し、プリンタ側で実行して描画結果を得る
- ベジエ曲線やアウトラインフォントによる高品質なグラフィックスと組版を機種非依存に表現できる
- チューリング完全であり、条件分岐やループなど汎用的な計算も可能
- Appleと共同開発したLaserWriterなどを通じてDTP(デスクトップパブリッシング)革命の中核技術となった
- フォントの輪郭情報自体もプログラムとして記述するTypeシリーズのフォント形式を生み出した

## 影響を受けた言語

- [Forth](forth.md)
- [Lisp](lisp.md)
- [Mesa](mesa.md)


## 影響を与えた言語

- [S-Lang](s_lang.md)
- [Processing](processing.md)


## 現在の位置づけ

PostScriptは現在ではレガシーな存在であり、実務での新規利用はほぼPDFに置き換えられているが、印刷業界の基盤技術として長年にわたり多大な影響を与えた歴史的意義は大きい。一部の印刷ワークフローやRIP(ラスタイメージプロセッサ)では、今もPostScriptの処理系が使われ続けている。

## Hello World

```postscript
%!PS
/Helvetica findfont 24 scalefont setfont
72 720 moveto
(Hello, World!) show
showpage
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PostScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PostScript)
