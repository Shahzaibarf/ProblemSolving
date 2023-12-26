function peakValueOfNeighbors(arr){
    var peakValues = [];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            peakValues.push(arr[i])
        } 
    }
    return peakValues
}

console.log(peakValueOfNeighbors([10, 20, 15, 2, 23, 90, 67]));