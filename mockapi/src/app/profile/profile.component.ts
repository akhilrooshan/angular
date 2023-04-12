import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../interceptor/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   data:any=[]
  constructor(private userService:ServicesService,private router:Router) { 
    this.userService.getData().subscribe((datan: any) => {
      console.log(datan)
      
  
      this.data = datan.data

    })
  }
  
  ngOnInit(): void {
  }

}
