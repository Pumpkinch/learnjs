// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
let str1 = '3 - 4';
const calc = (str) => {
    let res;
    let result;

    if (str.includes('+')) {
        res = str.split(' + ');
        result = Number(res[0]) + Number(res[1]);
    } else if (str.includes('-')) {
        res = str.split(' - ');
        result = Number(res[0]) - Number(res[1]);
    }
    return result;
}


alert(calc(str1));