// https://learn.javascript.ru/keys-values-entries#summa-svoystv-obekta
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (users) => {
    let sum = 0;
    for (let value of Object.values(users)) {
        sum += value;
    }
    return sum;
}

alert(sumSalaries(salaries));
// поправь меня по поводу расстановки объекта, функции и её вызова.
// мне так удобно, но удобно ли другим?