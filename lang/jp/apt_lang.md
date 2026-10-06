# APT

- 登場年: 1956年
- 設計者: Douglas T. Ross
- パラダイム: declarative
- 系統: domain-specific

## 解決したかった課題

航空機部品のような複雑な形状を数値制御(NC)工作機械で切削するには、切削経路のための座標計算を機械工やエンジニアが手作業で行う必要があり、単純な形状を超えると非常に手間がかかり誤りも生じやすかった。

MITのサーボメカニズム研究所(Computer Applications Group)でDouglas T. Rossが主導する開発チームは、工具の形状や動作をテキストで指定するだけで、複雑な座標計算を自動化できる言語APTを設計した。

## 特徴

- 点・直線・円・平面といった幾何要素と、工具の移動を宣言的な文で記述する
- カッターロケーション(CL)ファイルを生成し、後にGコードへ変換される
- グラフィカルインタフェースはおろかFORTRANよりも早く登場した最初期の高水準言語の一つ
- 米空軍、複数の大学、航空宇宙企業14社が参加した「世界初の大規模共同プログラミング事業」として知られる
- ADAPT、EXAPT、UNIAPTなどの派生言語を生み、RAPTやROBEXなど初期のロボット言語にも影響を与えた
- 現在も国際標準として通用しており、CAMシステムの基礎的要素として使われ続けている

## 影響を受けた言語

特になし(FORTRANより前に登場しており、直接の言語的祖先は確認できなかった)。

## 影響を与えた言語

特になし


## 現在の位置づけ

APTは現在、NC工作機械プログラミングの標準として国際的に通用しているレガシー言語として位置づけられている(status: legacy)。現代の工作機械メーカーの多くが、その要素を今も取り入れており、STEP-NCなどの標準もAPTの工具経路の考え方を継承している。

## Hello World

```apt
PARTNO APT-1
CLPRNT
UNITS / MM
NOPOST

$$ GEOMETRY DEFINITION
P1 = POINT / 50, 50, 0
P2 = POINT / -50, -50, 0
L1 = LINE / P1, PARLEL, (LINE / YAXIS)
...
LOAD / TOOL, 1
CUTTER / 20
SPINDL / 3000, CLW
FROM / (STRTPT = POINT / 70, 70, 0)
RAPID
GO / TO, L1, TO, PLAN2, TO, L4
FEDRAT / 900, PERMIN
```

(Wikipedia記事に掲載されている、幾何要素と工具移動を定義する例。厳密な意味での「Hello World」には相当しない。)

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/APT_(programming_language))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/APT_%28プログラミング言語%29)
