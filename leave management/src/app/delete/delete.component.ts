import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

edit:any=[]
user: any[] = [];


 
// holiday variables

holiday: any[] = [];



//leavelist variables

leave: any[] = []


  constructor(public router: Router) {


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

    const localHolidayData = localStorage.getItem('holidayList');
    if (localHolidayData != null) {
      this.holiday = JSON.parse(localHolidayData);
    }

    const localLeaveData = localStorage.getItem('leaveReq');
    if (localLeaveData != null) {
      this.leave = JSON.parse(localLeaveData);
    }

}
  

closeLeave(){
  this.onCloseModel()
  if(this.router.url==('/deleteLR')){
  this.router.navigate(['home/leaveReq'])
}
  if(this.router.url==('/deleteLL'))
  {
    this.router.navigate(['home/leaveList'])
  }
}



deleteLeaveReq()
{
  this.delete(this.leave)
  localStorage.setItem('leaveReq',JSON.stringify(this.leave))
  if(this.router.url==('/deleteLR'))
  {
this.router.navigate(['home/leaveReq'])
  }
  if(this.router.url==('/deleteLL'))
  {
this.router.navigate(['home/leaveList'])
  }



}



onDeleteUser()
{

this.delete(this.user)
  localStorage.setItem('userList',JSON.stringify(this.user))
  this.router.navigate(['home'])
}


userClose() {
  this.onCloseModel()
  this.router.navigate(['home'])

}



onHolidayDelete()
{
  this.delete(this.holiday)
  localStorage.setItem('holidayList',JSON.stringify(this.holiday))
  this.router.navigate(['home/holiday'])
}

holidayClose() {
  this.onCloseModel()
  this.router.navigate(['home/holiday'])

}


delete(arr:any)

{
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i].id==this.edit.id)
    {
    arr.splice(i,1)
   
     return 
      // arr.splice(arr.indexOf(1), 1);
    }
    
  }
}



onCloseModel() {

  localStorage.removeItem('edit')


}


}