# C/AL

- 登場年: 1995年(推定)
- 設計者: Michael Nielsen
- パラダイム: procedural
- 系統: domain-specific

## 解決したかった課題

業務アプリケーションパッケージNavision(後のMicrosoft Dynamics NAV)では、データベース内のレコードを取得・挿入・変更する処理を、汎用プログラミング言語を使わずに簡潔に記述できる専用の言語が求められた。Michael Nielsenは、開発環境C/SIDE(Client/Server Integrated Development Environment)に統合された言語C/ALを設計し、この課題に応えた。

C/ALはPascalの流れを汲む命令型言語であり、汎用的な計算のためではなく、データベース操作に特化した設計になっている。

## 特徴

- Pascalの影響を受けた命令型(imperative)構文を持つ
- データベース内のレコードの取得・挿入・変更に特化した「データベース専用言語」である
- コンソール(標準出力)を持たず、開発時の出力はダイアログボックスを通じて行われる
- C/SIDEという専用の統合開発環境の中でのみ利用される
- Microsoft Dynamics NAV(旧Navision)およびMicrosoft Dynamics 365 Business Centralの初期で使用された

## 影響を受けた言語

- [Pascal](pascal.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

C/ALはMicrosoft Dynamics NAVのバージョン14まで使用されたが、Microsoft Dynamics 365 Business Centralへの移行に伴い、後継言語ALに置き換えられて廃止された(status: legacy)。

現在新規に採用されることはなく、既存の古いDynamics NAV導入環境の保守という文脈でのみ言及される言語となっている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/C/AL)
