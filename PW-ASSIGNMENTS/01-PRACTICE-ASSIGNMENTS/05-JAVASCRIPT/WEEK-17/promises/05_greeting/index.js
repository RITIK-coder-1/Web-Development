// You need to write a function that takes a name as input and returns a promise that resolves with a greetingmessage. ------->

function greet(name) {
    const myPromise = new Promise((resolve, reject) => {
        let message = `Hello, ${name}!`
        resolve(message)
    })
    return myPromise
}

console.log(greet("ritik"))