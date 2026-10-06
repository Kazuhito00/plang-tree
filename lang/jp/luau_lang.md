# Luau

- 登場年: 2019年(2019年8月27日)
- 設計者: Arseny Kapoulkine, Roblox Corporation
- パラダイム: scripting, procedural, functional
- 系統: scripting

## 解決したかった課題

Robloxのゲームスクリプティング基盤が大規模化するにつれ、標準のLuaには型システムがなく特定の種類のエラーを検出しにくいこと、また標準のLua処理系には性能上の限界があることが問題として浮かび上がった。

Roblox社のArseny Kapoulkineらは、Lua 5.1をベースにしつつ、段階的型付け(gradual typing)と構造的型システムを追加し、さらにx64・ARM64向けのネイティブコード生成を組み込んだ言語Luauを開発し、2019年8月27日に発表した。既存の型なしLuaコードはそのまま動作しつつ、必要な箇所だけ段階的に型注釈を追加できることを目指している。

## 特徴

- Lua 5.1との後方互換性を保った、段階的型付け(gradual typing)と構造的型システム
- x64・ARM64向けのネイティブコード生成による高速化
- 文字列補間(string interpolation)や複合代入演算子(augmented assignment)などの現代的な構文拡張
- リソース制限付きのサンドボックス機能
- Wikipediaのインフォボックスでは、Lua 5.1、TypeScript、Python、LuaJITからの影響が挙げられている

## 影響を受けた言語

- [Lua](lua.md)
- [TypeScript](typescript.md)
- [Python](python.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Luauは現在、Roblox上のゲーム開発言語として活発に使われているだけでなく、2021年11月にMITライセンスで公開されたことで、Remedy Entertainment、Digital Extremes、Giants Software、Linden Labなど他のスタジオ・企業にも採用が広がっている。

## Hello World

一次資料(Wikipedia記事)には明示的な "Hello, World!" の出力例は掲載されていないが、Lua 5.1と後方互換のため標準の`print("Hello, world!")`がそのまま利用できる。記事内で確認できた文字列補間の例を以下に示す。

```luau
local baseNumber: number = 1
baseNumber += 1
print(`The baseNumber is {baseNumber}`)
--> The baseNumber is 2
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Luau_(programming_language))
- [Wikipedia(日本語)] 該当ページなし
