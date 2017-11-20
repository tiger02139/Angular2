import { Component, OnInit } from '@angular/core';

import { Customer } from './customer/Customer';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular!';
  firstName = "Harry";
  birthDate : Date = new Date(1980, 6, 31);
  now : Date = new Date();

  private _customers : Customer[] = [];

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }

  constructor() {
  	for (let cust in CustomerComponent.customers) {
		this._customers.push(CustomerComponent.customers[cust]);
		// Pick a random birthdate between 1 Jan 1980 and now
		let start = new Date(1980, 1, 1);
		let end = new Date();
		let timeRangeInMS = (end.getTime() - start.getTime());
		let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
		CustomerComponent.customers[cust].birthDate = randomDate;
		CustomerComponent.customers[cust].birthDate = new Date(1980, 6, 31);
	}
	// console.log("Customers: ");
	// console.log(this.customers);
  }

  ngOnInit() {
  }

}
