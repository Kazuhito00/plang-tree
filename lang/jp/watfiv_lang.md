# WATFIV

- 登場年: 1968年
- 設計者: J. Wesley Graham, Peter Shantz, Gus German, James G. Mitchell, Richard Shirley, Robert Zarnke
- パラダイム: procedural, educational
- 系統: origin

## 解決したかった課題

1960年代、多くの大学の計算機センターでは「コンパイル→リンク→実行」を別々のバッチジョブとして提出する3段階の処理が主流であり、学生が書いた小さなFORTRANプログラムのデバッグ結果を受け取るまでに丸一日かかることも珍しくなかった。このような遅い フィードバックループは、プログラミング教育にとって大きな障害だった。

ウォータールー大学の学生チーム(Gus German、James G. Mitchell、Richard Shirley、Robert Zarnke)がPeter Shantzの主導、J. Wesley Graham教授の指導のもとで1965年夏に開発したWATFOR(IBM 7040向け)は、コンパイル・リンク・実行を1回のパスで完了させる高速な専用コンパイラだった。その後継として1968年に登場したWATFIVは、CHARACTER型変数、メモリへの書式付き出力、直接アクセス入出力などの機能を追加し、教育用FORTRAN処理系としてさらに洗練された。

## 特徴

- コンパイル・リンク・実行を1パスで完了する高速な専用コンパイラ
- フォーマットフリーの入出力に対応
- 未初期化変数の検出など、学生の誤りを早期に発見する診断機能
- FORTRAN IVの簡略化・教育用方言としての性格
- WATFIVではCHARACTER変数、メモリへの書式付き書き込み、直接アクセス入出力を追加
- IBM Japanへ日本語版WATFOR-77が1985年に提供されるなど、国際的にも利用された

## 影響を受けた言語

- [Fortran](fortran.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

WATFIVは現在「historical」な言語であり、実務で使われることはない。しかし、バッチ処理が主流だった時代に「学生に即座にフィードバックを返す」ことを実現した教育用FORTRAN処理系として、計算機科学教育の歴史において重要な役割を果たした言語として記憶されている。

## Hello World

一次資料(Wikipedia記事)上に具体的なコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/WATFIV)
- [Wikipedia(日本語)](なし)
