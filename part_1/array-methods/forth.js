// https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu
let arr = [5, 2, 1, -10, 8];

const compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr.sort(compare);
alert(arr);