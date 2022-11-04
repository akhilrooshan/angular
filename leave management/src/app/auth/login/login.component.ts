import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.username === "employee@gmail.com" && this.loginForm.value.password == "1234") {
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "akhil");

        localStorage.setItem('userType', 'employee')
        this.router.navigate(['leaveList'])

      } else if (this.loginForm.value.username === "admin@gmail.com" && this.loginForm.value.password == "aaaa") {
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "ashwini");
        localStorage.setItem('userType', 'admin')
        this.router.navigate(['home'])
      }else if(this.loginForm.value.username === "anusha.pace" && this.loginForm.value.password == "4321"){
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "anusha");

        localStorage.setItem('userType', 'employee')
        this.router.navigate(['leaveList'])
        
      }
      else {
        alert("invalid credentials")
      }
  
    } 
  }



}
