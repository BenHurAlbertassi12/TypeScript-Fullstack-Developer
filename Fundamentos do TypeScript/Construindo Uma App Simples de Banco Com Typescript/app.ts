import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const benAccount: PeopleAccount = new PeopleAccount(1, 'Ben', 34);
console.log(benAccount);
benAccount.setname('BenHur Albertassi');
benAccount.deposit();
console.log(benAccount);
console.log(benAccount.getName());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1);
companyAccount.deposit();
// companyAccount.accountNumber = 11 não é possivel



