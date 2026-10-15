import fs from 'fs';

const html = fs.readFileSync('C:/Users/utkar/.gemini/antigravity-ide/brain/f0feccec-5dad-4740-8a4d-6ad04f8191cb/scratch/green_page.html', 'utf8');

const idx = html.indexOf('Green Campus Initiatives </h2>');
console.log(html.substring(idx, idx + 10000));
