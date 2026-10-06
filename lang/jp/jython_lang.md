# Jython

- 登場年: 1997年
- 設計者: 一次資料上で個人名は確認できなかった
- パラダイム: object-oriented, functional, procedural, scripting
- 系統: scripting

## 解決したかった課題

1997年後半、パフォーマンスが重要な処理をPythonプログラムから呼び出す際に、C言語を使う代わりにJavaを使えるようにしたいという要求から、PythonをJava仮想マシン(JVM)上で動作させる実装が作られた。当初はJPythonという名称であったが、1999年にJythonへと改称された。

PythonのソースコードをJavaバイトコードにコンパイルし、Javaのクラスをプログラム中から直接インポートして利用できるようにすることで、Pythonの生産性とJavaプラットフォームが持つ豊富な資産・実行環境とを橋渡しすることを目指した。

## 特徴

- PythonをJava仮想マシン上で動作させる実装であり、Java・Pythonの両方から相互に呼び出せる
- PythonコードをJavaバイトコードへコンパイルする
- CPythonと異なり、Javaスレッドへ直接マッピングされるためグローバルインタプリタロック(GIL)を持たず、真の並列実行が可能である
- Python Software Foundation Licenseのもとで公開されているフリーソフトウェアである
- CPython(リファレンス実装)とは一部の差異・非互換が存在する

## 影響を受けた言語

- [Python](python.md)
- [Java](java.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Jythonは現在もPython 2.7系との互換性を保ったバージョン(2.7.4、2024年8月リリース)が公開され続けている。Python 3への対応はロードマップ上の計画にとどまっており、CPythonの後を追う形での開発が続いている。

JVM上でPythonを動かす手段として、教育用途や既存のJavaシステムへの組み込み用途などで、限定的ながら現在もniche(隙間的)に使われている。

## Hello World

```python
print("Hello, World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Jython)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Jython)
