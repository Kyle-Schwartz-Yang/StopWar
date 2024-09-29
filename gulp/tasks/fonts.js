//#plugins.plumber-/-plugins.notify-/-
//# -/- gulp-fonter-fix -/- gulp-ttf2woff2 -/- fs[from - node.js]
//# readdir(), existsSync(), writeFile(), appendFile() - Методы из модуля fs
//$=----------------------------------------------------------------
import fs from "fs"; //(file System) плагин для работы с файлами из Node.js
import fonter from 'gulp-fonter-fix'; // Конвертирует (оригинал: gulp-fonter)
import ttf2woff2 from "gulp-ttf2woff2"; //Конвертирует

//$=----------------------------------------------------------------

//*Задача 1==================================================================
//Конвертируем шрифты из (.otf) -> [.ttf]
export const otfToTtf = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}) //<source/...
    //#-------------------------------------------------------
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS(.otf)",
        message: "Error: <%= error.message %>"
      })))
    //#-------------------------------------------------------
    .pipe(fonter({ formats: ['ttf'] }))   // Конвертуємо в .ttf
    //#-------------------------------------------------------
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`)) //>source/...

}

//*Задача 2==================================================================
//Конвертируем шрифты из (.ttf) -> [.woff + .woff2]
export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}) //<source/...
    //#-------------------------------------------------------
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS(.ttf)",
        message: "Error: <%= error.message %>"
      })))
    //#-------------------------------------------------------
    .pipe(fonter({ formats: ['woff'] })) // Конвертуємо в .woff
    .pipe(app.gulp.dest(`${app.path.build.fonts}`)) //>destination/...
    //#-------------------------------------------------------
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)) //<source/...
    .pipe(ttf2woff2()) // Конвертуємо в .woff2
    .pipe(app.gulp.dest(`${app.path.build.fonts}`)) //>destination/...
    //#-------------------------------------------------------
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`)) //<source/...
    .pipe(app.gulp.dest(`${app.path.build.fonts}`)); //>destination/...
}

//*Задача 3==================================================================
//Создание файла fonts.scss (+заполнение файла)
export const fontsStyle = () => {
  // Путь к файлу стилей подключения шрифтов
  let fontsFile = `${app.path.srcFolder}/scss/basis/fonts.scss`; //<source/scss/basic/fonts.scss

  //# (0)-------------------------------------------------------

  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    //* (0.0)-------------------------------------------------------
    //Проверяем сущесвование файла fonts.scss
    if (fontsFile) {
      //#-(0.0.0)------------------------------------------------------
      //Если файла (fonts.scss) нет, создаем его
      if (!fs.existsSync(fontsFile)) {
        //(0.0.0.1)-------------------------------------------------------
        fs.writeFile(fontsFile, '', cb); // Записываем начальный код в файл
        let newFileOnly;
        //(0.0.0.1)-------------------------------------------------------

        //(0.0.0.2)-------------------------------------------------------
        for (var i = 0; i < fontsFiles.length; i++) {
          //-----------------------------------------------
          let fontFileName = fontsFiles[i].split(".")[0];
          //-----------------------------------------------
          if (newFileOnly !== fontFileName) {
            //*(0.0.0.1.0)-------------------------------------------------------
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;

            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;

            let fontStyle = fontFileName.includes("-Italic")
              ? "italic"
              : "normal";
            //*(0.0.0.1.0)-------------------------------------------------------
            //#(0.0.0.1.1)-------------------------------------------------------
            if (
              fontWeight.toLowerCase() === "thin" ||
              fontWeight.toLowerCase() === "hairline"
            ) {
              fontWeight = 100;
            } else if (
              fontWeight.toLowerCase() === "extralight" ||
              fontWeight.toLowerCase() === "ultralight"
            ) {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (
              fontWeight.toLowerCase() === "semibold" ||
              fontWeight.toLowerCase() === "demibold"
            ) {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === "extrabold" ||
              fontWeight.toLowerCase() === "ultrabold"
            ) {
              fontWeight = 800;
            } else if (
              fontWeight.toLowerCase() === "black" ||
              fontWeight.toLowerCase() === "heavy"
            ) {
              fontWeight = 900;
            } else if (
              fontWeight.toLowerCase() === "extrablack" ||
              fontWeight.toLowerCase() === "ultrablack"
            ) {
              fontWeight = 950;
            } else {
              fontWeight = 400;
            }
            //#(0.0.0.1.1)-------------------------------------------------------
            //*(0.0.0.1.2)-------------------------------------------------------
            const fontsCode = `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`;
            fs.appendFile(fontsFile, fontsCode, cb);
            newFileOnly = fontFileName;
            //*(0.0.0.1.2)-------------------------------------------------------
          }
        }
        //(0.0.0.2)-------------------------------------------------------
      } else {

        console.log(`Файл fonts.scss уже существует. Для обновления удалите его! `);
      }
      //#-(0.0.0)------------------------------------------------------
    }
    //* (0.0)-------------------------------------------------------
  });

  //# (0)-------------------------------------------------------
  //загружаем измененный fonts.scss обратно
  //?return app.gulp.src(`${app.path.srcFolder});
  return app.gulp.src(`${app.path.srcFolder}/scss/basis/`); //>source

}
//===================================================================
function cb() {

  //Необходима для правильного синтаксиса методов appendFile() и writeFile() 
  //В целом эту функцию можно удалить!
}
//*--------==================================================================

