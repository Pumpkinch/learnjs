// https://learn.javascript.ru/json#preobrazuyte-obekt-v-json-a-zatem-obratno-v-obychnyy-obekt
let user = {
    name: "Василий Иванович",
    age: 35
};
user = JSON.stringify(user);
alert(user);
user = JSON.parse(user);
alert(user);