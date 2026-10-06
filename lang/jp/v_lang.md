# V

- 登場年: 2019年
- 設計者: Alexander Medvednikov
- パラダイム: procedural, object-oriented, systems
- 系統: c-family

## 解決したかった課題

Go言語はシンプルな文法と高速なコンパイルで支持を集めていたが、直和型(sum type)やオプション型、コンパイル時の安全性チェックなど、開発者が欲しいと感じる機能の一部を欠いていた。Alexander Medvednikovは、Goのシンプルさと開発体験の良さを保ちながら、これらの機能を追加し、外部依存のないシングルバイナリを高速に生成できるモダンなシステムプログラミング言語としてVを設計した。

## 特徴

- Goに似たシンプルで読みやすい構文を持つ
- 直和型やOption/Result型による安全なエラーハンドリングを備える
- コンパイル速度が非常に速いことを重視して設計されている
- C言語のソースコードにトランスパイルしてビルドする仕組みを持ち、既存のCツールチェインを活用できる
- ガベージコレクションの有無を選択できるなど、パフォーマンスチューニングの柔軟性がある

## 影響を受けた言語

- [Go](go.md)
- [Oberon](oberon.md)
- [Python](python.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Kotlin](kotlin.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

シンプルさと高速なコンパイルを掲げる新興のシステムプログラミング言語として、活発なコミュニティを持つニッチな言語である。

## Hello World

```
fn main() {
    println('Hello, World!')
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/V言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/V_%28programming_language%29)
