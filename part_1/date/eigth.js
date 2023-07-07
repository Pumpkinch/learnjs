// https://learn.javascript.ru/date#formatirovanie-otnositelnoy-daty
let date = new Date();
let lastDate1 = new Date(date - 1);
let lastDate2 = new Date(date - 30 * 1000);
let lastDate3 = new Date(date - 5 * 60 * 1000);
let lastDate4 = new Date(date - 86400 * 1000);

const formatDate = (time) => {
    let result = Math.floor((date - time) / 1000);

    if (result < 1) {
        return ('прямо сейчас');
    } else if (result < 60) {
        return (result + ' сек. назад');
    } else if (result < 60 * 60) {
        return ((result / 60) + ' мин. назад');
    }
    return (time.getDate() + '.' + time.getMonth() + '.' + time.getFullYear() + ', ' +
        time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());

}

alert(formatDate(lastDate4));