import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../shared/role.guard';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { LeavereqComponent } from './leavereq/leavereq.component';


const routes: Routes = [

  { path: '', component:LeavereqComponent,canActivate:[RoleGuard] },
  { path: 'confirmApprove', component:ApproveleaveComponent,canActivate:[RoleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageleaveRoutingModule { }
