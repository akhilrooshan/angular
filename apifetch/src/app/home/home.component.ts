
import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';





@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'api';
  p:any;
  data:any=[]
  dataP:any=[]
 
  constructor(private userService:UsersService){
    
    this.userService.getData().subscribe((datan:any)=>{
      console.log(datan)
      
      this.data = datan.data

  


      
    })


  }
 
}