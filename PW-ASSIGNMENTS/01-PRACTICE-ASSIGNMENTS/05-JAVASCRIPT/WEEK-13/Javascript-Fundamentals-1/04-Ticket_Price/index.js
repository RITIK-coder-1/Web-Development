// Program to find the total ticket price depending upon the number of children, adults and seniors ---------->

const childTicketPrice = 100
const adultTicketPrice = 150
const seniorTicketPrice = 120

let numberOfChilds = 2
let numberOfAdults = 1
let numberOfSeniors = 1

const totalPrice1 = childTicketPrice*numberOfChilds 
const totalPrice2 = adultTicketPrice*numberOfAdults
const totalPrice3 = seniorTicketPrice*numberOfSeniors
const totalPrice = totalPrice1 + totalPrice2 + totalPrice3

const viewer = "All"

if (viewer === "All"){  
    console.log(`the total ticket price is: ${totalPrice}`);
} else if (viewer === "child") {
    console.log(`Ticket Price for child: ${totalPrice1}`);
} else if (viewer === "adult"){
    console.log(`Ticket Price for adult: ${totalPrice2}`);
} else if (viewer === "senior"){
    console.log(`Ticket Price for senior: ${totalPrice3}`);
} else {
    console.log("Invalid viewer type, select either All, child, adult or senior!");
}



