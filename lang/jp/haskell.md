# Haskell

- 登場年: 1990年
- 設計者: 委員会(Simon Peyton Jonesほか)
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

1980年代後半、Miranda・Lazy ML・Orwellなど遅延評価を特徴とする純粋関数型言語が複数の研究グループでばらばらに開発されており、研究成果の共有や比較が困難になっていた。特にMirandaは商用ライセンスの処理系であり、研究・教育目的での自由な利用や改変に制約があった。そこで関数型言語研究者たちは委員会を組織し、既存の成果を統合したオープンな標準言語を作ることに合意、1990年に最初の言語仕様を発表しHaskellと名付けた。

## 特徴

- 純粋関数型であり、副作用はモナドを通じて型システムの中で明示的に扱う
- 遅延評価(必要呼び)をデフォルトとし、無限データ構造も自然に扱える
- 型クラスによるアドホック多相と、強力な静的型推論を両立している
- 圏論由来の抽象化(Functor、Monad、Applicativeなど)が言語文化に深く根付いている
- GHC(Glasgow Haskell Compiler)という高度に最適化された実装が事実上の標準処理系

## 影響を受けた言語

- [Miranda](miranda.md)
- [Standard ML](standard_ml.md)
- [Lisp](lisp.md)
- [Scheme](scheme.md)
- [ISWIM](iswim.md)


## 影響を与えた言語

- [Cryptol](cryptol_lang.md)
- [EuLisp](eulisp.md)
- [Aldor](aldor_lang.md)
- [Python](python.md)
- [Gofer](gofer.md)
- [Mercury](mercury.md)
- [Curry](curry.md)
- [Raku](raku.md)
- [Hume](hume_lang.md)
- [Scala](scala.md)
- [Orc](orc_lang.md)
- [F#](f_sharp.md)
- [Fortress](fortress.md)
- [Idris](idris.md)
- [Agda](agda.md)
- [Pure](pure_lang.md)
- [CoffeeScript](coffeescript.md)
- [Rust](rust.md)
- [OpenSCAD](openscad.md)
- [Kitten](kitten_lang.md)
- [LiveScript](livescript_lang.md)
- [Elm](elm.md)
- [Koka](koka.md)
- [jq](jq_lang.md)
- [PureScript](purescript.md)
- [Lean](lean.md)
- [Swift](swift.md)
- [Futhark](futhark.md)
- [Hack](hack_lang.md)
- [Unison](unison.md)
- [Dhall](dhall.md)
- [Flix](flix_lang.md)
- [Austral](austral_lang.md)
- [Roc](roc.md)
- [Plutus](plutus.md)
- [Carbon](carbon.md)


## 現在の位置づけ

Haskellは産業利用こそ限定的だが、型システムやモナドといった概念は他の多くの言語に波及しており、プログラミング言語研究における最重要言語の一つとして現役で使われ続けている。

## Hello World

```
main :: IO ()
main = putStrLn "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Haskell)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Haskell)
