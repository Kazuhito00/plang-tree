# Logtalk

- 登場年: 1998年
- 設計者: Paulo Moura
- パラダイム: logic, object-oriented
- 系統: logic-declarative

## 解決したかった課題

Prologなどの論理プログラミング言語は強力な推論機構を持つ一方で、オブジェクト指向言語が得意とするカプセル化やデータ隠蔽、関心の分離、コードの再利用といった「大規模プログラミング(programming in the large)」の仕組みを欠いていた。

Paulo Moura は1998年、標準的なPrologの構文に少数の演算子とディレクティブを追加するだけで、クラス(メタクラスも選択可能)とプロトタイプの両方のオブジェクト指向機構を組み込める言語Logtalkを設計した。Logtalk自身は独立した処理系を持たず、標準的なProlog処理系をバックエンドコンパイラとして利用する。

## 特徴

- クラス(オプションでメタクラスも使用可能)とプロトタイプの両方のオブジェクト指向機構をサポート
- public/protected/privateのオブジェクト述語によるアクセス制御
- ラムダ式や定形節文法(definite clause grammars)をサポート
- マルチスレッドやイベント駆動プログラミングにも対応
- リフレクション機能と自動ドキュメント生成機能を持つ
- 標準Prolog構文に演算子とディレクティブを追加しただけの構文で、既存のProlog処理系をバックエンドとして利用する

## 影響を受けた言語

- [Prolog](prolog.md)
- [Smalltalk](smalltalk.md)
- [Objective-C](objective_c.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Logtalkは現在も活発に開発が続けられている言語で、最新の安定版(3.66.0)は2023年5月にリリースされている。Apache License 2.0のもとで、複数のProlog処理系をバックエンドとして利用できるクロスプラットフォームな環境として、論理プログラミングとオブジェクト指向を組み合わせたいユーザーに使われている。

## Hello World

```logtalk
:- object(my_first_object).

    :- initialization((write('Hello world'), nl)).

    :- public(p1/0).
    p1 :- write('This is a public predicate'), nl.

    :- private(p2/0).
    p2 :- write('This is a private predicate'), nl.

:- end_object.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Logtalk)
- [Wikipedia(日本語)] 該当ページなし
