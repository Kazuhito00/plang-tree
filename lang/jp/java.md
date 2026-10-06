# Java

- 登場年: 1995年
- 設計者: James Gosling
- パラダイム: object-oriented, concurrent
- 系統: jvm-dotnet

## 解決したかった課題

Javaはもともと「Green Project」という社内プロジェクトで、家電製品や組込み機器を制御するために、どのCPUアーキテクチャ上でも同一のバイナリが動作する言語として構想された(当初の名前はOak)。ところが対象としていた対話型テレビ市場は立ち上がらず、開発チームは折しも急成長していたWorld Wide Webにこの技術を転用する。CやC++で書かれたネイティブアプリケーションを不特定多数のブラウザ環境に配布することは、クラッシュやセキュリティ上のリスクを伴い現実的ではなかったため、仮想マシン上で動く安全でポータブルな言語が求められた。

## 特徴

- 「Write Once, Run Anywhere」を実現するJava仮想マシン(JVM)上でのバイトコード実行
- ポインタ演算を排除し自動メモリ管理(ガベージコレクション)を備えた安全性重視の設計
- クラスベースの単一継承オブジェクト指向とインタフェースによる多重実装
- 標準ライブラリが極めて充実し、企業システム開発を支えるエコシステムが発達
- 組込み言語からWebアプレット、サーバサイドの大規模システムまで応用範囲が拡大した歴史

## 影響を受けた言語

- [C++](c_plus_plus.md)
- [Smalltalk](smalltalk.md)
- [Objective-C](objective_c.md)
- [Ada](ada.md)
- [Eiffel](eiffel.md)
- [Mesa](mesa.md)
- [CLU](clu.md)


## 影響を与えた言語

- [TADS](tads_lang.md)
- [PHP](php.md)
- [JavaScript](javascript.md)
- [Jess](jess_lang.md)
- [Pizza](pizza.md)
- [NetRexx](netrexx_lang.md)
- [Visual J++](visual_j_plusplus.md)
- [E](e_lang.md)
- [Jython](jython_lang.md)
- [ActionScript](actionscript.md)
- [UnrealScript](unrealscript.md)
- [ActiveBasic](activebasic.md)
- [BeanShell](beanshell.md)
- [C#](c_sharp.md)
- [Join Java](join_java.md)
- [D](d.md)
- [Processing](processing.md)
- [Drools](drools_lang.md)
- [SystemVerilog](systemverilog.md)
- [J#](j_sharp.md)
- [Groovy](groovy.md)
- [Scala](scala.md)
- [X10](x10.md)
- [易语言 (E Language)](yi_yu_yan.md)
- [Haxe](haxe.md)
- [Fantom](fantom_lang.md)
- [Vala](vala.md)
- [Greenfoot](greenfoot.md)
- [Clojure](clojure.md)
- [Diksam](diksam_lang.md)
- [.QL(CodeQL)](ql_codeql.md)
- [Mirah](mirah_lang.md)
- [Umple](umple_lang.md)
- [Chapel](chapel.md)
- [Gremlin](gremlin_lang.md)
- [Gosu](gosu.md)
- [Whiley](whiley.md)
- [Dart](dart.md)
- [Kotlin](kotlin.md)
- [Ceylon](ceylon.md)
- [Xtend](xtend_lang.md)
- [TypeScript](typescript.md)
- [Hack](hack_lang.md)
- [Ballerina](ballerina.md)


## 現在の位置づけ

Javaは現在も企業システム開発の事実上の標準言語の一つであり、Androidアプリ開発やエンタープライズのバックエンドシステムで広く現役稼働している。JVMという実行基盤は後続の多数の言語(Kotlin、Scala、Clojureなど)の土台としても機能し続けており、言語自体も定期的なバージョンアップで機能を拡張している。

## Hello World

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Java)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Java_%28programming_language%29)
