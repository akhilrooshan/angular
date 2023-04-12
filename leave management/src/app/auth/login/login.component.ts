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
  //Assigning private fb variable to formbuilder class
  constructor(private fb: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {
    //Adding Validators for the username and password in loginForm
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  //This Function invokes when the save is pressed
  onSubmit() {
    //triggers this section only if the loginform is valid
    this.loginForm.markAllAsTouched()
    if (this.loginForm.valid) {
      //checks the username and password matches with the given credentials
      /*if yes,
      login as employee and set a key as token in local storage,
      set a key as name for the name of the user,
      set a key as userType for the role of the user,in this case employee
        */
      if (this.loginForm.value.username === "employee@gmail.com" && this.loginForm.value.password == "1234") {
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "akhil");
        localStorage.setItem('userType', 'employee')
        this.router.navigate(['home/leaveList'])
      } else if (this.loginForm.value.username === "admin@gmail.com" && this.loginForm.value.password == "aaaa") {
        /*
        @description:login as admin
        */
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "ashwini");
        localStorage.setItem('userType', 'admin')
        this.router.navigate(['home'])
      } else if (this.loginForm.value.username === "anusha.pace" && this.loginForm.value.password == "4321") {
        /*
        @description:login as employee
        */
        localStorage.setItem('token', "dtdydghjhjgyryttargdhfgnjmgfgfdsassfggnhgyfd");
        localStorage.setItem('name', "anusha");
        localStorage.setItem('userType', 'employee')
        this.router.navigate(['home/leaveList'])
      }
      //if the loginForm data is invalid
      else {
        alert("invalid credentials")
      }
    }
  }
}
