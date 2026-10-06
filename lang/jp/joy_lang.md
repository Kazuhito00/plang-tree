# Joy

- 登場年: 2001年
- 設計者: Manfred von Thun
- パラダイム: functional, concatenative
- 系統: c-family

## 解決したかった課題

Manfred von ThunはJohn Backusが提唱した関数レベルプログラミング(FP)の思想を、ラムダ計算に頼らずに実現する言語を模索してJoyを設計した。Joyでは関数は仮引数を持たず、スタック上の値に対する関数合成のみでプログラムを構成する結合的(concatenative)スタイルを採用した。これによりプログラムの意味論を代数的に扱いやすくし、関数合成に基づく形式的推論がしやすい純粋関数型言語を実現した。Forthのスタックベーススタイルとの類似性(独立した収斂)や、Schemeからの影響も見られる。

## 特徴

- 関数は仮引数を持たず、スタック上の値への操作と関数合成だけでプログラムを構成する結合的(concatenative)スタイルを採用する
- プログラムの連結がそのまま関数合成に対応し、代数的な性質を保ったまま推論・変形しやすい
- 高階関数(クオーテーションと呼ばれるプログラムの引用)をファーストクラスの値として扱える
- 副作用を持たない純粋関数型言語として設計されている
- Forthに似たスタックベースの実行モデルを持ちながら、独自に発展した経緯を持つ

## 影響を受けた言語

- [Forth](forth.md)
- [Scheme](scheme.md)


## 影響を与えた言語

- [Factor](factor.md)
- [Cat](cat_lang.md)
- [Kitten](kitten_lang.md)


## 現在の位置づけ

Joyは歴史的役割を終えた言語として位置づけられ、現在実用で使われることはほとんどないが、結合的(concatenative)プログラミングという言語設計のスタイルを確立した草分け的存在として、Cat・Kittenなど後続の研究的言語に影響を与え続けている。

## Hello World

```joy
"Hello, world!" putchars.
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Joy_%28programming_language%29)
