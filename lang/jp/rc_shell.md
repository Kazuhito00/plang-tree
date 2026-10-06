# rc

- 登場年: 1989年
- 設計者: Tom Duff
- パラダイム: scripting, procedural
- 系統: shell

## 解決したかった課題

1980年代後半、ベル研究所ではUnixの後継として分散OS「Plan 9 from Bell Labs」の開発が進められていた。標準的なコマンドインタプリタであったBourne Shellは広く使われていたが、変数展開時に単語分割が起こる、複数の値を扱うために`"$@"`のような特殊な記法が必要になるなど、文法上の癖が指摘されていた。

Tom Duffは、Bourne Shellと似た機能を持ちながらも、より単純で一貫した文法を備えたシェルとしてrc(run commandsの意)を設計した。rcでは変数はすべて文字列のリストとして扱われ、展開時に再分割されないため`"$@"`のような特殊な書き方は不要になっている。制御構造もALGOL系ではなくC言語に近い書き方(`if not`など)を採用し、1989年にVersion 10 UnixおよびPlan 9の標準シェルとして導入された。

## 特徴

- 変数はすべて文字列のリストとして扱われ、展開時に再分割されない
- Bourne Shellに似た機能を持ちながら、より単純で一貫した文法を採用する
- 制御構造はALGOL系ではなくC言語に近い書き方(`if not`など)を採用する
- 標準エラー出力だけをパイプする、プロセス置換を行うなど、柔軟なパイプ機能を持つ
- Version 10 UnixおよびPlan 9 from Bell Labsの標準シェルとして採用された
- Byron Rakitzisによる汎用Unix向けの再実装が広く使われている

## 影響を受けた言語

- [sh(Bourne Shell)](sh.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

rcは現在では主流のシェルとしては扱われておらず、歴史的な言語として位置づけられている(status: historical)。しかしPlan 9系OS(Plan 9 from Bell Labs、Plan 9 from User Space)では標準シェルとして使われ続けており、Byron Rakitzisによる汎用Unix向けの再実装や、拡張版シェルes、Inferno OSのシェルなど後続の設計にも影響を与えたとされる。

シンプルで一貫性のある文法を持つシェルの一例として、シェル言語の設計を議論する際にしばしば参照される。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Rc_%28Unix_shell%29)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Rc_(シェル))
