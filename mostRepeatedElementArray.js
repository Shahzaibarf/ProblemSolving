function mostRepeatedElementInArray(arr){
    let countElement = {};
    let mostRepeatedValue = 1;
    let val = 0
    arr.forEach((element) => {
        if(countElement[element] === undefined){
           countElement[element] = 1 ;
        } else {
            countElement[element]++;
        }
    });
    for(let key in countElement){
        if(countElement[key] > mostRepeatedValue){
            mostRepeatedValue = countElement[key];
            val = key
        }
    }
    if(val == 0) {
      return "No Repeat Element";
    }
    return val;
}

console.log(mostRepeatedElementInArray([2,2,1,1,1]));