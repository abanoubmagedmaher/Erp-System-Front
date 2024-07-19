import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componnets/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Componnets/footer/footer.component';
import { LoginComponent } from './Componnets/login/login.component';
import { RegisterComponent } from './Componnets/register/register.component';
import { HomeComponent } from './Componnets/home/home.component';
import { ProductsComponent } from './Componnets/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
