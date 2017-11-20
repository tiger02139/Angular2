import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private customer : Customer;
  @Input()
  private customerId : number = -1;
  public static customers : any = {
 	"1234" : new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
 	"1235" : new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
 	"1236" : new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  };

  constructor() { 
 	// this.customer = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
  }

  ngOnInit() {
	this.customer = CustomerComponent.customers[this.customerId];
  }

  onClick($event) {
    console.log(this.customer.firstName + " was clicked!");
  } 

  onHover($event) {
    console.log(this.customer.firstName + " is being hovered over!");
  }

  ageInYears() : number {
	return Math.floor(this.customer.age);
  }

}
