# Go

- 登場年: 2009年
- 設計者: Robert Griesemer, Rob Pike, Ken Thompson
- パラダイム: procedural, concurrent
- 系統: c-family

## 解決したかった課題

2000年代後半、Google社内では数億行規模のC++コードベースのビルドに数十分もかかることが常態化し、依存関係の複雑さや並行処理の記述の難しさが開発効率を著しく損なっていた。Robert Griesemer、Rob Pike、Ken Thompsonは、大規模な分散システムをGoogleのようなスケールで開発する現場のニーズに応えるべく、コンパイルの高速さとシンプルな言語仕様、そして並行処理を第一級の機能として持つ言語を目指した。Ken ThompsonはUnix/C誕生の当事者でもあり、Goには彼らが積み重ねてきたシステムプログラミングの経験が色濃く反映されている。

## 特徴

- goroutineとchannelによる軽量な並行処理モデル(CSP理論に基づく)
- 高速なコンパイルを実現するシンプルな文法と最小限の言語機能
- ガベージコレクションを備えつつ、C並みに近いネイティブコンパイル
- 継承を持たないインターフェースベースの型システムによる緩やかな抽象化
- 標準で強力な標準ライブラリとツールチェーン(gofmt、go modules等)を内包
- 例外機構を持たず、エラー値を明示的に返す設計を採用
- シングルバイナリへの静的リンクによりデプロイが容易
- 構造体の埋め込みによる合成ベースのコード再利用(継承を持たない)
- gofmtによるコードフォーマットの統一で、スタイル論争を排除する設計思想
- go modulesによるシンプルな依存関係管理とバージョニング
- 後年のバージョンでジェネリクスを導入し、型安全な汎用コードも記述可能に
- クロスコンパイルが標準機能として組み込まれている
- deferによる後処理記述など、リソース管理を簡潔に書ける構文上の工夫

## 影響を受けた言語

- [C](c.md)
- [Oberon](oberon.md)
- [Smalltalk](smalltalk.md)
- [occam](occam.md)
- [Pascal](pascal.md)


## 影響を与えた言語

- [Crystal](crystal.md)
- [Zig](zig.md)
- [Gleam](gleam.md)
- [Odin](odin.md)
- [Flix](flix_lang.md)
- [Ballerina](ballerina.md)
- [V](v_lang.md)
- [CUE](cue_lang.md)
- [MoonBit](moonbit.md)
- [Mog](mog_lang.md)


## 現在の位置づけ

Goはシンプルさと並行処理性能を武器に、Docker、Kubernetesをはじめとするクラウドインフラ基盤で広く採用されており、クラウドネイティブ開発における主要言語の一つとして現役で活発に使われている。当初のシンプルさ重視の方針に対する批判もあったが、後にジェネリクスを導入するなど段階的に機能を拡張しつつも設計思想の一貫性を保っている。

## Hello World

```
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Go_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Go_%28programming_language%29)
