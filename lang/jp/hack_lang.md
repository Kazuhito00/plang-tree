# Hack

- 登場年: 2014年
- 設計者: Meta(旧Facebook)(Julien Verlaguetほか)
- パラダイム: scripting, object-oriented, functional, procedural
- 系統: scripting

## 解決したかった課題

Hackは、Meta(旧Facebook)社内の大規模かつ高速に成長するコードベースの保守性・信頼性を高めるために、PHPの新しい方言として開発された。PHPは動的型付けのため大規模開発では型エラーが実行時まで検出できないという課題があり、Hackはこれに対して関数の引数・戻り値・クラスプロパティに型注釈を付けられる漸進的型付け(gradual typing)を導入し、静的型チェッカーによる事前検証を可能にした。設計にはJava、C#、OCaml、Scala、Haskellからの影響もあったとされる。公開前からFacebook社内の実サイトの大部分でコードを実装・テストした上で、2014年3月20日に一般公開された。

## 特徴

- PHPとシームレスに連携可能で、妥当なPHPスクリプトの多くはそのままHackスクリプトとして実行できる
- 関数の引数・戻り値、クラスプロパティに型注釈を付けられる漸進的型付け
- 健全性を強制する「strict」モードが利用可能
- Meta社が開発したPHP実行環境HipHop Virtual Machine(HHVM)上で動作
- `<?php`ではなく`<?hh`で始まる
- エントリーポイント関数(`<<__EntryPoint>>`)を起点とする実行モデル

## 影響を受けた言語

- [PHP](php.md)
- [Java](java.md)
- [C#](c_sharp.md)
- [OCaml](ocaml.md)
- [Scala](scala.md)
- [Haskell](haskell.md)


## 影響を与えた言語

- [PHP](php.md)


## 現在の位置づけ

MITライセンスのオープンソースとして現在も開発が継続している(status: active)。HHVM上で動作する言語として、Meta以外でも一部採用例がある。

## Hello World

```hack
<?hh
echo 'Hello World';
```

(日本語版Wikipediaに掲載されている例。出力: `Hello World`)

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Hack_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Hack_(programming_language))
