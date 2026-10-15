const fs = require('fs');
const html = fs.readFileSync('scratch/official_committees.html', 'utf8');

const regexTag = /<[^>]+>/g;

// Find all committee tables
const tables = html.match(/<table[\s\S]*?<\/table>/gi) || [];
console.log('Tables found:', tables.length);

tables.forEach((tbl, idx) => {
  console.log(`\n=== TABLE ${idx + 1} ===`);
  const rows = tbl.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  rows.forEach(r => {
    const cols = (r.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || []).map(c => c.replace(regexTag, '').replace(/&amp;/g, '&').replace(/&nbsp;/gi, ' ').replace(/\s+/g, ' ').trim());
    console.log(cols.join(' | '));
  });
});

// Also search for tab titles or committee titles
const categoryMatches = html.match(/<a[^>]*data-toggle=["']tab["'][^>]*>([\s\S]*?)<\/a>/gi) || html.match(/<li[^>]*>[\s\S]*?SC \/ ST[\s\S]*?<\/li>/gi) || [];
console.log('\nCategories found:');
const catRegex = /<a[^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = catRegex.exec(html)) !== null) {
  const text = m[1].replace(regexTag, '').trim();
  if (text.includes('Committee') || text.includes('Cell') || text.includes('Squad') || text.includes('Grievance') || text.includes('Groups')) {
    console.log('-', text, '==>', m[0]);
  }
}
