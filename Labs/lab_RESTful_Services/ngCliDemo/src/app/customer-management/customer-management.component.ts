import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  private showCustomerView = false;

  constructor() { }

  ngOnInit() {
  }

  addCustomer() {
    this.showCustomerView = true;
  }
}
