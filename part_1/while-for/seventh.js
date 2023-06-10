// https://learn.javascript.ru/while-for#vyvesti-prostye-chisla
let a = prompt('Введите a', '');
for (let b = 2; b <= a; b++) {
    for (let c = 2; c < b; c++) {
        if (b % c === 0) break; // прерываем этот цикл, он нам больше неинтересен
        if (c === b - 1) alert(b); // дошли до конца цикла, значит ничего не делилось, это наше число
    }
}