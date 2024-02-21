if (true){
    // block scope

    // console.log(num1); // can't be hoisted using let
    // console.log(num2); // can't be hoisted using const
    console.log(num3); // undefined // hoisted

    let num1 = 2
    const num2 = 3
    var num3 = 4

    console.log(num1); // 2
    console.log(num2); // 3
    console.log(num3); // 4
}