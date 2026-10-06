// data/languages.json の内容を index.template.html に機械的に埋め込み、index.html を生成する。
// languages.json を更新した場合は必ずこのスクリプトを再実行して index.html を再生成すること。
const fs = require('fs');
const path = require('path');

const root = __dirname;
const jsonPath = path.join(root, 'data', 'languages.json');
const templatePath = path.join(root, 'index.template.html');
const outPath = path.join(root, 'index.html');

const json = fs.readFileSync(jsonPath, 'utf8');
const template = fs.readFileSync(templatePath, 'utf8');

const out = template.replace('__LANG_DATA_JSON__', () => json.trim());
fs.writeFileSync(outPath, out, 'utf8');
console.log(`Wrote ${outPath} (${out.length} bytes)`);
