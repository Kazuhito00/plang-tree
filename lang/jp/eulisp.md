# EuLisp

- 登場年: 1990年
- 設計者: Julian Padget, Harry Bretthauer, Christian Queinnec
- パラダイム: functional, object-oriented, procedural
- 系統: lisp-scheme

## 解決したかった課題

1990年当時、Common Lispのように過去の設計にあまりに縛られすぎず、かといってSchemeほど最小主義的でもないLispをヨーロッパの産学コミュニティで標準化したいという要求があった。EuLispはオブジェクト指向をLispに深く統合し、組み込み機器や教育用途にも段階的に展開できる階層構造の言語を作ることを目指した。単一の巨大な仕様ではなく、レベル0からレベル1へと機能を積み上げていく階層的なモジュール構造を採用することで、用途に応じた柔軟な実装を可能にしようとした点が特徴的である。欧州の複数の研究機関が協力して標準化に取り組んだ、国際的な共同プロジェクトであった。

## 特徴

- オブジェクト指向機構をLispの言語コアに深く統合している
- レベル0・レベル1という階層構造により、用途に応じて機能を段階的に取り込める
- モジュールシステムを備え、大規模なプログラムの構成を整理しやすい
- 組み込み機器から教育用途まで幅広く対応できることを意図した設計になっている
- Common LispやSchemeなど複数のLisp方言の良い部分を統合しようとする折衷的な思想を持つ

## 影響を受けた言語

- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Interlisp](interlisp.md)
- [Standard ML](standard_ml.md)
- [Haskell](haskell.md)


## 影響を与えた言語

- [ISLISP](islisp_lang.md)


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられる。広範な普及には至らなかったが、欧州の言語設計研究の文脈で参照され続けている。

## Hello World

```
(print "Hello, World!")
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/EuLisp)
