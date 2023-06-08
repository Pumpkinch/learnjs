//https://learn.javascript.ru/ifelse#tasks

/*if (строка с нулём)
if ("0") {
    alert('Привет');
}
не выведет, 0 по умолчанию false*/

//Название JavaScript
"use strict";
let message=prompt('Какое официальное название JavaScript?', '');
if(message=='ECMAScript'){
    alert('Верно!');
}else{
    alert('Не знаете? ECMAScript!');
}
