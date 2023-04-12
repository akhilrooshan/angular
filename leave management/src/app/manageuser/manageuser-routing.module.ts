import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { RoleGuard } from '../shared/role.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component:HomeComponent,canActivate:[RoleGuard] },
  { path: 'editUser', component:AddUserComponent,canActivate:[RoleGuard] },
  { path: 'createUser', component:AddUserComponent,canActivate:[RoleGuard] },
  { path: 'holiday',loadChildren: () => import('../manageholiday/manageholiday.module').then(x=>x.ManageholidayModule),canActivate:[RoleGuard] },
  { path: 'leaveReq',loadChildren: () => import('../manageleave/manageleave.module').then(x=>x.ManageleaveModule),canActivate:[RoleGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageuserRoutingModule { }
