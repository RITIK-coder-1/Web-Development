// Write a JavaScript function that accepts an object containing a person's first name, lastname, and age in years as input. The function should concatenate the first and last name into a single string. It should then calculate the person's age in days. The ageInDays function should then return a callback function that logs a message to the console.

// The function that converts age in days ---->

function ageInDays(object, callback) {
    const fullname = `${object.firstName} ${object.lastName}`
    const ageInDays = object.age * 365
    return callback(fullname, ageInDays)
}

// the callback function ---->

function logResult(name, age){
    let statement = `The person's fullname is ${name}, and their age in days is ${age}.`
    console.log(statement);
}

const myObject = {
    firstName: "Ritik",
    lastName: "Mahapatra", 
    age: 19
}

ageInDays(myObject, logResult)