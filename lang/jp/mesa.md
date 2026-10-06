# Mesa

- 登場年: 1976年
- 設計者: Chuck Geschke, Butler Lampson, Jim Mitchell, Ed Satterthwaite
- パラダイム: procedural, concurrent, systems
- 系統: c-family

## 解決したかった課題

1970年代、Xerox PARCではAltoワークステーション向けの先進的なシステムソフトウェアを開発するため、強い型付けと分割コンパイルが可能な言語が求められていた。Mesaの開発チームはPascal譲りの明快な構文を土台としつつ、インタフェースと実装を分離するモジュール機構、モニタによる並行処理制御、そして例外処理機構を組み込むことで、大規模なシステムソフトウェアを堅牢に構築できる言語を目指した。単一のプログラマではなく、複数の開発者が協調して巨大なシステムを構築するための「工学的な言語」であった点が特徴的である。この設計思想は後継のCedarやModula-2、さらには遠くJavaにまで受け継がれることになる。

## 特徴

- インタフェースと実装(モジュール)を分離し、分割コンパイルによる大規模開発を可能にする
- モニタという同期機構を備え、並行プログラムを安全に記述できる
- 例外処理機構を持ち、エラー発生時の処理を構造化して記述できる
- Pascalに似た強い型付けの構文を採用しつつ、システムプログラミングに必要な低レベル制御も可能にする
- ガベージコレクションと自動メモリ管理の考え方を先進的に取り入れている

## 影響を受けた言語

- [Pascal](pascal.md)
- [ALGOL 68](algol_68.md)


## 影響を与えた言語

- [Euclid](euclid.md)
- [Modula-2](modula_2.md)
- [Cedar](cedar.md)
- [PostScript](postscript.md)
- [C++](c_plus_plus.md)
- [Modula-3](modula_3.md)
- [Java](java.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)として位置づけられる。Xerox PARC内部で使われたのみで一般に普及することはなかったが、モジュール・例外処理・並行制御という設計はModula-2やJavaなど後続の言語に色濃く影響を残している。

## Hello World

```
DIRECTORY
  IO;

Hello: PROGRAM =
BEGIN
  IO.PutFL["Hello, World!\n"];
END.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Mesa)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Mesa_%28programming_language%29)
