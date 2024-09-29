//# gulp-file-include-/-gulp-webp-html-nosvg-/-gulp-version-number
//#plugins.plumber-/-plugins.notify-/-plugins.serverLive-/-plugins.replace -/- plugins.if
//$=----------------------------------------------------------------
import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Подключение webp 
import versionNumber from "gulp-version-number";
//$=----------------------------------------------------------------

export const html = () => {
  return app.gulp.src(app.path.src.html) //<source/*.html
    //#-------------------------------------------------------
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML", message: "Ой, Ошибка: <%= error.message %>"
      })))
    //#-------------------------------------------------------
    .pipe(fileInclude()) //Собираем модули @@include
    .pipe(app.plugins.replace(/@img\//g, 'img/')) //Вместо @img -> img/
    //? Режим продакш (ifPlugin)
    .pipe(app.plugins.if(
      app.isProduction,
      webpHtmlNosvg(), // Обертка подключение Webp
    ))
    .pipe(app.plugins.if(
      app.isProduction,
      versionNumber({ //Решаем проблему с кешириванием
        'value': '%DT%',
        'append': { 'key': '_v', 'cover': 0, 'to': ['css', 'js',] },
        'output': { 'file': 'gulp/version.json' }
      })
    ))
    //? Режим продашн (ifPlugin)
    //#-------------------------------------------------------
    .pipe(app.gulp.dest(app.path.build.html))//>destination/ 
    .pipe(app.plugins.serverLive.stream()) //* StartLiveBrowser
}

