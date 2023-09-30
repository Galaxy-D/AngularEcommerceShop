import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    CategoryFilterComponent,
    ProductBoxComponent,
    ProductsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,         // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule,      // Shared (multi-instance) objects    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
