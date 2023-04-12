import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public router:Router,private services:ServicesService) { 
    const localEdit = localStorage.getItem('edit');
    if (localEdit != null) {
      this.edit = JSON.parse(localEdit);
      console.log(this.edit)
    }

  }

  ngOnInit(): void {

    const localUserData = localStorage.getItem('userList');
    if (localUserData != null) {
      this.user = JSON.parse(localUserData);
    }
  }

//variables
  user: any[] = [];
  edit:any=[]


//userform form group 
  username: FormControl=new FormControl('', [Validators.required]);
  email: FormControl=new FormControl('',[Validators.required,Validators.email]);
  phone: FormControl =new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  id: FormControl=new FormControl(0,[Validators.required]);
  userForm = new FormGroup(
    {
      username: this.username,
      email:this.email,
      phone:this.phone,
      id:this.id
    }
  )

//save function
  saveUserData() {
    if (this.userForm.valid) {
    this.userForm.value.id = this.user.length + 1;
    console.log(this.userForm.value.id)
    this.user.push(this.userForm.value)
    this.services.onCloseModel()
    localStorage.setItem('userList', JSON.stringify(this.user))
    this.router.navigate(['home'])
    
    }else{
      this.userForm.markAllAsTouched();
    }
  }



  //update function

  onUserUpdate() {
    const record=this.user.find(x=>x.id==this.edit.id);
    record.username=this.edit.username;
    record.email=this.edit.email;
    record.phone=this.edit.phone;
    if(this.userForm.valid){
    localStorage.setItem('userList',JSON.stringify(this.user))

    this.router.navigate(['home'])
    }

  }


  //close function
  userClose() {
    this.services.onCloseModel()
    this.router.navigate(['home'])

  }

}
