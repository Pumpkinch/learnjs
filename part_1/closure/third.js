// https://learn.javascript.ru/closure#funktsiya-v-if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
// Hello, John