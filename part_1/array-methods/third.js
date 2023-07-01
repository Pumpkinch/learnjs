// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste
let arrStart = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {

    arrStart = arr.filter(item => a <= item && item <= b);

}

filterRangeInPlace(arrStart, 1, 4);
alert(arrStart);