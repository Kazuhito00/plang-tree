# Whitespace

- 登場年: 2003年
- 設計者: Edwin Brady, Chris Morris
- パラダイム: esoteric, stack-based
- 系統: esoteric

## 解決したかった課題

Whitespaceは、「プログラムの意味あるコードが空白・タブ・改行という目に見えない文字だけで構成できたら面白い」という純粋なジョークの発想から作られた。エイプリルフールに公開されたこともあり、実用的な課題解決というより、既存のプログラミング言語の常識(可視文字だけがコードとみなされる)を裏返すこと自体が目的だった。他言語のソースコード中に、見た目には空白しか見えない形で別のプログラムを埋め込めるという悪戯的な使い方も想定された発想の一部である。

## 特徴

- トークンはスペース・タブ・改行の3種類のみで、それ以外の文字はすべて無視される(コメントとして扱える)
- 見た目上は空白しかない「空のファイル」に見えるが、実際には実行可能なプログラムである
- スタックベースの仮想機械で、スタック操作・算術演算・ヒープアクセス・フロー制御を空白文字の並びで表現する
- 他言語のソースコードの中に、可視文字の隙間を使ってWhitespaceプログラムを隠し込むことができる
- テキストエディタ上では実質的に読解不能で、専用ツールなしでは編集も検証もできない

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

特になし


## 現在の位置づけ

esoteric(難解言語)として位置づけられ、実用目的では使われない。「見えないコード」というインパクトの強さから、難解言語を紹介する記事やジョークとして今も頻繁に引き合いに出される。

## Hello World

Whitespaceのソースコードは実際にはスペース・タブ・改行だけで構成され、そのままでは目に見えない。以下は資料上の慣例に従い、スペースを`S`、タブを`T`、改行を`L`という記号に置き換えて示した「Hello, world!」を出力する定番プログラムである(実際のファイルではこれらの文字がそのまま空白として並ぶ)。

```
S S S T S S T S S S L T L S S
S S S T T S S T S T L T L S S
S S S T T S T T S S L T L S S
S S S T T S T T S S L T L S S
S S S T T S T T T T L T L S S
S S S T S T T S S L T L S S
S S S T S S S S S L T L S S
S S S T T T S T T T L T L S S
S S S T T S T T T T L T L S S
S S S T T T S S T S L T L S S
S S S T T S T T S S L T L S S
S S S T T S S T S S L T L S S
S S S T S S S S T L T L S S
L L L
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Whitespace)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Whitespace_%28programming_language%29)
