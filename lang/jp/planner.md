# Planner

- 登場年: 1969年
- 設計者: Carl Hewitt
- パラダイム: logic, procedural, symbolic
- 系統: logic-declarative

## 解決したかった課題

1960年代末のMITでは、自然演繹に基づく一様な導出(resolution)による定理証明が人工知能研究の主流アプローチだった。Carl Hewittはこの手法に懐疑的で、証明手順の一様さが知識の手続き的な構造を覆い隠してしまい、さらに背理法(proof by contradiction)への依存が非効率な探索を招くと考えた。

そこでHewittは、目標(goal)や表明(assertion)のパターンに応じて任意の手続きを呼び出す「パターン主導手続き呼び出し(pattern-directed invocation)」という仕組みを核に据え、前向き連鎖・後ろ向き連鎖の両方を扱える言語を設計した。これは「知識の手続き的埋め込み(procedural embedding of knowledge)」と呼ばれ、論理を宣言的に書くだけでなく、知識そのものを手続きとして直接記述できるようにする試みだった。

Planner自体は理論的な言語仕様として提案され、その後Micro-Planner・Pico-Planner・Popler(POP-2上の実装)などのサブセットが実際に実装された。中でもGerry Sussman、Eugene Charniak、Terry Winogradらが実装したMicro-Plannerは、Winogradの自然言語理解プログラムSHRDLUに使われ、初期AI研究の重要な成果を支えた。

## 特徴

- 目標(goal)と表明(assertion)のパターンマッチングにより手続きを呼び出す「パターン主導手続き呼び出し」を採用
- 前向き連鎖(forward chaining)と後ろ向き連鎖(backward chaining)の両方をサポート
- メモリ節約のためバックトラッキングを制御構造として組み込んだ
- 論理式を宣言的に書くだけでなく、知識を手続きとして直接埋め込める「手続き的埋め込み」の思想を体現
- 一意名前仮定(unique name assumption)や閉世界仮定に基づく推論が可能
- Micro-Planner・Pico-Planner・Poplerなど複数のサブセット・実装を通じて広まった

## 影響を受けた言語

- [Lisp](lisp.md)


## 影響を与えた言語

- [Smalltalk](smalltalk.md)
- [Prolog](prolog.md)


## 現在の位置づけ

現在は歴史的言語(status: historical)として位置づけられ、実際の開発現場で使われることはない。しかし人工知能プログラミング言語の歴史において重要な位置を占めており、Micro-PlannerによるSHRDLUの実現や、Prolog・Smalltalkの設計への直接的な影響を通じて、後続の論理プログラミング言語やオブジェクト指向言語に理念を伝えた先駆者として評価されている。

## Hello World

Plannerおよびその実装(Micro-Planner等)について、確認できる資料の範囲では単純な「Hello, World!」形式のサンプルコードは見つからなかった。Plannerは目標駆動型のパターンマッチング手続きを記述する言語であり、当時の文献ではSHRDLUのような自然言語理解や定理証明の例が中心で、単純な入出力例は一般的でないため省略する。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Planner_(programming_language))
