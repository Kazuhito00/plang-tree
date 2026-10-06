# Swift

- 登場年: 2014年
- 設計者: Chris Lattner
- パラダイム: object-oriented, functional, protocol-oriented
- 系統: concurrent-actor

## 解決したかった課題

AppleのiOS/macOS開発を長年支えてきたObjective-Cは、C言語由来の古い構文と、手動のポインタ操作やnil参照に起因する不具合を抱えていた。また、CとSmalltalkのメッセージング構文が混在する独特な文法は初学者にとって学習コストが高かった。LLVMコンパイラ基盤の開発者でもあるChris Lattnerは、Objective-Cとの相互運用性を保ちながら、モダンな型安全性・オプショナル型による安全なnil処理・高速な実行速度を兼ね備えた新しい言語Swiftを設計し、Appleプラットフォームの次世代標準言語とした。

## 特徴

- オプショナル型により、nilを扱う可能性のある値を型システムで明示し、実行時のnil参照エラーを防ぐ
- クラス継承よりもプロトコル(インターフェース)を軸に設計する「プロトコル指向プログラミング」を掲げる
- 値型(構造体)とcopy-on-write最適化を活用し、参照型に頼らない安全なデータ共有を実現する
- 自動参照カウント(ARC)によるメモリ管理でガベージコレクションの一時停止を避ける
- LLVMを基盤とした最適化により、Objective-C並みかそれ以上の実行速度を達成する
- Objective-Cとの相互運用性を保ち、既存資産を段階的に置き換えられる

## 影響を受けた言語

- [Objective-C](objective_c.md)
- [Rust](rust.md)
- [Haskell](haskell.md)
- [Python](python.md)
- [C#](c_sharp.md)
- [Ruby](ruby.md)
- [CLU](clu.md)
- [D](d.md)


## 影響を与えた言語

- [V](v_lang.md)
- [Hylo](hylo_lang.md)
- [Carbon](carbon.md)
- [Mojo](mojo.md)


## 現在の位置づけ

Swiftは現在、iOS/macOS/watchOSなどApple全プラットフォームの標準開発言語としてObjective-Cに完全に取って代わり、オープンソース化によりサーバサイドなど他分野への展開も進められている。

## Hello World

```
print("Hello, world!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Swift_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Swift_%28programming_language%29)
