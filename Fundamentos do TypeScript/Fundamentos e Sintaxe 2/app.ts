//Dio Banking

//Name, AccountNnmber
//Depositar, Sacar

abstract class Account {
  name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log('Voce depositou');
  };
  whithdraw = () => {
    console.log('Voce retirou');
  };
  getValue = () => {
    console.log(this.balance);
  };
}

class PeopleAccount extends Account {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

const benAccount: PeopleAccount = new PeopleAccount(1, 'Ben', 34);
console.log(benAccount);


