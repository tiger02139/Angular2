"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        //customerId : number = -1;
        //firstName : string = "";
        //lastName : string = "";
        //email : string = "";
        //phoneNumber : string = "";
        //birthDate : Date = new Date();
        this.fullName = "";
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Customer;
}());
exports.Customer = Customer;
