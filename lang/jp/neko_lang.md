# Neko

- 登場年: 2005年
- 設計者: Nicolas Cannasse
- パラダイム: object-oriented, scripting, procedural
- 系統: scripting

## 解決したかった課題

Nekoは、Haxeの開発者でもあるNicolas Cannasseによって設計された、高水準の動的型付け言語である。そのバイトコードを実行する仮想マシンNekoVMとともに、2005年にフランス・ボルドーのゲーム会社でのR&D活動の一環として開発された。組み込み可能なスクリプト言語として使えるだけでなく、Haxeをはじめとする他言語のコンパイルターゲットとして機能することを目的としていた。

なお、英語版Wikipediaでは「Neko (programming language)」という項目名は「NekoVM」という統合記事にリダイレクトされており、言語単体を扱う独立記事は存在しない(仮想マシンと言語を合わせて解説する記事となっている)。

## 特徴

- 高水準の動的型付けスクリプト言語で、マルチパラダイム(オブジェクト指向・構造化・プロトタイプベース・スクリプティング)
- NekoVMという専用の軽量な仮想マシン上でバイトコードとして実行される
- Haxeのコンパイルターゲットの一つとして使われている(他言語の実装基盤としての側面を持つ)
- MITライセンスで公開されているフリーソフトウェア
- 最新の安定版は2.3.0(2019年10月24日)で、Haxe Foundation・Shiro Games・Motion Twinによって開発が継続されている

## 影響を受けた言語

特になし(Wikipedia記事(NekoVM)のInfoboxには「influenced by」に相当する項目が存在せず、一次資料上で確認できなかった)

## 影響を与えた言語

特になし


## 現在の位置づけ

Nekoは現在もHaxe Foundationらによって開発が続けられているニッチなスクリプト言語兼仮想マシンである(status: niche)。もっぱらHaxeのコンパイルターゲットの一つとして使われており、単体で広く使われる言語ではない。

## Hello World

```neko
$print("Hello World!");
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/NekoVM)
