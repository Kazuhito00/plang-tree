# Carbon

- 登場年: 2022年
- 設計者: Google(Chandler Carruthほか)
- パラダイム: procedural, object-oriented, generic
- 系統: c-family

## 解決したかった課題

C++は1985年の登場以来、後方互換性を保つために多くの古い機能を切り捨てられず、テンプレートメタプログラミングの複雑さやメモリ安全性の欠如、遅いビルド時間など、長年にわたる技術的負債を蓄積してきた。RustのようなモダンなシステムプログラミングとC++の間を埋める必要があるにもかかわらず、Googleのような巨大なC++コードベースを持つ組織は一括で新言語に置き換えることが現実的に不可能だった。そこでGoogleのChandler Carruthらは、C++と双方向に相互運用しながら段階的に移行できる後継言語として、2022年にCarbonを実験的に発表した。

## 特徴

- C++のコードとCarbonのコードを同一プロジェクト内で双方向に呼び出せる相互運用性を最優先の設計目標とする
- テンプレートに代わり、より予測しやすいジェネリクス機構を持つ
- メモリ安全性の向上を目指した所有権・借用に関する仕組みを段階的に導入する計画がある
- LLVMをコンパイル基盤として採用し、既存のC++ツールチェーンとの親和性を確保している
- 2022年時点では実験的なプロジェクトであり、言語仕様は継続的に変更されている

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Kotlin](kotlin.md)
- [Zig](zig.md)
- [Haskell](haskell.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も開発が進行中の実験段階の言語であり(status: active)、C++の抱える技術的負債を段階的に解消する後継言語候補として注目されている。ただし正式な1.0リリースには至っておらず、産業界での本格採用はこれからの段階にある。

## Hello World

```
package HelloWorld api;

fn Main() -> i32 {
  Print("Hello, World!");
  return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Carbon_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Carbon_%28programming_language%29)
