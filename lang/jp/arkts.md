# ArkTS

- 登場年: 2021年
- 設計者: Huawei
- パラダイム: object-oriented, declarative, concurrent
- 系統: scripting

## 解決したかった課題

HarmonyOS/OpenHarmony向けのアプリケーションを開発するには、既存のTypeScriptのコードや開発者の知識をできるだけ活かしつつ、宣言的なUI記述、性能を高めるための事前(AOT)コンパイル、並行処理といったモバイル・組み込み向けの要件を満たす言語が必要だった。単純なJavaScriptエンジン上のTypeScriptでは、これらの要件を十分に満たせなかった。

Huaweiは、TypeScript(さらにその上位集合であるJavaScript)を拡張したスーパーセット言語ArkTSを設計し、HarmonyOS 3.0で使われていた拡張TypeScript(eTS)を置き換えた。

## 特徴

- TypeScript(その上位集合であるJavaScriptも含む)の拡張スーパーセット言語
- 事前(AOT)コンパイルによりネイティブコードを生成
- クラスとメソッドのオーバーライドによるオブジェクト指向プログラミング
- ガーベジコレクションによる自動メモリ管理
- オプショナル型によるnil値の明示的な取り扱い
- async/awaitとアクターによる並行処理
- ArkUIフレームワークと連携した宣言的UI記述

## 影響を受けた言語

- [TypeScript](typescript.md)
- [JavaScript](javascript.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

ArkTSは現在、HarmonyOS/OpenHarmony向けアプリケーション開発の主要言語として活発に開発が続いている(status: active)。最新の安定版は2025年11月リリースのバージョン6.0.1.112であり、OpenHarmony 4.0以降はApache Licenseのもとでオープンソース化されている。

HarmonyOS、OpenHarmonyに加えて、ツールチェーンを介してAndroid、iOS、macOS、Windowsでも動作する。

## Hello World

```typescript
import ArkTS
// Index.ets

import router from '@ohos.router';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // Add a button to respond to user clicks.
        Button() {
          Text('Next')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
        .onClick(() => {
          router.pushUrl({ url: 'pages/Second' })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/ArkTS)
- [Wikipedia(日本語)] (なし)
