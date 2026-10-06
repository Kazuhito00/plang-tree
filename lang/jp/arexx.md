# ARexx

- 登場年: 1987年
- 設計者: William S. Hawes
- パラダイム: procedural, scripting
- 系統: scripting

## 解決したかった課題

Amiga上で複数のアプリケーションを組み合わせて処理を自動化するには、個々のアプリケーションと通信し、その機能を呼び出せる汎用的なマクロ/スクリプト言語が必要だった。アプリケーションごとに専用の自動化手段を用意するのではなく、共通の言語で橋渡しする仕組みが求められていた。

William S. Hawesは、Mike Cowlishawが定義した標準Rexx言語に忠実に従いながら、Amiga固有の拡張を加えたRexx実装ARexxを開発した。Hawes自身も後にRexxのANSI標準策定に関わっている。

## 特徴

- Mike Cowlishawの標準Rexxに忠実な文法(Amiga固有の拡張を追加)
- 「ARexxポート」を介した、対応アプリケーションとのプロセス間通信
- すべてのデータを型を持たないテキスト/文字列として扱う
- 変数を事前に宣言する必要のない動的スコープ
- 組み込みコマンドとライブラリへのアクセス
- スクリプトによる複数アプリケーションをまたいだ処理の自動化

## 影響を受けた言語

- [Rexx](rexx.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

ARexxは現在、歴史的な言語として位置づけられている(status: historical)。William Hawesはすでにアミーガ向けソフトウェアの開発から離れており、新バージョンを開発する企業も存在しない。

68000アセンブリで実装されているため、PowerPC環境ではフルスピードで動作できず、MorphOSにも搭載されていないが、レガシー環境では今も限定的に使われ続けている。

## Hello World

一次資料上で確認できなかった(「Hello World」に相当する例は見つからなかった)。Wikipedia記事には、イベントに応じてメッセージを表示する以下のようなスクリプト例が掲載されている。

```rexx
/* Alarm.rexx */
ARG event
IF event = 0 THEN EXIT
IF event = 1 THEN SAY "Program has ended unexpectedly"
IF event = 2 THEN SAY "Program has finished its job"
IF event = 3 THEN SAY "Cannot find data in selected directory"
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ARexx)
- [Wikipedia(日本語)] (なし)
