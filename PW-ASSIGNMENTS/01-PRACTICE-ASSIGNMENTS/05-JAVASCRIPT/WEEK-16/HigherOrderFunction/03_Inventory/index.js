const PriceInUSD = [
    {
        name: "Item1",
        price: 13
    },
    {
        name: "Item2",
        price: 5
    },
    { 
        name: 'Item3',
        price: 10.99
    },
    { 
        name: 'Item4', 
        price: 24.50 
    },
    { 
        name: 'Item5', 
        price: 7.25 
    }
]

PriceInUSD.map((ele) => {
    const PriceInINR = ele.price * 81
    const newObject = {
        name: ele.name,
        price: PriceInINR
    }
    console.log(newObject);
})