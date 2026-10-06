# Cython

- 登場年: 2007年
- 設計者: Robert Bradshaw, Stefan Behnel
- パラダイム: object-oriented, procedural
- 系統: scripting

## 解決したかった課題

先行するPyrexには機能上の制約があり、Pythonコードをそのまま活かしつつCに近い実行速度を得るには限界があった。CythonはSageMathの開発者たちによって、2007年にPyrexをフォークする形で開発され、Pyrexが持っていた制約を解消しつつ、より多くの機能と最適化を提供することを目指した。

静的型宣言をオプションで付与できる仕組みを整えたことで、通常のPythonコードをほぼそのまま使いながら必要な部分だけ最適化でき、CPython拡張モジュールとしてコンパイルすることで、ネイティブC言語に匹敵する実行速度を実現できる点が特徴である。

## 特徴

- Pythonコードをそのまま、あるいは軽微な変更でC言語に変換してコンパイル可能
- オプションの静的型宣言による実行速度の最適化
- C/C++とのFFI(外部関数インターフェース)によるネイティブライブラリとの連携
- CPython拡張モジュールの生成
- Python 2・Python 3双方の構文をサポート

## 影響を受けた言語

- [Python](python.md)
- [C](c.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

SciPy、pandas、scikit-learnをはじめとする科学計算・データ分析エコシステムを支える基盤技術として広く使われている現役の言語である。Python作成者のGuido van Rossumも、科学計算分野をCythonの「理想的な利用対象」だと評したとされる。

## Hello World

Wikipedia記事内には具体的なコード例の記載がなく、一次資料上で確認できなかった。Cythonは通常のPythonコードをほぼそのまま実行できるため、単純なHello Worldは`print("Hello, World!")`に類似した形になると考えられるが、この点はCython固有の一次資料での確認はできていない。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Cython)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Cython)
