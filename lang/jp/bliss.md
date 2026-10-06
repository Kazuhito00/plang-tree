# BLISS

- 登場年: 1970年
- 設計者: W. A. Wulf, D. B. Russell, A. N. Habermann
- パラダイム: procedural, systems
- 系統: c-family

## 解決したかった課題

1960年代末、DEC PDP-10などのミニコンピュータ向けにOSやコンパイラを開発する際、アセンブリ言語では生産性が低く、既存の高水準言語(ALGOLやPL/Iなど)は移植性や実行効率、ハードウェアへの直接アクセスの面で不十分だった。カーネギーメロン大学のWulfらは、構造化プログラミングの利点を保ちながら、レジスタ操作など機械語に近い制御も可能な、型を持たない式指向のシステム記述言語としてBLISSを設計した。これによりPDP-10向けOSやコンパイラの開発が高水準言語で行えるようになった。後にC言語の普及により主流の座を譲ったが、DEC/VSIはOpenVMS向けにBLISSコンパイラを現在も保守している。

## 特徴

- すべての構文要素が値を返す「式指向」の言語であり、文と式の区別がない
- 変数に固定の型を持たせない(typeless)設計で、ビット単位・ワード単位の操作を直接記述できる
- レジスタ変数やアドレス演算などハードウェアに近い制御を可能にしつつ、条件分岐・ループ・ブロックなど構造化プログラミングの構文も提供する
- 強力なマクロ機構を備え、コンパイル時のコード生成や抽象化に利用される
- PDP-10、PDP-11、VAXなどDECのハードウェア向けにOSやコンパイラを書くためのシステム記述言語として設計された

## 影響を受けた言語

- [ALGOL 60](algol_60.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

BLISSはniche(ニッチ)な言語として位置づけられ、C言語の普及とともに新規開発でのシステム記述言語としての役割はほぼ終えている。ただしDEC/VSIによってOpenVMSの一部コンポーネント向けにBLISSコンパイラが今なお保守されており、レガシーなVMS環境の中で限定的に使われ続けている。

## Hello World

BLISSではモジュール単位でプログラムを記述し、ライブラリルーチンを呼び出して文字列を出力する。

```
MODULE HELLO (MAIN = HELLO) =
BEGIN

GLOBAL ROUTINE HELLO : NOVALUE =
BEGIN
    LIB$PUT_OUTPUT (%ASCID'Hello, world!');
END;

END
ELUDOM
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/BLISS)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/BLISS)
