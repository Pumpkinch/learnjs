// https://learn.javascript.ru/date#skolko-segodnya-proshlo-sekund
let date = new Date();
const getSecondsToday = (time) => {
    let result =  (time.getHours()*3600 + time.getMinutes()*60 + time.getSeconds());
    return result;
}
alert(getSecondsToday(date));