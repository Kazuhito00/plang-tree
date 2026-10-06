# Strongtalk

- 登場年: 1993年
- 設計者: Gilad Bracha, David Griswold
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

1990年代初頭、Smalltalkは動的型付けによる高い柔軟性と生産性を持つ一方で、大規模なプログラムでは型に関するミスが実行時まで発見できず、また完全に動的なオブジェクトモデルゆえに性能面の最適化が難しいという課題を抱えていた。

David GriswoldはGilad Bracha と共に1993年、Smalltalkの動的な性質を保ったまま、コンパイル時の型チェックによってより強い型安全性の保証を提供できるオプショナルな静的型付けの仕組みを提案する論文を発表した。その後GriswoldはUrs Hölzle、Lars Bakらと会社(Animorphic Systems、後にSun Microsystemsに買収)を設立し、この考え方を高速に実行できる本格的な実装としてStrongtalkを完成させた。

## 特徴

- Smalltalkの完全な動的型付けに、オプショナルな静的型付けを組み合わせている
- 静的型チェックにより、コンパイル時により強い型安全性の保証を提供する
- クラスの振る舞いを合成するmixin機構を備える
- レキシカルスコープを採用し、当時最速とされるSmalltalk実装のひとつだった
- 2006年にBSDライセンスでオープンソース化された

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [Self](self.md)


## 影響を与えた言語

- [Dart](dart.md)


## 現在の位置づけ

Strongtalkは現在、活発に使われる実用言語というより、動的型付け言語にオプショナルな静的型付けとmixin機構を組み合わせた設計の歴史的な実証実験として位置づけられている。

買収後、開発チームの一部はその技術をJavaのHotSpot仮想マシンの高速化に応用しており、mixin機構についてはDartの設計に影響を与えたとされる。

## Hello World

Strongtalkの具体的なHello World例は一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Strongtalk)
