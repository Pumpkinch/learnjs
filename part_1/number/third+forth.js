// https://learn.javascript.ru/number#vvod-chislovogo-znacheniya
let readNumber = () => {
    let a = 0;

    do {
        a = +prompt('Введите значение');
    } while (!isFinite(a));

    if (a === 0 || a === null) return null;
    return +a;
}
alert(readNumber());

// https://learn.javascript.ru/number#beskonechnyy-tsikl-po-oshibke
let i = 0;
while (i != 10) {
  i += 0.2;
}
// опять же из-за погрешности не будет равно ровно 10