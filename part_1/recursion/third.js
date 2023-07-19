// https://learn.javascript.ru/recursion#chisla-fibonachchi
const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(7));
// страница не отвечает при 77