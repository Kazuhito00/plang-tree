# C#

- 登場年: 2000年
- 設計者: Anders Hejlsberg
- パラダイム: object-oriented, procedural, generic
- 系統: jvm-dotnet

## 解決したかった課題

1990年代後半、MicrosoftはSun Microsystemsが提供するJavaとの提携を巡る対立を経て、自社が完全にコントロールできるマネージド実行環境を持つ必要に迫られた。Javaのようなガベージコレクションと型安全性を備えた仮想マシン上の言語という利点を認めつつも、Microsoftは.NET Frameworkという独自基盤の上でそれを実現したいと考えた。Anders Hejlsberg(元Turbo Pascal、Delphi設計者)を中心にC#が設計され、C++の構文的な親しみやすさとJavaの安全性を統合しつつ、独自の言語進化の自由度を確保した。

## 特徴

- 共通言語ランタイム(CLR)上で動作するマネージド言語で、ガベージコレクションを備える
- C++に似た構文にJava的なクラスベースオブジェクト指向を統合
- LINQ、async/await、プロパティなど言語機能が継続的に拡張されている
- ジェネリクスを実行時にも型情報を保持する形でサポート(型消去を行わない)
- Unity等のゲームエンジンやASP.NETなど幅広い用途で採用
- LINQによる宣言的なコレクション操作やクエリ構文
- async/awaitによる非同期プログラミングの言語レベルサポート
- nullable参照型など、実行時エラーを減らすための型システム拡張
- .NET Core以降はオープンソース化され、Windows以外の環境でも動作する
- パターンマッチングやレコード型などモダンな関数型的機能も継続的に追加
- リフレクションによる実行時の型情報操作が可能

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [Java](java.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Modula-3](modula_3.md)
- [Eiffel](eiffel.md)


## 影響を与えた言語

- [D](d.md)
- [VB.NET](vb_net.md)
- [J#](j_sharp.md)
- [Boo](boo.md)
- [Nemerle](nemerle_lang.md)
- [Haxe](haxe.md)
- [F#](f_sharp.md)
- [Fantom](fantom_lang.md)
- [Oxygene](oxygene_lang.md)
- [Vala](vala.md)
- [PowerShell](powershell.md)
- [Cobra](cobra_lang.md)
- [Clojure](clojure.md)
- [Nim](nim.md)
- [Chapel](chapel.md)
- [Gosu](gosu.md)
- [Dart](dart.md)
- [Kotlin](kotlin.md)
- [TypeScript](typescript.md)
- [Swift](swift.md)
- [Hack](hack_lang.md)
- [Ring](ring_lang.md)
- [Ballerina](ballerina.md)
- [Q#](qsharp.md)


## 現在の位置づけ

C#は.NETプラットフォームの中核言語として、エンタープライズ開発、Webバックエンド、ゲーム開発(Unity)など幅広い分野で現役で使われ続けている。Java対抗として生まれた経緯を持ちながらも、その後独自の言語機能拡張を重ねて発展を続けており、.NETのクロスプラットフォーム化(.NET Core以降)によりWindows以外の環境でも広く使われるようになった。

## Hello World

```
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/C_Sharp)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29)
