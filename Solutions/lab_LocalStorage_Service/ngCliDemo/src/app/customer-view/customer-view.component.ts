import {Component, OnInit, Input, Inject, Output, EventEmitter} from '@angular/core';
import {Customer} from './Customer';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerStorageService} from "../customer-storage-service";
import {CustomerLocalStorageService} from "../customer-local-storage/customer-local-storage.service";
import {CustomerAddedEvent} from "./CustomerAddedEvent";
import {CustomerUpdatedEvent} from "./CustomerUpdatedEvent";
import {CustomerDeletedEvent} from "./CustomerDeletedEvent";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

declare var $ : any;

@Component({
  selector: 'customer-view',
  templateUrl: 'customer-view.component.html',
  styleUrls: ['customer-view.component.css'],
})
export class CustomerViewComponent implements OnInit {
  private _customerForm: FormGroup;
  get customerForm(): FormGroup {
    return this._customerForm;
  }

  set customerForm(value: FormGroup) {
    this._customerForm = value;
  }

  // @Input()
  private _state: string = "view";
  private _customer: Customer = new Customer();
  @Input()
  private customerId: number = 1234; // -1;
  // public static customers: any = {
  //   "1234": new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
  //   "1235": new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
  //   "1236": new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  // };

  // this.customer-view = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
  constructor(@Inject(FormBuilder) private fb: FormBuilder, @Inject(CustomerLocalStorageService) private customerStorageService : CustomerStorageService) {
  }

  ngOnInit() {
    // let c : Customer[] = [];
    // for (let cust in CustomerViewComponent.customers) {
    //   c.push(CustomerViewComponent.customers[cust]);
    // }
    // window.localStorage.setItem("customers", JSON.stringify(c));

    // this._customer = CustomerViewComponent.customers[this.customerId];
    this.customerStorageService.findById(this.customerId).subscribe(res => {
      this._customer = res;
    });
    // Refactored form initialization into its own method
    this.initForm();
  }

  private initForm() {
    if (typeof this.customer === 'object') {
      this.customer = $.extend(new Customer(), this.customer);
    }
    this.customerForm = this.fb.group({
      firstName: [this.customer.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])],
      lastName: [this.customer.lastName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])],
      phoneNumber: [this.customer.phoneNumber, Validators.pattern("[0-9,\\-,\\ ,\\.,\\+,\\(,\\)]*")],
      email: [this.customer.email, Validators.pattern("(.*)@(.*)")],
      birthDate: [this.customer.birthDate, Validators.required]
    });
    try {
      if ((this.customer.birthDate instanceof String) || (typeof this.customer.birthDate == 'string')) {
        try {
          this.customer.birthDate = new Date(this.customer.birthDate);
        } catch (e) {
          console.log("Can't change birthDate string to Date: " + e);
        }
      }
      if (this.customer.birthDate && this.customer.birthDate instanceof Date) {
        let birthDate: NgbDateStruct = {
          year: this.customer.birthDate.getFullYear(),
          month: this.customer.birthDate.getMonth() + 1,
          day: this.customer.birthDate.getDate()
        };
        this.customerForm.get('birthDate').setValue(birthDate);
      }
    } catch (e) {
      console.log(e);
    }
    // console.log("FormBuilder: ");
    // console.log(this.fb);
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
      this.customerUpdated.emit(new CustomerUpdatedEvent(this.customer));
      this.customerStorageService.update(this.customer);
      this._state = 'view';
    }
  }

  @Output()
  private customerAdded = new EventEmitter<CustomerAddedEvent>();
  @Output()
  private customerUpdated = new EventEmitter<CustomerUpdatedEvent>();
  @Output()
  private customerDeleted = new EventEmitter<CustomerDeletedEvent>();

  add() {
    if (this.customerForm.status == "VALID") {
      this.customer.firstName = this.customerForm.get('firstName').value;
      this.customer.lastName = this.customerForm.get('lastName').value;
      this.customer.phoneNumber = this.customerForm.get('phoneNumber').value;
      this.customer.email = this.customerForm.get('email').value;
      let bd = this.customerForm.get('birthDate').value;
      this.customer.birthDate = new Date(bd.year, bd.month - 1, bd.day)
    }
    this.customerStorageService.insert(this.customer);
    this.state = 'view';
    // this.customerAdded.emit(new CustomerAddedEvent(this.customer));
    // this.customerAddedEmitter.emit();
  }

  remove() {
    this.customerStorageService.remove(this.customer);
    this.customerDeleted.emit(new CustomerDeletedEvent(this.customer));
    this.state = 'view';
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

      this.customer.birthDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    } else if ((typeof bd == "object") && (bd.month)) {
      this.customer.birthDate = new Date(bd.year, bd.month - 1, bd.day);
    }
    console.log(this.customer.birthDate);
  }

  @Input()
  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
    console.log("State was set to: " + this.state);
    if (this.state == 'edit') {
      this.initForm();
    }
  }


  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }


}
