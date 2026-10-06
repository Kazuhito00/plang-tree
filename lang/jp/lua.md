# Lua

- 登場年: 1993年
- 設計者: Roberto Ierusalimschyほか
- パラダイム: scripting, procedural
- 系統: scripting

## 解決したかった課題

1990年代初頭のブラジルは輸入品への高関税や制限により、海外製の商用ソフトウェアや専用データ処理ツールの入手が困難だった。ペトロブラス社(ブラジル石油公社)向けのデータ処理案件に携わっていたリオデジャネイロ・カトリック大学の研究者たちは、既存の高価な商用ツールに代わる、自国で開発・保守できる軽量な設定・拡張言語を必要としていた。C言語のホストアプリケーションに簡単に組み込め、実行時のオーバーヘッドが極めて小さい言語として設計された。

## 特徴

- テーブル(連想配列)という単一のデータ構造で配列・オブジェクト・モジュールを表現
- Cとの相互運用性が高く、極めて軽量な組み込み向けインタプリタ
- コルーチンによる協調的マルチタスクを標準でサポート
- ゲームエンジン(Roblox, World of Warcraft等)のスクリプト言語として広く採用
- シンプルな文法とコンパクトな処理系サイズ

## 影響を受けた言語

- [Scheme](scheme.md)
- [C](c.md)
- [SNOBOL](snobol.md)
- [C++](c_plus_plus.md)
- [CLU](clu.md)


## 影響を与えた言語

- [Io](io.md)
- [Squirrel](squirrel_lang.md)
- [Red](red.md)
- [MoonScript](moonscript.md)
- [Julia](julia.md)
- [Terra](terra.md)
- [GDScript](gdscript.md)
- [Fennel](fennel.md)
- [Ring](ring_lang.md)
- [Luau](luau_lang.md)


## 現在の位置づけ

現在も「active」として、特にゲーム開発における組み込みスクリプト言語の代表格であり続けている。軽量さと組み込みやすさというブラジル発の言語が、世界中のゲームエンジンや組み込み機器で使われる存在になった。

## Hello World

```
print("Hello, World!")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Lua)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Lua_%28programming_language%29)
