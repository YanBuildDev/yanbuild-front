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
      tellUsAboutYourProject: '',
   }

  onSubmit() {
     console.log('Form submitted!');
     console.log('Username:', this.formData.firstName);
     console.log('Email:', this.formData.phoneNumber);
     console.log('Zip Code:', this.formData.zipCode);
     console.log('state:', this.formData.state);
     console.log('Lats Name:', this.formData.latsName);
     console.log('Email:', this.formData.email);
     console.log('City:', this.formData.city);
     console.log('Company Name:', this.formData.companyName);
     console.log('Residential Tile:', this.formData.residentialTile);
     console.log('Shower Pan Work:', this.formData.showerPanWork);
     console.log('Floor leveling:', this.formData.floorLeveling);
     console.log('Tile Repair:', this.formData.tileRepair);
     console.log(' Immediately:', this.formData.immediately);
     console.log('3-6 months:', this.formData.months3_6);
     console.log('6 months:', this.formData.months6);
     console.log('Yes Installation:', this.formData.yesInstallation);
     console.log('No:', this.formData.no);
     console.log('Not Sure Yet:', this.formData.notSureYet);
     console.log('Phone Call Installation:', this.formData.phoneCall);
     console.log('Text:', this.formData.text);
     console.log('Email check:', this.formData.emailCheck);
     console.log('When is the best time to contact you:', this.formData.whenIsTheBestTimeToContactYou);
     console.log('How did you hear about us?:', this.formData.howDidYouHearAboutUs);
     console.log('Tell us about your project:', this.formData.tellUsAboutYourProject);

     this.formData.firstName = '';
     this.formData.phoneNumber = '';
     this.formData.zipCode = '';
     this.formData.state = '';
     this.formData.latsName = '';
     this.formData.email = '';
     this.formData.city = '';
     this.formData.companyName = '';
     this.formData.residentialTile = '';
     this.formData.showerPanWork = '';
     this.formData.floorLeveling = '';
     this.formData.tileRepair = '';
     this.formData.immediately = '';
     this.formData.months3_6 = '';
     this.formData.months6 = '';
     this.formData.yesInstallation = '';
     this.formData.no = '';
     this.formData.notSureYet = '';
     this.formData.phoneCall = '';
     this.formData.text = '';
     this.formData.emailCheck = '';
     this.formData.whenIsTheBestTimeToContactYou = '';
     this.formData.howDidYouHearAboutUs = '';
     this.formData.tellUsAboutYourProject = '';
  }
}
