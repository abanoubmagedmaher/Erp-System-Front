import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ButtonModule,
    CalendarModule,
    FormsModule
  ],
  exports:[NavBarComponent]
})
export class CoreModule { }
