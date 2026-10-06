# Linden Scripting Language

- 登場年: 2003年(Second Lifeの公開年。個人設計者名・厳密な言語仕様確定年は一次資料上で確認できなかった)
- 設計者: Linden Lab(個人名の一次資料上の確認はできなかった。二次資料ではCory Lindenが言及されている)
- パラダイム: procedural, event-driven, scripting
- 系統: scripting

## 解決したかった課題

2003年に公開された仮想世界サービスSecond Lifeでは、ユーザー自身が3Dオブジェクトを作成できるだけでなく、それらのオブジェクトに独自の振る舞いを持たせたいという要望があった。運営会社Linden Labは、C言語に近い親しみやすい文法を持ちながら、オブジェクトの状態遷移とイベント処理を自然に表現できるスクリプト言語を、Second Life内のオブジェクトへ直接組み込む形で提供する必要があった。

こうして生まれたLinden Scripting Language(LSL)は、有限状態マシン(有限オートマトン)をモデルとした「状態-イベント駆動型」のスクリプト言語として設計された。なお、Second Life Wiki/Fandom等の二次資料では初期版(LSL1・LSL2)の作者として「Cory Linden」という名前が挙げられているが、これはWikipedia記事(日本語・英語いずれも)には明記されておらず、参考情報として扱う。

## 特徴

- C言語に近い文法構造を持ち、非常に強い型付けの言語である
- 有限状態マシンをモデルにした「状態-イベント駆動型」のスクリプト言語である
- 整数、浮動小数点、文字列、UUID(キー)、ベクトル、クォータニオン、リストといったデータ型を提供する
- Second Life内の3Dオブジェクトに直接組み込まれ、オブジェクトの振る舞いを記述するために使われる
- 後年、実行速度向上のためMonoベースの実行エンジンが導入された

## 影響を受けた言語

- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

LSLは現在「niche」な言語であり、Second Lifeという特定のプラットフォーム内でのみ使われ続けている。実行エンジン側ではMonoの導入やLua採用の検討など変化があったが、言語自体は仮想世界内のオブジェクトに振る舞いを与えるドメイン特化スクリプト言語として、コミュニティ内での実用性を保っている。

その用途はSecond Lifeというプラットフォームの存続と強く結びついており、プラットフォーム外への普及は見込みにくい。

## Hello World

```
default
{
    state_entry()
    {
        llSay(0, "Hello, Avatar!");
    }
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Linden_Scripting_Language)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Linden_Scripting_Language) (Second Life記事へのリダイレクト)
