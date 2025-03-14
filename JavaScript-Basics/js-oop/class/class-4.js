class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount_deposit){
        this.balance+=amount_deposit;
        return this.balance;
    }

    withdraw(amount_withdraw){
        this.balance-=amount_withdraw;
        return this.balance;
    }

    getBalance(){
        return this.balance;
    }
}

const myAcc = new BankAccount("021212",1000);
console.log(myAcc.deposit(1000));
console.log(myAcc.withdraw(500));
console.log(myAcc.getBalance());