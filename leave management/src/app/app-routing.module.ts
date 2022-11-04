import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './auth/login/login.component';

import { HomeComponent } from './home/home.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AuthGuard } from './shared/auth.guard';
import { LeavelistComponent } from './leavelist/leavelist.component';

import { RoleGuard } from './shared/role.guard';
import { LeavereqComponent } from './leavereq/leavereq.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  
  { path: 'login', component: LoginComponent },
 

  { path: 'home', component: HomeComponent,canActivate:[RoleGuard] },
  { path: 'holiday', component:HolidayComponent,canActivate:[RoleGuard] },
  { path: 'leaveReq', component:LeavereqComponent,canActivate:[RoleGuard] },
  { path: 'leaveList', component:LeavelistComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
