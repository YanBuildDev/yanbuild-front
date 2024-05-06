import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
   invalidKeys:any = {}
   invalid = false

   formData = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      zip: '',
      city: '',
      state: '',
      companyName: '',
      projectKind: [
      ],
      projectPlanning: '',
      homeMeasurements: '',
      contactMethods: [
      ],
      contactTime: '',
      hearAboutUs: '',
      projectDesc: '',
   }

   inputMasks = {
      mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    }

    IS_POSTED = false

    constructor(public orderService: OrderService) {
       
    }

   ngOnInit(): void {
      window.scrollTo(0, 0);
   }

   addKind(event){
      if(this.formData.projectKind.includes(event)){
         this.formData.projectKind = this.formData.projectKind.filter(kind => kind !== event);
      }else{
         this.formData.projectKind.push(event);
      }
   }
   addMethod(event){
      if(this.formData.contactMethods.includes(event)){
         this.formData.contactMethods = this.formData.contactMethods.filter(method => method !== event);
      }else{
         this.formData.contactMethods.push(event);
      }
      
   }
  onSubmit() {
   let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   this.invalidKeys = []
   this.invalid = false
   for(let key of Object.keys(this.formData)){
      if(!this.formData[key].length){
         this.invalidKeys[key] = true;
         this.invalid = true 
      }

      if(this.formData[key] === 'email' && !this.formData[key].match(validRegex)){
         this.invalidKeys.email = true;
         this.invalid = true 
      }

   }


   if(this.invalid){
      return;
   }

   console.log(this.formData);

   this.orderService.create(this.formData).subscribe(res => {
      console.log(res)
      if(res?.data?.order?._id){
         this.IS_POSTED = true
      }
   })
  }
}
