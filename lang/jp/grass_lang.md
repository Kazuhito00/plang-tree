# GRASS

- 登場年: 1974年
- 設計者: Tom DeFanti
- パラダイム: procedural, visual
- 系統: domain-specific

## 解決したかった課題

1970年代初頭、コンピュータグラフィックスによるアニメーション制作はまだ専門的なプログラミング知識を要する作業であり、アーティストが直接操作するのは難しかった。オハイオ州立大学の学生であったTom DeFantiは、Vector General社製の3Dグラフィックス端末上で2Dベクターアニメーションを手軽に作成できる仕組みを求めた。

そこでDeFantiは、BASICに似た構文をベースに、図形の拡大縮小・平行移動・回転といったアニメーション専用命令を追加した言語GRASS(GRAphics Symbiosis System)を、PDP-11/45上で1974年に開発した。後にDan SandinやNola Donatoらが改良に加わった。

## 特徴

- BASICに似た構文をベースに、拡大縮小・平行移動・回転などの2Dオブジェクトアニメーション専用命令を追加している
- Vector General社製3Dグラフィックス端末上で動作するよう設計された
- プログラムは「マクロ」と呼ばれる文字列として保存され、行番号は省略可能である
- コンパイル済み・未コンパイルのコードの両方をサポートする
- 後継版のZGRASS(Midway社のZ Boxラスターグラフィックスシステム向けにスプライト・ビットマップ機能を追加)やRT/1(MS-DOS、Windows、SGI/OpenGL、HP-UX、AIX、Macintosh、Amigaなどに対応したプラットフォーム独立版)へと発展した
- 1977年の映画『スター・ウォーズ』でLarry Cubaがデス・スター攻撃シーンのアニメーションを作成する際に使用したことで有名

## 影響を受けた言語

- [BASIC](basic.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

historical(歴史的な言語)として位置づけられる。実務で使われることはなくなったが、初期コンピュータアートやコンピュータグラフィックス史において、特に映画『スター・ウォーズ』のデス・スター攻撃シーンのアニメーション制作に使われたことで、しばしば言及される存在である。

## Hello World

Wikipedia記事には「Hello World」に相当する例はないが、正弦波を描画する次のようなサンプルコードが掲載されている。

```
SINCURVE=[PROMPT "WHAT IS THE OFFSET?"
INPUT OFFSET
x=-160
angle=0
POINT OFFSET+x,SIN(angle)*80,3
angle=angle+2
IF (x=x+1)<159,SKIP -2]
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/GRASS_(programming_language))
