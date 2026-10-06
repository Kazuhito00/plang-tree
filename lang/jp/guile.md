# Guile

- 登場年: 1993年
- 設計者: GNUプロジェクト(Jim Blandyら)
- パラダイム: 関数型、記号処理
- 系統: Lisp/Scheme系

## 解決したかった課題

GNUプロジェクトでは、様々なアプリケーションに組み込んで拡張言語として使える、公式かつ統一された処理系が求められていた。当時、Emacs LispのようにアプリケーションごとにバラバラのLisp方言が使われる状況を避けるため、標準化されたScheme仕様(R5RS等)に準拠しつつ、C言語との連携が容易な組み込み用のScheme実装としてGuileが開発された。これによりGNUソフトウェア全体で共通の拡張言語基盤を持つことが目指された。

当初はTclが有力な候補として検討されていたが、より表現力の高い言語を求める声からSchemeベースのGuileが採用され、GNUの公式拡張言語として位置づけられるに至った。

## 特徴

- GNUプロジェクトの公式拡張言語(GNU Extension Language)として位置づけられる
- Scheme標準(R5RS/R7RS)に準拠しつつ独自の拡張も持つ
- Cで書かれたアプリケーションへの組み込みが容易なAPIを提供
- GNU Guixのパッケージ管理システムの実装言語としても採用されている
- 末尾呼び出し最適化や継続などScheme由来の機能を備える
- 複数の言語(Emacs Lisp、ECMAScriptなど)を同一VM上で動かすマルチ言語対応の設計
- 独自のバイトコードVMを持ち、コンパイル済みコードによる高速な実行が可能

## 影響を受けた言語

- [Scheme](scheme.md)
- [Lisp](lisp.md)
- [SCM](scm.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Guileは「niche」な言語ながら、GNUプロジェクトの公式拡張言語として位置づけられ、GNU Guixをはじめとする一部の重要なGNUソフトウェアで実用的に使われ続けている。GNUエコシステム内での標準的な拡張手段として、今後もGNUソフトウェア群の重要な基盤であり続けると見られる。

## Hello World

```
(display "Hello, World!")
(newline)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/GNU_Guile)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/GNU_Guile)
