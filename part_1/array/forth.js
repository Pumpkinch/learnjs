const arr2 = [1, -2, 3, 4, -9, 6];
const maximus = [1, -2, 3, 4, -9, 6];

const getMaxSubSum = (array) => {
    let sum = 0;
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        // [1, 7, 6]
        const item = array[i];

        if (item >= 0) {
            sum += item;
        } else {
            newArr.push(sum);
            sum = 0;
        }

        if (i === array.length - 1) {
            newArr.push(sum);
        }
    }

    return newArr;

}


alert(getMaxSubSum(arr2));