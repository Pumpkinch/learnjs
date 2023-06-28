// https://learn.javascript.ru/constructor-new#sozdayte-kalkulyator-pri-pomoschi-konstruktora-new-calculator

function Calculator() {
    this.sum = () => {
        return this.a + this.b;
    };
    this.mul = () => {
        return this.a * this.b;
    };
    this.read = () => {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());