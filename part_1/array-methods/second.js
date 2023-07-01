// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu
let array = [5, 3, 8, 1];

const filterRang = (arr, a, b) => {

    let arr2 = arr.filter(item => item <= b && item >=a);
    return arr2;

}

alert(filterRang(array, 1, 4));
alert(array);