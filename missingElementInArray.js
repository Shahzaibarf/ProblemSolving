function missingElement(arr) {
   let swap;
   // Sorting the array
   for(let j = 0; j < arr.length; j++) {
       for (let i = 0; i < arr.length - 1; i++) { // Fixing loop condition
           if(arr[i] > arr[i+1]) {
               swap = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = swap;
           }
       }
   }
   
   // Removing duplicates
   let removeDuplicateEle = removeDuplicate(arr);
   
   // Finding missing elements
   let sampleArr = [];
   for(let k = 1; k <= removeDuplicateEle.length + 1; k++) { // Adjusting loop condition
       if (!removeDuplicateEle.includes(k)) { // Checking if k is not in the array
           sampleArr.push(k);
       }
   }
   
    return sampleArr;
}

function removeDuplicate(arr){
    return [...new Set(arr)];
}

console.log(missingElement([1, 2, 4, 6, 3, 7, 8, 7]));
