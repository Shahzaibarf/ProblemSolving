
function separateEvenValue(arr){
    var evenArray = [];
    var otherArray = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenArray.push(arr[i])
        } else {
            otherArray.push(arr[i])
        }
    }
    return { "evenArray":evenArray, "otherArray": otherArray }
}

console.log(separateEvenValue([2,3,4,5,6,7,8,9,0]));