# Maxima

- 登場年: 1982年(注: MITでのMacsyma開発時点の年。GPLソフトウェアとしての公開許可は1998年、"Maxima"という名称でのボランティア主体の開発継続は2001年から)
- 設計者: MIT Project MAC(Macsymaグループ), Maximaボランティアコントリビューター
- パラダイム: symbolic, functional, procedural
- 系統: numeric-scientific

## 解決したかった課題

Maximaは、MITのProject MACで開発された数式処理システムMacsyma(1982年)にその起源を持つ。DOE(米国エネルギー省)の資金提供を受けたバージョンのMacsymaをフリーソフトウェア(GPL)として公開する許可がMITから得られたのが1998年で、以後はボランティアの貢献者たちによって開発が引き継がれ、2001年から"Maxima"という名称でオープンソースプロジェクトとして開発が継続されている。

## 特徴

- 数学・物理科学における記号計算(数式処理)と数値計算を行う計算代数システム
- Common Lispで実装されている
- 関数定義には `f(x):=x^3` のような代数的記法を用いる
- クロスプラットフォーム(Linux、macOS、Windows、Android)で動作し、wxMaxima・Jupyterカーネル・Cantorなど複数のフロントエンドが存在する
- GNU General Public License(GPL)のもとで公開されているフリーソフトウェア

## 影響を受けた言語

- [Common Lisp](common_lisp.md)(※実装言語としての関係)

## 影響を与えた言語

特になし


## 現在の位置づけ

Maximaはオープンソースの計算代数システムとして現在も活発に開発が続いている(status: active)。最新の安定版は5.50.0(2026年8月17日)。SageMathなど他の数式処理システムからもライブラリとして利用されている。

## Hello World

日本語版・英語版Wikipediaのいずれにも、Hello World相当の例は確認できなかった。記事に掲載されている実際のコード例(関数定義・展開・因数分解)は以下の通り。

```maxima
f(x):=x^3$
f(4);
64

expand((a-b)^3);
-b^3+3*a*b^2-3*a^2*b+a^3

factor(x^2-1);
(x-1)*(x+1)
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Maxima_(software))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Maxima)
