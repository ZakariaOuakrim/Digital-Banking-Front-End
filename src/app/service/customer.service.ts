import { Customer } from './../model/customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backEndHost:string="http://localhost:8085" 
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backEndHost+"/customers")
  }

  public searchCustomers(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backEndHost+"/customers/search?keyword?"+keyword)
  }

}


