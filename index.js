function add(x, y){
    return x + y; 
}
console.log(add(2, 3));

function subtract(x, y){
    return x - y; 
}
console.log(subtract(2, 3));

function multiply(x, y){
    return x * y; 
}
console.log(multiply(2, 3));

function divide(x, y){
    return x / y; 
}
console.log(divide(2, 3));


function increment(number1){
    return ++number1;
}
console.log(increment(947));

function decrement(number1){
    return --number1;
}
console.log(decrement(947));

function makeInt(string){
    return parseInt(string, 10)
}
console.log(makeInt("3"));

function preserveDecimal(string){
    return parseFloat(string)
}
console.log(preserveDecimal("23.777"));