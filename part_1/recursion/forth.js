// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
const printList = (list) => {
    while (list) {
        alert(list.value);
        list = list.next;
    }
}
alert(printList(list));

const printListR = (list) => {
    alert(list.value);
    return list.next ? printListR(list.next) : 'null';
}
alert(printListR(list));
// мне кажется, что цикл лучше и проще визуально в этом случае