const fs = require('fs');

async function main() {
  const res = await fetch('https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/energy-conservation-measures.php');
  const html = await res.text();
  
  // Extract text inside body or main content tags
  console.log('--- FULL PAGE BODY HTML ---');
  console.log(html);
}

main();
