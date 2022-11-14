import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
// user variables
  user:any[]=[];
  usersArray:any={
    userId:0,
  username:'',
    Email:'',
    phone:'',
  }
  userEdit:any[]=[];

// holiday variables

  holiday: any[] = [];
  holidayArr: any = {
    holidayId: 0,
    Date: '',
    Reason:'',
}
holidayEdit:any[]=[];

//leavelist variables

leave:any[]=[]

leaveArr:any={
  leaveId:0,
  leavedate:'',
  leavereason:''
}

leaveEdit:any[]=[];
  
  constructor(private service:ServicesService,public router:Router) { }

  ngOnInit(): void {

    const localUserData=localStorage.getItem('userList');
    if(localUserData!=null)
    {
      this.user=JSON.parse(localUserData);
    }

    const localUser=localStorage.getItem('edit');
    if(localUser!=null)
    {
      this.userEdit=JSON.parse(localUser);
      this.usersArray=this.userEdit
      console.log(this.usersArray.userId)
    }

    const localHolidayData=localStorage.getItem('holidayList');
    if(localHolidayData!=null)
    {
      this.holiday=JSON.parse(localHolidayData);
    }
    
    const localHoliday=localStorage.getItem('edit');
    if(localHoliday!=null)
    {
      this.holidayEdit=JSON.parse(localHoliday);
      this.holidayArr=this.holidayEdit

    }


    const localLeaveData=localStorage.getItem('leaveReq');
    if(localLeaveData!=null)
    {
      this.leave=JSON.parse(localLeaveData);
    }


    const localLeave=localStorage.getItem('edit');
    if(localLeave!=null)
    {
      this.leaveEdit=JSON.parse(localLeave);
      this.leaveArr=this.leaveEdit

    }

    
  }

// user functions


  updateUser()
  {

    this.onUserUpdate('userList')
    this.router.navigate(['home'])
  }



  saveUser(data:any){
    this.saveUserData(data);
    this.router.navigate(['home'])
  }




  
saveUserData(data:any)
{

  this.usersArray.userId=this.user.length+1;
   this.user.push(this.usersArray)
   this.onCloseModel();
   localStorage.setItem('userList',JSON.stringify(this.user))
   this.usersArray={
    userId:0,
    username:'',
  Email:'',
  phone:'',
   }
}


onUserUpdate(key:any)
{
  const record=this.user.find(x=>x.userId==this.usersArray.userId);

  record.username=this.usersArray.username;
  record.Email=this.usersArray.Email;
  record.phone=this.usersArray.phone;

  localStorage.setItem(key,JSON.stringify(this.user))
  this.onCloseModel;
  
 

}

userClose()
{
  this.onCloseModel()
  this.router.navigate(['home'])
  
}

//holidayfunctions



updateHoliday()
{

  this.onHolidayUpdate('holidayList')
  this.router.navigate(['holiday'])
}



saveHoliday(data:any){
  this.saveHolidayData(data);
  this.router.navigate(['holiday'])
}





saveHolidayData(data:any)
{
  this.holidayArr.holidayId=this.holiday.length+1;

  this.holiday.push(this.holidayArr)
  this.onCloseModel();
  localStorage.setItem('holidayList',JSON.stringify(this.holiday))

}



onHolidayUpdate(key:any)
{
  
  const recordS=this.holiday.find(x=>x.holidayId==this.holidayArr.holidayId);
  recordS.Date=this.holidayArr.Date;
  recordS.Reason=this.holidayArr.Reason;
  
  localStorage.setItem(key,JSON.stringify(this.holiday))

  this.onCloseModel;



}
holidayClose()
{
  this.onCloseModel()
  this.router.navigate(['holiday'])
  
}

//leave list

leaveClose()
{
  this.onCloseModel()
  this.router.navigate(['leaveList'])
}

updateLeave()
{
  this.onLeaveUpdate(['leaveReq'])
  this.router.navigate(['leaveList'])
}
saveLeave(data:any)
{
  this.saveLeaveData(data)
  this.router.navigate(['leaveList'])
  this.router.navigate(['leaveList'])

}
saveLeaveData(data:any)
{
  
  this.leaveArr.leaveId=this.leave.length+1;
  this.leaveArr.name=localStorage.getItem('name')
   this.leave.push(this.leaveArr)
   this.onCloseModel();
   localStorage.setItem('leaveReq',JSON.stringify(this.leave))


  


}
onLeaveUpdate(key:any)
  {
    const record=this.leave.find(x=>x.leaveId==this.leaveArr.leaveId);
    record.leavedate=this.leaveArr.leavedate;
    record.leavereason=this.leaveArr.leavereason;
 
    localStorage.setItem(key,JSON.stringify(this.leave))

    this.onCloseModel();

  }





onCloseModel() {
 
  localStorage.removeItem('edit')
  
  
 }








}
function onLeaveUpdate(key: any, any: any) {
  throw new Error('Function not implemented.');
}

