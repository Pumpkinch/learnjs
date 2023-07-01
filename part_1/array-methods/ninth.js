// https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = () => {
    arr = arr.map(item => item.age);
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    let result = sum / arr.length;
    return result;

}
alert(getAverageAge(arr));

