# Object Pascal(Delphi)

- 登場年: 1986年
- 設計者: Apple/Borland(後にAnders Hejlsbergら)
- パラダイム: object-oriented, procedural
- 系統: algol-pascal

## 解決したかった課題

1980年代半ば、Macintoshの登場によりGUIアプリケーション開発が急速に重要になったが、当時のPascalにはオブジェクト指向の概念がなく、ウィンドウやボタンなどのGUI部品を柔軟に抽象化する手段が不足していた。

AppleはMac向けにオブジェクト指向拡張を加えたObject Pascalを開発し、後にBorlandがこれを引き継ぎ発展させた。

特にAnders HejlsbergがBorlandで手がけたDelphi環境の登場により、Pascalの読みやすい構文を保ったままドラッグ&ドロップでGUIを組み立てられるRAD(高速アプリケーション開発)ツールが実現し、Windowsアプリ開発における実用的な選択肢として広く受け入れられた。

## 特徴

- クラス・継承・多態性を備えたオブジェクト指向機能
- Pascal譲りの読みやすく厳格な構文
- Delphi環境と統合されたビジュアルなフォームデザインとRAD開発
- コンポーネントベースのアーキテクチャによる再利用性の高さ
- ネイティブコンパイルによる高速な実行性能
- データベースアクセス機能をあらかじめ組み込んだ業務アプリ向け設計

## 影響を受けた言語

- [Pascal](pascal.md)
- [Smalltalk](smalltalk.md)
- [Simula](simula.md)


## 影響を与えた言語

- [Modula-3](modula_3.md)
- [C#](c_sharp.md)
- [Oxygene](oxygene_lang.md)
- [Nim](nim.md)


## 現在の位置づけ

Object Pascal(Delphi)は現在nicheな位置づけとなっており、かつてほどの勢いはない。

しかしDelphi環境の継続的な進化により一部の業務システム開発では今も使われ続けている。1990年代のRADブームを牽引した言語として、その設計思想はC#をはじめとする後続言語にも受け継がれている。

## Hello World

```
program HelloWorld;

{$APPTYPE CONSOLE}

begin
  Writeln('Hello, World!');
  Readln;
end.
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Object_Pascal)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Object_Pascal)
