//https://learn.javascript.ru/arrow-functions-basics#tasks
'use strict';
let ask = (question, yes, no) =>{
 return (confirm(question))? yes(): no();
};

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);