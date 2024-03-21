function IntersectionUnion(arr1, arr2) {
  var combineArr = [];
  var Intersection = [];
  combineArr.push(...arr1);
  combineArr.push(...arr2)
  let swap;
  for (let i = 0; i < combineArr.length; i++) {
      for (let j = 0; j < combineArr.length; j++) {
          if(combineArr[j] > combineArr[j+1]) {
              swap = combineArr[j];
              combineArr[j] = combineArr[j+1];
              combineArr[j+1] = swap;
          }
            if(combineArr[j] == combineArr[j+1]) {
                Intersection.push(combineArr[j])
            }
      }
  }
  
  var withoutDulicateIntersection = removeDuplicates(Intersection);
  var withoutDulicateUnion = removeDuplicates(combineArr);
  return {"Intersection ":withoutDulicateIntersection,"Union ":withoutDulicateUnion};
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(IntersectionUnion([1, 3, 4, 5, 7],[2, 3, 5, 6]));


