// https://learn.javascript.ru/ifelse#perepishite-if-else-v
login=prompt('Введите логин', '');

message=(login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина':
    '';
alert(message);