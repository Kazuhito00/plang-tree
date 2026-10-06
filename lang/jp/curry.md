# Curry

- 登場年: 1995年
- 設計者: Michael Hanus, Sergio Antoy
- パラダイム: functional, logic, declarative
- 系統: logic-declarative

## 解決したかった課題

関数型プログラミングと論理型プログラミングは長らく別々の言語系統として発展してきたが、両者の利点を一つの言語に統合したいという学術的な動機からCurryは生まれた。高階関数や遅延評価といった関数型の表現力と、非決定的探索や論理変数、制約解決といった論理型の強みを同時に活用できる言語を作ることで、関数論理プログラミングという新しいパラダイムを実用的に探求することを目指した。

## 特徴

- 関数定義と論理プログラミングの規則を統一的に扱う関数論理プログラミング言語である
- 論理変数と非決定的計算をサポートし、Prologのようなバックトラック探索を関数型の枠組みの中で行える
- Haskell譲りの遅延評価と型クラスに似た型システムを持つ
- 並行計算やナローイング(narrowing)と呼ばれる評価戦略により、方程式の解を探索できる
- 学術研究やプログラミング言語理論の教育目的で広く参照される

## 影響を受けた言語

- [Haskell](haskell.md)
- [Prolog](prolog.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語として位置づけられている。プログラミング言語理論や関数論理プログラミングの研究・教育の場で今も利用され続けている。

## Hello World

```curry
main :: IO ()
main = putStrLn "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Curry)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Curry_%28programming_language%29)
