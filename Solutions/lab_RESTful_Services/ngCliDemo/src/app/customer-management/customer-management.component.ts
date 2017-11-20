import {Component, OnInit, Input, Inject, ViewChild} from "@angular/core";
import {Customer} from "../customer-view/Customer";
import {CustomerStorageService} from "../customer-storage-service";
import {CustomerRESTStorageService} from "../customer-rest-storage/customer-rest-storage.service";
import {CustomerViewComponent} from "../customer-view/customer-view.component";

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  private _showCustomerView: boolean = false;
  private _customers: Customer[] = [];
  @ViewChild(CustomerViewComponent)
  private customerViewComponent: CustomerViewComponent;


  get customers(): Customer[] {
    return this._customers;
  }
  @Input()
  set customers(value: Customer[]) {
    this._customers = value;
  }

  public get showCustomerView(): boolean {
    return this._showCustomerView;
  }

  public set showCustomerView(showCustomerView: boolean) {
    this._showCustomerView = showCustomerView;
  }


  constructor(@Inject(CustomerRESTStorageService) private customerStorageService: CustomerStorageService) {
    if (this.customers == null || this.customers.length == 0) {
      this.customerStorageService.findAll().subscribe(res => {
        this.customers = res;

        for (let cust in this.customers) {
          // this._customers.push(CustomerViewComponent.customers[cust]);
          // Pick a random birthdate between 1 Jan 1980 and now
          let start = new Date(1980, 1, 1);
          let end = new Date();
          let timeRangeInMS = (end.getTime() - start.getTime());
          let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
          this.customers[cust].birthDate = randomDate;
          this.customers[cust].birthDate = new Date(1980, 6, 31);
        }
        console.log("Customers: ");
        console.log(this.customers);

      });
    }
  }

  ngOnInit() {
  }

  addCustomer() {
    if (!this.showCustomerView) {
      this.showCustomerView = true;
    } else {
      console.log("CVC: ");
      console.log(this.customerViewComponent);
      console.log("CVC customer: ");
      console.log(this.customerViewComponent.customer);
      this.customerStorageService.insert(this.customerViewComponent.customer).subscribe(res => {
        console.log("insert returned: ");
        console.log(res);
      });
      this.showCustomerView = false;
    }
  }

  cancelAddCustomer() {
    this.showCustomerView = false;
  }

}
