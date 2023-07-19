// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo

// с циклом
const sumTo = (n) => {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
alert(sumTo(100));

// рекурсия
const sumToR = (n) => {
    return (n < 1) ? n : (n + sumToR(n - 1));
}
alert(sumToR(100));
// 100000 не работает, прекращает дальнейшее

// арифметическия прогрессия
const sumToA = (n) => {
    return n * (n + 1) / 2;
}
alert(sumToA(100));
// последнее быстрее, рекурсивный наверное самый долгий, потому что в памяти каждый шаг