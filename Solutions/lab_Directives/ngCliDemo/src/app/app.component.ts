import { Component, OnInit } from '@angular/core';
//import { AfterViewInit } from '@angular/core';

import { Customer } from './customer/Customer';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*, AfterViewInit */ {
  title = 'Welcome to Angular!';
  firstName = "Harry";
  birthDate : Date = new Date(1980, 6, 31);
  now : Date = new Date();

  private customers : Customer[] = [];

  constructor() {
  	for (let cust in CustomerComponent.customers) {
		this.customers.push(CustomerComponent.customers[cust]);
		// Pick a random birthdate between 1 Jan 1980 and now
		let start = new Date(1980, 1, 1);
		let end = new Date();
		let timeRangeInMS = (end.getTime() - start.getTime());
		let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
		CustomerComponent.customers[cust].birthDate = randomDate;
	}
	// console.log("Customers: ");
	// console.log(this.customers);
  }

  ngOnInit() {
  /*
  	for (let cust in CustomerComponent.customers) {
		this.customers.push(CustomerComponent.customers[cust]);
		let start = new Date(1980, 1, 1);
		let end = new Date();
		let timeRangeInMS = (end.getTime() - start.getTime());
		console.log(timeRangeInMS);
		let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
		console.log(randomDate);
		CustomerComponent.customers[cust].birthDate = randomDate;
	}
	console.log("Customers: ");
	console.log(this.customers);
  */
  }

  /*
  ngAfterViewInit() {
  	for (let cust in CustomerComponent.customers) {
		this.customers.push(CustomerComponent.customers[cust]);
		let start = new Date(1980, 1, 1);
		let end = new Date();
		let timeRangeInMS = (end.getTime() - start.getTime());
		console.log(timeRangeInMS);
		let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
		console.log(randomDate);
		CustomerComponent.customers[cust].birthDate = randomDate;
	}
	console.log("Customers: ");
	console.log(this.customers);
  }
  */

}
