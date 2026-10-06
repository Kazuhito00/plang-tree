# NERD

- 登場年: 2026年
- 設計者: Guru Sattanathan
- パラダイム: procedural, functional
- 系統: ai-native

## 解決したかった課題

Guru Sattanathanは、コードの4割がLLMによって書かれる時代において、記号演算子ではなく英単語のキーワードを使う方がLLMのトークナイザーにとって効率的だという仮説から、機械が書き人間が監査することを前提とした言語を設計しようとした。

## 特徴

- 「世界初のLLMネイティブ言語」を標榜する
- 全ての演算子を記号ではなく英語キーワードに置き換えている(例: plus, minus, eq)
- MCP(Model Context Protocol)クライアントとLLM呼び出しをプリミティブとして組み込む
- LLVM IRにコンパイルされ、ランタイムを持たない

## 影響を受けた言語

特になし


## 影響を与えた言語

- [LLMLang](llmlang.md)


## 現在の位置づけ

2026年1月に公開されたニッチな言語(status: niche)で、動作するコンパイラを持つ。まだ「実運用にはまだ早い」段階とされ、後発のLLMLangが対照的な設計仮説(記号の方がトークン効率が良い)を掲げて登場するなど、この分野の議論の起点の一つとなっている。

## Hello World

一次資料上で確認できる具体的なHello World例は見当たらなかった。

## 外部リンク

該当するWikipedia記事は無い。公式サイト: [nerd-lang.org](https://www.nerd-lang.org/)
