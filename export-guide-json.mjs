/**
 * สร้าง Data/guide.json จาก Js/Config.js (รันครั้งเดียวเมื่อต้องการอัปเดตไฟล์อัปโหลด Git)
 * รัน: node scripts/export-guide-json.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const configPath = join(root, 'Js', 'Config.js');
const outPath = join(root, 'Data', 'guide.json');

const s = readFileSync(configPath, 'utf8');
const marker = 'const GUIDE_DEMO_CONFIG = ';
const start = s.indexOf(marker);
if (start === -1) throw new Error('ไม่พบ GUIDE_DEMO_CONFIG ใน Config.js');
let i = start + marker.length;
while (i < s.length && /\s/.test(s[i])) i++;
if (s[i] !== '{') throw new Error('คาดหวัง { หลัง GUIDE_DEMO_CONFIG');

let depth = 0;
let inSingle = false;
let inDouble = false;
let inTemplate = false;
let escape = false;
const begin = i;

for (; i < s.length; i++) {
    const c = s[i];
    const prev = s[i - 1];

    if (inTemplate) {
        if (c === '`' && !escape) inTemplate = false;
        escape = c === '\\' && !escape;
        continue;
    }
    if (inSingle) {
        if (c === "'" && !escape) inSingle = false;
        escape = c === '\\' && !escape;
        continue;
    }
    if (inDouble) {
        if (c === '"' && !escape) inDouble = false;
        escape = c === '\\' && !escape;
        continue;
    }

    if (c === "'" || c === '"') {
        if (c === "'") inSingle = true;
        else inDouble = true;
        escape = false;
        continue;
    }
    if (c === '`') {
        inTemplate = true;
        escape = false;
        continue;
    }

    if (c === '/' && s[i + 1] === '/') {
        while (i < s.length && s[i] !== '\n') i++;
        continue;
    }
    if (c === '/' && s[i + 1] === '*') {
        i += 2;
        while (i < s.length - 1 && !(s[i] === '*' && s[i + 1] === '/')) i++;
        i++;
        continue;
    }

    if (c === '{') depth++;
    else if (c === '}') {
        depth--;
        if (depth === 0) {
            i++;
            break;
        }
    }
}

const objectLiteral = s.slice(begin, i).trim();
if (!objectLiteral.endsWith('}')) throw new Error('ปิดวงเล็บไม่ครบ');

const _GIMG = { bg: './Image/bg.jpg', av: './Image/ace.jpg' };
const fn = new Function('_GIMG', 'return (' + objectLiteral + ');');
const data = fn(_GIMG);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
console.log('เขียนแล้ว:', outPath);
