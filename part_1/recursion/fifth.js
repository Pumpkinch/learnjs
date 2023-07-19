// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska-v-obratnom-poryadke
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

let json = JSON.stringify(list);
const printList = (list) => {
    let reversed = null;
    while(list) {
      const tmp = list;
      list = list.next;
      tmp.next = reversed;
      reversed = tmp;
    }
    return (reversed);
}
alert(printList(list));
// пыталась как-то tail использовать