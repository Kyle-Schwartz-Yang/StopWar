//# gulp-sass-/-sass-/-gulp-rename-
//#-gulp-clean-css-/-gulp-webpcss-/-gulp-autoprefixer-/-gulp-group-css-media-queries
//#plugins.plumber-/-plugins.notify-/-plugins.serverLive-/-plugins.replace
//$=----------------------------------------------------------------
import gulpSass from 'gulp-sass'; //Препроцессор
import dartSass from 'sass';
const sass = gulpSass(dartSass); //Объединение (gulpSass + dartSass)
//------------------------------
import rename from 'gulp-rename'; //Изменить имя файла.
//------------------------------
import cleanCssMin from "gulp-clean-css"; // Сжатие файла
import webpcss from "gulp-webpcss"; // Подключение webp 
import autoprefixer from "gulp-autoprefixer"; //Вендорные префиксы
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Групирует медиа-запросы
//$=----------------------------------------------------------------

export function scss() {
  //sourcemaps: true

  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isCreator }) //<source/scss/style.scss

    //#-------------------------------------------------------
    .pipe(app.plugins.plumber( //Сообщение об ощибке !
      app.plugins.notify.onError({
        title: "SCSS", message: "Обнаружен ERROR--->: <%= error.message %>"
      })))
    //#-------------------------------------------------------
    //?.pipe(app.plugins.replace(/@img\//g, '../img/')) // @img - ..img/
    .pipe(sass({ outputStyle: 'expanded' })) //Препроцессор scss
    //* Режим продакш (ifPlugin)----------------------------------------
    .pipe(app.plugins.if(
      app.isProduction,
      groupCssMediaQueries() //Групируем медиа-запросы
    ))
    .pipe(app.plugins.if(
      app.isProduction,
      webpcss({ webpClass: ".webp", noWebpClass: ".no-webp" }) //подключает .webp + (дап.код functional.js)
    ))
    .pipe(app.plugins.if(
      app.isProduction,
      autoprefixer({ grid: true, overrideBrowserslist: ["last 4 versions"], cascade: true }) //Вендорные префиксы
    ))
    //* Режим продакш (ifPlugin)----------------------------------------
    .pipe(app.gulp.dest(app.path.build.css)) //>destination/css/style.css
    //#-------------------------------------------------------
    //* Режим продакш (ifPlugin)----------------------------------------
    .pipe(app.plugins.if(
      app.isProduction,
      cleanCssMin()
    ))
    //* Режим продакш (ifPlugin)----------------------------------------
    //replace отрабатывает здесь, вначале неработает.
    .pipe(app.plugins.replace(/@img\//g, '../img/')) // @img - ..img/
    .pipe(rename({ extname: ".min.css" })) // Переименновать
    //#-------------------------------------------------------
    .pipe(app.gulp.dest(app.path.build.css)) //>destination/css/style.min.css
    .pipe(app.plugins.serverLive.stream()); //* StartLiveBrowser
}

