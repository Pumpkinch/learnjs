// https://learn.javascript.ru/map-set#filtratsiya-unikalnyh-elementov-massiva
const unique = (arr) => {

    let set = new Set();

    for (let item of arr) {
        set.add(item);
    }

    console.log(set);
    return (set.size);
}

let arr = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(arr));
