import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  newCustomerFromGroup!:FormGroup
  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.newCustomerFromGroup = this.fb.group({
      name:this.fb.control(null),
      email:this.fb.control(null)
    })
  }
  handleSaveCustomer(){
    
  }


}
