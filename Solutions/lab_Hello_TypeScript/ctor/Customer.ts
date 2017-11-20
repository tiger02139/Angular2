export class Customer {
	customerId : number = -1;
	firstName : string = "";
	lastName : string = "";
	email : string = "";
	phoneNumber : string = "";
	birthDate : Date = new Date();

	constructor() {
		console.log("Customer instantiated.");
	}
}
