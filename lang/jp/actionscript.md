# ActionScript

- 登場年: 1998年
- 設計者: Macromedia
- パラダイム: object-oriented, event-driven
- 系統: scripting

## 解決したかった課題

1990年代末、MacromediaのFlashはベクターアニメーションツールとして人気を博していたが、当初はタイムライン上の単純な再生制御しかできず、ユーザー操作に応じて動くゲームやインタラクティブな広告を作ることができなかった。Web上ではJavaScriptが既に動的な挙動を実現しており、Macromediaも同様にプログラム可能な仕組みをFlashに組み込む必要があった。そこで、当時普及しつつあったJavaScriptの構文と概念を土台に、Flashのムービークリップやボタンを操作できるスクリプト言語としてActionScriptが設計された。

## 特徴

- JavaScriptに似たECMAScriptベースの構文を持つ
- Flashのタイムラインやムービークリップ、ボタンなどの表示オブジェクトを直接操作できる
- バージョンが進むにつれ、クラスベースのオブジェクト指向(ActionScript 2.0/3.0)へと本格的に強化された
- イベント駆動モデルによりユーザー操作(クリック・キー入力)への応答処理を記述しやすい
- Flash Player上で動作し、ゲームやリッチインターネットアプリケーション開発に広く使われた

## 影響を受けた言語

- [JavaScript](javascript.md)
- [Java](java.md)


## 影響を与えた言語

- [Haxe](haxe.md)


## 現在の位置づけ

Adobe(Macromediaを買収)によるFlash Player自体が2020年にサポート終了となったことで、ActionScriptも実質的に使われなくなった「historical」な言語である。HTML5/CSSやJavaScriptベースの技術がFlashコンテンツの担っていた役割を引き継いでいる。

## Hello World

```actionscript
trace("Hello, World!");
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/ActionScript)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ActionScript)
