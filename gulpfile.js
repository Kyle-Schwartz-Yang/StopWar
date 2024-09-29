//Подключение файлов
import gulp from 'gulp'; //Подключаем модуль gulp (Node.js)
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
//$------------------------------------------------------------------------------------------
//Глобальная переменная
global.app = {
  //-------------------------------------------
  //Режим разработчика - Режим продакшен
  isProduction: process.argv.includes('--production'), //*Режим продакшен
  isCreator: !process.argv.includes('--production'), //$Режим разработчика
  //-------------------------------------------
  gulp: gulp,
  path: path,
  plugins: plugins,



};
//$-------------------------------------------------------------------------------------------
//Таски
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js';
import { gitignore } from './gulp/tasks/gitignore.js';
//---------------------------------------------------
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';


//Объединение задачь(тасков)
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const defaultCraft = gulp.series(fonts, gulp.parallel(copy, html, scss, script, images, gitignore));
const developer = gulp.series(reset, defaultCraft, gulp.parallel(watcher, server)); //Режим разработчика
const production = gulp.series(reset, defaultCraft, sprite); //Режим продакшен
//--------------------------------------------------
const createZIP = gulp.series(reset, defaultCraft, zip); //Закрутить в ZIP файл
const fileTransfer = gulp.series(reset, defaultCraft, ftp); //Закинуть на FTP-сервер
//$--------------------------------------------------------------------------------------------
//Наблюдатель
function watcher() {
  //?gulp.watch(За кем наблюдаем(путь), Что делаем(задача));
  //-----------------------------------------------------------------------------------------
  // gulp.watch(path.watch.files, gulp.series(copy, ftp));//Выгружаем сразу на сервер
  //Чтобы html,scss,script,images выгружалось на сервер нужно заменить код как в примере выше
  //-----------------------------------------------------------------------------------------
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  //*=========================(REACT)
  // gulp.watch(path.watch.script, script);
  // gulp.watch(path.watch.jsx, script);
  gulp.watch([path.watch.jsx, path.watch.script], script);
  //*=========================(REACT)
  gulp.watch(path.watch.images, images);

}
//$=-------------------------------------------------------------------------------------------

export { sprite } //создание спрайта
export { developer } //Режим разработчика
export { production as build } //Режим продакшин
//-----------------------------
// export { zip }
// export { ftp }
export { createZIP } //#...ZIP
export { fileTransfer } //#...FTP
//-----------------------------

gulp.task('default', developer); //gulp

//? export default gulp.developer;



