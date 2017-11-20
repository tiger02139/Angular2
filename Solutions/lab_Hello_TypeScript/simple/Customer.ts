export class Customer {
	private customerId : number = -1;
	private _firstName : string = "";
	private _lastName : string = "";
	private email : string = "";
	private phoneNumber : string = "";
	public birthDate : Date = new Date();

	constructor(customerId : number = -1, firstName : string = "", lastName : string = "", email : string = "", phoneNumber : string = "") {
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	get firstName() : string {
		return this._firstName;
	}

	set firstName( firstName : string ) {
		this._firstName = firstName;
	}

	get lastName() : string {
		return this._lastName;
	}

	set lastName( lastName : string) {
		this._lastName = lastName;
	}

	toString() : string {
		return "Flarp";
	}
}
