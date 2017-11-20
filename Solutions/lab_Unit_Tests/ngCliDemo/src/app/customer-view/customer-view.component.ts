import {Component, OnInit, Input, Inject} from '@angular/core';
import {Customer} from './Customer';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'customer-view',
  templateUrl: 'customer-view.component.html',
  styleUrls: ['customer-view.component.css'],
})
export class CustomerViewComponent implements OnInit {
  private customerForm: FormGroup;
  private _state: string = "view";
  private _customer: Customer = new Customer();
  @Input()
  private customerId: number = -1;
  public static customers: any = {
    "1234": new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
    "1235": new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
    "1236": new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  };

  // this.customer-view = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
  }

  ngOnInit() {
    this._customer = CustomerViewComponent.customers[this.customerId];
    this.customerForm = this.fb.group({
      firstName: [this._customer.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])],
      lastName: [this._customer.lastName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])],
      phoneNumber: [this._customer.phoneNumber, Validators.pattern("[0-9,\\-,\\ ,\\.,\\+,\\(,\\)]*")],
      email: [this._customer.email, Validators.pattern("(.*)@(.*)")],
      birthDate: [this._customer.birthDate, Validators.required]
    });
    console.log("FormBuilder: ");
    console.log(this.fb);
  }

  onClick($event) {
    console.log(this._customer.firstName + " was clicked!");
  }

  onHover($event) {
    console.log(this._customer.firstName + " is being hovered over!");
  }

  ageInYears(): number {
    return Math.floor(this._customer.age);
  }

  update() {
    // console.log("Form FirstName: ");
    // console.log(this.customerForm.controls["firstName"].value);
    // console.log(this.customerForm.controls["firstName"].status);
    // if (this.customerForm.get('firstName').status == "VALID") { this.customer-view.firstName = this.customerForm.get('firstName').value};
    if (this.customerForm.status == "VALID") {
      this._customer.firstName = this.customerForm.get('firstName').value;
      this._customer.lastName = this.customerForm.get('lastName').value;
      this._customer.phoneNumber = this.customerForm.get('phoneNumber').value;
      this._customer.email = this.customerForm.get('email').value;
      let bd = this.customerForm.get('birthDate').value;
      this._customer.birthDate = new Date(bd.year, bd.month - 1, bd.day)
      this._state = 'view';
    }
  }

  bdChange(o, $event) {
    console.log("BD Change");
    console.log(o);
    // debugger;
    // let bd : any = this.customer-view.birthDate;
    let bd: any = $event;

    if ((typeof bd == "date") || ((typeof bd == "object") && (bd.getUTCDate))) {
      this._customer.birthDate = new Date(bd.getYear(), bd.getMonth() - 1, bd.getDay());
      return;
    } else   // Assume a yyyy-mm-dd format
    if ((typeof bd == "String") || (typeof bd == "string")) {
      let inStr = bd.toString();
      let year = inStr.substring(0, 4);
      let month = inStr.substring(5, 7);
      let day = inStr.substring(8, 10);

      this._customer.birthDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    } else if ((typeof bd == "object") && (bd.month)) {
      this._customer.birthDate = new Date(bd.year, bd.month - 1, bd.day);
    }
    console.log(this._customer.birthDate);
  }


  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }


  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }
}
