// Program to find discounted price ------------->

let totalValue = 2000
let discountPercentage = 20

const discountedPrice = totalValue - ((totalValue*discountPercentage)/100)

const statement = `The final price after discount is: ${discountedPrice}`

console.log(statement);