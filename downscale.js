const fs = require('fs');
const path = require('path');

const targetFiles = [
  'Clients.tsx',
  'Contact.tsx',
  'FAQ.tsx',
  'Portfolio.tsx',
  'Process.tsx',
  'Services.tsx',
  'Testimonials.tsx',
  'Footer.tsx'
];

const dir = 'src/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/';

const downscaleMap = {
  'text-6xl': 'text-4xl',
  'text-5xl': 'text-3xl',
  'text-4xl': 'text-2xl',
  'text-3xl': 'text-xl',
  'text-2xl': 'text-lg',
  'text-xl': 'text-base',
  'text-lg': 'text-sm'
};

targetFiles.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  content = content.replace(/(?<![a-z0-9:-])(text-[2-6]xl|text-xl|text-lg)(?![a-z0-9-])/g, (match, p1, offset, string) => {
    // Peek ahead to see if there is already a responsive text size in this class list
    // A class list is usually contained within quotes. We can just check the next 35 characters for simplicity,
    // making sure we don't cross a quote boundary.
    const lookahead = string.substring(offset, offset + 40).split('"')[0]; 
    const hasBreakpoint = /(sm:|md:|lg:|xl:|2xl:)text-[a-z0-9]+/.test(lookahead);
    
    const smaller = downscaleMap[match];
    if (hasBreakpoint) {
        return smaller;
    } else {
        return `${smaller} md:${match}`;
    }
  });

  fs.writeFileSync(path.join(dir, file), content);
});
console.log("Success");
