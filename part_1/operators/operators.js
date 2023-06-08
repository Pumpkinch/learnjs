/* https://learn.javascript.ru/operators#tasks

        первое
let a=1, b=1;
let c=++a;   a=2 c=2
let d=b++;   b=2 d=1

        второе
let a=2;
let x=1+(a*=2);    a=4 x=5

        третье
10 -1 1 2 6 9px $45 2 nan   -9   5 -14 1 nan -2
ошиблась в первом и десятом, но уже исправила*/

let a=prompt("Первое число?", 1);
let b=prompt("Второе число?", 2);
alert(+a+ +b); //3
