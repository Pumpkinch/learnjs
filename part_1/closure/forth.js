// https://learn.javascript.ru/closure#summa-s-pomoschyu-zamykaniy
const sum = (a) => {
    return function sum(b) {
        return a + b;
    }
}

alert(sum(5)(-1));