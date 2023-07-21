// https://learn.javascript.ru/closure#sortirovat-po-polyu
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (fieldName) => {
    return (a, b) =>
        a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('age'));
users.forEach(user => alert(user.age));