import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
//-------------------------------------------------------
const buildFolder = `./destination`;
const srcFolder = `./source`;
//-------------------------------------------------------

export const path = {
  //-------------------------------------------------------
  build: { //ключ до файлів із результатами
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    script: `${buildFolder}/javascript/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  //-------------------------------------------------------
  src: { //ключ до файлів із джерел
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    script: `${srcFolder}/javascript/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, //Добавить фомарты(если нужно)
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  //-------------------------------------------------------
  watch: { //ключ до файлів для стеження
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    scss: `${srcFolder}/scss/**/*.scss`,
    script: `${srcFolder}/javascript/**/*.js`,
    jsx: `${srcFolder}/javascript/**/*.jsx`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,ico,svg,png,gif,webp}`,
  },
  //--------------------------------------------------------------------------
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  //--------------------------------------------------------------------------
  // Шлях до потрібної папки на віддаленому сервері.
  ftp: ``,
  // ftp: `myNameFolder/${rootFolder}`
  //Для откравки на сервер можно воспользоваться FileZila
}