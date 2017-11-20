import { Customer } from './Customer';
var harry = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
harry.birthDate = new Date(1980, 7, 31);
console.log(harry);
console.log(harry.firstName);
printPerson(harry);
function printPerson(p) {
    console.log("Person: " + p.firstName);
}
//# sourceMappingURL=/Users/calvin/Desktop/Courseware/trivera/tt4168-Mastering-Angular-2/cv/labs/solutions/lab_Hello_TypeScript/interface/MainConsolePerson.js.map