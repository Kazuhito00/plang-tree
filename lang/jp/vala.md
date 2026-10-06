# Vala

- 登場年: 2006年
- 設計者: Jürg Billeter, Raffaele Sandrini
- パラダイム: object-oriented, procedural
- 系統: c-family

## 解決したかった課題

GNOMEデスクトップ環境のアプリケーションは、オブジェクトシステムGObjectを使いつつ生のC言語で書かれており、参照カウントの手動管理やシグナル接続の定型コードが開発者に重い負担を強いていた。C#のような近代的で読みやすい構文があれば生産性は上がるが、GNOMEはC ABI(バイナリインターフェース)と密接に結びついた既存のライブラリ資産(GTK、GLibなど)を抱えており、これらをそのまま活用できる必要があった。そこでBilleterとSandriniは、C#風の文法を持ちながらコンパイル時にプレーンなC言語コードへ変換され、GObjectと完全なバイナリ互換性を保つ言語としてValaを設計した。

## 特徴

- クラス、インターフェース、プロパティ、シグナルなどC#に似た近代的なオブジェクト指向構文を持つ
- コンパイラはコンパイル時にVala独自の中間表現ではなくC言語のソースコードを生成し、GCC等でネイティブコンパイルする
- GObjectの参照カウントを自動的に処理し、手動でのメモリ管理コードを大幅に削減する
- GLib/GTK等の既存Cライブラリのヘッダ情報(VAPIファイル)を通じてシームレスに呼び出せる
- ガベージコレクタを持たず、所有権に基づく決定論的なメモリ解放を行う

## 影響を受けた言語

- [C#](c_sharp.md)
- [C](c.md)
- [C++](c_plus_plus.md)
- [Java](java.md)
- [D](d.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在もGNOME関連プロジェクトの一部で使われ続けているが普及は限定的で、position付けとしては「niche」(ニッチな存在)にとどまる。GTKアプリ開発ではより広く使われるPythonやC自体、あるいはRustへの移行も進んでおり、Valaは特定コミュニティ向けの選択肢という位置づけが続いている。

## Hello World

```
void main() {
    stdout.printf("Hello, World!\n");
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Vala_%28programming_language%29)
