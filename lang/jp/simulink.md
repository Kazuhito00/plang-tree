# Simulink

- 登場年: 1990年
- 設計者: MathWorks
- パラダイム: visual, dataflow
- 系統: domain-specific

## 解決したかった課題

Simulinkは、MATLABを開発したMathWorks社によって、MATLABの拡張製品(コンパニオン製品)として開発された、ブロック図ベースのモデリング・シミュレーション環境である。MathWorks公式の技術記事によれば、1990年に「Simulink」としてリリースされた(元は「Simulab」という名称であったが、バージョン4(1992年)で「SIMULINK」に改名されたと英語版Wikipediaに記載されている)。個々のブロック(積分器、ゲイン、加算器など)を図として結線することで、常微分方程式で表される動的システムを、テキストコードを書かずに視覚的に構築・シミュレーションできるようにすることを目的としている。

なお、登場年については英語版Wikipediaのインフォボックスが出典無しに「1984年」と記載しているが、これはMathWorks社の創業年(1984年12月7日)と混同している可能性がある。より信頼できる一次資料であるMathWorks公式の技術記事「The Growth of MATLAB and The MathWorks over Two Decades」に基づき、本項では1990年を採用した。個人の設計者名についての記述は、日本語版・英語版Wikipediaのいずれにも確認できなかった。

## 特徴

- グラフィカルなブロック図によるシステム設計インターフェース
- MATLABとの緊密な統合(MATLABを駆動、またはMATLABからスクリプト制御可能)
- 制御理論、デジタル信号処理などの分野で広く利用
- C言語によるリアルタイムシステム向けの自動コード生成に対応
- Stateflow(状態機械)、Simscape(物理モデリング)などのアドオン製品群と連携
- MATLABプロダクトファミリの一つとして、MATLABとともに動作する

## 影響を受けた言語

- [MATLAB](matlab.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現在も開発が継続中の現役の商用製品である(status: active)。最新版は24.2(R2024b、2024年9月リリース)。制御工学・信号処理・自動車・航空宇宙などの分野で、モデルベース設計の標準的な環境として広く使われている。

## Hello World

Simulinkはブロック図をベースとしたビジュアルな開発環境であるため、テキストコードとしての「Hello World」に相当する例は本質的に存在しにくく、日本語版・英語版Wikipediaのいずれにもコード例の掲載は確認できなかった。

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Simulink)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Simulink)
