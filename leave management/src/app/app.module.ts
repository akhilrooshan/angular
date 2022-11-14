import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

import { LoginComponent } from './auth/login/login.component';

import { HomeComponent } from './home/home.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  
    LoginComponent,
  
    HomeComponent,
    HolidayComponent,
    LeavelistComponent,
    LeavereqComponent,
    ProfileComponent,
    PopupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
