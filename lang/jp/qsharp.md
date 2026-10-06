# Q#

- 登場年: 2017年
- 設計者: Krysta Svore, Microsoft Quantum Architectures and Computation (QuArC) team
- パラダイム: functional, procedural, concurrent
- 系統: domain-specific

## 解決したかった課題

Q#は、量子ビットの重ね合わせやエンタングルメントといった量子力学特有の概念を、既存の古典的なプログラミング言語の枠組みを無理に流用するのではなく、専用の抽象化として自然に表現するために設計された言語である。量子コンピュータのアルゴリズムをC++やPythonのライブラリとして書く試みは既にあったが、量子操作と古典的な制御フローを同じ言語の中で統合的に、かつ型安全に扱うことは難しかった。Microsoftのチームは、量子アルゴリズムの研究者が実機やシミュレータの詳細を意識しすぎずにアルゴリズムそのものを記述でき、なおかつ古典的な制御コードともシームレスに統合できる専用言語を作ることを目指した。

## 特徴

- 量子ビットを表す`Qubit`型や、量子操作(operation)と古典的な関数(function)を明確に区別する構文を持つ
- ユニタリ演算の随伴(adjoint)や制御(controlled)といった量子計算特有の操作をコンパイラが自動的に導出できる
- C#に似た構文を持ちながら、量子測定に伴う非決定性や量子状態のコピー禁止則(no-cloning定理)を型システムでモデル化している
- 古典的な制御フロー(ループや条件分岐)と量子操作を同じプログラムの中でシームレスに組み合わせられる
- Microsoftの量子開発キット(QDK)を通じて、シミュレータや実際の量子ハードウェア上での実行を統一的に扱える

## 影響を受けた言語

- [C#](c_sharp.md)
- [F#](f_sharp.md)
- [Python](python.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役で広く使われている。Microsoftの量子開発キットの中核言語として、量子アルゴリズムの研究・教育・実験的な開発の現場で継続的に利用されている。

## Hello World

Q#の量子操作は`@EntryPoint()`属性を付けたoperationとして定義し、`Message`関数で文字列を出力できる。

```qsharp
namespace HelloWorld {
    open Microsoft.Quantum.Intrinsic;

    @EntryPoint()
    operation SayHello() : Unit {
        Message("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Q_Sharp)
