import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  name=localStorage.getItem("name")
  user=localStorage.getItem("userType")
  constructor(@Inject(DOCUMENT) private document: Document,private router:Router) { }

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
