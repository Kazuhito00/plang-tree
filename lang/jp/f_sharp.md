# F#

- 登場年: 2005年
- 設計者: Don Syme
- パラダイム: functional, object-oriented
- 系統: ml-functional

## 解決したかった課題

2000年代前半、Microsoft ResearchのDon Symeは、OCamlのような表現力豊かな関数型プログラミングを、Windowsの主流開発基盤である.NET上で使いたいと考えた。当時の.NET開発者はC#やVisual Basicといった手続き型・オブジェクト指向言語に限られており、簡潔な型推論やパターンマッチング、不変データを活かした関数型スタイルの恩恵を受けられなかった。そこでOCamlの文法・意味論を基礎としつつ、.NETの共通言語基盤(CLR)や既存ライブラリ群と完全に相互運用できる言語としてF#が開発された。

## 特徴

- OCaml譲りのHindley-Milner型推論と簡潔な構文を持つ
- .NETのクラスライブラリやC#で書かれたコードとシームレスに相互運用できる
- 判別共用体(代数的データ型)やパターンマッチング、レコード型など関数型の道具立てを備える
- 非同期処理やユニット・オブ・メジャー(単位付き数値)など実務向けの独自拡張を持つ
- オブジェクト指向機能も併せ持ち、.NETの既存クラス階層にも自然に組み込める

## 影響を受けた言語

- [OCaml](ocaml.md)
- [C#](c_sharp.md)
- [Haskell](haskell.md)
- [Python](python.md)
- [Scala](scala.md)
- [Erlang](erlang.md)


## 影響を与えた言語

- [Idris](idris.md)
- [F*](fstar_lang.md)
- [LiveScript](livescript_lang.md)
- [Elm](elm.md)
- [TypeScript](typescript.md)
- [Flix](flix_lang.md)
- [Q#](qsharp.md)
- [Roc](roc.md)


## 現在の位置づけ

F#は.NETエコシステムの公式言語の一つとして、金融業界の分析システムやデータサイエンス用途などで実務利用が続いている。OCamlの学術的な型システムを商用基盤で実用化した代表例として位置づけられる。

## Hello World

```
printfn "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/F_Sharp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/F_Sharp_%28programming_language%29)
