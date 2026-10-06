# Strand

- 登場年: 1988年(Strand88として発表された版。英語版Wikipedia本文には明確な初出年の記載がなく、1989年の英国コンピュータ協会賞受賞歴から推定)
- 設計者: Ian Foster, Stephen Taylor
- パラダイム: logic, concurrent
- 系統: logic-declarative

## 解決したかった課題

1980年代、並行論理プログラミングの研究(PARLOG、Concurrent Prolog、GHC、KL1など)は理論的に豊かな成果を生んでいたが、それらの多くは研究用処理系の域を出ず、実際の並列計算機上で実用的な性能を発揮する言語は限られていた。Ian FosterとStephen Taylorは、Prologに似た構文を持つ高水準のシンボリック並行言語Strandを設計し、並列計算のための実用的なツールとして提供することを目指した。

なお、共同設計者のIan Fosterは、PARLOGの共同設計者Keith Clarkを指導教員として「Parlog as a systems programming language」(1988年)という博士論文を執筆した人物であり、PARLOGを含む並行論理プログラミング研究の流れの直接の延長線上でStrandの設計に取り組んだと考えられる。ただし、英語版WikipediaのStrand記事本文にはPARLOGやKL1との系譜関係についての明示的な記述はなく、この関係を一次資料上で確定的に確認することはできなかった(FosterのWikipedia記事における博士論文の記述からの間接的な裏付けにとどまる)。

## 特徴

- Prologに似た構文を持つ、並列計算のための高水準シンボリック言語
- 並行論理プログラミングの系譜に属する言語として、Wikipedia上でも「Prolog programming language family」に分類される
- 1988年版のStrand88は、英国コンピュータ協会(BCS)の技術革新賞(1989年)を受賞
- 実用的な並列シンボリック計算処理系として、当時の並列計算機上での性能を重視した設計

## 影響を受けた言語

- [Prolog](prolog.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Strandは1988年版(Strand88)が英国コンピュータ協会の技術革新賞を受賞するなど高く評価され、並列シンボリック計算のための実用言語として一定の存在感を持った。設計者の一人Ian Fosterは、後にグリッドコンピューティングの分野でGlobus Toolkitなどを手がけ大きな影響力を持つ人物となった。

Strand自体は1990年代以降、後継とされるPCNなどに置き換わっていき、現在では並行論理プログラミングの歴史の一部として位置づけられている。英語版Wikipediaの記事もスタブ扱いで、詳細な技術史の記述は限られている。

## Hello World

一次資料上でHello World相当のサンプルコードは確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Strand_(programming_language))
