import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'api';
  p:any;

  data:any=[]
 
  constructor(private userService:UsersService){
    
  
    this.userService.getPData().subscribe((datan:any)=>{
      console.log(datan)
      
      this.data = datan.data


      
    })


  }
  ngOnInit(): void {
  
  }
 
}
  


