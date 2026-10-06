# JAL

- 登場年: 2003年
- 設計者: Wouter van Ooijen
- パラダイム: procedural
- 系統: domain-specific

## 解決したかった課題

1990年代以降、Microchip社のPICマイコンは電子工作や組み込み機器の分野で広く使われるようになったが、当時C言語向けの開発環境は高価な場合が多く、アセンブリ言語で直接開発するのは煩雑であった。

Wouter van Ooijenは、Pascalに似た読みやすい構文を持ち、PICマイコン用の実行コードを直接生成できる、フリーで軽量な言語としてJAL(Just Another Language)を設計し、2003年にGNU General Public Licenseの下でフリーソフトウェアとして公開した。

## 特徴

- Pascalに似た、自由形式(free-format)の読みやすい構文を持つ
- PICマイコン向けの実行コードを直接生成するコンパイラとして実装されている
- PICのアセンブリ言語を直接コード中に埋め込むことができる
- ライブラリによって機能を拡張できる
- Linux、MS-Windows、MS-DOS、OSXなど複数のOS上で動作するコンパイラが提供されている

## 影響を受けた言語

- [Pascal](pascal.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

オリジナルのJALは2006年、Stef MientkiやKyle Yorkらによって拡張版JALV2に引き継がれた。現在もオープンソースのホビイスト向けコミュニティによってGitHub上などで細々と開発・維持されている。

産業用途での採用は限定的で、PICマイコンを使った趣味の電子工作や教育用途におけるニッチな選択肢の一つという位置づけである。

## Hello World

一次資料上で確認できるのは、PICのピン設定やPWM制御、A/D変換など組み込み向けのサンプルコードであり、典型的な「Hello, World!」に相当する例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/JAL_%28compiler%29)
