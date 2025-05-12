import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map CLI language flags to actual file extensions
const EXT_MAP = {
  js: 'js',
  ts: 'ts',
  tsx: 'tsx'
};

export function copyComponent(name, lang, dest) {
  const ext = EXT_MAP[lang];

  if (!ext) {
    console.error(`Unsupported language: ${lang}`);
    process.exit(1);
  }

  const fileName = `${name}.${ext}`;
  const sourcePath = path.join(__dirname, `../components/${name}/${fileName}`);
  const destPath = path.join(dest, fileName);

  if (!fs.existsSync(sourcePath)) {
    console.error(`Component file not found: ${sourcePath}`);
    process.exit(1);
  }

  fs.copyFileSync(sourcePath, destPath);
  console.log(`✅ ${fileName} copied to ${destPath}`);
}
