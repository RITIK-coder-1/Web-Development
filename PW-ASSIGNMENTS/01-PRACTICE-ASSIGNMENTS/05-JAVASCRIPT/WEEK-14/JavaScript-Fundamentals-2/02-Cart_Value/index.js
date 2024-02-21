// Function to calculate the total sum of all the prices within a cart ----->

const cart = [125, 20, 30]

let sum = 0

function totalCartValue(anyCart) {
  for (let index = 0; index < anyCart.length; index++) {
  sum += cart[index]
}
  return `The total cart value is: ${sum}`
}

console.log(totalCartValue(cart));
console.log(totalCartValue(125, 20, 30));




