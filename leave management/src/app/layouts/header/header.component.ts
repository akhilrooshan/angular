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
  //array for storing the profile data loaded from the api
  data: any = [];
  /*
  @variable name stores the name from localstorage of key name
  @variable usertype stores the role of user from localstorage of key usertype
  */
  name = localStorage.getItem("name")
  user = localStorage.getItem("userType")
  /*
  @description:
  private document variable  document class
  private router variable created for router class,
  private userService variable created for services.service file.
  */
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private userService: ServicesService) {
    //fetching the data from the api
    this.userService.getData().subscribe((datan: any) => {
      this.data = datan.data
    })
  }
  ngOnInit(): void {
  }
  sidebarToggle() {
    //toggle the sidebar when clicking 
    this.document.body.classList.toggle('toggle-sidebar');
  }
  // invokes when clicks on logout
  logout() {
    /*
    removes the keys token,userType,name,login from the localstorage 
    */
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem("name")
    this.router.navigate(["login"])
  }
}