class bankAccount{
    constructor(name, principal){
        this.name = name
        this.principal = principal
    }

    checkBalance(){
        console.log(`The Account Balance for ${this.name} is ${this.principal}`);
    }

    deposit(amount){
        if (amount >= 0) {
            this.principal += amount
            console.log(`The Deposited amount: ${amount} and the current balance: ${this.principal}`);
        } else {
            console.log("Invalid deposit amount. Please enter a positive amount!");
        }
    }

    withdraw(amount){
        if (amount >= 0 && amount < this.principal) {
            this.principal -= amount
            console.log(`The Withdrawn amount: ${amount} and the current balance: ${this.principal}`);
        } 
        else if (amount === this.principal || amount > this.principal){
            console.log("Insufficient funds for withdrawal");
        }
        else {
            console.log("Invalid deposit amount. Please enter a positive amount!");
        }
    }
}

const myAccount = new bankAccount("Ritik", 100000)

myAccount.checkBalance()

myAccount.deposit(50000)
myAccount.deposit(-1000)

myAccount.withdraw(10000)
myAccount.withdraw(150000)
myAccount.withdraw(-1000)

myAccount.checkBalance()