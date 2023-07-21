// https://learn.javascript.ru/closure#filtratsiya-s-pomoschyu-funktsii
const inBetween = (a, b) => {
    return function (c) {
        return a <= c && c <= b && arr.includes(a);
    }
}
const inArray = (arr) => {
    return function (arg) {
        return arr.includes(arg);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 8))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2