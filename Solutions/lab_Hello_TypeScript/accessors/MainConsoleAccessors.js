"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var harry = new Customer_1.Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
harry.birthDate = new Date(1980, 7, 31);
console.log(harry);
console.log(harry.firstName);
console.log(harry.lastName);
