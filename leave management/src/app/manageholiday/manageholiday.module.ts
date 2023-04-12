import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageholidayRoutingModule } from './manageholiday-routing.module';
import { AddholidayComponent } from './addholiday/addholiday.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddholidayComponent
  ],
  imports: [
    CommonModule,
    ManageholidayRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ManageholidayModule { }
