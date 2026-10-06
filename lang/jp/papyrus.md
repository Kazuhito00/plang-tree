# Papyrus

- 登場年: 2011年
- 設計者: Bethesda Game Studios
- パラダイム: object-oriented, event-driven, scripting
- 系統: scripting

## 解決したかった課題

『The Elder Scrolls』シリーズなどのBethesda製ゲームは長年、独自の非構造化スクリプト言語を使ってMOD(改造)やクエストロジックを記述してきたが、複雑化する一方のゲームロジックを保守するには限界があった。Papyrusは、オブジェクト指向とイベント駆動という現代的な設計を取り入れ、クエストやNPCの振る舞いといった複雑な要素をより構造化された形で記述できるスクリプト言語として、Skyrimから導入された。MOD開発者コミュニティに、保守性と拡張性の高いスクリプティング手段を提供することが狙いであった。

## 特徴

- オブジェクト指向の考え方に基づき、ゲーム内のオブジェクト(アイテム、NPC、クエストなど)ごとにスクリプトを関連付けて記述する
- イベント駆動型であり、特定のゲーム内イベント(会話終了、アイテム取得など)に応じてスクリプト関数が呼び出される
- コンパイル方式のスクリプト言語であり、ソースコードは中間言語にコンパイルされてからゲームエンジン上で実行される
- プロパティという仕組みでスクリプトとゲームエディタ上のデータを紐づけ、MODツールとの統合を意識した設計になっている
- Skyrim以降のCreation Kit(公式MOD開発ツール)に統合されており、MOD開発の標準的な手段として使われている

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

特になし


## 現在の位置づけ

特定分野で使われるニッチな言語である。Bethesda製ゲームのMOD開発という限定された領域に特化しており、その中では現在も活発なコミュニティを持つ現役の言語として使われ続けている。

## Hello World

Papyrusでは通常、デバッグ用の`Debug.Notification`関数を使って画面上にメッセージを表示する。

```papyrus
Scriptname HelloWorld extends ObjectReference

Event OnLoad()
    Debug.Notification("Hello, World!")
EndEvent
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Papyrus_%28scripting_language%29)
