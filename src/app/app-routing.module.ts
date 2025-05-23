import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:"customers",component:CustomersComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"new-customer",component:NewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
