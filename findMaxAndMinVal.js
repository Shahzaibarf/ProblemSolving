function reverseArray(arr){
    var reverseArr = [];
    for (var i = arr.length-1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

console.log(reverseArray([1,10, 20, 15, 2, 23, 90, 67]));