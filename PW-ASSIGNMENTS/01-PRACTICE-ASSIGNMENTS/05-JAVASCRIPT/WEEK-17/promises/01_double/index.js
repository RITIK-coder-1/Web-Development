// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback ---->

// the function that takes an array and a callback --->

function double(func, array){
    return func(array)
}

// the callback function --->

function callback(array) {
    const newArray = array.map(integer => {
        let double = integer * 2
        return double
    })
    return newArray
}

console.log(double(callback, [1, 2, 3, 4, -5, -6])) // [ 2, 4, 6, 8, -10, -12 ]


