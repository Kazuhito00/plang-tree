# Limbo

- 登場年: 1995年
- 設計者: Sean Dorward, Phil Winterbottom, Rob Pike
- パラダイム: concurrent, procedural, systems
- 系統: concurrent-actor

## 解決したかった課題

1990年代半ば、組み込み機器上で動作する分散オペレーティングシステム「Inferno」のために、ネットワーク越しの分散システムを安全かつ簡潔に記述できる言語が必要とされていた。LimboはAlefのチャネルベース並行処理モデルを引き継ぎつつ、ガベージコレクションを備えた仮想マシン(Dis)上で動作させることで、移植性とメモリ安全性を両立させることを目指した。Alefが抱えていたメモリ管理の煩雑さや複数アーキテクチャへの移植の困難さを解消する狙いもあった。異機種のネットワーク環境をまたいで安全に動くシステムソフトウェアを書けることが最大の目標であった。

## 特徴

- チャネルを介したプロセス間通信により、並行処理を安全かつ簡潔に記述できる
- Dis仮想マシン上で動作し、バイトコードによって高い移植性を実現している
- ガベージコレクションを備え、Alefで課題となっていたメモリ管理の煩雑さを解消している
- モジュールシステムを持ち、動的なロードや型安全なインタフェース定義が可能である
- 組み込み・分散システム向けに設計されており、ネットワーク透過性を重視している

## 影響を受けた言語

- [Alef](alef.md)
- [Newsqueak](newsqueak.md)
- [C](c.md)
- [Pascal](pascal.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられる。Inferno OSとともに一部の組み込み・研究用途で使われ続けているが、広範な普及には至っていない。

## Hello World

```
implement Hello;

include "sys.m";
    sys: Sys;
include "draw.m";

Hello: module {
    init: fn(nil: ref Draw->Context, nil: list of string);
};

init(nil: ref Draw->Context, nil: list of string)
{
    sys = load Sys Sys->PATH;
    sys->print("Hello, World!\n");
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Limbo_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Limbo_%28programming_language%29)
