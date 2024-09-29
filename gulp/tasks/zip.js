//$======================================
import zipPlugin from "gulp-zip";//Создание ZIP
//$======================================

export const zip = () => {
  app.plugins.deleteAsync(`./${app.path.rootFolder}.zip`); //?Удаление ZIP (старый)
  //-----------------------------------------------------------
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {}) //<destination/**/
    //#===================================================================
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "ZIP", message: "Error: <%= error.message %>"
      })))
    //#===================================================================
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`)) //Создание ZIP файла
    .pipe(app.gulp.dest('./')) //>rootFolder...
    .pipe(app.plugins.notify('File created (ZIP)')); //Собщение удачного создания
}



