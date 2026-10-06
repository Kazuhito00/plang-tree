# DRAKON

- 登場年: 1986年
- 設計者: Vladimir Parondzhanov
- パラダイム: visual, procedural, educational
- 系統: educational-visual

## 解決したかった課題

ソ連の再使用型宇宙往還機「ブラン」の飛行制御ソフトウェア開発では、PROL2、DIPOL、LAKSなど複数の異なる言語が並存しており、チーム間の意思疎通やレビューを難しくしていた。プログラミングの専門家とは限らないロケット技術者や運用担当者も含めて、誤解の少ない形でアルゴリズムを記述・共有できる統一的な手段が求められていた。

Vladimir Parondzhanovは、ロシア連邦宇宙庁(Pilyugin Center)やロシア科学アカデミー(Keldysh応用数理研究所)の関係者とともに、フローチャートを厳密に形式化したDRAKON(「明快さを保証する、親しみやすいロシアの算法言語」の頭字語)を開発し、この課題に応えた。

## 特徴

- フローチャートを厳密に形式化したビジュアルなアルゴリズム記述言語
- 27種類のアイコンと21種類のマクロアイコンから構成される(日本語版Wikipediaによる)
- 複雑な論理になっても読みやすさを保つよう、図の描き方自体に強い制約を設けている
- DRAKON-C、DRAKON-Java、DRAKON-ASMなど、既存言語のコードを生成するハイブリッド言語群が存在する
- DRAKON EditorなどのCASEツールにより、Windows/macOS/Linux上で図を作成できる
- ブラン計画のほか、Sea Launch、上段ロケットFregat、改良型Proton-Mなど実際の宇宙開発プロジェクトで使用された

## 影響を受けた言語

特になし(独自に開発された記法であり、本データセットに収録されている既存言語からの直接の系譜は確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

DRAKONは、CASEシステム「Grafit-Floks」が1996年に完成して以降、Sea Launchや上段ロケットFregat、改良型Proton-Mといった実際の宇宙開発プロジェクトで使われ、ドイツ航空宇宙センター(DLR)でも採用された実績を持つ。

現在はニッチな存在ではあるものの(status: niche)、DRAKON-C/DRAKON-Java/DRAKON-ASMのようなハイブリッド言語や無料のDRAKON Editorを通じて、アルゴリズム的思考の教育や、宇宙開発以外の業務プロセスのモデリングなどにも用いられている。

## Hello World

DRAKONは図(フローチャート)として記述するビジュアル言語のため、テキストのみの「Hello World」例は一次資料上で確認できなかった。参考として、DRAKON図から生成されたJavaScriptコードの一部(テトリス実装の抜粋)を示す。

```javascript
function advanceStep() {
    var _sw_8;
    _sw_8 = module.state;
    if (_sw_8 === "playing") {
        if (module.projectile) {
            if (canMoveDown()) {
                moveDown()
                return getStepPeriod()
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/DRAKON)
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/DRAKON)
