# Alef

- 登場年: 1992年
- 設計者: Phil Winterbottom
- パラダイム: concurrent, procedural, systems
- 系統: concurrent-actor

## 解決したかった課題

1990年代初頭、Plan 9オペレーティングシステムの開発において、Newsqueakが持つチャネルベースの並行処理モデルを、C言語のようなコンパイル型言語で実現することが求められていた。Alefはproc(プロセス)とtask(軽量な実行単位)という二種類の並行実行単位を用意し、実用的なシステムプログラミングに耐える実行性能を確保しようとした。Newsqueakがインタプリタ的な実行環境だったのに対し、Alefはネイティブコードにコンパイルされることで、OS内部のコンポーネントとしても使える速度を目指した。しかしガベージコレクションを持たなかったためメモリ管理が煩雑になり、複数アーキテクチャでの保守も困難になっていった。

## 特徴

- チャネルによるプロセス間通信を、コンパイル型言語のパフォーマンスで実現する
- proc(プロセス)とtask(軽量スレッド)という二つの並行実行単位を提供する
- C言語に近い手続き型の構文をベースにしている
- ガベージコレクションを持たず、手動でのメモリ管理を必要とする
- Plan 9オペレーティングシステムのカーネルやユーザランドの一部を記述するために使われた

## 影響を受けた言語

- [Newsqueak](newsqueak.md)
- [C](c.md)


## 影響を与えた言語

- [Limbo](limbo.md)


## 現在の位置づけ

historical(歴史的役割を終えた言語)として位置づけられる。ガベージコレクションの欠如や移植性の問題から、Plan 9第3版までに言語自体が放棄され、後継のLimboへと役割を譲った。

## Hello World

```
implement main

include "alef.h"

void
main(void)
{
    print("Hello, World!\n");
    exits(0);
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Alef_%28programming_language%29)
