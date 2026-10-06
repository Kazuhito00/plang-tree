# LilyPond

- 登場年: 1996年(プロジェクト開始年。バージョン1.0は1998年7月31日リリース)
- 設計者: Han-Wen Nienhuys, Jan Nieuwenhuizen
- パラダイム: declarative, macro
- 系統: domain-specific

## 解決したかった課題

伝統的な楽譜の浄書(エングレービング)は、音符やスラー、タイなどの間隔・配置を熟練の職人が手作業で調整することで、読みやすく美しい版面を作り上げてきた。しかし、コンピュータによる自動組版は、その視覚的な美しさを再現できず、間隔や余白の取り方が不自然になりがちだった。

Han-Wen NienhuysとJan Nieuwenhuizenは、MusiXTeXの前処理プログラム(MPP)の開発を経て、1996年にLilyPondプロジェクトを開始した。テキストで音楽情報を記述すれば、手作業によるクラシックな楽譜エングレービングのレイアウト規則に従って自動的に美しい譜面が生成される、という「見た目がそのまま意味である(WYSIWYM)」という考え方をTeX/LaTeXから引き継いで採用した。

## 特徴

- 音符をピッチと音価(音の長さ)で表す、テキストベースの記譜言語
- "What You See Is What You Mean"(WYSIWYM)の考え方に基づき、手彫りの楽譜に近い自然な版面を自動生成
- コマンドはバックスラッシュ(`\`)で始まる
- PDF、SVG、PNG、MIDI、PostScriptなど複数形式への出力に対応
- 拡張言語としてGNU Guile(Scheme処理系)を内部に組み込み、高度なカスタマイズが可能
- C++、Python、Schemeなどで実装され、GPL-3.0-or-laterライセンスのGNUプロジェクトのフリーソフトウェアとして開発が続いている

## 影響を受けた言語

- [Scheme](scheme.md)(GNU Guile処理系を拡張言語として内部に組み込んでいる)

## 影響を与えた言語

特になし


## 現在の位置づけ

LilyPondは現在も活発に開発が続くGNUプロジェクトのフリーソフトウェアであり、2026年時点でも安定版・プレビュー版のリリースが継続している。楽譜浄書ソフトウェアとしては、手作業によるクラシックな楽譜彫版に近い美しい版面を自動生成できることで評価されており、学術・出版・音楽制作の分野で使われ続けている。

## Hello World

一次資料には単純な「Hello World」に相当する最小例は掲載されておらず、記事に引用されているのは本格的な楽譜(fibonacciからの抜粋)の一部である。確認できた冒頭部分を以下に示す。

```lilypond
\version "2.22.2"
\include "english.ly"
\header {
  title = \markup { "Excerpt from" \italic "fibonacci" }
  composer = "Patrick McCarty"
```

(以降、複数の譜段を含む本格的な記譜が続くが、全文は一次資料上でも長大なため引用を省略する)

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/LilyPond)
- [Wikipedia(日本語)] 該当ページなし
