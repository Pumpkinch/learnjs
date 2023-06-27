// https://learn.javascript.ru/constructor-new#sozdayte-new-accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = () => {
        this.value += +prompt('Введите число', 0);
    };
}

let accumulator = new Accumulator(5);

accumulator.read();
accumulator.read();
alert(accumulator.value);