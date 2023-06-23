// https://learn.javascript.ru/primitives-methods#mozhno-li-dobavit-svoystvo-stroke
'use strict';
let str = "Привет";

str.test = 5;

alert(str.test);
/* Изначально подумала, что выведет undefined, либо ошибку, а так и получилось.
Проверила уже, в одном варианте undefined, в другом с 'use strict' ничего не выводит
примитив не хранит свойств нормально, чтобы после можно было вывести*/