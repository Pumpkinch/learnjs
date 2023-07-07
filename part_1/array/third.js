// https://learn.javascript.ru/array#summa-vvedyonnyh-chisel
const sumInput = () => {
    let arr = [];
    let isFinished = true;

    while (isFinished) {
        let item = prompt('Введите число', 0);
        if (item === null || item === '' || !isFinite(item)) break;
        arr.push(+item);
        if (arr > 10) {
            isFinished = false;
        }
    }

    let sum = 0;
    for (item of arr) {
        sum += item;
    }
    alert(sum);
}
sumInput();