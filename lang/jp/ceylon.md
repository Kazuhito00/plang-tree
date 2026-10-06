# Ceylon

- 登場年: 2011年
- 設計者: Red Hat(Gavin King)
- パラダイム: object-oriented, functional
- 系統: jvm-dotnet

## 解決したかった課題

Ceylonの設計者Gavin KingはJava EEの著名なフレームワークHibernateの作者としても知られ、日々の開発でJavaの設計上の弱点を痛感していた。特にジェネリクスがコンパイル時にのみ存在し実行時には型情報が消去される「型消去」の問題や、null安全性の欠如による実行時例外の頻発は、大規模なコードベースの保守を難しくしていた。Ceylonはこうした弱点を根本から刷新し、あわせて大規模モジュールシステムを備えた次世代のJava代替言語を目指して開発された。

## 特徴

- 型消去を避けた、より健全なジェネリクスの実装
- 言語レベルでのnull安全性(オプショナル型による表現)
- 大規模開発を意識したモジュールシステムを標準で内蔵
- 高階関数や不変性を重視する関数型プログラミングの要素
- JVMおよびJavaScriptの両方をターゲットにできるマルチプラットフォーム設計
- 静的型付けを保ちながら、より読みやすいユニオン型・交差型の表現

## 影響を受けた言語

- [Java](java.md)
- [Scala](scala.md)
- [Smalltalk](smalltalk.md)
- [Lisp](lisp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Ceylonは技術的には野心的な設計を持っていたが、Kotlinなど競合するJVM言語の台頭もあり広く普及するには至らず、Red Hatによる開発は2020年頃に終了しhistorical(歴史的)な言語として扱われている。Javaの弱点を先駆的に指摘し解決を試みた事例として、言語設計史の中で参照されることがある。プロジェクト自体は終了したが、その設計思想の一部は他のJVM言語のコミュニティでの議論に影響を残した。

## Hello World

```ceylon
shared void run() {
    print("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Ceylon_%28programming_language%29)
