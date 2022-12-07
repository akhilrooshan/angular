import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingjsonComponent } from './testingjson/testingjson.component';
const routes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'home', component:CreateCampaignComponent },
  { path: 'tst', component:TestingjsonComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampaignRoutingModule { }
