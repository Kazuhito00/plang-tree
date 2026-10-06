# Squirrel

- 登場年: 2003年
- 設計者: Alberto Demichelis
- パラダイム: scripting, procedural, object-oriented, functional
- 系統: scripting

## 解決したかった課題

Squirrelは、Alberto Demichelisによって開発された、ビデオゲームのようにサイズ・メモリ帯域・リアルタイム性の制約が厳しいアプリケーションに組み込むことを目的とした軽量スクリプト言語である。日本語版Wikipediaによれば、Luaを強く意識して設計された言語であり、C/C++に似た構文を採用している。Luaとの主な違いとして、テーブルと配列を分離した点、クラス・継承構文を言語に組み込んだ点が挙げられている。C言語のホストプログラムに容易に組み込めること、高速な動作、高い移植性を重視した設計となっている。

## 特徴

- 動的型付け
- クラスと継承(デリゲーションによる)をサポート
- ジェネレータ・コルーチン(協調型スレッド)
- 例外処理
- 参照カウント+ガベージコレクションによる自動メモリ管理
- コンパイラとVMを合わせて約6000~7000行程度のC++コードで実装される小型軽量設計

## 影響を受けた言語

- [Lua](lua.md)
- [C](c.md)
- [JavaScript](javascript.md)
- [Python](python.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

ゲーム業界を中心に組み込みスクリプト言語として現在も採用が進んでいる(status: active)。OpenTTD、Left 4 Dead 2、Portal 2、Team Fortress 2、War Thunder、Apex Legendsなどでの採用例がある。ライセンスはバージョン3.0 beta3以降MIT。

## Hello World

日本語版・英語版Wikipediaのいずれの記事本文にも、Hello World相当の最小コード例は見当たらず、一次資料上で確認できなかった(記事に掲載されていたのはクラス継承や階乗計算の例のみ)。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Squirrel)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Squirrel_(programming_language))
