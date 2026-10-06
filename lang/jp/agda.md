# Agda

- 登場年: 2007年
- 設計者: Ulf Norell
- パラダイム: functional, logic
- 系統: ml-functional

## 解決したかった課題

「命題としての型(propositions as types)」という、論理学の命題とプログラムの型を対応させるCurry-Howard同型の考え方は理論的に知られていたが、これを実際に対話的に検証できる証明支援系として洗練させる必要があった。チャルマース工科大学のUlf Norellは、依存型理論に基づき、数学的証明とプログラムを同じ言語の中で統一的に記述・検証できる処理系としてAgdaを開発した。

## 特徴

- 依存型により、型自体に命題(証明すべき性質)を表現できる
- 対話的な証明支援(ゴールに基づく穴埋めや型検査)をエディタと連携して行える
- Unicode記号を多用した数学的記法に近い構文が特徴
- 全域性が要求され、停止しない関数や網羅性のないパターンマッチは原則として許されない
- 純粋な証明支援系であると同時に、依存型を持つ関数型プログラミング言語としても使える

## 影響を受けた言語

- [Haskell](haskell.md)
- [Coq](coq.md)


## 影響を与えた言語

- [Idris](idris.md)


## 現在の位置づけ

Agdaは定理証明支援系兼依存型プログラミング言語として、プログラミング言語理論や形式手法の研究・教育で現役で使われている。実用的な汎用開発よりも数学的証明の記述・検証という用途に特化した位置づけを保っている。

## Hello World

```
module hello-world where

open import Agda.Builtin.IO using (IO)
open import Agda.Builtin.Unit using (⊤)
open import Agda.Builtin.String using (String)

postulate putStrLn : String → IO ⊤
{-# FOREIGN GHC import qualified Data.Text as T #-}
{-# COMPILE GHC putStrLn = putStrLn . T.unpack #-}

main : IO ⊤
main = putStrLn "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Agda)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Agda_%28programming_language%29)
