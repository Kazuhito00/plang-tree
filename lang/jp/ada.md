# Ada

- 登場年: 1980年
- 設計者: Jean Ichbiah
- パラダイム: procedural, object-oriented, concurrent
- 系統: algol-pascal

## 解決したかった課題

1970年代、米国防総省(DoD)が管理する兵器システムや組込みソフトウェアの開発では、プロジェクトごとに何百種類ものプログラミング言語が乱立し、保守性とコストの両面で深刻な問題を引き起こしていた。

DoDはこの状況を打開するため国際コンペティションを実施し、Jean Ichbiahが率いるフランスCII Honeywell Bullのチームの案が採用された。

単一の高信頼性言語に統一することで、長期間運用される兵器システムの保守性・移植性・安全性を根本から向上させることが目的だった。言語名は世界初のプログラマとされるAda Lovelaceに由来する。

## 特徴

- 強い静的型付けと厳格なコンパイル時検査によるバグの早期発見
- タスクによる並行処理機構を言語仕様に標準搭載
- パッケージによるモジュール化とジェネリクス(総称体)のサポート
- 例外処理機構による堅牢なエラーハンドリング
- 高信頼性が要求される組込み・リアルタイムシステム向けの設計
- 範囲指定型やオーバーフロー検査など実行時安全性を高める仕組み

## 影響を受けた言語

- [Pascal](pascal.md)
- [ALGOL 68](algol_68.md)
- [Simula](simula.md)
- [Modula-2](modula_2.md)
- [LIS](lis_lang.md)


## 影響を与えた言語

- [VHDL](vhdl.md)
- [Verilog](verilog.md)
- [C++](c_plus_plus.md)
- [Eiffel](eiffel.md)
- [PL/SQL](plsql.md)
- [Euphoria](euphoria_lang.md)
- [Amiga E](amiga_e.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [High Level Assembly](hla_lang.md)
- [Nim](nim.md)
- [Chapel](chapel.md)
- [ParaSail](parasail_lang.md)
- [Austral](austral_lang.md)


## 現在の位置づけ

Adaは現在もactiveな言語であり、航空宇宙・防衛・鉄道など極めて高い信頼性が求められる組込みシステム分野で標準的に採用され続けている。

当初の「言語乱立の解消」という目的は完全には達成されなかったものの、高信頼性分野における事実上の標準言語としての地位を今も保っており、規格改訂を重ねながら現役で使われ続けている。

## Hello World

```
with Ada.Text_IO; use Ada.Text_IO;

procedure Hello is
begin
   Put_Line ("Hello, World!");
end Hello;
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Ada)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Ada_%28programming_language%29)
