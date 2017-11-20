import { Customer } from './Customer';
import { Person } from './Person';

var harry = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
harry.birthDate = new Date(1980, 7, 31);
console.log(harry);

console.log(harry.firstName);

printPerson(harry);

function printPerson(p : Person) {
	console.log("Person:");
	console.log("First Name: " + p.firstName);
	console.log("Last Name: " + p.lastName);
}
