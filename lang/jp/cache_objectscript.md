# Caché ObjectScript

- 登場年: 1997年
- 設計者: InterSystems
- パラダイム: object-oriented, procedural, scripting, query
- 系統: domain-specific

## 解決したかった課題

MUMPSは医療情報システムや金融分野のデータベースで広く使われてきた言語だったが、オブジェクト指向プログラミング、マクロによる前処理、SQLの埋め込みといった、より現代的な商用アプリケーション開発に必要な機能を欠いていた。InterSystemsは、既存のANSI標準MUMPSルーチンとの後方互換性を保ったまま、これらの機能を追加した言語を必要としていた。

そこで開発されたのがCaché ObjectScriptであり、MUMPSの機能上位互換(functional superset)として設計されている。

## 特徴

- ANSI標準MUMPSの機能上位互換であり、既存のMUMPSルーチンをそのまま実行できる
- オブジェクト指向プログラミングをサポートする
- マクロによる前処理機能を持つ
- SQLを埋め込んで実行できる
- C言語風の中括弧(ブレース)構文で制御ブロックを記述できる
- プライベート/パブリック変数、多次元配列などMUMPS由来のデータモデルを引き継ぐ

## 影響を受けた言語

- [MUMPS](mumps.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Caché ObjectScriptは、InterSystemsのCaché(現在はInterSystems IRISに継承)データベースシステムの中核言語として、現在も同社によって開発・文書化され続けている(status: niche)。

英語版Wikipediaの記事自体には、出典の独立性や特筆性についての注記が付されているが、医療情報システムや金融分野の基幹システムなど、専門的な領域で現在も使用されている言語である。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript)
