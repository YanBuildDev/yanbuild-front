import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

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
    path: 'orders',
    component: OrdersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  },
  {
    path: '**',
    redirectTo: 'MainComponent'
  }
];
