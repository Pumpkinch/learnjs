// https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

const array = [vasya, petya, masha];

const getAverageAge = (arr) => {
    
    return arr.reduce( (sum, user) => sum + user.age, 0 ) / arr.length;

}
alert(getAverageAge(array));

