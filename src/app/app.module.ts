import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartAddBtnComponent } from './components/cart-add-btn/cart-add-btn.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    FeaturedProductsComponent,
    PrimaryButtonComponent,
    SingleProductComponent,
    CartAddBtnComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
