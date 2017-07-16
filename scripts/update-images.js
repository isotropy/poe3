const fs = require("fs");
const fsExtra = require("fs-extra");
const path = require("path");
const mkdirp = require("mkdirp");

function allFilesSync(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);

    fileList.push(
      fs.statSync(filePath).isDirectory()
        ? { name: file, entries: allFilesSync(filePath) }
        : file
    );
  });
  return fileList;
}

//Empty the images directory
fsExtra.removeSync("src/site/dev/images");
fs.mkdirSync("src/site/dev/images");

const allFiles = allFilesSync("src/site/dev/sources/images");

//Recreate files
(function makeFiles(dirPath, nodes) {
  const currentDir = dirPath.join("/");

  nodes.forEach(node => {
    if (typeof node === "string") {
      convertToBase64(dirPath, node);
    } else {
      makeFiles(dirPath.concat(node.name), node.entries);
    }
  });
})([], allFiles);

function template(base64Encoded) {
  return `export default atob("${base64Encoded}");`;
}

function convertToBase64(dirPath, file) {
  const fullPath = dirPath.concat(file).join("/");
  const resolvedPath = path.join("src/site/dev/sources/images", fullPath);

  //get target paths
  const destPath = path.join("src/site/dev/images", fullPath);
  const targetDir = path.dirname(destPath);
  const targetFileWithoutExt = path.basename(destPath, path.extname(destPath));

  //make sure target exists
  mkdirp.sync(targetDir);

  //read
  const contents = fs.readFileSync(resolvedPath);
  const jsFileContents = template(contents.toString("base64"));

  fs.writeFileSync(
    path.join(targetDir, `${targetFileWithoutExt}.js`),
    jsFileContents
  );
}
