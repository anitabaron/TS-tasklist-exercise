import fs from "fs";
import path from "path";

// Tworzy folder, jeśli nie istnieje
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Funkcja do kopiowania folderu rekurencyjnie
function copyFolderSync(source, target) {
  ensureDirSync(target);
  fs.readdirSync(source).forEach((file) => {
    const srcFile = path.join(source, file);
    const destFile = path.join(target, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyFolderSync(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

// Definiujemy ścieżki
const srcStatic = path.join("src", "static");
const distStatic = path.join("dist", "static");
const distPath = "dist";

// Kopiowanie folderu `static`
copyFolderSync(srcStatic, distStatic);

// Przenoszenie `index.html` i `styles.css` do głównego `dist/`
fs.renameSync(
  path.join(distStatic, "index.html"),
  path.join(distPath, "index.html")
);
fs.renameSync(
  path.join(distStatic, "styles.css"),
  path.join(distPath, "styles.css")
);

console.log("✅ Build completed successfully!");
