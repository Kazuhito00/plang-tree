# Icon

- 登場年: 1977年
- 設計者: Ralph Griswold
- パラダイム: pattern-matching, procedural
- 系統: scripting

## 解決したかった課題

SNOBOL4はパターンマッチングの表現力に優れていたが、独特な構文と限定的なデータ構造のため、汎用的なプログラミング言語としては読みにくく、大規模なプログラムの記述には向いていなかった。SNOBOLの生みの親であるRalph Griswold自身が、その反省を踏まえ、ALGOL系の読みやすいブロック構造や制御構文を取り入れながら、パターンマッチングの強力さを保持する後継言語を設計した。これによりテキスト処理と一般的なアプリケーション開発の両方に対応できる言語を目指した。

## 特徴

- 「ゴールディレクテッド評価」という独自の制御機構を持ち、式が成功・失敗を返すことで自然に反復や分岐を表現できる
- ALGOL系の構造化されたブロック・制御構文を採用し可読性が高い
- リスト・集合・テーブルなどの豊富な組み込みデータ構造を持つ
- 文字列スキャン機構によりSNOBOL譲りのパターンマッチングを継承
- ジェネレータ(複数の値を順に生成する式)という先進的な概念を導入

## 影響を受けた言語

- [SNOBOL](snobol.md)
- [ALGOL 60](algol_60.md)


## 影響を与えた言語

- [Unicon](unicon.md)
- [jq](jq_lang.md)


## 現在の位置づけ

現在も一部の愛好家やテキスト処理・言語処理研究の分野で使われ続ける「niche」な言語であり、後継言語Icon自体の直系はUnicon(Icon のUnicodeやオブジェクト指向拡張)などに引き継がれている。

## Hello World

```icon
procedure main()
    write("Hello, World!")
end
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Icon言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Icon_%28programming_language%29)
