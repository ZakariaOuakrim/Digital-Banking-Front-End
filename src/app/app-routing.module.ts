import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "login" , component : LoginComponent},
  {path : "" , redirectTo : "login" , pathMatch : "full"},
  {path : "admin" , component : AdminTemplateComponent,canActivate : [AuthentificationGuard] ,children : [
  {path : "customers" , component : CustomersComponent},
  {path : "accounts" , component : AccountsComponent},
  {path : "new-customer" , component : NewCustomerComponent, canActivate : [AuthorizationGuard], data : {roles : ["admin"]}},
  {path : "not-authorized" , component : NotAuthorizedComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
