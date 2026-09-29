import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src/assets/images/green-campus');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const baseUrl = 'https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/images/';
const files = [
  'green01.png',
  'green02.png',
  'green03.png',
  'green04.png',
  'green05.png',
  'green06.png',
  'green07.png',
  'green08.png',
  'green09.png',
  'green010.png',
  'green011.png'
];

async function downloadImages() {
  for (const file of files) {
    const url = baseUrl + file;
    const dest = path.join(targetDir, file);
    console.log(`Downloading ${url} -> ${dest}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${file} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${file}:`, err);
    }
  }
}

downloadImages();
