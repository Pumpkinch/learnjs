// https://learn.javascript.ru/number#summa-polzovatelskih-chisel
let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');

alert(a + b);

// https://learn.javascript.ru/number#pochemu-6-35-tofixed-1-6-3
alert( 1.35.toFixed(20) ); //1.35000000000000008882
alert( 6.35.toFixed(20) ); // 6.34999999999999964473 
// погрешность игрет роль и определяет куда округлять