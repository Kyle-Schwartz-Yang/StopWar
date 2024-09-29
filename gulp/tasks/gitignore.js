
//# fs[from - node.js]
//$=----------------------------------------------------------------
import fs from 'fs'; // модуль Node.js для работы с файловой системой
//$=----------------------------------------------------------------

export const gitignore = () => {

  if (!fs.existsSync('.gitignore')) {
    fs.writeFile('./.gitignore', '', cb);
    fs.appendFile('./.gitignore', 'document.txt\r\n', cb);
    fs.appendFile('./.gitignore', 'package-lock.json\r\n', cb);
    fs.appendFile('./.gitignore', 'node_modules/\r\n', cb);
    fs.appendFile('./.gitignore', 'destination/\r\n', cb);
    fs.appendFile('./.gitignore', 'version.json\r\n', cb);
    fs.appendFile('./.gitignore', '**/*.zip\r\n', cb);
    fs.appendFile('./.gitignore', '**/*.rar\r\n', cb);
  }
  return app.gulp.src(`${app.path.srcFolder}`);
}
function cb() { }