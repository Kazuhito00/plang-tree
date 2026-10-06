# SAIL

- 登場年: 1969年
- 設計者: Dan Swinehart, Bob Sproull
- パラダイム: procedural, symbolic
- 系統: origin

## 解決したかった課題

1960年代後半、スタンフォード大学人工知能研究所(Stanford Artificial Intelligence Laboratory)では、記号処理や連想的なデータ管理を必要とするAI研究のためのプログラミング環境が求められていた。Dan SwinehartとBob Sproullは、PDP-6/PDP-10用の整数専用ALGOL方言であったGOGOLコンパイラの資産と、連想記憶を扱う言語LEAPの機能を統合し、PDP-10・DECSYSTEM-20向けの大規模なALGOL 60風言語SAIL(Stanford Artificial Intelligence Language)を開発した。最初のリリースは1969年11月である。

目的は、従来のALGOL系言語が持つ手続き的な構造に加えて、三つ組(トリプル)による連想的なデータ格納、プロセス管理やコルーチン、バックトラッキング、文字列走査など、AI研究に必要な高度な機能を一つの言語に統合することだった。

## 特徴

- PDP-10/DECSYSTEM-20向けの大規模なALGOL 60風言語
- LEAP言語由来の連想的データ格納(トリプル)をサポート
- プロセス変数・イベント・割り込みなどの高度なプロセス管理機能
- バックトラッキングとガーベジコレクションを標準サポート
- ブレークテーブルによる文字列走査(スキャナ)機構とブロック構造マクロ
- コルーチン機構をサポート

## 影響を受けた言語

- [ALGOL 60](algol_60.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

SAIL自体は現在使われていない歴史的な言語だが、1970年代後半には移植性を高めた派生言語MAINSAILが開発され、2005年時点でも限定的に使用されていたと報告されている。スタンフォード人工知能研究所における初期のAI研究基盤を支えた言語として記憶されている。

## Hello World

一次資料(Wikipedia記事)には「Hello World」に相当する例はなく、代わりに文字列を大文字化するSTRING型手続きの例が最も広く引用されている。

```
STRING PROCEDURE upper(STRING rawstring);
  BEGIN "upper"
   STRING tmp;
   INTEGER char;
   tmp←NULL;
   WHILE LENGTH(rawstring) DO
     BEGIN
       char←LOP(rawstring); COMMENT LOP returns the first character and moves the pointer past it
       tmp←tmp&(IF "a" LEQ char LEQ "z" THEN char-'40 ELSE char);
     END;
   RETURN(tmp);
  END "upper";
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SAIL_(programming_language))
- Wikipedia(日本語): 該当記事なし(「SAIL」は曖昧さ回避ページのみで、プログラミング言語としての単独記事はない)
