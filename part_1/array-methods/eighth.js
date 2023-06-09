// https://learn.javascript.ru/array-methods#transformirovat-v-obekty
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(users => ({
    fullName: users.name + ' ' + users.surname,
    id: users.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);