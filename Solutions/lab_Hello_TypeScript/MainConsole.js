import { Customer } from './Customer';
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
rl.question("First Name: ", function(firstName) {
    console.log(firstName);
    process.exit();
});
*/
// might prematurely exit...
/*
var harry = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
harry.birthDate = new Date(1980, 7, 31);
console.log(harry);

console.log(harry.firstName);
*/
var customers = [];
console.log("Welcome to Weasley's");
rl.prompt();
rl.on('line', (line) => {
    switch (line.trim()) {
        case 'a':
        case 'A':
            addCustomer();
            break;
        case 'l':
        case 'L':
            listCustomers();
            break;
        case 'm':
        case 'M':
        case '?':
        case 'h':
        case 'H':
            displayMenu();
            break;
        default:
            console.log("Huh? Try 'h' for help.");
    }
    rl.prompt();
}).on('close', () => {
    console.log("cu l8r");
    process.exit(0);
});
function addCustomer() {
    console.log("Adding Customer");
    let c = new Customer();
    rl.question("First Name:", (first) => c.firstName = first);
    customers.push(c);
}
function listCustomers() {
    console.log("List Customers");
    console.log(customers);
}
function quit() {
    rl.close();
}
function displayMenu() {
    console.log("A) Add a Customer");
    console.log("Q) Quit");
}
