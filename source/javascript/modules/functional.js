
//Functional + Templates

//*FUNCTIONAL
//$================================================================================
/* Перевірка підтримки webp, додавання класу webp або no-webp для <html> */
/* (i) необхідно для коректного відображення webp із css */
export function isWebp() {
  //--------------------------------------
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    // Путь к пустому изображению WebP в кодировке base64
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA';
  }
  //--------------------------------------
  testWebP(function (support) {
    let className = support === true ? 'webp' : "no-webp";
    document.documentElement.classList.add(className);
  });
  //--------------------------------------
}
//$================================================================================

