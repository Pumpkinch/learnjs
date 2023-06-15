// https://learn.javascript.ru/testing-mocha#tasks

//нет describe; к одному it нужно одно действие; сама функция не объявлена, там и должны находиться переменные.
it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });
