// https://learn.javascript.ru/while-for#tasks
"use strict";
// let i = 3;
// while (i) {
//   alert( i-- );
// } //1

// https://learn.javascript.ru/while-for#kakie-znacheniya-vyvedet-tsikl-while
let i = 0;
while (++i < 5) alert( i );//от 1 до 4
while (i++ < 5) alert( i );//от 1 до 5

// https://learn.javascript.ru/while-for#kakie-znacheniya-vyvedet-tsikl-for
for (let i = 0; i < 5; i++) alert( i ); //0,1,2,3,4
for (let i = 0; i < 5; ++i) alert( i ); //0,1,2,3,4