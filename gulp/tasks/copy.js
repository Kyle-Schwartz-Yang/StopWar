
//$========================================================
export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
  // .pipe(app.plugins.notify('Mission completion!'));
}
//$========================================================

//#Использовать плагин if
// .pipe(app.plugins.if(
//   app.isProduction,
//....Подключить плагин,если в режиме продакшн
// ))