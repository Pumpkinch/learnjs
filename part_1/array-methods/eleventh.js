// https://learn.javascript.ru/array-methods#sozdayte-obekt-s-klyuchami-iz-massiva
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
const groupById = (user) => {
return user.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
}, {})
}

let usersById = groupById(users);

alert(usersById);
// не совсем поняла