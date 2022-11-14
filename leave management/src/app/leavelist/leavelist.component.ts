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
  cdel:any=[]  //confirm delete boolean variable
  checkname=localStorage.getItem('name')
  confirm:any[]=[]

  holiday:any[]=[]

  leave:any[]=[]

  leaveArr:any={
    leaveId:0,
    leavedate:'',
    leavereason:''
  }



  constructor(private router :Router) { }

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



  onDel(id:any){
    this.cdel[id]=true;

  }

  onCancel(id:any){
    this.cdel[id]=false;
  }



  addLeave() {
    this.router.navigate(['/createLeave'])

  }




  onEdit(data:any)
  {
    
    localStorage.setItem("edit",JSON.stringify(data))
    this.router.navigate(['/editLeave'])
  }

  onDelete(id:any)
  {
    for(let i=0;i<this.leave.length;i++)
    {
      if(this.leave[i].leaveId==id)
      {
        this.leave.splice(i,1);
      }
    }
    localStorage.setItem('leaveReq',JSON.stringify(this.leave))

  }



}



