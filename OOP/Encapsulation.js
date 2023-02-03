class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        }
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log(`Insufficient funds.`);
        }
    }
}

const account = new BankAccount(100);
console.log(`Current balance: $${account.balance}`);

account.deposit(50);
console.log(`Current balance: $${account.balance}`);

account.withdraw(200);
console.log(`Current balance: $${account.balance}`);
