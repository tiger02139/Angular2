"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var harry = new Customer_1.Customer("Harry", "James", "Potter");
console.log("Attn: " + harry.fullName);
console.log("Dear " + harry.firstName + " " + harry.lastName + ", ...");
