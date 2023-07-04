// https://learn.javascript.ru/array#vyzov-v-kontekste-massiva
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();
/* Выводит всё, что есть в массиве. А из-за того, что в функции "this" 
и вызываем как объект, то массив и рассматривается как объект*/