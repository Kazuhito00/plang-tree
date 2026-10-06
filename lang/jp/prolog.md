# Prolog

- 登場年: 1972年
- 設計者: Alain Colmerauer, Robert Kowalski
- パラダイム: logic
- 系統: logic-declarative

## 解決したかった課題

1970年代初頭、自然言語処理の研究者たちは、文法規則や意味解釈のルールを手続き型言語で書くと「どういう手順で処理するか」の記述に埋もれてしまい、言語規則そのものの見通しが悪くなるという問題を抱えていた。フランスのAlain ColmerauerとイギリスのRobert Kowalskiは、形式論理(述語論理)の考え方をそのままプログラムとして実行し、「何が真であるか」という事実と規則だけを書けば、処理系が自動的に推論を行ってくれる言語を作りたいと考えた。この発想から生まれたPrologは、バックトラック探索を伴う導出原理に基づいて動作する、論理プログラミングという新しいパラダイムの代表格となった。

## 特徴

- 事実(fact)と規則(rule)の集合として知識を記述する論理プログラミング言語
- 「どう計算するか」ではなく「何が真か」を宣言する仕組みを持つ
- バックトラックによる自動探索で、条件を満たす解を導出する
- ユニフィケーション(単一化)により変数のパターンマッチングを行う
- 自然言語処理・エキスパートシステムなどAI研究で長年利用されてきた

## 影響を受けた言語

- [Planner](planner.md)

直接の言語的祖先は特定されていないが、パターン主導手続き呼び出しの考え方はPlannerから影響を受けている。


## 影響を与えた言語

- [Datalog](datalog.md)
- [Concurrent Prolog](concurrent_prolog.md)
- [PARLOG](parlog_lang.md)
- [Erlang](erlang.md)
- [Visual Prolog](visual_prolog.md)
- [Wolfram Language](wolfram_language.md)
- [Strand](strand_lang.md)
- [Oz](oz.md)
- [Constraint Handling Rules](chr_lang.md)
- [Mercury](mercury.md)
- [Curry](curry.md)
- [Logtalk](logtalk_lang.md)
- [GNU Prolog](gnu_prolog.md)
- [Go!](go_bang.md)
- [Shen](shen_lang.md)
- [CUE](cue_lang.md)


## 現在の位置づけ

ニッチな言語として位置づけられており(status: niche)、論理プログラミングの代表格として、AI・自然言語処理研究や一部の推論システムで使われ続けている。

## Hello World

```prolog
:- write('Hello, World!'), nl.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Prolog)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Prolog)
