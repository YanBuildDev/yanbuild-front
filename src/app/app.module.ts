
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';


import {NgxPopperjsModule} from 'ngx-popperjs';
import { register } from 'swiper/element/bundle';

register()
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],



  imports: [
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxPopperjsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}