# Unicon

- 登場年: 1999年
- 設計者: Clint Jeffery, Shamim Mohamed, Jafar Al Gharaibeh, Robert Parlett
- パラダイム: object-oriented, procedural, scripting
- 系統: scripting

## 解決したかった課題

文字列・リスト処理に強いIcon言語は、1990年代当時、OSファイルシステムやネットワーク、データベースへのアクセス、オブジェクト指向プログラミングの機能が乏しく、実用的なアプリケーション開発には不向きだった。Clint Jefferyらは、OO拡張のIdol、POSIXファイル・ネットワークインターフェース、ODBCデータベース機能というIconの3つの人気拡張を統合し、Iconの高水準な文字列・パターン処理能力を保ちながらグラフィックスやネットワークを扱えるUniconを開発した。

## 特徴

- Icon言語の強力な文字列スキャン・パターンマッチング機能をそのまま継承している
- クラスと継承によるオブジェクト指向プログラミングをサポートする(Idol拡張に由来)
- POSIX準拠のファイルシステムアクセスやソケット通信など、OS・ネットワーク機能を標準で備える
- ODBCを通じたデータベースアクセス機能が組み込まれている
- Iconの特徴であるゴール指向評価(成功・失敗に基づく式評価)とジェネレータを引き継いでいる
- グラフィックス機能(ウィンドウ、GUI部品の描画)を標準ライブラリとして提供する

## 影響を受けた言語

- [Icon](icon.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Uniconはniche(ニッチ)な言語として位置づけられ、広く普及するには至っていないが、Icon言語の後継としてテキスト処理やプロトタイピングに関心を持つ小規模なコミュニティによって開発・利用が続けられている。

## Hello World

Icon系の言語らしく、`procedure main`から始まり`write`で出力する。

```
procedure main()
    write("Hello, world!")
end
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Unicon_%28programming_language%29)
