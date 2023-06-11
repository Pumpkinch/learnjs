//https://learn.javascript.ru/arrow-functions-basics#tasks
'use strict';
let ask = (question, yes, no) =>{
 return (confirm(question))? yes(): no();
};

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);