// https://learn.javascript.ru/destructuring-assignment#maksimalnaya-zarplata
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (localSalaries) => {
    let maxSalary = 0;
    let employee = null;

    if (!localSalaries) {
        return 'localSalaries not find';
    } else {
        for (let [key, value] of Object.entries(localSalaries)) {
            if (maxSalary <= value) {
                maxSalary = value;
                employee = key;
            }
        }
        return employee;
    }
}
alert(topSalary(salaries));