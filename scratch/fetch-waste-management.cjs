const fs = require('fs');

async function main() {
  const url = 'https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/waste-management.php';
  const res = await fetch(url);
  const html = await res.text();
  
  console.log('=== HTML LENGTH ===', html.length);
  
  // Extract all img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let imgMatch;
  const imgs = [];
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    imgs.push({ src: imgMatch[1], raw: imgMatch[0] });
  }
  console.log('=== ALL IMAGES ===', imgs);

  // Extract all links
  const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let aMatch;
  const links = [];
  while ((aMatch = aRegex.exec(html)) !== null) {
    links.push({ href: aMatch[1], text: aMatch[2].replace(/<[^>]+>/g, '').trim() });
  }
  console.log('=== ALL LINKS ===', links.filter(l => l.href.includes('pdf') || l.href.includes('doc') || l.text.toLowerCase().includes('click') || l.text.toLowerCase().includes('view')));

  // Save full html for complete text inspection
  fs.writeFileSync('scratch/waste-management-raw.html', html);
}

main();
