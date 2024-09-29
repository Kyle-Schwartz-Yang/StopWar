//$=----------------------------------------------------------------
import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Выводит ошибку
import notify from "gulp-notify"; //Обрабатывает ошибку
import serverLive from "browser-sync"; // start Live Browser
import newer from "gulp-newer";//Следит за изменениями в папках
import ifPlugin from "gulp-if"//Условное ветвление
import { deleteAsync } from 'del'; // Плагин для удалениея
import filter from 'gulp-filter';
//$=----------------------------------------------------------------

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  serverLive: serverLive,
  newer: newer,
  if: ifPlugin,
  deleteAsync: deleteAsync,
  filter: filter,
}

