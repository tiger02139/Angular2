import {Observable} from 'rxjs';

import {Customer} from "./customer-view/Customer";

export interface CustomerStorageService {
  insert(customer : Customer) : Observable<Customer>;
  remove(customer : Customer) : Observable<Customer>;
  update(customer : Customer) : Observable<Customer>;
  findById(customerId : number) : Observable<Customer>;
  findAll() : Observable<Customer[]>;
}
