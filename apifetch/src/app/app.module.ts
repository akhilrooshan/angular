import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { UsersService } from './users/users.service';
import { InterceptorService } from './interceptor/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS ,useClass:InterceptorService,multi:true},
    UsersService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
