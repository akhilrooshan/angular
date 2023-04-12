import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AddleaveComponent } from './addleave/addleave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';

const routes: Routes = [
  { path: '', component:LeavelistComponent,canActivate:[AuthGuard] },
  { path: 'createLeave', component:AddleaveComponent,canActivate:[AuthGuard] },
  { path: 'editLeave', component:AddleaveComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageleavelistRoutingModule { }
