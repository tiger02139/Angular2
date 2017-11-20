import { Person } from './Person';

export class Customer implements Person {
	private _customerId : number = -1;
	private _firstName : string = "";
	private _lastName : string = "";
	private _email : string = "";
	private _phoneNumber : string = "";
	private _birthDate : Date = new Date();

	constructor(customerId : number = -1, firstName : string = "", lastName : string = "", email : string = "", phoneNumber : string = "") {
		this.customerId = customerId;
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
		this._phoneNumber = phoneNumber;
	}

	get customerId() : number {
		return this._customerId;
	}

	set customerId( customerId : number ) {
		this._customerId = customerId;
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

	get email() : string {
		return this._email;
	}

	set email( email : string) {
		this._email = email;
	}

	get phoneNumber() : string {
		return this._phoneNumber;
	}

	set phoneNumber( phoneNumber : string) {
		this._phoneNumber = phoneNumber;
	}

	get birthDate() : Date {
		return this._birthDate;
	}

	set birthDate( birthDate : Date ) {
		this._birthDate = birthDate;
	}

	get age() {
		let now : Date = new Date();
		return (now.getTime() - this.birthDate.getTime()) / (1000 * 3600 * 24 * 365.25);
	}

}
