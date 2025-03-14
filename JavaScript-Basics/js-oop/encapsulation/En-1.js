// Create a BankAccount class with a private balance property.
// Add deposit() and getBalance() methods.


class BankAccount{
    #balance;

    constructor(balance){
        this.#balance = balance;
    }

    deposit(amount){
        return this.#balance + amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const myacc = new BankAccount(100);
console.log(myacc.deposit(100));
// console.log(myacc.#balance);
