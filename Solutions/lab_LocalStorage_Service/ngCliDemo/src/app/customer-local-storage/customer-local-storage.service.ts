import { Injectable } from '@angular/core';
import {CustomerStorageService} from "../customer-storage-service";
import {Observable} from "rxjs";
import {Customer} from "../customer-view/Customer";

declare var $ : any;

@Injectable()
export class CustomerLocalStorageService implements CustomerStorageService {
  private static _lastCustomerId : number = 0;

  static nextCustomerId(): number {
    return Math.floor(Math.random() * new Date().getTime() / (1024 * 1024));
  }

  private static customersLoaded : boolean = false;

  public static customers: Customer[] = [
    // new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
    // new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
    // new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  ];

  constructor() {
    if (!CustomerLocalStorageService.customersLoaded) {
      CustomerLocalStorageService.loadFromLocalStorage();
    }
  }

  private static saveToLocalStorage() {
    window.localStorage.setItem("customers", JSON.stringify(CustomerLocalStorageService.customers));
    console.log("Saving Customers:");
    console.log(CustomerLocalStorageService.customers);
  }

  private static loadFromLocalStorage() {
    let localCustomers = JSON.parse(window.localStorage.getItem("customers"));
    for (let cust of localCustomers) {
      if (typeof cust === 'object') {
        cust = $.extend(new Customer(), cust);
      }
      if ((cust.birthDate instanceof String) || (typeof cust.birthDate == 'string')) {
        try {
          //   cust.birthDate = new Date(cust._birthDate.substring(0, 10));
          cust.birthDate = new Date(cust.birthDate);
        } catch (e) {
          debugger;
          console.log("Can't change birthDate string to Date: " + e);
        }
      } else {
        cust.birthDate = new Date();
      }
      let custObj = $.extend(new Customer(), cust);
      CustomerLocalStorageService.customers.push(custObj);
    }
    CustomerLocalStorageService.customersLoaded = true;
  }

  insert(customer : Customer) : Observable<Customer> {
    customer.customerId = CustomerLocalStorageService.nextCustomerId();
    CustomerLocalStorageService.customers.push(customer);
    CustomerLocalStorageService.saveToLocalStorage();
    return new Observable(observer => {
      observer.next(customer);
    })
  }

  remove(customer : Customer) : Observable<Customer> {
    let deletedCustomers : Customer[] = [];
    for (let custIdx in CustomerLocalStorageService.customers) {
      let cust : Customer = CustomerLocalStorageService.customers[custIdx];
      if (cust.customerId == customer.customerId) {
        // TODO - Fix this splice
        CustomerLocalStorageService.customers.splice(parseInt(custIdx), 1);
        CustomerLocalStorageService.saveToLocalStorage();
        return new Observable(observer => {
          observer.next(cust);
        })
      }
    }
    return new Observable(observer => {
      observer.complete();
    })
  }

  update(customer : Customer) : Observable<Customer> {
    for (let custIdx in CustomerLocalStorageService.customers) {
      let cust : Customer = CustomerLocalStorageService.customers[custIdx];
      if (cust.customerId == customer.customerId) {
        CustomerLocalStorageService.customers[custIdx] = customer;
        CustomerLocalStorageService.saveToLocalStorage();
        return new Observable(observer => {
          observer.next(cust);
        })
      }
    }
    return new Observable(observer => {
      observer.complete();
    })
  }

  findById(customerId : number) : Observable<Customer> {
    for (let cust of CustomerLocalStorageService.customers) {
      if (cust.customerId == customerId) {
        return new Observable(observer => {
          observer.next(cust);
        })
      }
    }
    return new Observable(observer => {
      observer.complete();
    })
  }

  findAll() : Observable<Customer[]> {
    return new Observable(observer => {
      observer.next(CustomerLocalStorageService.customers);
    })
  }


}
