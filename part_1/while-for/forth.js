// https://learn.javascript.ru/while-for#vyvedite-chyotnye-chisla
'use strict';
for(let i=0; i<11; i++){
    if(i%2 === 1 ) continue;
    alert(i);
}