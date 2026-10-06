# PHP

- 登場年: 1995年
- 設計者: Rasmus Lerdorf
- パラダイム: scripting, procedural, object-oriented
- 系統: scripting

## 解決したかった課題

Rasmus Lerdorfは1994年、自身の個人ホームページへのアクセスを集計するために、Perlで書いた簡易なCGIスクリプト群「Personal Home Page Tools」を作った。これをC言語で書き直しつつ機能を拡張したことがPHPの出発点であり、当初から学術的な言語設計ではなく、HTMLにコードを埋め込んでフォーム処理や動的ページを手早く作るための実用ツールという性格が強かった。この「必要に迫られて機能を継ぎ足す」開発スタイルが、後のWeb開発における圧倒的な実用性につながった。

## 特徴

- HTMLファイルの中に直接コードを埋め込めるテンプレート的な記法
- Webサーバとの統合が前提で、リクエスト処理・セッション管理が標準機能として充実
- 大量の組み込み関数群による「とにかく動く」実用志向
- WordPressをはじめとする大規模CMSのバックエンド言語として広く採用
- バージョンを重ねるごとに型宣言やオブジェクト指向機能を後追いで強化

## 影響を受けた言語

- [Perl](perl.md)
- [C](c.md)
- [Java](java.md)
- [C++](c_plus_plus.md)
- [JavaScript](javascript.md)
- [Hack](hack_lang.md)


## 影響を与えた言語

- [Hack](hack_lang.md)


## 現在の位置づけ

現在も「active」としてWebサーバサイド開発の主要言語の一つであり続けており、WordPressをはじめ世界のWebサイトの相当数がPHPで動作している。個人的なツール群から発展した出自を持ちながら、大規模な商用サービスを支える言語へと成長した稀有な例である。

## Hello World

```
<?php
echo "Hello, World!\n";
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/PHP_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/PHP)
