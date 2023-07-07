// https://learn.javascript.ru/date#skolko-sekund-ostalos-do-zavtra
let date = new Date();

const getSecondsToday = (time) => {
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let result =  Math.floor((tomorrow - date) / 1000);

    return result;
}

alert(getSecondsToday(date));