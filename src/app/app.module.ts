import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { LoginComponent } from './login/login.component'; // <-- Updated import



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AccountsComponent,
    NavbarComponent,
    NewCustomerComponent,
    CustomerAccountsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
