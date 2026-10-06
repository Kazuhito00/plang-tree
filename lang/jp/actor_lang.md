# Actor

- 登場年: 1988年
- 設計者: Charles Duff
- パラダイム: object-oriented
- 系統: smalltalk-oop

## 解決したかった課題

The Whitewater GroupのCharles Duffは、Smalltalkのような対話的で純粋なオブジェクト指向開発環境をMicrosoft Windows上で実現したいと考えていた。同時に、当時の研究用Smalltalk環境が重視していなかった、Windows APIへの直接的で低レベルなアクセスも可能にする必要があった。

この言語は、Duffがすでに開発していたForthへのオブジェクト指向拡張から直接発展したものである。

## 特徴

- 小さな整数を含め、すべての値がオブジェクトとして扱われる純粋オブジェクト指向言語
- Bakerセミスペース方式のガーベジコレクタを採用
- 16-bit x86アセンブリで書かれたトークン・スレッド方式のインタプリタ
- Smalltalkに似た対話的な開発環境
- Windows APIへの薄い抽象化レイヤを介した直接アクセス
- 当時のメモリ制約の厳しいPC向けに、ソフトウェアによる仮想メモリ機構を実装

## 影響を受けた言語

- [Smalltalk](smalltalk.md)
- [Forth](forth.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Actorは現在では歴史的な言語として位置づけられている(status: historical)。Microsoft Windowsの初期バージョン(2.1・3.0)専用に開発され、アーキテクチャがWindowsに強く結合していたためポータビリティに制約があり、それ以上の展開には至らなかった。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Actor_(programming_language))
- [Wikipedia(日本語)] (なし)
