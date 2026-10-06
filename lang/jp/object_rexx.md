# Object REXX

- 登場年: 1996年
- 設計者: Simon C. Nash, Rick McGuire
- パラダイム: object-oriented, procedural, scripting
- 系統: scripting

## 解決したかった課題

1988年、IBMの「Oryx」プロジェクトはSimon C. Nashの技術指導のもとで、伝統的なRexxの構文とSmalltalkのオブジェクトモデルを融合させる実験を行った。手続き型のマクロ言語であったRexxの平易さを保ったまま、クラスベースの継承やポリモーフィズム、メッセージ送信といった本格的なオブジェクト指向機能を持たせることが目標だった。Wikipediaのinfoboxは「released = 1988」としているが、これはOryxプロジェクトの開始年であり、実際の製品としてのリリースは1996年のOS/2 Warp 4への同梱によるものである。

## 特徴

- 伝統的なRexxの構文をそのまま継承しつつ、クラスベースの継承・多重継承(ミックスインクラス)・ポリモーフィズムなどのオブジェクト指向機能を追加した
- `~`演算子を用いたメッセージ送信スタイルの記法を持つ
- 大文字小文字を区別しない自由形式の構文と、動的型付け・ガーベジコレクションを備える
- ANSI X3.274-1996 Rexx標準に準拠し、既存のクラシックRexxプログラムをほぼそのまま実行できる
- 1996年にOS/2 Warp 4に同梱される形で製品化された
- 2004年にIBMが開発中止を発表した後、2005年にRexxLAがオープンソース版「ooRexx」として系譜を継承した

## 影響を受けた言語

- [Rexx](rexx.md)
- [Smalltalk](smalltalk.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

IBM製品としてのObject REXXは2004年に開発中止となり、legacy(過去に使われ、現在は主に保守や移行対象として扱われる)な位置づけである(status: legacy)。ただしその系譜は、RexxLAが2005年にリリースしたオープンソース版「ooRexx(Open Object Rexx)」に引き継がれ、現在も開発が続けられている(具体的な最新バージョン番号は一次資料上で確認できなかった)。

## Hello World

```oorexx
a = "hello world"
do i = 1 to 2
  say "round #" i":" a
end
"echo Hello World"
say "RC:" rc
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Object_REXX)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Object_REXX)
