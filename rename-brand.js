const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('./src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace email
  content = content.replace(/kalanalabs@gmail\.com/g, 'radev@gmail.com');
  
  // Replace Kalana Labs (case insensitive but matching exactly those words)
  content = content.replace(/Kalana Labs/gi, 'RaDev');
  
  // Replace Kalana (where it is a standalone word, not in a URL or filename)
  content = content.replace(/(?<![a-zA-Z\/-])Kalana(?![a-zA-Z0-9_-])/gi, 'RaDev');
  
  // Replace KALANA (all caps)
  content = content.replace(/(?<![a-zA-Z\/-])KALANA(?![a-zA-Z0-9_-])/g, 'RADEV');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
});

console.log("Brand rename complete.");
