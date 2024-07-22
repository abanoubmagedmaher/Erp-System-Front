import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Componnets/footer/footer.component';
import { RegisterComponent } from './Componnets/register/register.component';
import { HomeComponent } from './Componnets/home/home.component';
import { ProductsComponent } from './Componnets/products/products.component';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
