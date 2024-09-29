
//$=----------------------------------------------------------------
import svgSprite from "gulp-svg-sprite";
//$=----------------------------------------------------------------

export const sprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    //#-------------------------------------------------------
    .pipe(app.plugins.plumber( //Сообщение об ощибке !
      app.plugins.notify.onError({
        title: "SVG", message: "Обнаружен ERROR--->: <%= error.message %>"
      })))
    //#-------------------------------------------------------
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/sprite.svg`, //Путь к созданию Файла (.dist/img/icons/sprite.svg)
          example: true, //Создавать страницу с перечнем иконок(true/false)
        }
      }
    }))
    //#-------------------------------------------------------
    .pipe(app.gulp.dest(`${app.path.build.images}`));
  // .pipe(app.plugins.notify('Mission completion!'));
}