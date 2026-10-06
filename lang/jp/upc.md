# UPC

- 登場年: 1999年
- 設計者: UPC Consortium, William Carlson
- パラダイム: procedural, concurrent, systems
- 系統: numeric-scientific

## 解決したかった課題

UPC(Unified Parallel C)は、共有メモリ型並列計算の書きやすさと、メッセージパッシング型の分散メモリ計算が持つ性能・データ配置制御の両立という課題に取り組むために開発された。当時は複数の異なるC言語拡張が並行メモリプログラミングのために提案されていたが、それぞれ互換性がなく統一されていなかった。UPC Consortiumはこれらの長所を統合し、Cをベースにしたまま、大規模並列マシン上でPGAS(分割グローバルアドレス空間)モデルによるプログラミングを可能にすることを目指した。既存のCプログラマーが、大きな学習コストなく並列プログラミングに移行できることも狙いの一つだった。

## 特徴

- Cの構文をそのまま拡張しており、既存のCコードに`shared`修飾子などを加えることで並列化できる
- PGASモデルにより、分散メモリ環境でありながら共有メモリのような単一アドレス空間の視点でプログラミングできる
- `upc_forall`という並列版のfor文を持ち、データの分散配置に応じた反復処理を簡潔に記述できる
- 明示的な同期プリミティブ(バリア、ロック)を備え、プログラマが並列実行の詳細を制御できる
- スーパーコンピュータや大規模クラスタ環境をターゲットにした複数の実装(Berkeley UPC、GCC UPCなど)が存在した

## 影響を受けた言語

- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられる。HPC分野の一部の研究機関やレガシーなスーパーコンピュータ環境で使われ続けているが、新規開発での採用は限られている。

## Hello World

UPCはC言語の構文をそのまま使い、`upc_barrier`などの並列拡張を追加できる。

```c
#include <upc.h>
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Unified_Parallel_C)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Unified_Parallel_C)
