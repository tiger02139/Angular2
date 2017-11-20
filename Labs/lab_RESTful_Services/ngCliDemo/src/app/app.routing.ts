import {Routes, RouterModule} from "@angular/router";

import {LandingComponent} from "./landing/landing.component";
import {CustomerManagementComponent} from "./customer-management/customer-management.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {ShippingManagementComponent} from "./shipping-management/shipping-management.component";
import {ModuleWithProviders} from "@angular/core";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // <1>
  {path: 'home', component: LandingComponent}, // <2>
  {path: 'CustomerManagement', component: CustomerManagementComponent},
  {path: 'OrderManagement', component: OrderManagementComponent},
  {path: 'ShippingManagement', component: ShippingManagementComponent}
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
