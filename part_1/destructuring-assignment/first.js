// https://learn.javascript.ru/destructuring-assignment#destrukturiruyuschee-prisvaivanie
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = 'false' } = user;

alert(name);
alert(age);
alert(isAdmin);