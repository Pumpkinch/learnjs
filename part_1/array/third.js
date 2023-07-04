// https://learn.javascript.ru/array#summa-vvedyonnyh-chisel
const sumInput = () => {
    let arr = [];

    while (true) {
        let item = prompt('Введите число', 0);
        if (item === null || !isFinite(item)) break;
        arr.push(+item);
    }

    let sum = 0;
    for (item of arr) {
        sum += item;
    }
    alert(sum);
}
sumInput();