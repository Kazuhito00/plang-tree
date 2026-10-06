# Raku

- 登場年: 2000年
- 設計者: Larry Wall
- パラダイム: scripting, object-oriented, functional
- 系統: scripting

## 解決したかった課題

2000年代初頭、Perl5は長年の機能追加により内部実装が複雑化し、非同期処理や文法拡張性といった当時求められ始めた機能を後付けするには限界が見えていた。Larry Wallは既存のPerl5との後方互換性を維持することにこだわらず、文法自体をユーザーが拡張できる仕組みや、より一貫した型システム・並行処理モデルをゼロから設計し直すという野心的な計画(当初のPerl6)に着手した。開発は当初の想定を大きく超えて長期化した。

## 特徴

- 文法自体をマクロ的に拡張できる強力な仕組み
- 一級市民として組み込まれたグラデュアルな型システム
- 並行処理・非同期処理のためのモデルを言語仕様に統合
- 複数の実装(処理系)を許容する仕様と実装の分離
- Perlとの直接の互換性は持たない独立した言語

## 影響を受けた言語

- [Perl](perl.md)
- [Ruby](ruby.md)
- [Smalltalk](smalltalk.md)
- [Haskell](haskell.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在は「niche」な位置づけであり、2019年に旧称Perl6からRakuへと正式に改称され、Perlとは別の独立した言語としてブランドを確立した。長期にわたる開発期間ゆえに普及の勢いを得るタイミングを逃したが、先進的な言語機能への挑戦という点では意欲的な試みだった。

## Hello World

```
say "Hello, World!";
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Raku)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Raku_%28programming_language%29)
