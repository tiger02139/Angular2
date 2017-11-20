import {Component, OnInit} from "@angular/core";
import {CustomerComponent} from "../customer/customer.component";
import {Customer} from "../customer/Customer";

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
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
