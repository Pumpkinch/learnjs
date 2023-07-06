// https://learn.javascript.ru/destructuring-assignment#maksimalnaya-zarplata
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (users) => {
    let maxSalary = 0;
    let employee = null;

    for (let [key, value] of Object.entries(users)) {
        if (maxSalary <= value) {
            maxSalary = value;
            employee = key;
        }
    }
    return employee;

}
alert(topSalary(salaries));