# High Level Assembly

- 登場年: 1999年(英語版Wikipediaの本文・インフォボックスには初出年の明記がなく、外部情報に基づく推定値)
- 設計者: Randall Hyde
- パラダイム: systems, procedural, object-oriented, macro
- 系統: domain-specific

## 解決したかった課題

MASMやTASMのような従来のアセンブリ言語は記法が低レベルで、大学等でアセンブリ言語を初めて学ぶ学生にとって習得の壁が高かった。また、経験豊富なアセンブリプログラマにとっても、IF・WHILE・FORのような高水準の制御構造や高度なデータ型が使えないことは不便であった。Randall Hydeは主に大学でのアセンブリ言語教育を目的として、Pascal・Ada・Modula-2・C++などの記法を参考にした高水準の文法をIA-32アセンブリの上に構築するHigh Level Assembly(HLA)を設計した。

## 特徴

- IF・WHILE・FORなど高水準言語的な制御構造をアセンブリコード内で直接記述できる
- 強力なマクロシステムとコンパイル時言語(CTL)を備える
- 数千に及ぶ関数・プロシージャを含む豊富な標準ライブラリを提供
- 高度なデータ型とオブジェクト指向プログラミングをサポート
- Windows、Linux、FreeBSD、macOSなど複数プラットフォームに対応
- パブリックドメインとして公開されている

## 影響を受けた言語

- [Pascal](pascal.md)
- [Ada](ada.md)
- [Modula-2](modula_2.md)
- [C++](c_plus_plus.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

HLAは商用の主流アセンブリ言語ではなく、大学でのアセンブリ言語教育や、高水準の記法を好むアセンブリプログラマ向けのニッチな言語として位置づけられている。Randall Hyde自身の教科書「The Art of Assembly Language」との関連が深く、教育目的での利用が中心となっている。

## Hello World

一次資料上で具体的なHello Worldのコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/High_Level_Assembly)
- [Wikipedia(日本語)] なし
