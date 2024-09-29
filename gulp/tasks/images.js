// # gulp-webp -/- gulp-imagemin
// # plugins.notify -/- plugins.plumber -/-plugins.serverLive -/-plugins.newer
//$=----------------------------------------------------------------
import webp from "gulp-webp"; //Версия @1.0.0 (Доступная версия 5.0.0)
import imagemin from "gulp-imagemin"; //Проверка обновления картинки в папке
//$=----------------------------------------------------------------

export const images = () => {
  return app.gulp.src(app.path.src.images) //<source\...
    //#=----------------------------------------------------------------
    //Настрока сообщения об ошибке
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "IMAGE-error", message: "Изображение Error: <%= error.message %>"
    })))
    //#=----------------------------------------------------------------
    //Часть 1 (конвертация и выгрузка)
    .pipe(app.plugins.newer(app.path.build.images)) //Наблюдает за новыми файлами
    //? Режим продакш (ifPlugin)----------------------------------------
    .pipe(app.plugins.if(
      app.isProduction,
      webp() //Конвертирует в Webp
    ))
    .pipe(app.plugins.if(
      app.isProduction,
      app.gulp.dest(app.path.build.images) //>destination
    ))
    //#=----------------------------------------------------------------
    //Часть 2 (сжатие и выгрузка)
    .pipe(app.plugins.if(
      app.isProduction,
      app.gulp.src(app.path.src.images)  //<source\...
    ))

    .pipe(app.plugins.if(
      app.isProduction,
      app.plugins.newer(app.path.build.images) //Наблюдает
    ))

    .pipe(app.plugins.if(
      app.isProduction,
      imagemin({//Сжимает изображения
        progressive: true, svgoplugins: [{ removeViewBox: false }], interlaced: true, optimizationLevel: 3, // 0 to 7
      })
    ))
    //? Режим продакш (ifPlugin)----------------------------------------
    .pipe(app.gulp.dest(app.path.build.images)) //>destination
    //#=----------------------------------------------------------------
    //Часть 3 (собираем svg и выгружаем)
    .pipe(app.gulp.src(app.path.src.svg)) //Собираем svg
    .pipe(app.gulp.dest(app.path.build.images)) //>destination
    .pipe(app.plugins.serverLive.stream()) //* StartLiveBrowser
}