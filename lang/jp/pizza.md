# Pizza

- 登場年: 1996年
- 設計者: Martin Odersky, Philip Wadler
- パラダイム: object-oriented, functional, generic, pattern-matching
- 系統: jvm-dotnet

## 解決したかった課題

1996年当時のJavaは登場したばかりで注目を集めていたが、ジェネリクス(総称型)、第一級の関数(クロージャ)、代数的データ型、パターンマッチングといった、関数型言語では当たり前に使われてきた機能を欠いていた。OderskyとWadlerは、これら関数型言語由来の機能を、Java仮想マシン(JVM)上でJavaと完全に互換性を保ったまま実現できないかと考えた。既存のJavaバイトコードやクラスライブラリをそのまま利用できるようにしつつ、型理論の研究成果を実用的なオブジェクト指向言語に統合する実験として、Pizzaは設計された。

## 特徴

- Javaと完全互換のバイトコードを生成し、既存のJavaクラスライブラリをそのまま呼び出すことができる
- ジェネリクス(パラメータ化された型)をJava登場から間もない時期に先取りする形で実現していた
- 代数的データ型とパターンマッチングを導入し、関数型言語的なデータ操作を可能にしていた
- 第一級の関数(クロージャ)をサポートし、関数を値として扱うプログラミングスタイルを可能にしていた
- 実験的なプロトタイプとしての性格が強く、実務での普及よりも設計者自身の後継研究(GJ、Scala)への橋渡しとしての意義が大きい

## 影響を受けた言語

- [Java](java.md)


## 影響を与えた言語

- [Scala](scala.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)であり、現在使われることはない。JavaにジェネリクスとFP的機能を統合する実験として、後のJavaのジェネリクス導入やScalaの誕生に至る系譜の出発点として記憶されている。

## Hello World

```
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Pizza_%28programming_language%29)
