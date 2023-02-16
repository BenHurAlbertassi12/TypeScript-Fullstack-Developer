//Dio Banking

//Name, AccountNnmber
//Depositar, Sacar

class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou');      
    }
    whithdraw = () => {
        console.log('Voce retirou');      
    }
}

class Admin extends Account {
  balance: number;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.balance = 20;
  }
  getValue = () => {
    console.log(this.balance);
  };
}

const benAccount: Admin = new Admin('Ben', 34)
console.log(benAccount);

const admAccount: Account = new Account('Hatus', 30)
console.log(admAccount);

