# UnrealScript

- 登場年: 1998年
- 設計者: Tim Sweeney
- パラダイム: object-oriented, event-driven, scripting
- 系統: scripting

## 解決したかった課題

Unreal Engine上でゲームロジック、AI、UIといった頻繁に変更が加わる部分を、C++でエンジン本体を再ビルドすることなく高速に開発・反復したいという要求があった。UnrealScriptは、オブジェクト指向やガベージコレクション、状態機械(ステートマシン)、遅延実行(latent function)といったゲーム開発に特化した機能を言語レベルで提供することで、C++よりも高水準かつ迅速にゲームコードを記述できるようにすることを目指した。エンジンとゲームロジックを分離するというアーキテクチャ上の判断も、この言語が生まれた背景にある。

## 特徴

- クラスベースのオブジェクト指向言語であり、Unreal Engineのアクターやコンポーネントに対応するクラス階層を直接記述できる
- ネットワークレプリケーション(マルチプレイヤー同期)の機能が言語仕様に組み込まれている
- `state`によるステートマシンを言語機能として持ち、キャラクターやゲームオブジェクトの振る舞いの切り替えを自然に記述できる
- `latent`関数により、複数フレームにまたがる処理(待機や遅延実行)をコルーチン的に書ける
- ガベージコレクションを備え、C++に比べてメモリ管理の負担が小さい

## 影響を受けた言語

- [Java](java.md)
- [C++](c_plus_plus.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

レガシーとして扱われている。Unreal Engine 4以降ではC++とビジュアルスクリプティングのBlueprintに置き換えられ、UnrealScript自体は既に廃止されているが、過去のUnreal Engine 3世代のゲームやMODの資産として名残をとどめている。

## Hello World

Unreal Engineのログシステムにメッセージを出力する典型的な記述例である。

```unrealscript
class HelloWorld extends Actor;

event PreBeginPlay()
{
    `log("Hello, World!");
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/UnrealScript)
