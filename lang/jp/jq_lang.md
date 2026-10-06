# jq

- 登場年: 2012年
- 設計者: Stephen Dolan
- パラダイム: functional, query
- 系統: domain-specific

## 解決したかった課題

jqは、JSONデータを扱うためのコマンドラインツールとして、Stephen Dolanによって開発された。テキストの世界ではsedやAWKがパイプラインの中で手軽にストリームを加工できるのに対し、構造化データであるJSONにはそれに相当する軽量なツールが存在しなかった。jqはこの隙間を埋める、シェルのパイプラインに組み込める高水準の関数型フィルタ言語として設計され、「JSONデータに対するsed」と評される。

日本語版Wikipediaのインフォボックスには、影響を受けた言語としてIconとHaskellが明記されている。原実装はHaskellで書かれ、後にC言語へポーティングされているが、これは実装言語の変更であり、設計上の影響とは別の話である点に注意したい。

## 特徴

- JSONデータの抽出・変換・整形に特化した高水準の関数型フィルタ言語
- シェルパイプラインに組み込んでsed/AWK的に利用できる設計
- フィルタをパイプで連結して合成できる文法
- バックトラッキングをサポート(Iconの世代式評価に類似するとされる)
- 大規模JSONに対応するストリーム処理機能
- 動的型付け、MITライセンスのオープンソース

## 影響を受けた言語

- [Icon](icon.md)
- [Haskell](haskell.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在もWindows/Unix系で広く利用されるコマンドラインJSON処理ツールとして定着しており(status: active)、シェルスクリプトやCI/CDパイプラインでのJSON加工の標準的な手段の一つとなっている。gojq(Go実装)やjaq(Rust実装)などの再実装も生まれ、エコシステムが広がっている。

## Hello World

一次資料(Wikipedia)にはHello World相当の最小コード例は掲載されていなかった。記事に実際に掲載されている例(進数変換フィルタの定義)は以下の通り。

```jq
def tobase($b):
    def digit: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[.:.+1];
    def mod: . % $b;
    def div: ((. - mod) / $b);
    def digits: recurse(select(. >= $b) | div) | mod;

    select(2 <= $b and $b <= 36)
    | [digits | digit] | reverse | add;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Jq_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Jq_(programming_language))
