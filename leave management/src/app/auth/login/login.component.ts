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

  profile:any[]=[];
  profileArr:any={
    id:0,
    fullName:'',
    about:'',
    job:'',
    phone:0,
    username:''


  }
  constructor(private fb: FormBuilder, private router: Router) {
    const localData=localStorage.getItem('profileList');
    if(localData!=null)
    {
      this.profile=JSON.parse(localData);


      
    }
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
       
        this.profileArr.id=2
        this.profileArr.fullName='Ashwini ys'
       this.profileArr.about="enthuasiasist"
       this.profileArr.job="front end dev"
       this.profileArr.phone=9999977786
       this.profileArr.username='admin@gmail.com'
       this.profile.push(this.profileArr)
       localStorage.setItem('profileList',JSON.stringify(this.profile))
       
        
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
