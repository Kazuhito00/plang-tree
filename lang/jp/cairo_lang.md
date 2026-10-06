# Cairo

- 登場年: 2021年
- 設計者: Lior Goldberg, Shahar Papini, Michael Riabzev
- パラダイム: systems, procedural, generic, pattern-matching
- 系統: domain-specific

## 解決したかった課題

Ethereum上のオンチェーン計算はガス代が高く、処理能力にも限界があった。StarkWareは、計算を安価に検証可能にするSTARK証明を用いてオフチェーンで重い計算を行い、その正当性のみをオンチェーンで検証するZKロールアップ方式のスケーリングを実現しようとした。しかし従来は算術回路や多項式制約を手作業で構築する必要があり、開発が困難だった。Cairoは証明可能なプログラムを記述できる初のチューリング完全な言語として設計され、開発者が通常の言語のような感覚でSTARK証明可能なプログラムやStarkNetのスマートコントラクトを書けるようにした。Cairo 1.0ではRustに影響を受けた構文へ刷新された。

## 特徴

- STARK証明可能なプログラムを記述できる、初のチューリング完全な言語である
- Cairo 1.0以降はRustに似た構文を採用し、所有権や型システムなどの概念を取り入れている
- Pythonのようなツール群(テストやデバッグ環境)とも親和性のあるエコシステムを持つ
- 実行結果はCairo仮想マシン上でトレースされ、STARK証明によってオフチェーンの計算正当性を検証できる
- StarkNet向けのスマートコントラクト記述言語として、ジェネリクスやパターンマッチングなどの機能も備える

## 影響を受けた言語

- [Rust](rust.md)
- [Python](python.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

CairoはStarkNetのスマートコントラクト記述言語として現役で開発・利用が続いている。ZKロールアップというブロックチェーンのスケーリング技術の中核を担う言語として、STARK証明のエコシステムとともに発展を続けている。

## Hello World

```
#[starknet::contract]
mod hello_world {
    #[storage]
    struct Storage {}

    #[external(v0)]
    fn hello(self: @ContractState) -> felt252 {
        'Hello, world!'
    }
}
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
