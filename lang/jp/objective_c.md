# Objective-C

- 登場年: 1984年
- 設計者: Brad Cox, Tom Love
- パラダイム: object-oriented, procedural
- 系統: c-family

## 解決したかった課題

1980年代初頭、Brad CoxとTom LoveはSmalltalkが持つ「オブジェクト同士がメッセージをやり取りする」という柔軟な設計思想に強く影響を受けたが、Smalltalk自体は実行速度の面で実用のソフトウェア製品開発には不向きだった。そこで彼らは、Cの実用的な速度とシステムへの近さを保ったまま、Smalltalk流の動的メッセージングとオブジェクト指向をCにライブラリ・プリプロセッサとして追加する形でObjective-Cを設計した。この設計はCのコードベースをそのまま活かしながら段階的にオブジェクト指向を導入できる点で実務上有利だった。

## 特徴

- Cの完全なスーパーセットであり、既存のCコードをそのまま利用できる
- Smalltalk譲りの動的メッセージ送信(メッセージング)によるオブジェクト指向
- 実行時にメソッドの解決を行う動的束縛が中心で、柔軟なランタイム操作が可能
- 角括弧を用いた独特のメッセージ送信構文([obj method:arg]形式)
- NeXTSTEP/Cocoaフレームワークと密接に結びついた設計
- カテゴリ(既存クラスへのメソッド追加)やプロトコルによる柔軟な拡張性
- ARC(自動参照カウント)導入以前は開発者が手動で参照カウントを管理していた
- 実行時にクラスやメソッドを動的に差し替えられる高い柔軟性(メソッドスウィズリング等)
- Cとの完全互換性ゆえ、既存のCライブラリをそのまま呼び出せる
- 動的型付けの`id`型により、実行時まで型を確定させない柔軟なオブジェクト参照が可能
- ヘッダファイル(.h)と実装ファイル(.m)を分離するC由来の慣習を踏襲
- ブロック構文によるクロージャ的な機能を後年のバージョンで追加
- 例外処理機構はあるものの、Cocoaフレームワークでは通常のエラー処理には使われない

## 影響を受けた言語

- [C](c.md)
- [Smalltalk](smalltalk.md)
- [Common Lisp](common_lisp.md)


## 影響を与えた言語

- [Java](java.md)
- [Logtalk](logtalk_lang.md)
- [Cobra](cobra_lang.md)
- [Swift](swift.md)


## 現在の位置づけ

Objective-Cは1990年代から2010年代にかけてNeXTおよびApple製品(macOS/iOS)を長年支えたが、2014年のSwift登場以降は主役の座を譲り、現在はレガシーコードの保守が中心の位置づけとなっている。それでも長年蓄積された既存アプリの資産は多く、SwiftコードとObjective-Cコードが同一プロジェクト内で共存するケースも珍しくない。

## Hello World

```
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Objective-C)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Objective-C)
