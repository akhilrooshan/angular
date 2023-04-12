import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './manageuser/home/home.component';
import { HolidayComponent } from './manageholiday/holiday/holiday.component';
import { AuthGuard } from './shared/auth.guard';
import { LeavelistComponent } from './manageleavelist/leavelist/leavelist.component';
import { RoleGuard } from './shared/role.guard';
import { LeavereqComponent } from './manageleave/leavereq/leavereq.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteComponent } from './delete/delete.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./manageuser/manageuser.module').then(m => m.ManageuserModule),canActivate:[RoleGuard] },
  { path: 'home/leaveList', loadChildren: () => import('./manageleavelist/manageleavelist.module').then(x=>x.ManageleavelistModule),canActivate:[AuthGuard] },
  { path: 'profile', component:ProfileComponent,canActivate:[AuthGuard] },
  { path: 'deleteLR', component:DeleteComponent,canActivate:[RoleGuard] },
  { path: 'deleteUser', component:DeleteComponent,canActivate:[RoleGuard] },
  { path: 'deleteLL', component:DeleteComponent,canActivate:[AuthGuard] },
  { path: 'deleteHoliday', component:DeleteComponent,canActivate:[RoleGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
