import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {
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
   console.log(this.formData);
  }
}
