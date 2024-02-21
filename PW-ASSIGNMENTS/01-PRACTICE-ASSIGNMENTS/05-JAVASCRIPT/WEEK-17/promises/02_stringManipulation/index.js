// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console ------>


// The function that takes a string and a callback ----->
function manipulateString(string, callback){
    let newString = string.toUpperCase()
    return callback(newString)
}

// The callback function ----->

function logString(string){
    let statement = `The manipulated string is: ${string}`
    return statement
}

console.log(manipulateString("ritik", logString)); // The manipulated string is: RITIK
console.log(manipulateString("hello, world!", logString)); // The manipulated string is: HELLO, WORLD!