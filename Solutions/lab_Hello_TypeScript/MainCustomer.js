import { Customer } from './Customer';
var harry = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
harry.birthDate = new Date(1980, 7, 31);
console.log(harry);
console.log(harry.firstName);
