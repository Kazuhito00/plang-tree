# plang-tree

プログラミング言語の系統図(約600言語)。言語同士の関係を「系統(直接の派生)」「設計への影響」「構文上の影響」「実装・処理系上の関係」の4種類に分けて描画します。日本語/英語に対応。

**公開サイト**: https://kazuhito00.github.io/plang-tree/

## 主な機能

- 年代(横軸)× 系統(縦の帯)の系統図。ドラッグで移動、ホイールでズーム、右下のミニマップで全体を俯瞰
- 系統 / パラダイム / 位置づけ / Wikipedia記載の有無 で絞り込み(非表示になった分は詰めて再配置)
- 言語名・概要・設計者での検索、`A vs B` での系譜比較
- クリック/ホバーで祖先・子孫の系譜をハイライト
- 各言語の詳細記事(`lang/jp`, `lang/en`)

## 構成

```
data/languages.json     言語データ(唯一の正。エッジは influenced_by のみ)
lang/jp/*.md, lang/en/* 各言語の解説記事
index.template.html     メイン画面のテンプレート(データ埋め込み前)
lang.html               解説記事の表示ページ
build_index.js          languages.json を埋め込んで index.html を生成
scripts/validate.js     データ整合性チェック
.github/workflows/      GitHub Pages へのデプロイ
```

`index.html` は生成物のためコミットしません(CIでビルドします)。

## ローカルで確認

```bash
node scripts/validate.js   # データ検証
node build_index.js        # index.html を生成
python -m http.server 8000 # http://localhost:8000/
```

## データ構造

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

「影響を与えた言語」は `influenced_by` から自動導出されます(JSONには持ちません)。

## 言語を追加するには

1. `data/languages.json` にエントリを追加(`influenced_by` の親idは実在するものだけ)
2. `lang/jp/<id>.md` を作成(既存ファイルと同じ構成)
3. `node scripts/validate.js` で検証 → PR

## ライセンス

- コード: [MIT](LICENSE)
- データ・解説記事(`data/`, `lang/`): CC BY-SA 4.0 — 詳細と出典は [CONTENT_LICENSE.md](CONTENT_LICENSE.md)
