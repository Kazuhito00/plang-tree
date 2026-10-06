// data/languages.json の整合性チェック(CIで実行)。
// - id重複 / influenced_by の参照切れ / file が指す日本語mdの存在 / 必須フィールド
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data', 'languages.json'), 'utf8'));
const EDGE_TYPES = ['lineage', 'influenced', 'syntax', 'implementation'];
const REQUIRED = ['id', 'name', 'year', 'designers', 'paradigms', 'family', 'influenced_by', 'status', 'problem', 'summary', 'file'];

const errors = [];
const ids = new Set();
for (const d of data) {
  if (ids.has(d.id)) errors.push(`重複id: ${d.id}`);
  ids.add(d.id);
  for (const k of REQUIRED) if (!(k in d)) errors.push(`${d.id}: 必須フィールド欠落 ${k}`);
}
for (const d of data) {
  for (const e of d.influenced_by || []) {
    if (!ids.has(e.id)) errors.push(`${d.id}: influenced_by の参照切れ -> ${e.id}`);
    if (e.type && !EDGE_TYPES.includes(e.type)) errors.push(`${d.id}: 不明なエッジ種別 ${e.type}`);
  }
  if (d.file && !fs.existsSync(path.join(root, d.file))) errors.push(`${d.id}: ファイルなし ${d.file}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} 件のエラー`);
  process.exit(1);
}
console.log(`OK: ${data.length} languages`);
