# BETA

- 登場年: 1976年
- 設計者: Kristen Nygaard, Bent Bruun Kristensen, Ole Lehrmann Madsen, Birger Møller-Pedersen
- パラダイム: object-oriented, procedural
- 系統: smalltalk-oop

## 解決したかった課題

Simulaの共同開発者であったKristen Nygaardらは、当時のオブジェクト指向言語にクラス・プロシージャ・型・手続きといった概念が個別に散在していることに疑問を持ち、これらをより少数の統一的な概念で説明し直せないかと考えた。オスロ大学やオーフス大学を中心とする「北欧学派(Scandinavian School)」の研究として、1976年からBETAの設計が始められた。

## 特徴

- クラスとプロシージャを「パターン(Pattern)」という単一の概念に統合している
- パターンはオブジェクトの属性として定義でき、単独でインスタンス化する必要がない入れ子構造(ネストしたクラス)を実現する
- 静的型付けでコンパイル時の型検査を行い、C++・Eiffel・Simulaと同系統の厳密さを持つ
- 仮想クラス定義(virtual class)により、強力な抽象化・拡張機構を提供する
- オブジェクト指向を中心としつつ、手続き型・関数型の記述もサポートする
- 実装は1986年以降に登場し、beta.cs.au.dkで公開されていた

## 影響を受けた言語

- [Simula](simula.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

BETAは2020年10月時点で開発が非アクティブとなっており(status: historical)、実務で新たに使われることはほとんどない。

しかし、クラスとプロシージャを単一概念に統合するという設計思想や、パターンによる抽象化の考え方は、オブジェクト指向言語の理論研究において今も参照される重要な事例となっている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/BETA_%28programming_language%29)
