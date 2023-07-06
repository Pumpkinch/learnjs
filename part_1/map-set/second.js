// https://learn.javascript.ru/map-set#otfiltruyte-anagrammy
const aclean = (arr) => {

    let set = new Set();

    for (chars of arr) {

        chars = chars.split('');
        chars.sort((a, b) => a > b ? 1 : -1);

        let words = chars.join('');
        words = words.toLowerCase();

        set.add(words);

    }
    const result = Array.from(set);

    return result;

};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr))