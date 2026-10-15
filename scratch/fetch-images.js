const fs = require('fs');
const path = require('path');

async function main() {
  const res = await fetch('https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/gender-sensitivity.php');
  const html = await res.text();
  
  // Find all img tags
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const imgSources = [];
  while ((match = regex.exec(html)) !== null) {
    imgSources.push(match[1]);
  }
  console.log('All image sources found:', imgSources);

  // Filter gender equity images
  const genderImgs = imgSources.filter(s => s.includes('gender') || s.includes('equity') || s.includes('images/'));
  console.log('Filtered images:', genderImgs);

  const outDir = path.join(__dirname, '../src/assets/images/gender-sensitivity');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (let i = 1; i <= 8; i++) {
    const targetName = `gender-equity-${i}.jpg`;
    // Find candidate URL
    const relUrl = imgSources.find(s => s.includes(`gender-equity-${i}`) || s.includes(`gender-${i}`));
    console.log(`Matching for ${i}:`, relUrl);
    
    let fullUrl = relUrl;
    if (relUrl && !relUrl.startsWith('http')) {
      fullUrl = new URL(relUrl, 'https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/gender-sensitivity.php').href;
    }
    console.log(`Full URL ${i}:`, fullUrl);
    
    if (fullUrl) {
      try {
        const imgRes = await fetch(fullUrl);
        if (imgRes.ok) {
          const buffer = Buffer.from(await imgRes.arrayBuffer());
          fs.writeFileSync(path.join(outDir, targetName), buffer);
          console.log(`Successfully saved ${targetName} (${buffer.length} bytes)`);
        } else {
          console.log(`Failed to fetch ${fullUrl}: status ${imgRes.status}`);
        }
      } catch (e) {
        console.error(`Error downloading ${fullUrl}:`, e.message);
      }
    }
  }
}

main();
