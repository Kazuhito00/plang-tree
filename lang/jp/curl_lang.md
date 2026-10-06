# Curl

- 登場年: 1998年
- 設計者: Steve Ward
- パラダイム: object-oriented, scripting
- 系統: scripting

## 解決したかった課題

Web開発では、1つのアプリケーションを構成するコンポーネントが、マークアップ言語、スクリプト言語、コンパイル言語といった異なる言語・ツール・フレームワークの組み合わせになってしまい、開発や保守が複雑になるという長年の課題があった。MITのSteve Wardらは、この問題を解決するため、コンテンツの記述(HTML相当)、スクリプティング(JavaScript相当)、そしてコンパイル可能な本格的なプログラミングという3つの層を、単一の言語・処理系の中に統合したCurlを1998年に設計した。

反射(reflection)機能を備えた多重継承可能なオブジェクト指向言語でありながら、実行時にはネイティブコードへとJITコンパイルされ、さらにネットワークに接続されていない状態でも動作できる「occasionally connected computing」もサポートしている。

## 特徴

- マークアップ・スクリプティング・コンパイル可能なプログラミングを単一言語に統合
- 多重継承をサポートするリフレクティブなオブジェクト指向言語
- ネイティブコードへのジャストインタイムコンパイル
- オフライン動作(occasionally connected computing)のサポート
- HTML、JavaScript、Lispからの影響を受けた設計

## 影響を受けた言語

- [JavaScript](javascript.md)
- [Lisp](lisp.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

MIT発のCurl Corporation、およびその後継企業によって商用製品として継続的に開発が続けられており、2025年10月にもバージョン8.0.15がリリースされている。2019年にLinux・macOS対応を終了し、現在はWindows専用となっているニッチな言語である。

## Hello World

Wikipedia記事内には具体的なコード例の記載がなく、一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Curl_(programming_language))
- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Curl_(プログラミング言語))
