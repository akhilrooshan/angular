import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})

export class LeavelistComponent implements OnInit {

  checkname=localStorage.getItem('name')
  confirm:any[]=[]

  holiday:any[]=[]

  leave:any[]=[]

  


  constructor(private router :Router) {
   
   }

  ngOnInit(): void {
    const localData=localStorage.getItem('leaveReq');
    if(localData!=null)
    {
      this.leave=JSON.parse(localData);
    }


    const localConfirm=localStorage.getItem('approved');
    if(localConfirm!=null)
    {
      this.confirm=JSON.parse(localConfirm);
    }

    const localHoliday=localStorage.getItem('holidayList');
    {
      if(localHoliday!=null)
      {
        this.holiday=JSON.parse(localHoliday);
      }
    }
  }




  


  addLeave() {
    this.router.navigate(['home/leaveList/createLeave'])

  }


  onDel(id:any)
  {

    localStorage.setItem("edit",JSON.stringify(id))
    this.router.navigate(['/deleteLL'])

  }

  onEdit(data:any)
  {
    
    localStorage.setItem("edit",JSON.stringify(data))
    this.router.navigate(['home/leaveList/editLeave'])
  }



}



