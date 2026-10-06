# Oberon

- 登場年: 1986年
- 設計者: Niklaus Wirth, Jürg Gutknecht
- パラダイム: procedural, object-oriented
- 系統: algol-pascal

## 解決したかった課題

Modula-2はPascalに比べて機能が豊富になった一方、Niklaus Wirthは言語仕様が徐々に複雑化していくことに満足していなかった。

ETH Zürichで新しいワークステーション用OS「Oberon」を開発するにあたり、WirthとJürg Gutknechtは、OSカーネルからアプリケーションまで一つの言語だけで、しかも極限までシンプルな仕様と実装で書けることを目指した。

この「単純さの追求」は、複雑化する一方だった当時の言語設計の潮流に対する明確な反動でもあった。結果として言語仕様書自体がわずか数十ページに収まるほど切り詰められた言語となった。

## 特徴

- Modula-2からさらに削ぎ落とされた最小限の言語仕様
- 型拡張(タイプエクステンション)によるシンプルなオブジェクト指向機構
- ガベージコレクションを前提としたメモリ管理
- 言語仕様と処理系実装の両方を一人の人間が把握できる規模に抑える設計思想
- OS全体(Oberonシステム)を単一言語で記述する統一的なアプローチ
- テキストベースのユーザーインターフェースと統合された独自のウィンドウシステム

## 影響を受けた言語

- [Modula-2](modula_2.md)
- [Pascal](pascal.md)


## 影響を与えた言語

- [Modula-3](modula_3.md)
- [Obliq](obliq_lang.md)
- [Component Pascal](component_pascal.md)
- [Zonnon](zonnon.md)
- [Nim](nim.md)
- [Go](go.md)
- [Odin](odin.md)
- [V](v_lang.md)


## 現在の位置づけ

Oberonは現在niche(限定的な利用)にとどまっており、広く普及した言語ではない。

しかし極度のシンプルさを追求したWirth言語群の集大成として、後年のGoをはじめとする「シンプルさを重視する」言語設計思想に理念的な影響を残している。ETH Zürichなど一部の研究・教育機関では今もOberonシステムが使われ続けている。

## Hello World

```
MODULE Hello;
IMPORT Out;
BEGIN
  Out.String("Hello, world!"); Out.Ln
END Hello.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Oberon)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Oberon_%28programming_language%29)
