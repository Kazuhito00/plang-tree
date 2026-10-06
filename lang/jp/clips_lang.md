# CLIPS

- 登場年: 1985年
- 設計者: Gary Riley
- パラダイム: logic, declarative, object-oriented, procedural
- 系統: logic-declarative

## 解決したかった課題

1980年代半ば、NASAジョンソン宇宙センターでは高価な商用エキスパートシステムツールART*Inferenceに依存しており、コスト面やLisp専用ハードウェア環境への依存という課題を抱えていた。そこで低コストかつ移植性の高いC言語ベースのエキスパートシステム構築ツールとして開発されたのがCLIPSである。Charles ForgyのOPS5に着想を得たルールベースの前向き連鎖推論とLisp風の構文を採用し、後にオブジェクト指向機能も統合された。汎用のCコンパイラさえあれば動作するという可搬性の高さから産業界・教育機関で広く採用され、Jessをはじめとする多くの派生言語に影響を与えた。

## 特徴

- Charles ForgyのRete法を用いた前向き連鎖(forward chaining)ルールベース推論エンジンを中核に持つ
- Lisp風の括弧構文でルールと事実(fact)を記述する、宣言的なプログラミングスタイルを採用
- COOL(CLIPS Object-Oriented Language)と呼ばれるオブジェクト指向拡張が後に統合され、手続き的な記述も可能になった
- C言語で実装されているため移植性が高く、汎用のCコンパイラがあれば様々なプラットフォームで動作する
- 商用ツールに依存しないパブリックドメインソフトウェアとして提供され、コスト面での障壁がない
- NASA発の実績あるエキスパートシステムシェルとして、産業界・軍事・教育分野で長年利用されてきた

## 影響を受けた言語

- [Lisp](lisp.md)
- [OPS5](ops5.md)


## 影響を与えた言語

- [Jess](jess_lang.md)


## 現在の位置づけ

nicheな存在として、現在も一部の産業・研究・教育分野でルールベースエキスパートシステムの構築に使われ続けている。主流の開発シーンからは退いたものの、その可搬性と実績の高さから根強いユーザー層を保っている。

## Hello World

```
(printout t "Hello, World!" crlf)
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/CLIPS)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/CLIPS)
