export class Customer {
    constructor(customerId = -1, firstName = "", lastName = "", email = "", phoneNumber = "") {
        this.customerId = -1;
        this._firstName = "";
        this._lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.birthDate = new Date();
        this.customerId = customerId;
        this._firstName = firstName;
        this._lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
//# sourceMappingURL=/Users/calvin/Desktop/Courseware/trivera/tt4168-Mastering-Angular-2/cv/labs/solutions/lab_Hello_TypeScript/blessed/Customer.js.map