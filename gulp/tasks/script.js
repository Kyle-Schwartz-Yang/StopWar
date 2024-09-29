//# plugins.plumber-/-plugins.notify
//# webpack-/-webpack-stream-/-
//$=----------------------------------------------------------------
import webpack from "webpack-stream";
// import babel from "gulp-babel";
//webpack Импортировать не нужно

//$=----------------------------------------------------------------

export const script = () => {
  return app.gulp.src(app.path.src.script, { sourcemaps: app.isCreator }) //<source/javascript/*.js
    //#-------------------------------------------------------
    .pipe(app.plugins.plumber( //Сообщение об ощибке !
      app.plugins.notify.onError({
        title: "JavaScript", message: "Сообщение(error): <%= error.message %>"
      }))
    )
    //*------------ Компилятор babel 
    // .pipe(babel({
    //   presets: ['@babel/preset-env', '@babel/preset-react'] // Настройки Babel для React
    // }))
    //*------------- Компилятор babel
    //#-------------------------------------------------------

    .pipe(webpack({//Cжимает и переименновует
      mode: app.isProduction ? 'production' : 'development', //production || development

      //ADD NEW------------------------------------------------------------
      module: {
        rules: [
          //*=========================(REACT)
          { // *JSX module
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              //----------------------------
              { // replace @img -> ../../
                loader: 'string-replace-loader',
                options: { search: '@img', replace: '../../img', flags: 'g' }
              },
              //----------------------------
              { // подключение "babel-loader" + @babel/preset-react + @babel/preset-env
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env', "@babel/preset-react"]
                }
              }
              //----------------------------
            ],
          },
          //*=========================(REACT)
          { //*Работать для изображений 
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
      },
      //ADD NEW------------------------------------------------------------
      output: { filename: 'app.min.js', }, //filename: 'Создаем имя файла'
    }))
    //#-------------------------------------------------------
    .pipe(app.gulp.dest(app.path.build.script)) //>destination/javascript/
    .pipe(app.plugins.serverLive.stream()); //* StartLiveBrowser
}