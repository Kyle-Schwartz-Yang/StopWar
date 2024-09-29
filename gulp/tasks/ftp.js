//*На данные момент не актуально 

//$=============================================================================
import { configFTP } from '../config/ftp.js'; //путь gulp/config/ftp.js
import vinylFTP from 'vinyl-ftp'; // Отправляет на сервер
import util from 'gulp-util'; // Отображает ход копирования на сервер
//$==============================================================================

export const ftp = () => {
  //--------------------------------------------------
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  //--------------------------------------------------
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    //#=============================================================
    .pipe(app.plugins.plumber( //Настрока сообщения об ошибке
      app.plugins.notify.onError({
        title: "ftp",
        message: "Обнаружен ERROR--->: <%= error.message %>"
      })))
    //#=============================================================
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
  // Название корневой папки ${app.path.rootFolder} можно заменить на любое
}


