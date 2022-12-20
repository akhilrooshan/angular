import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignRoutingModule } from './manage-campaign-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStep, MatStepper, MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    DashboardComponent,
    CreateCampaignComponent,
  ],
  imports: [
    CommonModule,
    ManageCampaignRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatListModule,
    MatRadioModule,
    MatMenuModule
  ]
})
export class ManageCampaignModule { }
