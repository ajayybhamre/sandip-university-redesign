const fs = require('fs');
const path = require('path');

const imageList = [
  { name: 'gender-equity-1.jpg', rel: 'images/gs/24 7 SURVEILLANCE.jpg' },
  { name: 'gender-equity-2.jpg', rel: 'images/gs/CCTV AROUND THE CAMPUS.jpg' },
  { name: 'gender-equity-3.jpg', rel: 'images/gs/FEMALE SECURITY GUARD AT HOSTEL.jpg' },
  { name: 'gender-equity-4.jpg', rel: 'images/gs/GIRLS COMMON ROOM.jpg' },
  { name: 'gender-equity-5.jpg', rel: 'images/gs/SANITARY NAPKIN VENDING MACHINE.jpg' },
  { name: 'gender-equity-6.jpg', rel: 'images/gs/SECURITY GUARDS AT EVERY GATE.jpg' },
  { name: 'gender-equity-7.jpg', rel: 'images/gs/SECURITY GUARDS AT EVERY ENTRANCE.jpg' },
  { name: 'gender-equity-8.jpg', rel: 'images/gs/Day Care Centre.jpg' },
];

async function main() {
  const baseUrl = 'https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/';
  const outDir = path.join(__dirname, '../src/assets/images/gender-sensitivity');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const item of imageList) {
    const fullUrl = new URL(item.rel, baseUrl).href;
    console.log(`Fetching: ${fullUrl}`);
    try {
      const res = await fetch(fullUrl);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(path.join(outDir, item.name), buffer);
        console.log(`Saved ${item.name} (${buffer.length} bytes)`);
      } else {
        console.error(`Failed ${fullUrl}: status ${res.status}`);
      }
    } catch (err) {
      console.error(`Error fetching ${fullUrl}:`, err.message);
    }
  }
}

main();
