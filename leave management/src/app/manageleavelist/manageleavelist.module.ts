import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageleavelistRoutingModule } from './manageleavelist-routing.module';
import { AddleaveComponent } from './addleave/addleave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddleaveComponent
  ],
  imports: [
    CommonModule,
    ManageleavelistRoutingModule,
    ReactiveFormsModule,FormsModule,
    
  ]
})
export class ManageleavelistModule { }
