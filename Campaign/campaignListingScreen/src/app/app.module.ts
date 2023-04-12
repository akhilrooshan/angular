import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/interceptor.service';
import { ServicesService } from './shared/services.service';
import { IdPipe } from './pipes/id.pipe';
@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
    ],
    providers: [
        { provide:HTTP_INTERCEPTORS ,useClass:InterceptorService,multi:true},
        ServicesService,
      ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ]
})
export class AppModule { }
