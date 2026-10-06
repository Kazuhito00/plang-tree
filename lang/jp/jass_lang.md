# JASS

- 登場年: 2002年
- 設計者: Blizzard Entertainment
- パラダイム: scripting, procedural, event-driven
- 系統: scripting

## 解決したかった課題

Blizzard Entertainmentは、2002年にリリースしたリアルタイムストラテジーゲーム『Warcraft III』において、同梱のマップ編集ツールWorld Editorを使うユーザーが、ユニットへの命令、天候や時間帯の変更、サウンド再生・テキスト表示、地形の操作など、ゲーム世界のほぼすべての側面を細かく制御できるようにしたいと考えた。

そこでイベント駆動型の広範なAPIを備えたスクリプト言語JASSを開発し、World Editorに組み込んで提供した。マップ制作者はトリガーと呼ばれるイベント条件・アクションの仕組みを通じて、あるいはJASSコードを直接記述することで、カスタムシナリオやMODを作成できるようになった。

## 特徴

- イベント駆動型のAPIを備え、ゲーム世界のほぼすべての要素を制御できる
- 大文字・小文字を区別する(Delphiに似た構文だが、Delphi自体とは異なりcase-sensitiveである、との情報が一次資料以外の補助的な資料で確認された)
- 手続き型を基本としつつ、ユーザー側の拡張(vJassなど)によりC++風のオブジェクト指向的な機能が追加されている
- Warcraft IIIのWorld Editorに組み込まれる形で提供される
- The Jass ValultやHive Workshopといったコミュニティによって現在も利用・拡張が続けられている

## 影響を受けた言語

一次資料(英語版Wikipedia)上では明確な影響元は確認できなかった。なお補助的に参照したファンサイトの情報によれば構文はDelphiに近いとされるが、Delphi自体は本データセットに未収録である。

## 影響を与えた言語

特になし


## 現在の位置づけ

JASSは後継作『StarCraft II』ではGalaxyスクリプトに置き換えられたが、『Warcraft III』自体は現在も稼働しており、The Jass ValultやHive Workshopといったコミュニティフォーラムを中心に、カスタムマップ制作用のスクリプト言語として現在もniche(隙間的)に使われ続けている。

なお英語版Wikipediaには「JASS (scripting language)」という項目名は存在するものの、実体は『Warcraft III: Reign of Chaos』の記事へのリダイレクトであり、そのリダイレクト先にもJASS言語自体を詳しく解説する記述は含まれていない。本ドラフトの一部情報(Delphi風構文である点、Blizzard Entertainmentが開発した点の詳細等)は英語版Wikipedia本文で直接確認できたものではなく、補助的なファンサイト(Warcraft Wiki)を参照した。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/JASS_(scripting_language))
