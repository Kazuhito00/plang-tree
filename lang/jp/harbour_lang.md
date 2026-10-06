# Harbour

- 登場年: 1999年
- 設計者: Antonio Linares
- パラダイム: procedural, object-oriented, query
- 系統: domain-specific

## 解決したかった課題

Nantucket社/Computer Associates社が開発した商用のClipper(CA-Clipper)は、DOS向け業務アプリケーション開発で広く使われていたが、Windows時代への移行に失敗し、1990年代半ばに商用としての新規開発が終息してしまった。既存の大量のClipperコードベースを活かしつつ、Windows・Linux・macOS・BSD・Android・iOSなど複数のプラットフォームへネイティブにコンパイルできるオープンソースの後継コンパイラが求められていた。Antonio Linaresが1999年3月にHarbourプロジェクトを開始し、「港(Harbour)」という名称もClipper船の停泊地という洒落から取られている。

## 特徴

- Clipperとほぼ完全な互換性を持つ文法・ランタイムライブラリを提供する「write once, compile anywhere」設計
- マクロ演算子によって実行時に有効な式を動的にコンパイルできる
- クラス継承を伴うオブジェクト指向プログラミングをサポート
- 複数のデータベースドライバ(RDDアーキテクチャ)により様々なデータ形式に対応
- GCC、Clang、MSVCなど多様なCコンパイラ上でビルド可能
- HBQtやFiveWinなど複数のGUIライブラリの選択肢がある

## 影響を受けた言語

- [Clipper](clipper_lang.md)
- [dBase](dbase.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Harbourは商用Clipperが終息した後も、オープンソースコミュニティによって開発が継続されているxBase系言語である。2009年頃にはViktor SzakátsとPrzemysław Czerpakらの主導で大幅な再設計が行われ、現在も複数のOS・GUIライブラリに対応する形で小規模ながら活発なコミュニティにより保守が続けられている、ニッチな位置づけの言語である。

## Hello World

一次資料上で具体的なHello Worldのコード例は確認できなかったが、Clipperと高い互換性を持つため、基本構文はClipperのそれに準じると考えられる。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Harbour_(programming_language))
- [Wikipedia(日本語)] なし
