// https://learn.javascript.ru/object#proverka-na-pustotu
'use strict';
let obj = {
    name: fff,
};
const isEmpty = obj => {
    for (let key in obj) {
        return false;
    }
    return true;
}
alert(isEmpty(obj));