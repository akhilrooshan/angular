import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any=[];
  name=localStorage.getItem("name")
  user=localStorage.getItem("userType")
  constructor(@Inject(DOCUMENT) private document: Document,private router:Router,private userService:ServicesService) {

    this.userService.getData().subscribe((datan: any) => {
      console.log(datan)
      
  
      this.data = datan.data

    })
   }

  ngOnInit(): void {
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }


  // logout function

  logout()
  {
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem("name")
    this.router.navigate(["login"])

  }
 
  
}