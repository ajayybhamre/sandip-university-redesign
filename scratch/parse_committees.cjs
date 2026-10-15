const fs = require('fs');
const html = fs.readFileSync('scratch/official_committees.html', 'utf8');

// Extract all links & text inside committee main section
const bodyText = html.replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0);

console.log('Body lines snippet:');
const startIdx = bodyText.findIndex(l => l.toLowerCase().includes('commitee') || l.toLowerCase().includes('committee'));
console.log('Index:', startIdx);
console.log(bodyText.slice(startIdx, startIdx + 150).join('\n'));
