# Haxe

- 登場年: 2005年
- 設計者: Nicolas Cannasse
- パラダイム: object-oriented, functional
- 系統: c-family

## 解決したかった課題

2000年代半ば、Webやゲーム開発は複数のプラットフォーム(Flash、JavaScript、後にはC++やモバイル環境)にまたがることが増えていたが、それぞれ独自の言語(ActionScript、JavaScriptなど)で個別にコードを書き直す必要があり、開発コストが大きな負担となっていた。Nicolas Cannasseは、同じソースコードから複数のターゲット向けに異なる出力(SWFバイトコード、JavaScript、C++など)をコンパイルできる言語を作ることで、この重複開発の問題を解消しようとした。これによりゲームロジックやビジネスロジックを一度書けば複数のプラットフォームで再利用できるようにすることが狙いだった。

## 特徴

- 単一のソースコードから複数のターゲット言語・プラットフォーム(JavaScript、C++、Java、C#、Pythonなど)へコンパイルできるマルチターゲット設計
- 静的型付けと型推論を備え、コンパイル時に多くのミスを検出できる
- ジェネリクスや列挙型など近代的な言語機能を持つ
- ゲーム開発フレームワークOpenFL等と組み合わせて、クロスプラットフォームゲーム開発に広く使われてきた
- マクロシステムによりコンパイル時のコード生成・変換が可能

## 影響を受けた言語

- [Java](java.md)
- [ActionScript](actionscript.md)
- [JavaScript](javascript.md)
- [OCaml](ocaml.md)
- [C#](c_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在もクロスプラットフォームゲーム開発やツール開発の分野で使われ続けているが、利用者層は限定的で「niche」(ニッチな存在)の位置づけにある。JavaScriptやC++など主要言語への出力先の広さが、依然として他言語にはない強みとなっている。

## Hello World

```
class Main {
    static function main() {
        trace("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Haxe)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Haxe)
