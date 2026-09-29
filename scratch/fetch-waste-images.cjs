const fs = require('fs');
const path = require('path');

const imageList = [
  { name: 'waste-water-management-tank.jpg', rel: 'images/WAste-Water-Management-Tank.jpg' },
  { name: 'water-softner-tank.jpg', rel: 'images/Water-Softner-Tank.jpg' },
  { name: 'water-treatment-plant.jpg', rel: 'images/Water-Tratment-Plant.jpg' },
  { name: 'color-assigned-dustbins.jpg', rel: 'images/waste-management-01.jpg' },
  { name: 'segregation-of-waste.jpg', rel: 'images/Segregation of waste.jpg' },
];

async function main() {
  const baseUrl = 'https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/';
  const outDir = path.join(__dirname, '../src/assets/images/waste-management');
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
