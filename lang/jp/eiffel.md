# Eiffel

- 登場年: 1986年
- 設計者: Bertrand Meyer
- パラダイム: object-oriented
- 系統: algol-pascal

## 解決したかった課題

1980年代、オブジェクト指向プログラミングはSimulaやSmalltalkによって理論的な地盤を築きつつあったが、ソフトウェアの信頼性を体系的に保証する仕組みは各言語に委ねられており、実装者の裁量に頼る部分が大きかった。

Bertrand Meyerは、事前条件・事後条件・クラス不変条件を言語そのものに組み込む「契約による設計(Design by Contract)」という考え方を提唱し、これを純粋なオブジェクト指向言語として実装することで、ソフトウェアのバグを設計段階から体系的に排除できると考えた。

信頼性と再利用性を根本から高めることが、Eiffel誕生の中心的な動機だった。

## 特徴

- 契約による設計(事前条件・事後条件・クラス不変条件)を言語機能として標準搭載
- 単一継承だけでなく多重継承もサポートするクラス機構
- ジェネリクス(総称クラス)による型安全な再利用
- ガベージコレクションによる自動メモリ管理
- 例外処理と契約違反の検出を統合したエラーハンドリング
- 「一様アクセスの原則」などソフトウェア工学の理論を反映した設計指針

## 影響を受けた言語

- [Simula](simula.md)
- [Ada](ada.md)


## 影響を与えた言語

- [Sather](sather.md)
- [Racket](racket.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [C#](c_sharp.md)
- [D](d.md)
- [Cobra](cobra_lang.md)


## 現在の位置づけ

Eiffelは現在nicheな言語であり、広く普及した主流言語にはならなかった。

しかし契約プログラミングという概念を初めて言語機能として実現した先駆的言語として、ソフトウェア工学の分野で高く評価され続けており、今も一部の高信頼性システム開発で使われている。

## Hello World

```
class
    HELLO_WORLD

create
    make

feature

    make
            -- Print a greeting.
        do
            print ("Hello, World!%N")
        end

end
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Eiffel)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Eiffel_%28programming_language%29)
