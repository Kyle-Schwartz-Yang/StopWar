- есть возможные проблмы используя import и export 
- Проблемы связаны, когда обарачивешь функцию в setInterval

``` javascript
// Это вызывает проблемы: 
export const updateCounter = setInterval( function(){
  // code...
}, 1000);

```