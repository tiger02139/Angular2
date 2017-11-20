"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.customerId = -1;
        //firstName : string = "";
        //lastName : string = "";
        this.email = "";
        this.phoneNumber = "";
        this.birthDate = new Date();
        this.fullName = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Customer;
}());
exports.Customer = Customer;
