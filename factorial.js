function Factorial(num){
    var result = 1;
    for(i = num; i >= 1; i--){
        result = result*i;
    }
    return result; 
}

console.log(Factorial(6));