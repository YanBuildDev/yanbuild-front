import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'quote-form',
    component: QuoteFormComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
