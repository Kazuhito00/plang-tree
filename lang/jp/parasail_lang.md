# ParaSail

- 登場年: 2009年
- 設計者: S. Tucker Taft
- パラダイム: concurrent, object-oriented, procedural
- 系統: concurrent-actor

## 解決したかった課題

マルチコアが当たり前になった時代において、S. Tucker Taftは、並行・並列プログラムに潜むデータ競合(レースコンディション)を、実行時にではなくコンパイル時に検出したいと考えた。しかし従来の言語では、共有される可変変数やポインタのエイリアシングを許容するために、これを静的に保証することが難しかった。

2009年9月に設計が始まったParaSail(Parallel Specification and Implementation Language)は、ポインタを持たない値セマンティクスのプログラミングモデルと、ガベージコレクションに代わるリージョンベースのメモリ管理を採用し、グローバル変数やパラメータのエイリアシングを禁止することで、すべての部分式を安全に並列評価できるようにし、レースコンディションをコンパイル時に検出できるようにした。

## 特徴

- ポインタを持たない値セマンティクスのプログラミングモデル
- ガベージコレクションではなくリージョンベースのメモリ管理を採用
- グローバル変数やパラメータのエイリアシングを禁止し、すべての部分式が並列評価可能
- Hoare論理的な表明(assertion)・事前条件・事後条件を組み込みでサポート
- 強い静的型付け、Modula風の構文にJavaやC#的なオブジェクト指向機能を組み合わせる
- LLVMベースのコンパイラと軽量スレッド用のワークスティーリングスケジューラを持つ仮想マシン実装がある

## 影響を受けた言語

- [Modula](modula.md)
- [Ada](ada.md)
- [Pascal](pascal.md)
- [Standard ML](standard_ml.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

現在も研究・ニッチ用途の言語として位置づけられている(status: niche)。AdaCoreが開発を担い、GPLv3ライセンスで公開されており、最新の安定版9.3は2021年6月にリリースされた。

並列安全性のアイデア──ポインタを持たず構造的にレースコンディションを避けるプログラミングモデル──を実証する場としての意義が大きく、Ada風のSparkel、Java風のJavallel、Python風のParythonといった関連方言も同じコア言語の上に構築されている。

## Hello World

```
func Hello_World(var IO) is
    IO.Println("Hello, World");
end func Hello_World;
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ParaSail_(programming_language))
