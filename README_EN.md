[[Japanese](README.md)/[English](README_EN.md)]

# plang-tree

A family tree of programming languages (about 600 languages).<br>
Relationships are drawn in four distinct types: lineage, design influence, syntactic influence, and implementation/runtime relation.

<!-- TODO: add a screenshot at assets/screenshot.png and enable
<img width="1556" height="811" alt="screenshot" src="assets/screenshot.png" />
-->

# Web Demo
The tree can be explored in the browser.
* https://kazuhito00.github.io/plang-tree/

# Features
- Overview of about 600 languages by year (x-axis) and family (vertical bands)
- Edges classified into four types (lineage / design influence / syntactic influence / implementation relation), distinguished by line style
- Filtering by family, paradigm, status, and Wikipedia coverage; hidden languages are removed and the layout is repacked
- Search by name, summary, or designer, plus `A vs B` lineage comparison
- Click/hover to highlight ancestors and descendants; minimap at the bottom right
- Detailed article for each language (Japanese/English)
- Japanese/English UI toggle

# Purpose of This Repository
This repository aims to:
- Organize "lineage" (direct derivation) and "influence" of programming languages separately
- Make it possible to trace what problem each language was designed to solve
- Separate data (JSON) from presentation (HTML) so languages are easy to add and fix

# Requirements
```
Node.js 20 or later   (for data validation / generating index.html)
Python 3 (optional)   (simple local server)
```
There are no runtime dependencies other than the build step.

# Installation

```bash
git clone https://github.com/Kazuhito00/plang-tree
cd plang-tree
```

# Build

### Generating index.html
`index.html` is generated from `index.template.html` and `data/languages.json` (it is not committed).<br>
Re-run it whenever `languages.json` changes.
```bash
node scripts/validate.js   # validate data
node build_index.js        # generate index.html
```

# Usage

### Run locally
```bash
python -m http.server 8000
# http://localhost:8000/
```

### Adding a language
1. Add an entry to `data/languages.json` (parent ids in `influenced_by` must exist)
2. Create `lang/jp/<id>.md` (same structure as existing files)
3. Run `node scripts/validate.js`, then open a Pull Request

### Data structure
`data/languages.json` is an array of language objects.

| Field | Description |
|---|---|
| `id`, `name`, `name_en` | Identifier / display name / English display name (optional) |
| `year`, `designers` | First appeared / designers |
| `paradigms`, `family`, `status` | Paradigms / family / status |
| `influenced_by` | `[{ "id": "parent id", "type": "lineage\|influenced\|syntax\|implementation" }]` |
| `problem`, `summary` (+ `_en`) | Problem it solved / current standing |
| `file` | Article `lang/jp/<id>.md` |
| `wikipedia_ja`, `wikipedia_en` | Source Wikipedia articles (`null` if none) |

`influenced_by` is the single source of truth for edges; "influenced languages" are derived automatically.

# Project Structure

```text
README.md                # README (Japanese)
README_EN.md             # README (English)
CONTENT_LICENSE.md       # License and sources for data/articles
index.template.html      # Main page template (before data embedding)
lang.html                # Article viewer page
build_index.js           # Embeds languages.json to generate index.html
scripts/
  validate.js            # Data consistency check
data/
  languages.json         # Language data
lang/
  jp/                    # Articles (Japanese)
  en/                    # Articles (English)
assets/                  # Images used in articles
.github/workflows/       # GitHub Pages deployment
```

# Author
Kazuhito Takahashi (https://x.com/KzhtTkhs)

# License
The source code is under the [MIT license](LICENSE).<br>
`data/` and `lang/` (language data and articles) are under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). See [CONTENT_LICENSE.md](CONTENT_LICENSE.md) for details and sources.

# License(Wikipedia)
Facts about each language were compiled mainly from Wikipedia (Japanese and English editions). Source articles are linked in each language's data and in the "External links" section of its article.
