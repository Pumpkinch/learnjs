// https://learn.javascript.ru/array-methods#ostavit-unikalnye-elementy-massiva
const unique = (arr) => {
    const uniqSet = new Set(arr);
    return [...uniqSet];
};

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));