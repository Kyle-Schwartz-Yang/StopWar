//$======================================
// Указываем папку для удаления
export const reset = () => {
  return app.plugins.deleteAsync(app.path.clean); //?destination
}
//$======================================