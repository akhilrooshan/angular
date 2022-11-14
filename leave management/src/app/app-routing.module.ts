import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './auth/login/login.component';

import { HomeComponent } from './home/home.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AuthGuard } from './shared/auth.guard';
import { LeavelistComponent } from './leavelist/leavelist.component';

import { RoleGuard } from './shared/role.guard';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { ProfileComponent } from './profile/profile.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  
  { path: 'login', component: LoginComponent },
 

  { path: 'home', component: HomeComponent,canActivate:[RoleGuard] },
  { path: 'holiday', component:HolidayComponent,canActivate:[RoleGuard] },
  { path: 'leaveReq', component:LeavereqComponent,canActivate:[RoleGuard] },
  { path: 'leaveList', component:LeavelistComponent,canActivate:[AuthGuard] },
  { path: 'profile', component:ProfileComponent,canActivate:[AuthGuard] },
  { path: 'editUser', component:PopupComponent,canActivate:[RoleGuard] },
  { path: 'createUser', component:PopupComponent,canActivate:[RoleGuard] },
  { path: 'editHoliday', component:PopupComponent,canActivate:[RoleGuard] },
  { path: 'createHoliday', component:PopupComponent,canActivate:[RoleGuard] },
  { path: 'createLeave', component:PopupComponent,canActivate:[AuthGuard] },
  { path: 'editLeave', component:PopupComponent,canActivate:[AuthGuard] },





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
