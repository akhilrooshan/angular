import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './auth/admin/admin.component';
import { EmployeeComponent } from './auth/employee/employee.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path:'auth/admin',component:AdminComponent},
  {path:'user',component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
