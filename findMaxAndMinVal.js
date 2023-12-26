function findMaxAndMinVal(arr){
    var miniVal = arr[0];
    var maxiVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(maxiVal  < arr[i+1]) {
            maxiVal = arr[i+1]
        } 
         if(miniVal  > arr[i+1]) {
            miniVal = arr[i+1]
        } 
        
    }
    return {"maxiVal": maxiVal,"miniVal": miniVal}
}

console.log(findMaxAndMinVal([1,10, 20, 15, 2, 23, 90, 67]));