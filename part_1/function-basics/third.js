// https://learn.javascript.ru/function-basics#funktsiya-min-a-b
'use strict';
function min(a, b){
    return (a < b) ? a: b; 
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    } 
    return result;
  }
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n} не поддерживается`);
  } else {
    alert( pow(x, n) );
  }