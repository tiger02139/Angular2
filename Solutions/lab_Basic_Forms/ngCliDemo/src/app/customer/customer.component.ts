import {Component, OnInit, Input} from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private state: string = "view";
  private customer: Customer;
  @Input()
  private customerId: number = -1;
  public static customers: any = {
    "1234": new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
    "1235": new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
    "1236": new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
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

  ageInYears(): number {
    return Math.floor(this.customer.age);
  }

  update() {
    this.state = 'view';
  }

  bdChange(o, $event) {
    console.log("BD Change");
    console.log(o);
    // debugger;
    // let bd : any = this.customer.birthDate;
    let bd: any = $event;

    if ((typeof bd == "date") || ((typeof bd == "object") && (bd.getUTCDate))) {
      this.customer.birthDate = new Date(bd.getYear(), bd.getMonth() - 1, bd.getDay());
      return;
    } else   // Assume a yyyy-mm-dd format
    if ((typeof bd == "String") || (typeof bd == "string")) {
      let inStr = bd.toString();
      let year = inStr.substring(0, 4);
      let month = inStr.substring(5, 7);
      let day = inStr.substring(8, 10);

      this.customer.birthDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    } else if ((typeof bd == "object") && (bd.month)) {
      this.customer.birthDate = new Date(bd.year, bd.month - 1, bd.day);
    }
    console.log(this.customer.birthDate);
  }

}
