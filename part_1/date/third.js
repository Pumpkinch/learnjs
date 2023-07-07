// https://learn.javascript.ru/date#den-nedeli-v-evropeyskoy-numeratsii
let date = new Date(2012, 0, 3);  // 3 января 2012 года

const getLocalDay = (localDay) => {
    let arr = ['Пн','Вт','Ср','Чт','Пт','Сб', 'Вс'];
    let result = localDay.getDay() -1;
    
    return arr[result];
}

alert( getLocalDay(date) );       // вторник, нужно показать 2