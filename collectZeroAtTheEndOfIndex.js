function sortedArrayAndCollectZeroAtEnd(arr) {
    let swap = 0;
    for(let j = 0; j < arr.length; j++) {
          for(let i = 0; i < arr.length-1; i++ ) {
            if(arr[i] == 0) {
                swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
            }
        }
        console.log(arr)
    }
    
    return arr;
}

console.log(sortedArrayAndCollectZeroAtEnd([1,2,3,4,0,5,6,0,0,7,8]));