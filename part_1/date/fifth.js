// https://learn.javascript.ru/date#poslednee-chislo-mesyatsa
const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month, 0);

    alert(date);
    return date.getDate();

}
alert(getLastDayOfMonth(2012, 2));