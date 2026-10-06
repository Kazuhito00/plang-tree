# T

- 登場年: 1982年
- 設計者: Jonathan A. Rees, Kent M. Pitman, Norman I. Adams
- パラダイム: functional, object-oriented, symbolic
- 系統: lisp-scheme

## 解決したかった課題

1980年代初頭、Schemeは静的スコープとファーストクラス継続を持つ整理された言語として注目されていたが、実用的なシステムプログラミングや大規模なソフトウェア開発に必要な実行性能、そしてオブジェクトシステムやモジュールシステムといった機能をまだ欠いていた。

イェール大学のJonathan A. Rees、Kent M. Pitman、Norman I. Adamsは、言語設計と実装の実験としてSchemeを拡張したTを開発した。Tでは「locale」と呼ばれるファーストクラスの環境をモジュールシステムとして用いる仕組みを導入し、さらに最適化コンパイラOrbitによって、Common LispやCなど既存の言語と競合できる実行性能を目指した。

## 特徴

- Schemeの方言であり、静的スコープとfirst-classな継続(call/cc、および限定版のcatch)を継承
- 「locale」と呼ばれるファーストクラス環境を用いたモジュールシステム
- オブジェクト(object)を用いたオブジェクト指向的な記述が可能
- 遅延評価のための特殊形式を持つ
- 最適化コンパイラOrbitにより、当時の他言語と競合できる実行性能を追求

## 影響を受けた言語

- [Scheme](scheme.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Tは1982年に初版が登場し、1984年8月のバージョン3.0が最終リリースとなった。商用製品として長期的に使われることはなかったが、ファーストクラス環境によるモジュール化の設計やオブジェクトシステムは、後のEuLispやJouleといった言語に影響を与えたとされる。現在は歴史的なSchemeの方言として位置づけられ、mumble.net上の公式プロジェクトページにその記録が残されている。

## Hello World

一次資料(Wikipedia記事)にHello World例は無いが、オブジェクトシステムの例として次のコードが示されている。

```lisp
(define-predicate pair?)
(define-settable-operation (car pair))
(define-settable-operation (cdr pair))
(define (cons the-car the-cdr)
        (object nil
                ((pair? self) t)
                ((car self) the-car)
                ((cdr self) the-cdr)
                (((setter car) self new-car) (set the-car new-car))
                (((setter cdr) self new-cdr) (set the-cdr new-cdr))))
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/T_(programming_language))
