# UCSD Pascal

- 登場年: 1977年
- 設計者: Kenneth Bowles
- パラダイム: procedural
- 系統: algol-pascal

## 解決したかった課題

1970年代、マイクロコンピュータや大学のミニコンピュータは機種ごとにアーキテクチャが大きく異なり、同じソースコードを様々な機種で動かすことは困難だった。UCSDのケネス・ボウルズは、乱立するハードウェアに左右されない共通の実行環境が必要と考え、仮想機械p-Systemとその上で動くPascalコンパイラ・簡易OSを開発した。ソースコードをp-codeと呼ばれる中間コードにコンパイルすることで、機種に依存しない移植性の高いプログラム実行を実現した。この設計思想は後にJavaの仮想機械にも影響を与えたとされる。

## 特徴

- ソースコードをp-codeと呼ばれる中間バイトコードにコンパイルし、p-System仮想機械上で実行する方式を採用
- 仮想機械のおかげで、対応するp-Systemさえ用意すれば異なるCPU・機種間でも同じp-codeを実行できる高い移植性を実現
- Pascal言語処理系だけでなく、エディタやファイルシステムを含む簡易オペレーティングシステムp-Systemとして提供された
- 標準Pascalに文字列型やユニット(モジュール)機能などの拡張を加え、実用的なアプリケーション開発に対応
- Apple II版などを通じて教育機関や個人利用者に広く普及し、初期の商用ソフトウェア開発にも用いられた

## 影響を受けた言語

- [Pascal](pascal.md)


## 影響を与えた言語

- [Turbo Pascal](turbo_pascal.md)


## 現在の位置づけ

歴史的役割を終えた言語であり、現在新規に採用されることはない。しかし中間コードによる仮想機械方式で移植性を確保するという設計思想は、後年のJava仮想機械などにも通じるアイデアの先駆けとして評価されている。

## Hello World

Pascalの標準的な構文に従い、`program`宣言のあとに`begin`〜`end.`のブロックで処理を記述する。

```
program HelloWorld;
begin
  writeln('Hello, world.')
end.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/UCSD_Pascal)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/UCSD_Pascal)
