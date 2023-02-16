export abstract class DioAccount {
  private name: string;
  accountNumber: number;
  balance: number = 0;
  status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setname = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!');
  }
  getName = ():string => {
    return this.name
  }
  deposit = (): void => {
    if(this.validateStatus()) console.log('Voce depositou');
  };
  whithdraw = (): void => {
    console.log('Voce retirou');
  };
  getValue = (): void => {
    console.log(this.balance);
  };
  private validateStatus = (): boolean => {
    if(this.status) this.status
    throw new Error() 
  }
}
