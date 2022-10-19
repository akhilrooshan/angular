import { Component } from '@angular/core';
import {UsersService} from "./users/users.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  p:any;
  data:any=[]
 
  constructor(private userService:UsersService){
    
    this.userService.getData().subscribe((datan:any)=>{
      console.log(datan);
      
      this.data = datan.data
      
    })
  }
 
}
