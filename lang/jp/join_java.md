# Join Java

- 登場年: 2000年
- 設計者: Von Itzstein, Kearney
- パラダイム: concurrent, object-oriented
- 系統: jvm-dotnet

## 解決したかった課題

2000年前後、Von ItzsteinとKearneyは、Javaにおける従来のスレッドとロックに基づく並行プログラミングモデルが複雑でエラーを招きやすいという課題に着目した。join-calculus(join計算)に基づくパターンマッチ型の並行処理の記述をJava言語に直接統合できれば、より高いレベルでの並行処理記述が可能になると考えた。

そこで(ジェネリクス導入前の)Javaを拡張し、複数のメソッド呼び出しの断片を組み合わせて扱うjoinメソッド、signal型を返す非同期メソッド、パターンの優先順位を指定する順序修飾子という3つの主要な構成要素を備えたJoin Javaを、独立に提案した。

## 特徴

- (ジェネリクス導入前の)Javaを拡張した言語である
- join-calculusのjoinパターンをJavaの構文に統合している
- 複数メソッドの断片を組み合わせるjoinメソッドを持つ
- signal型を返す非同期メソッドを持つ
- パターンの優先順位を指定する順序修飾子を持つ

## 影響を受けた言語

- [Java](java.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Join Javaは、JoCaml・Polyphonic C#・Scala Joinsなど、join-calculusに基づく他の言語実装と並んで歴史的に参照される言語であり、join-patternという設計手法を主流言語であるJavaに統合しようとした初期の試みの一つとして位置づけられる。

英語版Wikipedia上には専用記事は存在せず、「Join-pattern」という一般的な解説記事の中で、他の実装と並んで数行のみ言及される形に留まっている。現在稼働している実装は確認できず、historical(歴史的役割を終えた言語)として位置づけられる。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Join_Java)
