# Euphoria

- 登場年: 1993年
- 設計者: Robert Craig
- パラダイム: procedural, scripting
- 系統: scripting

## 解決したかった課題

ロバート・クレイグはトロント大学での計算機科学の修士研究でジョン・バッカスの関数型言語FPの考え方に触れ、そこから独自にプログラミング言語を一から作ってみるという個人的な取り組みを始めた。当時の多くのインタプリタ言語は、シンプルさ・実行速度・初心者への扱いやすさのいずれかを犠牲にしていたと考え、少数の型(atom・sequence・integer・object)だけで構成されるシンプルな型システムと、標準搭載のデバッガ・プロファイラを備えた、扱いやすく十分な速度で動く汎用インタプリタ言語を目指した。

彼は自身の会社Rapid Deployment Softwareを通じて、1993年7月にMS-DOS向け商用ソフトウェアとしてEuphoriaを最初にリリースした。Atari Mega-STコンピュータ上で開発が行われたことも知られている。

## 特徴

- atom、sequence、integer、objectという少数の型からなるシンプルな型システム
- 標準でデバッガとプロファイラを備え、初心者にも扱いやすい構文を持つ
- Euphoria自身をC言語のソースへ変換するトランスレータを標準搭載する
- 使用料不要で独立した実行ファイルを配布できる
- 動的型付け・静的型付けの両方の側面を併せ持つ

## 影響を受けた言語

- [Ada](ada.md)
- [C](c.md)
- [C++](c_plus_plus.md)
- [Pascal](pascal.md)
- [BASIC](basic.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

Euphoriaは現在「niche」な言語であり、Rapid Deployment Softwareによる独占的な商用開発は終了している。2006年10月に公開されたバージョン3.0.0で完全にオープンソース化され、以後はJeremy Cowgar、Matt Lewis、Derek Parnellらが参加するopenEuphoria Groupによって保守が続けられ、2010年12月にはバージョン4がリリースされた。この流れの中で後継言語Phixも生まれている。

小規模ながら現在も活動を続けるコミュニティを持つインタプリタ言語として、一定の存在感を保っている。

## Hello World

```
puts(1, "Hello, World!\n")
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Euphoria_(プログラミング言語))
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Euphoria_(programming_language))
