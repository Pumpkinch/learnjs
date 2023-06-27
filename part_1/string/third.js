// https://learn.javascript.ru/string#usechenie-stroki
const truncate = (str, maxLength) => {
    return (str.length > maxLength) ?
      str.slice(0, maxLength - 1) + '…' : str;
  }
 
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
/* кароче, оно не выводится в браузере и я не могу из-за это проверить нормально, 
потому что в Plunker вывод сам происходит и там не считывало мои попытки написать не return, а if. 
И я пыталась удалить три символа и поставить троеточие обычное, а не то, что предлагается */
const extractCurrencyValue = (num) => alert(num.slice(1));
  
(extractCurrencyValue($120));

