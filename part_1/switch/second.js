// https://learn.javascript.ru/switch#perepisat-usloviya-if-na-switch
'use strict';
const number = +prompt('Введите число между 0 и 3', '');
switch (number){
    case 0: alert ('Вы вывели 0'); break;
    case 1: alert ('Вы вывели 1'); break;
    case 2:
        case 3: alert ('Вы ввели число 2, а может и 3'); break;
}