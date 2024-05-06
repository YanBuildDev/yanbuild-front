import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {
   formData = {
      firstName: '',
      phoneNumber: '',
      zipCode: '',
      state: '',
      latsName: '',
      email: '',
      city: '',
      companyName: '',
      residentialTile: '',
      showerPanWork: '',
      floorLeveling: '',
      commercialTile: '',
      tileRepair: '',
      immediately: '',
      months3_6: '',
      months6: '',
      yesInstallation: '',
      no: '',
      notSureYet: '',
      phoneCall: '',
      text: '',
      emailCheck: '',
      whenIsTheBestTimeToContactYou: '',
      howDidYouHearAboutUs: '',
      tellUsAboutYourProject : '',
      // //////////////////////
      projectPlanning: '',
      contactMethods: [

      ],
   }


   addMethod(event){
      if(this.formData.contactMethods.includes(event)){
         this.formData.contactMethods = this.formData.contactMethods.filter(method => method !== event);
      }else{
         this.formData.contactMethods.push(event);
      }
   }
  onSubmit() {

  }
}
