# Boo

- 登場年: 2003年
- 設計者: Rodrigo B. de Oliveira
- パラダイム: object-oriented, functional
- 系統: jvm-dotnet

## 解決したかった課題

.NETのCommon Language Infrastructure(CLI)はUnicode対応や国際化、Webアプリケーション向けの豊富なライブラリを備えていたが、その上で使われる主要言語であるC#やVB.NETは、Pythonのような簡潔で読みやすい構文とは言い難かった。de Oliveiraは、.NETプラットフォームの持つ機能をフルに活かしつつ、Pythonライクな読みやすいインデント構文で書ける静的型付け言語を作りたいと考えた。あわせて、コンパイラの拡張機構(コンパイラステップやマクロ)によって言語自体を柔軟に拡張できるようにし、クロージャやジェネレータといった関数型的な機能も積極的に取り込んだ。

## 特徴

- Pythonに似たインデントベースの簡潔な構文を持ちながら、コンパイル時に型検査が行われる静的型付け言語である
- 型推論を備え、明示的な型注釈を省略しても多くの場面で静的型付けの恩恵を受けられる
- .NETのCLI上で動作し、C#やVB.NETで書かれたライブラリとシームレスに相互運用できる
- クロージャやジェネレータ、マクロなど関数型言語やLisp系言語に由来する機能を取り込んでいる
- コンパイラのパイプラインに独自のステップを追加できる拡張性を持ち、UnityエンジンのスクリプトいえUnityScript登場以前の言語としても採用された

## 影響を受けた言語

- [C#](c_sharp.md)
- [Python](python.md)


## 影響を与えた言語

- [Mirah](mirah_lang.md)


## 現在の位置づけ

niche(特定分野で使われるニッチな言語)として位置づけられ、かつてUnityエンジンのスクリプト言語の選択肢の一つとして使われたこともあったが、現在は限られたコミュニティでの利用にとどまっている。

## Hello World

```
print "Hello, World!"
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Boo_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Boo_%28programming_language%29)
