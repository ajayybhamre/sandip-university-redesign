const fs = require('fs');
const html = fs.readFileSync('scratch/official_feedback.html', 'utf8');

const regex = /<a[^>]+href=["']?([^"' >]+)["']?[^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  const href = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').trim();
  if (text.length > 0 && (text.includes('Form') || text.includes('Academic') || text.includes('Feedback') || href.includes('pdf') || href.includes('.php'))) {
    console.log(`${text} ==> ${href}`);
  }
}
