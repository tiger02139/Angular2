import {Component, OnInit, Inject} from "@angular/core";
import {CustomerViewComponent} from "../customer-view/customer-view.component";
import {Customer} from "../customer-view/Customer";
import {CustomerStorageService} from "../customer-storage-service";
import {CustomerLocalStorageService} from "../customer-local-storage/customer-local-storage.service";

declare var $ : any;

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

  constructor(@Inject(CustomerLocalStorageService) private customerStorageService : CustomerStorageService) {
    customerStorageService.findAll().subscribe(custs => {
      for (let cust in custs) {
        this.customers.push($.extend(new Customer(), custs[cust]));
      //   // Pick a random birthdate between 1 Jan 1980 and now
      //   let start = new Date(1980, 1, 1);
      //   let end = new Date();
      //   let timeRangeInMS = (end.getTime() - start.getTime());
      //   let randomDate : Date = new Date(start.getTime() + Math.random() * timeRangeInMS);
      //   custs[cust].birthDate = randomDate;
      //   // custs[cust].birthDate = new Date(1980, 6, 31);
      }
      // console.log("Customers: ");
      // console.log(this.customers);
    });
  }

  ngOnInit() {
  }

}
