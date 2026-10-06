# AWK

- 登場年: 1977年
- 設計者: Alfred Aho, Peter Weinberger, Brian Kernighan
- パラダイム: scripting, pattern-matching
- 系統: scripting

## 解決したかった課題

1970年代のUnix環境では、ログファイルの集計やフィールド区切りのテキストデータの加工といった定型作業を、都度アセンブリやCで書くのは非効率だった。ベル研究所のAlfred Aho、Peter Weinberger、Brian Kernighanは、「パターンにマッチしたら対応するアクションを実行する」という単純明快なモデルにより、数行のスクリプトでテキスト処理・集計処理を完結できる言語を作ろうとした。言語名は3人の頭文字に由来する。

## 特徴

- 「パターン { アクション }」という簡潔な行指向のプログラミングモデル
- 入力を自動的にフィールド分割し `$1` `$2` のように参照できる
- 連想配列を標準でサポートし、集計処理を簡潔に書ける
- 正規表現によるパターンマッチングを言語の中核に据える
- Unixパイプラインの一部として今もログ解析やCSV処理で日常的に使われる

## 影響を受けた言語

- [C](c.md)
- [SNOBOL](snobol.md)
- [sed](sed.md)


## 影響を与えた言語

- [AMPL](ampl_lang.md)
- [Perl](perl.md)
- [Tcl](tcl.md)
- [JavaScript](javascript.md)
- [XSLT](xslt.md)


## 現在の位置づけ

登場から半世紀近く経った現在も「active」であり、Unix系OSの標準ツールとしてログ解析やパイプライン処理の中で日常的に使われ続けている。Perlという後継的な大規模言語を生み出した歴史的な意義も大きい。

## Hello World

```
BEGIN { print "Hello, World!" }
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/AWK)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/AWK)
