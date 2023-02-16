import { PeopleAccount } from './class/PeopleAccount';

const benAccount: PeopleAccount = new PeopleAccount(1, 'Ben', 34);
console.log(benAccount);
benAccount.setname('BenHur Albertassi');
console.log(benAccount);
console.log(benAccount.getName());




