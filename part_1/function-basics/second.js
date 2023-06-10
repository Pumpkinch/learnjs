// https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili
'use strict';
//первый вариант
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
//второй вариант
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

let age = prompt('возраст введите', '18');
if (checkAge(age)) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
}