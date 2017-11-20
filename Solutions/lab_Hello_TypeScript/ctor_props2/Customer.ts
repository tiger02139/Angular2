export class Customer {
	customerId : number = -1;
	//firstName : string = "";
	//lastName : string = "";
	email : string = "";
	phoneNumber : string = "";
	birthDate : Date = new Date();

	fullName : string = "";
	constructor(public firstName, public middleName, public lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + " " + middleName + " " + lastName;
	}
}
