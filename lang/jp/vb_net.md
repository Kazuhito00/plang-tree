# VB.NET

- 登場年: 2002年
- 設計者: Microsoft
- パラダイム: object-oriented, procedural
- 系統: jvm-dotnet

## 解決したかった課題

1990年代を通じてVisual Basic(Classic)はRAD(高速アプリ開発)の代名詞として爆発的に普及したが、その内部設計はCOM技術に依存しており、Microsoftが2000年代初頭に打ち出した.NET構想(共通言語ランタイム上で複数言語を統一的に動かす基盤)とは根本的に相容れなかった。膨大な既存のVisual Basic資産とプログラマの知識を活かしつつ、.NET基盤の恩恵(ガベージコレクション、C#等との相互運用性)を受けられる完全なオブジェクト指向言語として、VB.NETがゼロから作り直された。

## 特徴

- .NET共通言語ランタイム(CLR)上で動作し、C#などの.NET言語と完全に相互運用可能
- Visual Basic Classic譲りの平易な英語に近い構文を維持
- 継承・インタフェース・例外処理などの本格的なオブジェクト指向機能を新規獲得
- Visual Studioと統合されたRAD開発環境での視覚的なフォーム設計
- 旧来のVBとは言語仕様が大きく変わり、単純な後方互換ではない刷新
- Option Strict/Option Explicitなど、段階的に型安全性を強化できる設定

## 影響を受けた言語

- [Visual Basic(Classic)](visual_basic.md)
- [C#](c_sharp.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

VB.NETは現在も.NETエコシステムの一員として現役で使われており、特に既存の業務アプリケーション保守や、簡潔な構文を好む開発者に一定の支持を保っている。C#ほどの新機能追加の勢いはないものの、Microsoftによって継続的にサポートされ、.NET最新版でも動作が保証されている。

## Hello World

```vbnet
Module Module1
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Visual_Basic_.NET)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Visual_Basic_%28.NET%29)
