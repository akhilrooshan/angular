import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageleaveRoutingModule } from './manageleave-routing.module';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApproveleaveComponent
  ],
  imports: [
    CommonModule,
    ManageleaveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageleaveModule { }
