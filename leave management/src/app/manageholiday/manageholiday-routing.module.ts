import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../shared/role.guard';
import { AddholidayComponent } from './addholiday/addholiday.component';
import { HolidayComponent } from './holiday/holiday.component';
const routes: Routes = [
  { path: '', component:HolidayComponent,canActivate:[RoleGuard] },
  { path: 'editHoliday', component:AddholidayComponent,canActivate:[RoleGuard] },
  { path: 'createHoliday', component:AddholidayComponent,canActivate:[RoleGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageholidayRoutingModule { }
