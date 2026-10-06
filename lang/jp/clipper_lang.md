# Clipper

- 登場年: 1985年
- 設計者: Nantucket Corporation
- パラダイム: procedural, query
- 系統: domain-specific

## 解決したかった課題

Ashton-Tate社のdBASE IIIは、pコードと呼ばれる中間コードをインタプリタで実行する方式であり、実行速度が遅く、配布にはdBASE本体を利用者が個別に持つ必要があるなど不便があった。Nantucket CorporationはdBASE互換(xBase系)の文法で書かれたプログラムを、あらかじめネイティブコードにコンパイルしてスタンドアロンの実行ファイルとして配布できる代替製品「Clipper」を1985年に開発した。これにより実行速度の向上と、商用ソフトウェアとしての配布のしやすさが実現された。

## 特徴

- dBASE IIIと互換性のある文法をベースに、コンパイルによってネイティブの実行ファイルを生成する
- dBASE特有の対話的な「ドットプロンプト」コマンドは持たず、あくまでプログラム記述に特化している
- 後のバージョン(CA-Clipper 5.x)でC言語やPascal的な構造化プログラミング要素、オブジェクト指向機能、コードブロック(関数ポインタに近いデータ型)を追加
- 在庫管理や顧客管理など、DOS向け業務用データベースアプリケーション開発で広く使われた
- Nantucket Corporationが開発し、後に事業がComputer Associates(CA)に売却された
- Windows時代への移行に失敗して商用開発は1990年代半ばで終了したが、Harbour、xHarbour、XBase++、FlagShipなどオープンソース・サードパーティ実装がクロスプラットフォームで開発を継続している

## 影響を受けた言語

- [dBase](dbase.md)


## 影響を与えた言語

- [Harbour](harbour_lang.md)


## 現在の位置づけ

Clipperは商業的な新規開発としてはほぼ終息しており、現在は「legacy」な言語として位置づけられている。しかし、オープンソースのHarbourをはじめとする複数の互換実装が、Linux・macOSを含む複数のプラットフォームで開発を継続しており、xBase系の伝統を現在も引き継いでいる。

## Hello World

```
Procedure Main
    ? "Hello World!"
Return
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Clipper_(プログラミング言語))
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Clipper_(programming_language))
