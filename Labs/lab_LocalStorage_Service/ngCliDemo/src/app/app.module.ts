import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, ROUTER_CONFIGURATION} from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {Customer} from "./customer-view/Customer";
import {CustomerTableComponent} from './customer-table/customer-table.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {OrderTableComponent} from './order-table/order-table.component';
import {ShippingManagementComponent} from './shipping-management/shipping-management.component';
import {ShipmentViewComponent} from './shipment-view/shipment-view.component';
import {ShippingTableComponent} from './shipping-table/shipping-table.component';
import {LandingComponent} from './landing/landing.component';
import {AppRouting} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    CustomerTableComponent,
    CustomerManagementComponent,
    OrderManagementComponent,
    OrderViewComponent,
    OrderTableComponent,
    ShippingManagementComponent,
    ShipmentViewComponent,
    ShippingTableComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule,
    AppRouting
  ],
  providers: [],
  schemas: [
    // NO_ERRORS_SCHEMA,
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
