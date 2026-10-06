# Bosque

- 登場年: 2019年
- 設計者: Mark Marron
- パラダイム: functional, declarative
- 系統: ml-functional

## 解決したかった課題

Microsoft ResearchのMark Marronは、1970年代以降主流となった構造化プログラミングモデル(ループ、可変状態、参照の同一性など)が、コードの自動的な推論や検証を困難にしていると考えた。Bosqueは、TypeScriptに似た親しみやすい構文とNode/JavaScriptのような書き味を保ちながら、意味論としてはMLのような関数型言語の性質を取り入れ、複雑さの温床となる要素を排除する「規則化されたプログラミング」を目指して設計された。SMTソルバーによるプロパティ検証や高信頼性・クラウドネイティブなソフトウェア開発を見据えた次世代の中間表現とツール群の研究も目的としていた。プロジェクトは2023年11月にMicrosoftのリポジトリとしてはアーカイブされている。

## 特徴

- ループや可変状態、参照の同一性といった推論を困難にする要素を意図的に排除している
- TypeScriptに似た親しみやすい構文を採用しつつ、意味論はML系関数型言語に近い
- SMTソルバーによるプロパティ検証を見据えた設計で、プログラムの正しさの自動検証を志向する
- クラウドネイティブなソフトウェア開発における高信頼性を目標とした次世代の中間表現・ツール研究の一環として構築された
- 実用言語というより、プログラミング言語設計の研究プロトタイプとしての性格が強い

## 影響を受けた言語

- [TypeScript](typescript.md)
- [Standard ML](standard_ml.md)
- [JavaScript](javascript.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

2023年11月にMicrosoftのリポジトリとしてはアーカイブされ、歴史的役割を終えた研究プロジェクトとして位置づけられている。ループや可変状態を排除した「規則化されたプログラミング」の実験的試みとして、プログラミング言語研究の分野に一定の知見を残した。

## Hello World

```bosque
namespace NSMain;

entrypoint function main(): CString {
    return "Hello, world!"cstring;
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Bosque_%28programming_language%29)
