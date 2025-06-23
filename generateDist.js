const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'index.html');
const cssPath = path.join(__dirname, 'public', 'tailwind.css');
const wordsPath = path.join(__dirname, 'public', 'bip-0039', 'english.txt');
const distDir = path.join(__dirname, 'dist');
const distHtmlPath = path.join(distDir, 'index.html');

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const words = fs.readFileSync(wordsPath, 'utf8');

// Insere o CSS no <head>
const htmlWithCss = html.replace(
  /<link\b[^>]*rel=["']stylesheet["'][^>]*>/i,
  `<style>\n${css}\n</style>`
);

// Insere o english.txt em um <script> no final do <body>
const finalHtml = htmlWithCss.replace(
  /<\/body>/i,
  `<script id="english-words" type="text/plain">\n${words}\n</script>\n</body>`
);

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

fs.writeFileSync(distHtmlPath, finalHtml);

console.log('dist/index.html gerado com sucesso!');