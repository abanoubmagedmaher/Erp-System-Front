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
import { ShareModule } from './share/share.module';
import { ShopModule } from './shop/shop.module';
import { DataTableComponent } from './Componnets/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Componnets/login/login.component';
//Angular Matrial v 16
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//PrimNg v16
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    DataTableComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ShareModule,
    ShopModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
