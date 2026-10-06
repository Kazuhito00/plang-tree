# MATLAB

- 登場年: 1984年
- 設計者: Cleve Moler
- パラダイム: array, procedural
- 系統: numeric-scientific

## 解決したかった課題

1970年代、大学の数値解析の授業では学生がLINPACKやEISPACKといった行列計算用Fortranライブラリを使うために、いちいちFortranコードをコンパイル・リンクして実行する必要があり、行列演算の本質を学ぶ前段階で手間取っていた。ニューメキシコ大学の教員だったCleve Molerは、学生がコンパイル作業を意識せず、対話的にコマンドを打つだけで行列演算を試せる環境を作りたいと考えた。こうして生まれた「Matrix Laboratory」の略であるMATLABは、電卓感覚で線形代数を扱える対話環境として設計された。後に商用化され、制御工学や信号処理など技術計算全般で標準的な環境へと成長した。

## 特徴

- 行列・配列演算をあらゆるデータの基本単位として扱う
- REPL形式の対話的実行環境を持ち、即座に計算結果やグラフを確認できる
- 豊富な数値計算・信号処理・制御工学向けのツールボックス群
- Simulinkと連携したモデルベース設計・シミュレーションが可能
- 商用ソフトウェアであり、大学・企業の技術部門で広く採用されている

## 影響を受けた言語

- [Fortran](fortran.md)
- [APL](apl.md)


## 影響を与えた言語

- [GNU Octave](octave.md)
- [Scilab](scilab.md)
- [Simulink](simulink.md)
- [Pure](pure_lang.md)
- [Julia](julia.md)


## 現在の位置づけ

現在も現役の言語であり(status: active)、行列演算を核とした技術計算・シミュレーション向け商用環境として、大学教育や工学・金融分野の実務で広く使われ続けている。オープンソースの代替(Julia、Python+NumPyなど)が台頭する中でも、既存の技術資産とツールボックスの充実度から根強い需要がある。

## Hello World

```
disp('Hello, World!')
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/MATLAB)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/MATLAB)
