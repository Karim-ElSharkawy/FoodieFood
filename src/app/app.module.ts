import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { SignupComponent } from './sign-page/signup/signup.component';
import { SocialSignupComponent } from './sign-page/signup/social-signup/social-signup.component';
import { NormalSignupComponent } from './sign-page/signup/normal-signup/normal-signup.component';
import { HomePageComponent } from './home-page/home-page.component';

import appRoutes from './routerConfig';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroImgSectionComponent } from './home-page/hero-img-section/hero-img-section.component';
import { RecommendedShopsComponent } from './home-page/recommended-shops/recommended-shops.component';
import { ShopCardComponent } from './home-page/recommended-shops/shop-card/shop-card.component';
import { ContactusFormComponent } from './home-page/contactus-form/contactus-form.component';
import { ResturantPageComponent } from './resturant-page/resturant-page.component';
import { ResturantHeaderComponent } from './resturant-page/resturant-header/resturant-header.component';
import { ResturantMenuComponent } from './resturant-page/resturant-menu/resturant-menu.component';
import { MenuPartitionComponent } from './resturant-page/resturant-menu/menu-partition/menu-partition.component';
import { MenuItemComponent } from './resturant-page/resturant-menu/menu-partition/menu-item/menu-item.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignPageComponent,
    SignupComponent,
    SocialSignupComponent,
    NormalSignupComponent,

    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    HeroImgSectionComponent,
    RecommendedShopsComponent,
    ShopCardComponent,
    ContactusFormComponent,
    ResturantPageComponent,
    ResturantHeaderComponent,
    ResturantMenuComponent,
    MenuPartitionComponent,
    MenuItemComponent,
    CheckoutPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
