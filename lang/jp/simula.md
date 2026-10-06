# Simula

- 登場年: 1967年
- 設計者: Ole-Johan Dahl、Kristen Nygaard
- パラダイム: object-oriented, procedural
- 系統: algol-pascal

## 解決したかった課題

ノルウェー計算センターのOle-Johan DahlとKristen Nygaardは、船の運航スケジュールのような離散事象シミュレーションを記述するプログラムを書く中で、既存の手続き型言語では状態と振る舞いをひとまとめに扱う手段がなく、シミュレーション対象ごとにコードが煩雑に散らばってしまう問題に直面していた。彼らはALGOL 60を拡張し、データ(状態)とそれを操作する手続き(振る舞い)を1つの単位にまとめる「クラス」という概念を導入した。

この発想はもともとシミュレーション専用の道具立てだったが、後にオブジェクトという概念そのものが汎用プログラミングの新しいパラダイムとして独立して評価されることになった。Alan Kayらがこの発想を目にしたことが、Smalltalkの誕生にもつながったとされる。

## 特徴

- 「クラス」という概念を初めて言語機能として導入し、状態と振る舞いを1つにまとめた
- ALGOL 60の構文を土台にしており、ブロック構造や手続き呼び出しの記法を引き継ぐ
- クラス継承の仕組みを備え、共通の振る舞いを再利用できる
- 離散事象シミュレーション用のライブラリ(プロセス、イベントキュー)を標準で持つ
- 商業的な普及は限定的だったが、概念そのものは以後のあらゆるOOP言語に継承された
- コルーチンに近い実行制御(プロセスの一時停止・再開)を持ち、並行的なシミュレーションを表現できた

## 影響を受けた言語

- [ALGOL 60](algol_60.md)
- [SIMSCRIPT](simscript.md)


## 影響を与えた言語

- [Pascal](pascal.md)
- [Smalltalk](smalltalk.md)
- [Concurrent Pascal](concurrent_pascal.md)
- [CLU](clu.md)
- [LIS](lis_lang.md)
- [BETA](beta_lang.md)
- [Ada](ada.md)
- [C++](c_plus_plus.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Eiffel](eiffel.md)
- [Emerald](emerald_lang.md)
- [Wolfram Language](wolfram_language.md)
- [Squeak](squeak.md)


## 現在の位置づけ

現在は歴史的言語として位置づけられている(status: historical)が、世界初のオブジェクト指向言語としてC++・Java・Smalltalkをはじめとするあらゆる後続OOP言語の源流である。

計算機科学史上もっとも影響力の大きい言語のひとつとされ、Dahl と Nygaardは2001年にチューリング賞を受賞している。

## Hello World

```simula
BEGIN
    OUTTEXT("Hello, world!");
    OUTIMAGE;
END;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Simula)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Simula)
