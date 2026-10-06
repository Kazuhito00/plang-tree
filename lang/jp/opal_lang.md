# OPAL

- 登場年: 1985年(注: この年はWikipedia本文には記載がなく、公式GitHubリポジトリ(TU-Berlin/opal)の記述「developed ... from 1985 to 2000」による)
- 設計者: Peter Pepper
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

1980年代半ば、ベルリン工科大学(TU Berlin)のコンパイラ構成・プログラミング言語研究グループは、代数的仕様記述の考え方を反映した実用的な関数型言語を必要としていた。Peter Pepperを中心とするこの研究グループは、モジュールをシグネチャ(signature)と実装(implementation)に分離する設計や、パターンマッチングに似た分岐構文を備えた「最適化された適用型言語(OPtimized Applicative Language)」ことOPALを開発した。

Wikipediaの記事自体にはOPALのinfoboxが存在せず、開発年に関する記述もない。年代情報は公式GitHubリポジトリ(TU-Berlin/opal)の説明文「It has been developed by the Compiler Construction and Programming Languages group at the Technische Universität Berlin headed by Prof. Dr. Peter Pepper from 1985 to 2000.」による。

## 特徴

- シグネチャ(SIGNATURE)と実装(IMPLEMENTATION)を分離するモジュール構造を持つ関数型(適用型)言語
- IF-THEN-ELSE-FIのような、パターンマッチングに似た分岐構文を持つ
- ベルリン工科大学のコンパイラ構成・プログラミング言語研究グループにより開発された
- 公式リポジトリの記述によれば1985年から2000年にかけて開発が行われた
- 現在もGitHub上(TU-Berlin/opal)でソースコードが公開されている
- 静的コード解析フレームワークとして同名の別プロジェクト「Opal」が存在するが、Wikipedia記事はこれを本項の言語とは無関係な別物と明記している

## 影響を受けた言語

特になし(一次資料上で確認できなかった)。

## 影響を与えた言語

特になし


## 現在の位置づけ

現在は歴史的言語として位置づけられている(status: historical)。ソースコードはGitHub上(TU-Berlin/opal)で公開され続けているが、目立った現行の開発や利用は確認できなかった。

## Hello World

一次資料上で確認できなかった。Wikipedia記事にはHello Worldではなく、最大公約数(GCD)を計算するプログラム例が掲載されている。

```
SIGNATURE GCD
FUN GCD: nat ** nat -> nat

IMPLEMENTATION GCD
IMPORT Nat COMPLETELY
DEF GCD(a,b) == IF a % b = 0 THEN b
                ELSE IF a-b < b THEN GCD(b,a-b)
                    ELSE GCD(a-b,b)
                FI
            FI
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Opal_(programming_language))
