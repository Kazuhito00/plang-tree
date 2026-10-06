# OPS5

- 登場年: 1977年
- 設計者: Charles Forgy
- パラダイム: rule-based, declarative, logic
- 系統: logic-declarative

## 解決したかった課題

1970年代後半、カーネギーメロン大学のCharles Forgyは、Allen Newellらの人工知能研究グループが進めていた生産システム(production system)の研究を踏まえ、より大規模な知識ベースでも実用的に動作するルールベース言語を必要としていた。

当時の生産システム実装は、規則数が増えるほど条件部(左辺)のパターンマッチングにかかる計算コストが膨れ上がり、数百から数千規則という規模のシステムを構築する上でのボトルネックとなっていた。Forgyは自身が考案したReteアルゴリズムをOPS5の推論エンジンに組み込むことで、作業記憶(working memory)の変化した要素だけを効率的に再照合できるようにし、大規模ルールベースでも実用的な速度で前向き連鎖推論を行えるようにした。

この成果は、VAXコンピュータの構成設定を行う初期の商用エキスパートシステムR1/XCONに採用され、ルールベース言語が実世界の産業応用で通用することを実証した。

## 特徴

- Reteアルゴリズムに基づく効率的な前向き連鎖(forward chaining)推論エンジンを中核とする
- 作業記憶(working memory)にある要素と規則の条件部をパターンマッチングし、一致した規則を実行する生産システム言語
- 規則(production)は条件部と実行部(アクション)からなり、要素の追加・削除・変更などの副作用を伴う
- マッチングフェーズを高度に並列化できる設計
- 当初はLispで実装され、後により高速化のためBLISSで書き直された
- R1/XCONをはじめとする初期の実用的エキスパートシステムに採用され、ルールベースAIの実証に貢献した

## 影響を受けた言語

- [Lisp](lisp.md)


## 影響を与えた言語

- [CLIPS](clips_lang.md)


## 現在の位置づけ

現在は歴史的言語(status: historical)として実際の開発で使われることはないが、AIの歴史における重要なマイルストーンとして評価されている。DECのVAXコンフィグレーションを担ったR1/XCONは、ルールベース言語が商用エキスパートシステムとして通用することを世界に示した最初期の事例であり、OPS5の名称と構文はNASA発の後継言語CLIPSに直接受け継がれた。

## Hello World

```
(object-class request
 ^action)

(startup
 (strategy MEA)
 (make request ^action hello)
)

(rule hello
 (request ^action hello)
 (write |Hello World!| (crlf))
)
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/OPS5)
