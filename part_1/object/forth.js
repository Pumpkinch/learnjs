// https://learn.javascript.ru/object#summa-svoystv-obekta
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}
alert(sum);
