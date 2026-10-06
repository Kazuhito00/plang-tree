# Perl

- 登場年: 1987年
- 設計者: Larry Wall
- パラダイム: scripting, procedural
- 系統: scripting

## 解決したかった課題

1980年代のUnixシステム管理では、テキスト処理にAWKやsed、制御フローにshスクリプトを組み合わせるのが常だったが、それぞれの言語は機能が限定的で、複雑な処理では複数言語を継ぎ接ぎする必要があった。Larry Wallは言語学者としての経歴も活かし、レポート生成や大規模テキスト処理を1つの言語で完結できる、実用性を最優先した道具を求めていた。「エレガントさより動くこと」を掲げ、正規表現をはじめとするテキスト処理機能を第一級の言語機能として統合した。

## 特徴

- 強力な正規表現をベースにした文字列・テキスト処理機能
- 「やり方は一つじゃない(TMTOWTDI)」という思想に基づく高い柔軟性
- CPANという巨大なモジュールリポジトリによる豊富な再利用資産
- CGI全盛期にWebのバックエンド言語として爆発的に普及
- スカラー・配列・ハッシュを明確な記号(`$` `@` `%`)で区別する記法

## 影響を受けた言語

- [AWK](awk.md)
- [C](c.md)
- [sed](sed.md)
- [Lisp](lisp.md)
- [BASIC](basic.md)


## 影響を与えた言語

- [Python](python.md)
- [newLISP](newlisp_lang.md)
- [Ruby](ruby.md)
- [PHP](php.md)
- [BeanShell](beanshell.md)
- [Raku](raku.md)
- [Groovy](groovy.md)
- [Crowbar](crowbar_lang.md)
- [PowerShell](powershell.md)
- [CoffeeScript](coffeescript.md)
- [Julia](julia.md)


## 現在の位置づけ

現在は「legacy」として、新規開発での採用は大きく減少したものの、既存のシステム管理スクリプトやレガシーWebシステムでは今も稼働している。テキスト処理・CGI黄金期を築いた歴史的意義は大きく、正規表現の普及に果たした役割は現代の多くの言語に受け継がれている。

## Hello World

```
print "Hello, World!\n";
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Perl)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Perl)
