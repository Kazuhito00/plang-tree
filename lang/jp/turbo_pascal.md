# Turbo Pascal

- 登場年: 1983年
- 設計者: Anders Hejlsberg
- パラダイム: procedural, object-oriented
- 系統: algol-pascal

## 解決したかった課題

1980年代初頭、プログラミングにはエディタ・コンパイラ・リンカといった別々のツールを使う煩雑な作業が必要で、統合開発環境も非常に高価だった。Borland社のフィリップ・カーンは、これらの機能を一つの安価な統合開発環境(IDE)にまとめる構想を立て、Anders Hejlsbergが高速なワンパスコンパイラを中核とする処理系を実装した。49.95ドルという破格の価格と、当時の低速なマシンでも快適な編集・コンパイルサイクルを実現したことで、個人や教育機関にも本格的なPascal開発が広まった。結果としてMS-DOS時代の個人・教育向け開発環境の標準的存在となった。

## 特徴

- エディタ・コンパイラ・リンカを一体化した統合開発環境(IDE)を、低価格なパッケージとして提供
- 極めて高速なワンパスコンパイラにより、当時の低速なマシンでも快適な編集・コンパイル・実行サイクルを実現
- 標準Pascalに対しユニット(モジュール)機能やインラインアセンブラなど実用的な拡張を追加
- バージョン5.5以降ではオブジェクト指向プログラミング(クラス、継承)をサポート
- 手ごろな価格と使いやすさにより、MS-DOS時代のホビイストから商用開発者まで幅広い層に普及

## 影響を受けた言語

- [Pascal](pascal.md)
- [UCSD Pascal](ucsd_pascal.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

レガシーな存在であり、現行の開発現場で新規に使われることはほとんどない。しかし後継のObject Pascal(Delphi)を通じて設計の一部は現在まで受け継がれており、統合開発環境という概念を広く普及させた歴史的意義は大きい。

## Hello World

Pascalの標準的な構文に従い、`program`宣言のあとに`begin`〜`end.`のブロックで処理を記述する。

```
program HelloWorld;
begin
  writeln('Hello, world.')
end.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Turbo_Pascal)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Turbo_Pascal)
