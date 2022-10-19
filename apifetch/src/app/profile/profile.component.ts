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

  dataP:any=[]
 
  constructor(private userService:UsersService){
    
  
    this.userService.getPData().subscribe((datanP:any)=>{
      console.log(datanP)
      
      this.dataP = datanP.dataP


      
    })


  }
  ngOnInit(): void {
  
  }
 
}
  


