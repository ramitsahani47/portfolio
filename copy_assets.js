const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    src: 'C:\\Users\\ramit\\.gemini\\antigravity-ide\\brain\\baae2a7e-bf95-4f45-b9b5-fcda013ad234\\ramit_sahani_hero_portrait_1785423102101.png',
    dest: path.join(targetDir, 'hero_portrait.png')
  },
  {
    src: 'C:\\Users\\ramit\\.gemini\\antigravity-ide\\brain\\baae2a7e-bf95-4f45-b9b5-fcda013ad234\\ramit_sahani_workspace_1785423117296.png',
    dest: path.join(targetDir, 'about_workspace.png')
  },
  {
    src: 'C:\\Users\\ramit\\.gemini\\antigravity-ide\\brain\\baae2a7e-bf95-4f45-b9b5-fcda013ad234\\ramit_sahani_collaboration_1785423131971.png',
    dest: path.join(targetDir, 'about_collaboration.png')
  }
];

images.forEach(img => {
  if (fs.existsSync(img.src)) {
    fs.copyFileSync(img.src, img.dest);
    console.log(`Copied ${img.src} -> ${img.dest}`);
  } else {
    console.error(`Source missing: ${img.src}`);
  }
});
