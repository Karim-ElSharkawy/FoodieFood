import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResturantPageComponent } from './resturant-page/resturant-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'order', component: ResturantPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  {
    path: 'login',
    component: SignPageComponent,
  },
  {
    path: 'signup',
    component: SignPageComponent,
  },
];
export default appRoutes;
