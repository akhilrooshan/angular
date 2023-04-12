import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { AdminComponent } from './auth/admin/admin.component';
import { EmployeeComponent } from './auth/employee/employee.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HolidaysComponent,
    LeaveRequestComponent,
    LeavelistComponent,
    AdminComponent,
    EmployeeComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
