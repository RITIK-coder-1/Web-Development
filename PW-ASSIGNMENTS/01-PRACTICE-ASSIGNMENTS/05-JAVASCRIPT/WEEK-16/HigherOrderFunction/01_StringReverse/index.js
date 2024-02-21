const reverseString = str => str.split("").reverse().join("")

setTimeout(() => {
    const input = "ritik"
    console.log(reverseString(input));
}, 2000)