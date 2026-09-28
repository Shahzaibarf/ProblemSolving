function findMaxAndMinVal(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

console.log(findMaxAndMinVal([10, 5, 20, 2, 15]));
