const fs = require('fs');

async function main() {
  const res = await fetch('https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/energy-conservation-measures.php');
  const html = await res.text();
  
  // Clean tags and print relevant main content block
  const mainMatch = html.match(/<body[\s\S]*<\/body>/i);
  if (mainMatch) {
    const bodyHtml = mainMatch[0];
    
    // Find all links (a tags) and paragraphs (p tags) or table/divs
    console.log('=== PARAGRAPHS & CONTENT ===');
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch;
    while ((pMatch = pRegex.exec(bodyHtml)) !== null) {
      const text = pMatch[1].replace(/<[^>]+>/g, '').trim();
      if (text) console.log('P:', text);
    }

    console.log('\n=== HEADINGS ===');
    const hRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
    let hMatch;
    while ((hMatch = hRegex.exec(bodyHtml)) !== null) {
      const text = hMatch[1].replace(/<[^>]+>/g, '').trim();
      if (text) console.log('H:', text);
    }

    console.log('\n=== LINKS (PDF / DOCS) ===');
    const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let aMatch;
    while ((aMatch = aRegex.exec(bodyHtml)) !== null) {
      const href = aMatch[1];
      const text = aMatch[2].replace(/<[^>]+>/g, '').trim();
      if (href.includes('pdf') || href.includes('doc') || text.includes('Document') || text.includes('Audit') || text.includes('Energy') || text.includes('Solar')) {
        console.log(`LINK: "${text}" => ${href}`);
      }
    }
  }
}

main();
