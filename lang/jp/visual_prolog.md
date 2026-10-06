# Visual Prolog

- 登場年: 1986年
- 設計者: Prolog Development Center (PDC)
- パラダイム: logic, object-oriented, functional, procedural, declarative
- 系統: logic-declarative

## 解決したかった課題

従来のProlog処理系、特にTurbo Prologは動的型付けであったためエラーが実行時まで発見されにくく、大規模で実用的なアプリケーション開発には不向きだった。Visual Prologは、強い静的型付けとオブジェクト指向の概念をPrologに組み込むことで、この弱点を克服しようとした。さらにWindows向けの本格的なGUIアプリケーションを開発できる商用の統合開発環境を提供し、論理プログラミングを実務のソフトウェア開発に応用可能な形へと洗練させることを狙った。

## 特徴

- 静的型付けを持つProlog処理系であり、コンパイル時に多くの型エラーを検出できる
- オブジェクト指向の考え方を取り入れ、クラスやインターフェースによる設計が可能
- 述語(predicate)、事実、規則といった論理プログラミングの基本要素をベースにしつつ、手続き的な記述もサポートする
- Windows向けのGUIビルダーを備えた統合開発環境(IDE)が用意されている
- 商用ソフトウェアとして開発・提供され続けており、企業向けアプリケーション開発を意識した設計になっている

## 影響を受けた言語

- [Prolog](prolog.md)
- [Pascal](pascal.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語として位置づけられている。企業向けの業務アプリケーション開発などで根強く使われ続けており、PDC社によって現在も商用製品として保守・提供されている。

## Hello World

```prolog
class main
open core

predicates
    main : core::runnable.
clauses
    main() :-
        stdio::write("Hello, World!"), stdio::nl.

end class main
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Visual_Prolog)
