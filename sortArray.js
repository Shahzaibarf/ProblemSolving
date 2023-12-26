function sortArry(arr){
    let swapVal;
    for (var j = 0; j < arr.length; j++){
         for (var i = 0; i < arr.length; i++){
             if(arr[i] > arr [i+1]){
                 swapVal = arr[i];
                 arr[i] = arr[i+1];
                 arr[i+1] = swapVal;
            }
        }   
    }
    return arr;
}

console.log(sortArry([-7,-88,0.8,0,44,5,3,2,1,3]));