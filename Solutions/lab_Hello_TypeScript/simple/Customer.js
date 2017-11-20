"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(customerId, firstName, lastName, email, phoneNumber) {
        if (customerId === void 0) { customerId = -1; }
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        if (email === void 0) { email = ""; }
        if (phoneNumber === void 0) { phoneNumber = ""; }
        this.customerId = -1;
        this._firstName = "";
        this._lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.birthDate = new Date();
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.toString = function () {
        return "Flarp";
    };
    return Customer;
}());
exports.Customer = Customer;
