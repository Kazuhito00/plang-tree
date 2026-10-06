# FreeBASIC

- 登場年: 2004年
- 設計者: Andre Victor T. Vicentini
- パラダイム: procedural, object-oriented
- 系統: basic-family

## 解決したかった課題

DOSの終焉に伴い、Microsoft QuickBASICで書かれた膨大な資産や、使い慣れたBASIC構文がそのままでは使えなくなっていくという状況があった。FreeBASICは、無料でオープンソースの後継処理系を提供することで、この資産と知識を活かし続けられるようにしたいという動機から生まれた。使い慣れたBASIC構文をほぼそのまま使いながら、モダンなOS上でC言語に匹敵するネイティブコードを生成できるようにすることも目指された。

## 特徴

- QuickBASICとの高い構文互換性を保ちつつ、モダンなOS(Windows、Linuxなど)上でネイティブ実行ファイルを生成する
- 手続き型プログラミングに加え、ポインタ操作やオブジェクト指向プログラミングもサポートする
- インラインアセンブリの記述やC言語ライブラリとの連携が可能で、低レベルな制御にも対応する
- 複数のコンパイル方言(QB互換モード、FBモード、Deprecatedモードなど)を切り替えられる
- オープンソースかつ無償で提供され、DOS時代のBASIC資産の移行先として利用されている

## 影響を受けた言語

- [QuickBASIC](quickbasic.md)
- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語として位置づけられている。レトロなBASICプログラミングの継承やゲーム開発など、趣味・実用の両面で根強い利用者コミュニティを維持している。

## Hello World

```basic
Print "Hello, World!"
Sleep
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/FreeBASIC)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/FreeBASIC)
