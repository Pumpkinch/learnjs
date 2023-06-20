// https://learn.javascript.ru/object-methods#ispolzovanie-this-v-literale-obekta
let makeUser = () => {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?
//ошибка, this не как метод используется, а как объект в функции, оно ничего не примет

// https://learn.javascript.ru/object-methods#sozdayte-kalkulyator
/* let calculator = {
     a: 0,
     b: 0,
     read(a,b) => prompt("введите значения");
     sum(a,b)=> a+b;
     mul(a,b)=> a*b;
   }; вот так я пыталась это сделать дедовскими какими-то методами, но я уже посмотрела нормальное решение*/
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); 