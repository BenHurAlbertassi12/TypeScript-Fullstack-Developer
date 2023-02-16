import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';




const benAccount: PeopleAccount = new PeopleAccount(1, 'Ben', 34);
benAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO Account', 20)
companyAccount.deposit()



