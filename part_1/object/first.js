// https://learn.javascript.ru/object#privet-object
'use strict';
let user = {
    name: "John",
    surname: "Smith",
};

user.name = "Pete";
delete user.name;

alert(user.name);