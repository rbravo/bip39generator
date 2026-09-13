const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'public', 'tailwind.css');
const wordsPath = path.join(__dirname, 'public', 'bip-0039', 'english.txt');
const qrCodePath = path.join(__dirname, 'public', 'qrcode.js');
const qrCodeUtf8Path = path.join(__dirname, 'public', 'qrcode_UTF8.js');
const distDir = path.join(__dirname, 'dist');
const css = fs.readFileSync(cssPath, 'utf8');
const words = fs.readFileSync(wordsPath, 'utf8');
const qrCode = fs.readFileSync(qrCodePath, 'utf8');
const qrCodeUtf8 = fs.readFileSync(qrCodeUtf8Path, 'utf8');
const qrCodeBase64 = Buffer.from(qrCode, 'utf8').toString('base64');
const qrCodeUtf8Base64 = Buffer.from(qrCodeUtf8, 'utf8').toString('base64');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

function createOfflineHtml(sourceName, outputName, includeTailwindCss) {
  let html = fs.readFileSync(path.join(__dirname, 'public', sourceName), 'utf8');
  if (includeTailwindCss) {
    html = html.replace(/<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/i, '');
    html = html.replace(/<!-- TAILWIND_CSS_PLACEHOLDER -->/i, `<style>\n${css}\n</style>`);
  }
  html = html.replace(/<script src="qrcode\.js"><\/script>\s*<script src="qrcode_UTF8\.js"><\/script>/i,
    `<script>\n\neval(atob('${qrCodeBase64}'));\neval(atob('${qrCodeUtf8Base64}'));\nwindow.qrcode = qrcode;\n</script>`);
  html = html.replace(/<\/body>/i, `<script id="english-words" type="text/plain">\n${words}\n</script>\n</body>`);
  fs.writeFileSync(path.join(distDir, outputName), html);
}

createOfflineHtml('index.html', 'index.html', true);
createOfflineHtml('indexMobile.html', 'indexMobile.html', false);

console.log('Offline pages generated in dist/.');