// https://learn.javascript.ru/date#kakoy-den-mesyatsa-byl-mnogo-dney-nazad
let time = new Date(2015, 0, 2);
const getDateAgo = (date, days) => {
    date.setDate(date.getDate() - days);
    return date;
}
let number = 30;

alert(getDateAgo(time, number));