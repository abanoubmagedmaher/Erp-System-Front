import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componnets/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Componnets/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
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
