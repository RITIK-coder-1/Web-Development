// Program to validate the input values within a form --------->


let username = "ritik"
let email = "ritikprofessional111@gmail.com"
let age = 19


if (typeof username === 'string' && typeof email === 'string' && typeof age === 'number') {
    console.log(`Your name: '${username}', email: '${email}' and age: '${age}' have been validated. You're logged in!`);
} else if (typeof username != 'string'){
    console.log("Please! Input a valid name. It should be a String.");
} else if (typeof email != 'string'){
    console.log("Please! Input a valid email. It should be a String.");
} else {
    console.log("Please! Input a valid age. It should be a number.");
}

