[[Japanese](README.md)/[English](README_EN.md)]

# plang-tree

プログラミング言語の系統図(約600言語)です。<br>
言語同士の関係を「系統」「設計への影響」「構文上の影響」「実装・処理系上の関係」の4種類に分けて描画します。

<!-- TODO: スクリーンショットを assets/screenshot.png に置いて有効化
<img width="1556" height="811" alt="screenshot" src="assets/screenshot.png" />
-->

# Web Demo
ブラウザ上で系統図を確認できます。
* https://kazuhito00.github.io/plang-tree/

# Features
以下の特徴があります。
- 年代(横軸)× 系統(縦の帯)で約600言語の関係を俯瞰
- エッジを4種類(系統・設計への影響・構文上の影響・実装/処理系上の関係)に分類して線種で区別
- 系統 / パラダイム / 位置づけ / Wikipedia記載の有無 で絞り込み、非表示になった分は詰めて再配置
- 言語名・概要・設計者での検索、`A vs B` での系譜比較
- クリック/ホバーで祖先・子孫の系譜をハイライト、右下のミニマップで全体を俯瞰
- 各言語の詳細記事(日本語/英語)
- 日本語/英語UI切り替え

# Purpose of This Repository
以下を目的としています。
- プログラミング言語の「系統(直接の派生)」と「影響」を区別して整理
- 各言語が「何を解決したかったのか」を、設計思想の面から辿れるようにする
- データ(JSON)と表示(HTML)を分離し、言語の追加・修正をしやすくする

# Requirements
```
Node.js 20 or later   (データ検証・index.html生成用)
Python 3 (任意)       (ローカル確認用の簡易サーバー)
```
ビルド以外の実行時依存パッケージはありません。

# Installation

```bash
# リポジトリクローン
git clone https://github.com/Kazuhito00/plang-tree
cd plang-tree
```

# Build

### index.html の生成
`index.html` は `index.template.html` と `data/languages.json` から生成します(リポジトリには含めません)。<br>
`languages.json` を更新した場合は必ず再実行してください。
```bash
node scripts/validate.js   # データ検証
node build_index.js        # index.html を生成
```

# Usage

### ローカルで確認
```bash
python -m http.server 8000
# http://localhost:8000/
```

### 言語を追加する
1. `data/languages.json` にエントリを追加(`influenced_by` の親idは実在するものだけ)
2. `lang/jp/<id>.md` を作成(既存ファイルと同じ構成)
3. `node scripts/validate.js` で検証して Pull Request

### データ構造
`data/languages.json` は言語オブジェクトの配列です。

| フィールド | 説明 |
|---|---|
| `id`, `name`, `name_en` | 識別子 / 表示名 / 英語表示名(任意) |
| `year`, `designers` | 登場年 / 設計者 |
| `paradigms`, `family`, `status` | パラダイム / 系統 / 位置づけ |
| `influenced_by` | `[{ "id": "親id", "type": "lineage\|influenced\|syntax\|implementation" }]` |
| `problem`, `summary` (+ `_en`) | 解決したかった課題 / 現在の位置づけ |
| `file` | 解説記事 `lang/jp/<id>.md` |
| `wikipedia_ja`, `wikipedia_en` | 参照元 Wikipedia 記事(なければ `null`) |

エッジは `influenced_by` のみが正で、「影響を与えた言語」は自動導出されます。

# Project Structure

```text
README.md                # README（日本語）
README_EN.md             # README（英語）
CONTENT_LICENSE.md       # データ・記事のライセンスと出典
index.template.html      # メイン画面のテンプレート(データ埋め込み前)
lang.html                # 解説記事の表示ページ
build_index.js           # languages.json を埋め込んで index.html を生成
scripts/
  validate.js            # データ整合性チェック
data/
  languages.json         # 言語データ
lang/
  jp/                    # 解説記事（日本語）
  en/                    # 解説記事（英語）
assets/                  # 記事内で使用する画像
.github/workflows/       # GitHub Pages へのデプロイ
```

# Author
高橋かずひと(https://x.com/KzhtTkhs)

# License
ソースコードは [MIT license](LICENSE) です。<br>
`data/` と `lang/`(言語データ・解説記事)は [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ja) です。詳細と出典は [CONTENT_LICENSE.md](CONTENT_LICENSE.md) を参照してください。

# License(Wikipedia)
各言語の事実関係は主に Wikipedia(日本語版・英語版)を参照して作成しています。参照元の記事は各言語のデータおよび解説記事の「外部リンク」に記載しています。
