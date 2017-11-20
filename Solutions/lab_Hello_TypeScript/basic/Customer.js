"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer() {
        this.customerId = -1;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.birthDate = new Date();
    }
    return Customer;
}());
exports.Customer = Customer;
