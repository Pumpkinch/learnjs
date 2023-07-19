// https://learn.javascript.ru/recursion#vychislit-faktorial
const factorial = (n) => {
    return (n === 1) ? n : (n * factorial(n - 1));
}
alert(factorial(5));