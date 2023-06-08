// // https://learn.javascript.ru/logical-operators#tasks
// alert( null || 2 || undefined ); //2
// alert( alert(1) || 2 || alert(3) ); //1 undefined
// alert( 1 && null && 2 ); //null
// alert( alert(1) && alert(2) ); //1 undefined
// alert( null || 2 && 3 || 4 ); //3

//Проверка значения из диапазона
// age=prompt('Введите число');
// if(age>=14&&age<=90){
//     alert('в диапазоне');
// }
// // Проверка значения вне диапазона
// if(!(age>=14&&age<=90)){
//     alert('вне диапазона');
// }
// if (age < 14 || age > 90){
//     alert('вне диапазона');
// }
// // Вопрос об "if"
// if (-1 || 0) alert( 'first' ); //-1
// if (-1 && 0) alert( 'second' ); //0
// if (null || -1 && 1) alert( 'third' ); //1

// Проверка логина
login=prompt('Кто там?', '');
if(login==='Админ'){
    pass=prompt('Введите пароль','');
    if(pass==='Я главный'){
        alert('Здравствуйте!');
    }else if(pass===''|| pass===null){
        alert('Отменено');
    }else{
    alert('Неверный пароль');}
}else if(login===''|| login===null){
    alert('Отменено');
}else{
alert('Я вас не знаю');}