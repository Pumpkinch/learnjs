// https://learn.javascript.ru/while-for#vyvesti-prostye-chisla
let a = prompt('Введите a', '');
stop:
for(let b=2; b <= a; b++){
    for(let c=2; c < b; c++){
    if(b % c === 0) continue stop;
    } alert(b);
}