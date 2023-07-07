// https://learn.javascript.ru/date#sozdayte-datu
let date = new Date("2012-02-19T03:12");
alert(date);

// https://learn.javascript.ru/date#pokazhite-den-nedeli
const getWeekDay = (data) => {
    let day = data.getDay();

// можно было и по-другому, как в третьем задании
    switch (day) {
        case 1:
            return ('ПН');
        case 2:
            return ('ВТ');
        case 3:
            return ('СР');
        case 4:
            return ('ЧТ');
        case 5:
            return ('ПТ');
        case 6:
            return ('СБ');
        default:
            return ('ВС');
    }

}
alert(getWeekDay(date));
