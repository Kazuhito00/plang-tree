# StarLogo

- 登場年: 1994年
- 設計者: Mitchel Resnick, Eric Klopfer, Daniel Wendel
- パラダイム: educational, procedural, concurrent
- 系統: educational-visual

## 解決したかった課題

Seymour Papertの教え子でもあったMitchel Resnickは、1990年代のMITメディアラボにおいて、複雑系科学を次のLogoの探究領域と捉えていた。しかし従来のLogoは、画面上のたった1匹の「タートル」を動かして図形を描く設計になっており、鳥の群れの飛行パターンや交通渋滞、蟻のコロニーの採餌行動のような、多数の個体が単純なルールに従うだけで全体として複雑な模様(創発)を生み出す「分散システム」的な現象を、子供や学生が自分の手で探究することは難しかった。

そこでResnickらは、Logoを拡張し、数千体規模のタートル(エージェント)を並行して動かせる環境としてStarLogoを開発した。最初のバージョンはConnection Machine 2という並列計算機上で実装され、後にMacintosh版(MacStarLogo)などに移植されていった。

## 特徴

- Logo言語(LISP系)を拡張し、数百~数千体規模のタートル(エージェント)を並行に動作させられる
- 「パッチ」と呼ばれる格子状の空間の上で、エージェント同士・エージェントと環境が相互作用するモデルを記述できる
- 初期版はConnection Machine 2という並列計算機上で動作し、その後Macintosh版(MacStarLogo)などに移植された
- 群れ行動や交通渋滞、蟻のコロニーなど「分散システム」的な創発現象を教育目的でシミュレーションできる
- 後にStarLogo TNG(2008年)で3Dグラフィックスとブロック型のビジュアルプログラミングを導入し、StarLogo Novaへと発展した

## 影響を受けた言語

- [Logo](logo.md)


## 影響を与えた言語

- [Etoys](etoys.md)
- [NetLogo](netlogo.md)


## 現在の位置づけ

StarLogoは、複雑系のマルチエージェントシミュレーションを教育現場に持ち込んだ草分け的な存在として、プログラミング教育史の中で重要な位置を占めている。

しかし、その思想はResnickの教え子であるUri Wilenskyが開発したNetLogoに引き継がれて発展し、また自身もブロック型・3D対応のStarLogo TNGやStarLogo Novaへと姿を変えていった。そのため、オリジナルのStarLogoそのものは現在では新規に使われることはほとんどなく、後継環境の源流として参照される歴史的な言語となっている。

## Hello World

StarLogo自体の確認済みの一次資料(公式サイト・Wikipedia等)にHello World相当のサンプルコードは見当たらなかった。Logo系の構文から類推すると `print [Hello World]` のような表示コマンドが使われていた可能性があるが、断定できる出典は確認できていない。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/StarLogo)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/StarLogo)
