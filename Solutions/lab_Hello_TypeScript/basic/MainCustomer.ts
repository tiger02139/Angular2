import { Customer } from './Customer';

var harry = new Customer();
harry.customerId = 1234; 
harry.firstName="Harry";
harry.lastName="Potter";
harry.email="harry.potter@hogwarts.ac.uk"; 
harry.phoneNumber="+44 0206-931-9185";
harry.birthDate = new Date(1980, 6, 31);

//console.log(harry);
console.log(harry.firstName);
