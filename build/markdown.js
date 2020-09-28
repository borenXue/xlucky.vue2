const fs = require('fs');
const path = require('path');
const glob = require('glob');
const MarkdownIt = require('markdown-it');
const { createVuelivedemoPlugin } = require('markdown-it-plugin-vue-livedemo');

const md = MarkdownIt();
md.use(
  createVuelivedemoPlugin({
    scroller: '.layout-content',
    codeSandBoxDataFn: 'codeSandBoxDataFn',
    codepenDataFn: 'codepenDataFn',
  }),
);

function getFiles() {
  return new Promise((resolve, reject) => {
    glob(path.resolve(__dirname, '../docs/*.md'), {}, (err, files) => {
      if (err) reject(new Error(err));

      glob(path.resolve(__dirname, '../components/*/*.md'), {}, (err2, files2) => {
        if (err2) reject(new Error(err2));
        resolve([...files, ...files2]);
      });
    });
  });
}

module.exports = function markdown(file) {
  if (typeof file === 'string') {
    singleMarkdownFileHandler(file);
    return;
  }
  getFiles()
    .then((files) => {
      files.forEach((item) => singleMarkdownFileHandler(item));
    })
    .catch((err) => {
      throw err;
    });
};

module.exports();

function singleMarkdownFileHandler(file) {
  const sourceMarkdown = fs.readFileSync(file).toString();
  const result = md.render(sourceMarkdown || '');
  const fileRelativePath = file.replace(`${path.resolve(__dirname, '../')}/`, '');
  const outputJsonFile = path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '../lib/docsite/autogen' : '../autogen');

  const item = [
    fileRelativePath,
    {
      source: sourceMarkdown,
      html: result,
    },
  ];

  let outputFile = path.resolve(outputJsonFile, fileRelativePath);
  require('mkdirp').sync(path.dirname(outputFile));

  outputFile = outputFile.replace(path.extname(outputFile), '.html');
  fs.writeFileSync(outputFile, result);
  return item;
}
