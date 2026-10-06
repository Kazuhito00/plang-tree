# MoonBit

- 登場年: 2023年
- 設計者: Hongbo Zhang, IDEA(粤港澳大湾区数字経済研究院)
- パラダイム: functional, procedural, object-oriented
- 系統: ai-native

## 解決したかった課題

OCamlのコア開発者でもあったHongbo Zhangは、既存のJava・Go・RustがWebAssemblyの持つ速度と安全性の優位性を十分に活かせていないと考えた。クラウド・エッジコンピューティング向けにWasm出力を最適化しつつ、複雑さを避けたシンプルな構文と、AIによるコード生成にも適した設計を両立する言語を目指した。

## 特徴

- WebAssemblyへの最適化を第一目標に据え、Rustよりコンパクトなコードを生成できるとされる
- 関数型・手続き型・オブジェクト指向を横断的にサポートする多パラダイム言語
- デバッグ・テスト・値のトレース・コードカバレッジなどを含む統合ツールチェインを持つ
- AIによるコード補助を前提とした「AIフレンドリーな言語」を標榜し、ICSE 2024で設計論文が発表された
- WASM GC・JavaScript・ネイティブ・LLVMバックエンドをサポート

## 影響を受けた言語

- [Rust](rust.md)
- [Go](go.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

MoonBitは2023年8月に一般公開され、2024年12月にコンパイラがオープンソース化された。この種のAI向け言語群の中では最も実用段階にあり(status: active)、実際にWebAssemblyアプリケーション開発に使われている。

## Hello World

```moonbit
fn main {
  println("Hello, World!")
}
```

## 外部リンク

該当するWikipedia記事は見当たらない。
