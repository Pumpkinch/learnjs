// https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth
const camelize = (str) => {

    let arr = str.split('-');

    let big = (arr).map((item, index) => {
        if (index === 0) {
            return item[0] + item.slice(1)
        }
        return item[0].toUpperCase() + item.slice(1)

    });

    arr = big.join('');
    return arr;

}

alert(camelize('list-style-image'));
