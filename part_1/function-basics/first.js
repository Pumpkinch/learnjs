//https://learn.javascript.ru/function-basics#obyazatelen-li-else
'use strict';
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
//одинаковые
